import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [toggle, setToggle]=useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Task"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Description"
          rows="3"
        />
        {
          toggle ? <button value={props.value} func={props.func} onClick={submitNote}>EDIT</button> : <button onClick={submitNote}>ADD</button>
        }
        {/* <button onClick={submitNote}>Add</button> */}
      </form>
    </div>
  );
}

export default CreateArea;
