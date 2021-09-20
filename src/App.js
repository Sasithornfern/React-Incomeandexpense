import Transaction from "./component/Transaction";
import FormComponent from "./component/FormComponent";
import Reportcomponent from "./component/reportcomponent";

import { useState,useEffect} from "react";
import './App.css';
import Datacontext from "./data/Datacontext";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

//Arrow function Component 
// const Title =()=> <h1 style={design}>แอพรายรับรายจ่าย</h1>
//Component แบบ function เรียกใช้component อื่นๆ
function App() {
  const design = {color:'#da5858',textAlign:'center',fontsize:'1.5rem'};
  //สร้างข้อมูลเริ่มต้น
  // const initState = [
  //   {id:1,title: "เงินเดือน",amount:17500},
  //   {id:2,title: "ค่าเช่าบ้าน",amount:-4500},
  //   // {id:3,title: "ค่าอาหาร",amount:-4500},
  //   // {id:4,title: "ค่าเดินทาง",amount:-2500},
  // ]
 
  //สร้างstate
  const [items,setItems] = useState([]) 

  const [reportincome,setReportincome] = useState(0)
  const [reportexpense,setReportexpense] = useState(0)
  const [repostTotal,setReportTotal] = useState(0)

  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  useEffect(()=>{
      const amounts = items.map(items=>items.amount)
      const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
      const expense = ((amounts.filter(element=>element<0).reduce((sum,element)=>sum+=element,0))*-1)
      const Result = amounts.filter(element=>element>0).reduce((result,element)=>income-expense,0)
      // console.log("ยอดรายได้ :",income)
      // console.log("ยอดรายจ่าย :",expense)
      // console.log("ยอดคงเหลือ :",Result)

      setReportincome (income.toFixed(2) )
      setReportexpense (expense.toFixed(2) )
      setReportTotal(Result.toFixed(2) )

  },[items,reportincome,reportexpense,repostTotal])

  //Reducer State เป็นการกำหนด Action
  
  // const [showreport,setShowreport] = useState(false)
  // const reducer = (state,action)=>{
  // switch(action.type){
  //   case  "SHOW" :
  //     return setShowreport(true)
  //   case "HIDE" :
  //     return setShowreport(false)
  // }
  // }
  // const [result,dispatch] = useReducer(reducer,showreport)
  return (
        <Datacontext.Provider value={{income : reportincome,expense : reportexpense,Result : repostTotal}}>
        <div className="container">          
          <h1 style={design}>แอพรายรับ - รายจ่าย</h1>
          <Router>
          <div>
            <ul className="Horizontal-menu">
              <li>
                <Link to ="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
              <Link to ="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/" exact>
                  <Reportcomponent/>
              </Route>
              <Route path="/insert">
                  <FormComponent onAddItem={onAddNewItem}/>
                  <Transaction items = {items}/>
              </Route>
            </Switch>
          </div>
          </Router>
          {/* {showreport && <Reportcomponent/>} */}
            {/* <p>{result}</p>
            <button className="bbtn" onClick={()=>dispatch({type:"SHOW"})}>แสดงข้อมูล</button>
            <button className="bbtn" onClick={()=>dispatch({type:"HIDE"})}>ซ่อนข้อมูล</button> */}
        </div> 
      </Datacontext.Provider>     
  );
}

export default App;
