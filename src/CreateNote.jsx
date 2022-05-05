import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote=(props)=>{
    const [expand,setExpand]=useState(false);

    const [note,setNote]= useState({
      title:"",
      content:""
    });

    const InputEvent =(event)=>{
      // const value = event.target.value;
      // const name = event.target.name;
      
      const { value,name} = event.target;

      setNote((prevData)=>{
        return {
          ...prevData,
          [name] : value,
        };
      });
    };

    const addEvent=()=>{
       props.passNote(note);
       setNote({
        title:"",
        content:""
      });
    };

    const expandIt=()=>{
      setExpand(true);
    };
    const shrinkIt=()=>{
      setExpand(false);
    }

    return(
        <div className="main_note" onDoubleClick={shrinkIt}>
            <form>
              {
              expand?
              <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>
              :null
              }
              <textarea  cols="" rows="" name="content" id="" value={note.content} onChange={InputEvent} placeholder="Enter Your Notes Here" onClick={expandIt} ></textarea>
              {
              expand?
              <Button onClick={addEvent}>
                <AddIcon className="plus_sign"/>
              </Button>
              :null
              }
            </form>
        </div>
    );
};

export default CreateNote;