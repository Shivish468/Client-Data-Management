const User =  require('../models/UserModel.js')
exports.home = (req, res) => {
    console.log("Hello World!")
}
exports.createUser = async(req, res) => {
    try{
        const {name, email} = req.body

        if(!name || !email){
            throw new Error('Please provide all required fields!');
        }
        const userEXists = user.findOne({email})
        if(userEXists){
            throw new Error("User already exists")
        }
        if(!email.containKey("@")){
            throw new Error("Email is not valid")
        }

        const user = await User.create({
            name,
            email
        })
        res.status(201).json({
            success: true,
            message: "user created successfully", 
            user
        })
    }catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.getUsers = async(req, res) => {
    try {
        const users = await User.find({})
        if(users.length<1){
            throw new Error("User is not found!")
        }
        res.status(200).json({
            success: true,
            message: "All users found",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
exports.updateUser = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success :true,
            message: "User Updated successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}