const asyncHandler = require('express-async-handler');
const User = require('../models/Users.model');


const getAllUsers = asyncHandler(async (req,res)=>{
    try{
        const user = await User.find()
        res.json(user);
    }catch (err){
        res.status(500).json({ message: err.message });
    }
});

const getUserById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


const addUser = asyncHandler(async (req,res)=>{

    const { username, email,password } =req.body;
    try {
        const user = new User({
            username, 
            email,
            password
        });

        await user.save();
        res.status(201).json({ message: 'User added successfully', user });

    } catch (error) {
        
    }
});


const deletAllUser = asyncHandler(async(req,res)=>{
    
    try {
        await User.deleteMany({});
        res.status(200).json({ message: 'All users deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: err.message });
    }


})


const deleteUserById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


const updateUserById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, { username, email, password }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});





module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deletAllUser,
    deleteUserById,
    updateUserById
}

