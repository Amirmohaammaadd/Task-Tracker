import { BsTrash } from "react-icons/bs";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""} `}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <BsTrash
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
