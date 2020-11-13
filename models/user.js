import Mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    auth0ID : {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

export default User;