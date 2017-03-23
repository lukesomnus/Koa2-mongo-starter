import TodoModel from '../model/todo';

const getTodos = () => {
    return new Promise((resolve, reject) => {
        TodoModel.find((err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const addTodo = (todo) => {
    const model = new TodoModel(todo);
    return new Promise((resolve, reject) => {
        model.save(err => {
            if (err) {
                reject(err);
                console.log(err)
            } else {
                resolve();
                console.log('todo save sucessfully!')
            }
        })
    })
}

function removeTodo(id) {
    return new Promise((resolve, reject) => {
        TodoModel.findByIdAndRemove(id, err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    })
}

function modifyTodo(id, newTodo) {
    return new Promise((resolve, reject) => {
        TodoModel.findById(id, (err, todo => {
            if (err) {
                reject();
            } else {
                Object.assign(todo, newTodo);
                todo.save(err => {
                    if (err) {
                        reject()
                    } else {
                        resolve()
                    }
                })
            }
        }))
    })
}

// or
function updateTodo(id, newTodo) {
    return new Promise((resolve, reject) => {
        TodoModel.findByIdAndUpdate(id, {
            $set: newTodo
        }, (err, updatedTodo) => {
            if (err) {
                reject()
            } else {
                resolve(updatedTodo)
            }
        })
    })

}
export default {
    getTodos,
    addTodo,
    removeTodo,
    modifyTodo
}