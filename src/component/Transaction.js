import Item from "./Item";
import  "./Transaction.css"
// import Datacontext from "../data/Datacontext";
// import { useContext } from "react";
   
const Transaction =(props)=>{
  const {items} = props
  return (
    <div>
      <ul className="itemlist">
        {/* การสร้างproperties */}    
          {items.map((element)=>{
            // return <Item title={element.title} amount={element.amount}/> 
            return <Item {...element}key={element.id}/>
          })}
      </ul>
    </div>
  
  );
}

export default Transaction;