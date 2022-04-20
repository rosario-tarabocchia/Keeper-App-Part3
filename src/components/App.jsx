import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(inputNote) {
    setNotes((prevItems) => {
      return [...prevItems, inputNote];
    });
  }

  function deleteNote(id) {
    console.log(notes);
    console.log(id);

    setNotes((prevItems) => {
      console.log(prevItems);
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deletePress={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
