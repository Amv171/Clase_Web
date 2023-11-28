import "../styles/Note.css"
import {useState} from "react";
function Note({title,text,id ,key,deleteThis}){
const [title_input,setTitle] = useState(title);
const [text_input,setText] = useState(text);
const handleChangeTitle = (event) => {
  setTitle(event.target.value);
}
const handleChangeText = (event) => {
setText(event.target.value);
}
    return(
    <div className="container mt-2">
    <div className="card">
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
     <p className="card-text">{text}</p> 
    <button className="btn btn-danger" onClick={()=>deleteThis(id)} >Eliminar</button>
  </div>
    </div>
    </div>
    );

}

export default Note;