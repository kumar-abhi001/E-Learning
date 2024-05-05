import Course from "../components/Course"
function Home() {
    return (
        <div className="grid grid-cols-3 gap-6 pr-10">
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
    );
}

export default Home;