import Link from "next/link"
import Style  from "./header.module.css"

const Header = () => {
  return (
    <div className={Style.header}>
     

        <ul className={Style.nav}>
        <span className={Style.span}>
        <Link href="./">Scholarship Page</Link>
      </span>
      <li> <Link href="/scholarship" >Scholarship</Link></li>
        <li> <Link href="/eligiblecriteria">Eligible Criteria</Link> </li>
        <li><Link href="/contactus">Contact Us</Link>  </li>
        

      </ul>
    
</div>
  )
}



export default Header