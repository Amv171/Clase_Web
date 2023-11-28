import { useState, useEffect } from "react";
import FormNotes from "./FormNotes";
import Note from "./Note";
import "../styles/ListNotes.css";
function ListNotes(){
    const [notes,setNotes] = useState([]);
    const [search,setSearch] = useState('');
    useEffect(() => {
        const savedNotes = localStorage.getItem("notes");
        if(savedNotes){
            setNotes(JSON.parse(savedNotes));
        }
    },[]);
    const addNote = (note) => {
            //trim() quita los espacios del principio y final, y verifica que no esté vacía.
              //Concatena la tarea nueva a las ya existentes al principio, con "..." lo pasamos de array a objetos individuales, por eso lo concatena. Al final sería [...tasks, task]
              const updatedNotes = [note, ...notes];
                setNotes(updatedNotes);
                localStorage.setItem("notes", JSON.stringify(updatedNotes));
          };
   
    const deleteNote = (id) => {
    console.log(id);
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    }
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase())||note.text.toLowerCase().includes(search.toLowerCase()));
    console.log(filteredNotes);
    console.log(notes);
    return(
        <>
        <form className="container p-2">
          <div className ="input-group">
        <span className="input-group-text" id="basic-addon1">Buscador</span>
         <input
          className='form-control'
          placeholder="Nota"
          onChange={handleChangeSearch}
        />
        </div>
        <h2>Insertar Nota</h2>
        </form>
        <FormNotes onSubmit={addNote}/>
        <div className="container">
        {
          filteredNotes.map((note) => 
            <Note
              id={note.id}
              title={note.title}
              text={note.text}
              key={note.id}
              deleteThis={deleteNote}
            />
          )
        }
        </div>
        </>
    );
}
export default ListNotes;