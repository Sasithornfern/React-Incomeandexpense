import './reportcomponent.css'
import Datacontext from '../data/Datacontext'
import { useContext } from 'react'


const Reportcomponent=()=>{    
    const {income,expense,Result} = useContext(Datacontext)
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return(
        <div className="report">
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h3>฿{formatNumber(Result)}</h3>
            <div className="report-container">
                <div>
                    <h4>รายรับ (บาท)</h4>
                    <p className="report-plus">฿{formatNumber(income)}</p>
                </div>
                <div>
                    <h4>รายจ่าย (บาท)</h4>
                    <p className="report-minus">฿{formatNumber(expense)}</p>
                </div>             
            </div>                              
        </div>
    )
}

export default Reportcomponent