
import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";


const App=() =>{
  const [addItem,setAddItem]=useState([]);

  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return [...prevData, note];
    })
  };
   
  const onDelete=(id)=>{
    setAddItem((oldData)=>{
      return oldData.filter((currData,indx)=>{
        return indx !== id;
      });
    });
  };
  

  return(
    <>
      <Header/>
      <CreateNote passNote={addNote}/>

      { addItem.map((val,index)=> {
         return <Note
           key={index}
           id={index}
           title={val.title}
           content={val.content}
           deleteItem={onDelete}
         />}
       )}
      <Footer/>
    </>)
}


export default App;