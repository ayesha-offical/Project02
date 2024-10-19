import style from "./scholarship.module.css"
import Header from "../component/header/header"
import Fotter from "../component/header/fotter/fotter"


const Scholarship = () => {
  return (
    <>
    <div className={style.main}>  <Header></Header>
<h1 className={style.heading}>  
    Scholarships From Diffrent Countries
                 2025
</h1>
<div className={style.scholarships}>
    <div className={style.scholarship1}>

    </div>
    <div className={style.scholarship2}></div>  
    <div className={style.scholarship3} ></div>
    <div className={style.scholarship4}></div>
    <div className={style.scholarship5}></div>
   
    <div className={style.scholarship6}></div>
    <div className={style.scholarship7}></div>
    <div className={style.scholarship8}></div> 
    <div className={style.scholarship9}></div>
   
    <div className={style.scholarship10}></div> 
    <div className={style.scholarship11}></div>
    <div className={style.scholarship12}></div>
</div>

    </div>
   <Fotter></Fotter>
    </>
  )
}

export default Scholarship