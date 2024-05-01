const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
//secret key
const secretKey = 'abhishek';


const app = express();
app.use(express.json());

//Define mongoose schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String
  //purchasedCourse: 
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String
});

const courseSchema = new mongoose.Schema({
  title: {type: String, unique: true},
  description: String,
  price: Number,
  link: String,
  published: Boolean
});


//Creating model for schema
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);




//Creating middle for authentication
const adminAuthentication = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (token) {
    const decodedToken = jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        res.sendStatus(403);
      }

      req.userName = user;
      next();
    });

  }

  else {
    res.status(401).send("Not correct credntials");
  }
};


//Middleware for user-authentication
const userAuthentication = (req, res, next) => {
  const userToken = req.headers.authorization.split(" ")[1];

  jwt.verify(userToken, secretKey, (err, user) => {
    if (err) {
      res.sendStatus(401);
    }

    next();
  });
};

//Connect to MongoDB
mongoose.connect('mongodb+srv://mlabes8148:81GvrMXJNV8zmbKJ@cluster0.gj3stqy.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "course-selling"})
.then(() => { 
  console.log("MongoDB is connect");
})
.catch((err) => {
  if(err) {
    console.log(err);
  }
});

  
// Admin routes

//Adding new Admin
app.post('/admin/signup', (req, res) => { 
  // logic to sign up admin
  const { username, password } = req.body;

  Admin.findOne({ username }).then((ifExist) => {
    console.log(ifExist);
    
    if (ifExist) {
      res.status(403).send({ "message" : "Admin already exist"});
    }
  
    else {
      const obj = {username, password};
  
      const newAdmin = new Admin(obj);
      newAdmin.save();
  
      let token = jwt.sign({
        userName: newAdmin.username,
        role : 'admin'
      }, secretKey, { expiresIn: "1h" });
      
      res.status(202).send({
        token: token
      });
    }
  });  
});



//Login existing admin
app.post('/admin/login', adminAuthentication, (req, res) => {

  res.json({ message: 'Admin Login successfull' });
  
});


//Addition of new course by admin
app.post('/admin/courses', adminAuthentication, (req, res) => {
  // logic to create a course
  const course = req.body;

  Course.findOne({title: course.title}).then( (ifExit) => {
    if(ifExit) {
      res.send({ message : "Course Alreadly Exist" });
    }

    else {
      const newCourse = new Course(course);
      newCourse.save();
      res.send( {message : "Course is created" });
    }
  });
});


// logic to edit a course
app.put('/admin/courses/:courseId', adminAuthentication, async (req, res) => {
  
  const course = req.body;
  const query = { title : course.title };
  const update = await Course.findOneAndUpdate(query, course, { new: true });

  if(update) {
    res.send({ message : "Done"});
  }

  res.send({ message : "Failed" });
});


// logic to get all courses
app.get('/admin/courses', adminAuthentication, (req, res) => {
  res.status(202).send(COURSES);
});



// USER ROUTES

// logic to sign up user
app.post('/users/signup', (req, res) => {
  const user = req.header;

  const isExist = USERS.find(a => a.username === user.username);

  if (isExist) {
    res.status(403).json({ message: 'User already exist' });
  }

  else {
    USERS.push(user);
    fs.writeFileSync('user.json', JSON.stringify(USERS));

    let token = jwt.sign({
      userName: user.username,
      password: user.password
    }, secretKey, { expiresIn: "1h" });
    res.status(202).send(token);
  }
});


// logic to log in user
app.post('/users/login', userAuthentication, (req, res) => {
  res.status(202).send("Login Sucessfull");
});


// logic to list all courses
app.get('/users/courses', userAuthentication, (req, res) => {
  res.status(202).send(COURSES);
});


// logic to purchase a course
app.post('/users/courses/:courseId', userAuthentication, (req, res) => {
  const courseId = req.headers.id;
  const ifExist = COURSES.find(a => a.id === courseId);

  if (ifExist) {
    PURCHASED.push({
      id : courseId
    });
  }
});


// logic to view purchased courses
app.get('/users/purchasedCourses', userAuthentication, (req, res) => {
  res.status(202).send(PURCHASED);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
