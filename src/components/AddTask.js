import { useState } from "react";
import { ToastContainer} from "react-toastify";


const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setreminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Insert Text");
      return;
    }

    onAdd({ text, day, reminder });

    setDay("");
    setText("");
    setreminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setreminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="save Task" className="btn btn-block" />
      
      <ToastContainer />


    </form>
  );
};

export default AddTask;
