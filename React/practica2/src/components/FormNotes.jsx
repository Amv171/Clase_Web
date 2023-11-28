import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/FormNotes.css';
function FormNotes(props) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const handleChangeTitle = (event) => {
      setTitle(event.target.value);
    }
  const handleChangeText = (event) => {
    setText(event.target.value);
}
    const handleSend = (event) => {
      //Para que no se vuelva a cargar la página al enviar el formulario
      event.preventDefault(); 
  
      //Creamos un nuevo objeto 
      const newTask = {
        id: uuidv4(),
        title: title,
        text:text,
      }
      //Se lo pasaremos al componente padre ListToDo cuando se envía, tenemos que pasar onSumbit(nombre estándar) como prop desde ListToDo.
      props.onSubmit(newTask);
    };
  
    return (<>
      <form 
        className='container p-2'
        onSubmit={handleSend}>
          <div className = "row">
          <div class="input-group mb-2">
         <span class="input-group-text" id="basic-addon1">Titulo</span>
         <input
          className='form-control col-9 p-1'
          type='text'
          placeholder="Titulo"
          name="text"
          onChange={handleChangeTitle}
        />
    </div>
    <div class="form-floating">
    <textarea 
        className='form-control col-11'  
        placeholder = "Escribe la nota"
        rows="4" cols="50"
        onChange={handleChangeText}></textarea>
  <label for="floatingTextarea2">Nota</label>
</div>
        
        <button className='btn btn-primary save-note'>
          Add Note
        </button>
        </div>
      </form>
      </>
    );
  }
  
  export default FormNotes;