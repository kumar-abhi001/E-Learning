import mongoose, { Schema }  from "mongoose";

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true
        },
        state: {
            type: String,
            required: true,
        },
        courses: [
            {
                type: Schema.Types.ObjectId,
                ref: "courses"
            }
        ],
        accessToken: {
            type: String,
        }
    }, 
    {timestamps: true}
)

//adding middleware
userSchema.pre("save", )

export const Users = mongoose.model("Users", userSchema)