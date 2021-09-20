import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import HelloComponent from './component/HelloComponent'; // import component มาจากข้างนอก

//การสร้าง Component แบบfunction
// function HelloComponent(){
//   return <h1>สร้าง Component แบบfunction</h1>
// }

//การสร้าง Component แบบClass
// class Hi extends React.Component{
//   render(){
//     return <h1>สร้าง Component แบบ Class</h1>
//   }
// }


//ReactDOM.render เรียกใช้องค์ประกอบมาแสดงผล
//ReactDOM.render(<HelloComponent/>,document.getElementById('root'));//อ้างอิงตำแหน่งแสดงผล id="root");
// ReactDOM.render(<Hi/>,document.getElementById('root'));//อ้างอิงตำแหน่งแสดงผล id="root");
// ReactDOM.render(<HelloComponent/>,document.getElementById('root'));//อ้างอิงตำแหน่งแสดงผล id="root");
ReactDOM.render(<App/>,document.getElementById('root'));//อ้างอิงตำแหน่งแสดงผล id="root");
    // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
