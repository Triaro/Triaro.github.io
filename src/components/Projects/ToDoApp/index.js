import { useEffect, useState } from "react";
import './todoApp.css';
const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [openInput, setOpenInput] = useState(false);
    const [loader, setLoader] = useState(true);
    const [newTodo, setNewTodo] = useState('');
    useEffect(() => {
        getData();
    }, [localStorage]);
    const getData = () => {
        setLoader(true);
        setTodos(JSON.parse(localStorage.getItem('todos')) || []);
        setTimeout(() => {
            setLoader(false);
        }, 200);
        // setLoader(true);
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res);
        //         res?.length && setTodos(res);
        //         setLoader(false);
        //     });
    };
    const checkUpdated = (e, id) => {
        let newTodo = todos?.map(todo=>{
            if(todo.id==id) {
                todo.completed=e.target.checked;
            }
            return todo;
        })
        setTodos(newTodo);
    }
    const onTodoChange = e => {
        setNewTodo(e.target.value);
    };
    const onAddTodo = () => {
        setOpenInput(true);
    };
    const onSubmitTodo = e => {
        setOpenInput(false);
        localStorage.setItem('todos', JSON.stringify([...todos,
            {
                title: newTodo,
                completed: false,
                userId: 1,
                id: Math.floor(Math.random()*1000)
            }]))
        setNewTodo(null);
        getData();
        // fetch('https://dummyjson.com/todos/add', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             todo: newTodo,
        //             completed: false,
        //             userId: 69,
        //         })
        //     })
        //     .then(() => getData())
    }
    return(
        <section className="d-flex flex-column align-items-center">
            <div className="heading white text-center">
                <h2>Todo App</h2>
            </div>
            <div className="todo d-flex flex-column">
                {loader && <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                {todos?.length!=0 && todos?.map((todo, index) => (
                    <div key={index} className="todo-container d-flex justify-content-between">
                        <div className="todo-name">{todo.title}</div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={todo.completed} onChange={e=>checkUpdated(e, todo.id)} id="flexCheckChecked" checked={todo.completed}/>
                        </div>
                    </div>
                ))}
            </div>
            {openInput && <div className="input-group mb-3">
                    <input type="text" value={newTodo} onChange={e=>onTodoChange(e)} className="form-control" placeholder="Enter new todo"/>
                    <button type="button" className="btn btn-primary btn-sm m-0 p-1" onClick={e=>onSubmitTodo(e)}>Add</button>
                </div>
            }
            <div className="text-center">
                <button className="btn btn-dark" onClick={onAddTodo}>Add a todo</button>
            </div>
        </section>
    );
};
export default TodoApp;