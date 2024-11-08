import style from "./page.module.css"
import Header from "./component/header/header"
import Hero from "./component/header/hero/hero"
import Fotter from "./component/header/fotter/fotter"


const Mainpage = () => {
  return (
   <div className={style.main}>
    
    
    <Header></Header>
    <Hero ></Hero>      
    <Fotter></Fotter>

  
    </div>
  )
}

export default Mainpage