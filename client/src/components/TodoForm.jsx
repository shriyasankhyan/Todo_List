import {useState} from "react";
import {addNewTodo} from '../redux/actions';
import {useDispatch} from 'react-redux';

const TodoForm = () =>{

    const [todo, setTodo] = useState("");
    
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(addNewTodo(todo));
        setTodo("");
    }

    return(
        <form className = "form" onSubmit={onFormSubmit}>
            <input
                placeholder="Enter new todo..."
                className="input"
                value={todo}
                onChange={(e) => {setTodo(e.target.value)}}
            />
        </form>
    )
}

export default TodoForm;