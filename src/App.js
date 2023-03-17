import React, { useState } from "react";
import Header from "./Header";
import Note from "./Task";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [toggle, setToggle]=useState(false);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    console.log(id)
  }


    function editNote(id){
      let newEditItem=setNotes(prevNotes=>{
        return prevNotes.filter((noteItem, index)=>{
          return index === id
        })
      })
      
      setToggle(true)
      setNotes(newEditItem.value)
      
    }
  

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} value={toggle} func={setToggle}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        );
      })}
    
    </div>
  );
}

export default App;

