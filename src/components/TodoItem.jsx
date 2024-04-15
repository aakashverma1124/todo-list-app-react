import { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faSquareCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(props.text);

    let buttonText;
    let buttonClass;

    if (props.status === 0) {
        buttonText = "To Do";
        buttonClass = "status-todo";
    } else if (props.status === 1) {
        buttonText = "In Progress";
        buttonClass = "status-in-progress";
    } else if (props.status === 2) {
        buttonText = "Done";
        buttonClass = "status-done";
    } else {
        console.warn("Invalid status prop for TodoItem:", props.status);
    }

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleInputChange = (event) => {
        setEditText(event.target.value);
    };

    const handleDeleteClick = () => {
        props.onDeleteTodo(props.id);
    };

    return (
        <li className="todo-item">
            <span>
                {isEditing ? (
                <input
                    className="todo-item-title"
                    type="text"
                    value={editText}
                    onChange={handleInputChange}
                />
                ) : (
                <span className="todo-item-title">{editText}</span>
                )}
            </span>
            <span>
                {isEditing ? (
                    <FontAwesomeIcon icon={faSquareCheck} className="todo-item-action-icon" onClick={handleSaveClick} />
                    ) : (
                    <FontAwesomeIcon icon={faPenToSquare} className="todo-item-action-icon" onClick={handleEditClick} />
                )}
                <FontAwesomeIcon icon={faTrash} className="todo-item-action-icon" onClick={handleDeleteClick} />
                <Button classname={buttonClass} title={buttonText} />
            </span>
        </li>
    );
}

export default TodoItem;