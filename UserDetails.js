
const mongoose = require("mongoose");

const UserDetailsShema = new mongoose.Schema(
    {
        name: String,
        email: {type: String, uique: true},
        mobile: String,
        password: String,

})

mongoose.model("UserInfo", UserDetailsSchema);