import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: String,
        required: true,
        default: false
    },
    create_time: {
        type: Date,
        default: Date.now()
    },
    updated_time: {
        type: Date,
        default: Date.now()
    }
});
// 使用content字段作为索引
TodoSchema.index({
    content: 1
});
// compiling our schema into a Model.
const TodoModel = mongoose.model('Todo',TodoSchema);

export default TodoModel;