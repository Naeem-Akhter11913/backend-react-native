
const Todo = require('../schema/TodoSchema')
const testRoute = (req, res) => {
    try {
        res.status(200).send({
            status: false,
            message: "route working"
        })
    } catch (error) {
        res.status({
            status: false,
            message: error.message
        })
    }
}

const addTodo = async (req, res) => {

    try {
        await Todo.create(req.body);
        res.status(201).send({
            status: true,
            message: 'Todo created successfully',
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: 'Internal Server Error'
        });
    }
};

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).send({
            status: true,
            todos
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: 'Internal Server Error'
        });
    }
};

const updateTodo = async (req, res) => {
    const { id } = req.query;
    const { name, className, classTime } = req.body;
    try {
        const todo = await Todo.findOneAndUpdate({ _id: id }, {
            name,
            className,
            classTime: parseInt(classTime)
        }, { new: true });
        res.status(200).send({
            status: true,
            message: 'Todo updated successfully',
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: 'Internal Server Error'
        });
    }
}

const delteTode = async (req, res) => {
    const { id } = req.query;
    try {
        await Todo.findOneAndDelete({ _id: id });
        res.status(200).send({
            status: true,
            message: 'Todo deleted successfully'
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: 'Internal Server Error'
        });
    }
};

const getOneData = async(req, res) => {
    const { id } = req.query;
    try {
        const todo = await Todo.findOne({ _id: id });
        res.status(200).send({
            status: true,
            todo
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: 'Internal Server Error'
        });
    }
};
module.exports = {
    testRoute,
    addTodo,
    getAllTodos,
    updateTodo,
    delteTode,
    getOneData
}