import PropTypes from 'prop-types';
import './item.css'

const Item = (props)=>{
  const {title,amount} = props
  const status = amount<0 ? "expense":"income" 
  const sym = amount<0 ? "-":"+"
  // const Hname = "พักโรงแรม" //สร้างตัวแปรมาเก็บข้อมูล
  // const amount = 5000
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
  return(
    <li className={status}>{title} <span>{sym}{formatNumber(Math.abs(amount).toFixed(2))}</span></li> //เรียกตัวแปรไปแสดงผล
  );
}

//กำหนดชนิดข้อมูลที่รีบเช้า
Item.propTypes={
  title:PropTypes.string,
  amount:PropTypes.number
}

export default Item;