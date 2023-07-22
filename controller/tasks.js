const Task = require('../models/Task')

const getAllTasks = (req, res)=>{
    res.send('get all tasks');
}

const createTask = async (req, res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

const getTask = (req, res)=>{
    res.json({id:req.params.id});
}
const updateTask = (req, res)=>{
    res.send('update task');
}
const deleteTask = (req, res)=>{
    res.send('delete task');
}


module.exports = {
    getAllTasks, getTask, createTask, updateTask, deleteTask
}
//we sent it as an object as getAllTasks is going to contain more 
//than just res.send