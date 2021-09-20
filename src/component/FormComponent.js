import {useEffect, useState} from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';
const FormComponent = (props)=>{
    console.log("Render Form Component")
    //การสร้างstate
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formvalid,setFormValid] =useState(false)

    //สร้างการตัวจับเหตุการณ์
    const inputtitle =(event)=>{
        setTitle(event.target.value);
    }
    const inputamount = (event)=>{
        setAmount(event.target.value);
    }
    const saveItem = (event)=>{
        event.preventDefault()
        const itemData = {
            id : uuidv4(),
            title:title,
            amount:Number(amount)
        }
        //ส่งข้อมูลจากลูกไปหาแม่
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!==0
        setFormValid(checkData)       
    },[title,amount])
    return( 
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder = "ระบุชื่อรายการของคุณ" onChange={inputtitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ , -รายจ่าย)" onChange={inputamount} value={amount}/>
                </div>                
                <div>
                    <button type="submit" className="btn" disabled={!formvalid}>เพิ่มข้อมูล</button>
                    <h4 className="warnn">หมายเหตุ : </h4>
                    <h4 className="warnn">ถ้าเป็นรายจ่ายกรุณาใส่เครื่องหมาย (-) ก่อนจำนวนเงิน</h4>
                </div>
            </form>
        </div>
    )
}
export default FormComponent;