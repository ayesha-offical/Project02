import style from "./eligiblecriteria.module.css"
import Header from "../component/header/header"
import Fotter from "../component/header/fotter/fotter"
import Link from "next/link"

const Eligiblecriteria = () => {
  return (
    <>
     <Header></Header>
     
    <div className={style.main}> 
    <div className={style.mainhead}> Eligibility Criterea Of Scholarships</div>
      <Link className={style.heading1}href="https://scholarshiproar.com/yale-university-scholarships/#google_vignette">1: Yale University Eligibility Criteria </Link>
      <Link className={style.heading2}href="https://scholarshiproar.com/turkey-government-scholarship/">2: Turkey Goverment Eligibility Criteria  </Link>
      <Link className={style.heading3}href="https://scholarshiproar.com/chinese-government-scholarship/">3: Chinese Government Eligibility Criteria </Link>
      <Link className={style.heading4}href="https://scholarshiproar.com/daad-scholarships-germany/">4:  DAAD Germony Eligibility Criteria </Link>
      <Link className={style.heading5}href="https://scholarshiproar.com/mext-scholarship/">5: MEXT Japan  Eligibility Criteria </Link>
      <Link className={style.heading6}href="https://scholarshiproar.com/ton-duc-thang-university-scholarships/">6: Ton Duc Thang Vietnam Eligibility Criteria </Link>
      <Link className={style.heading7}href="https://scholarshiproar.com/gates-cambridge-scholarship/">7: Gates Cambridge Eligibility Criteria </Link>
      <Link className={style.heading8}href="https://scholarshiproar.com/stanford-university-scholarships/">8: Stanford University Eligibility Criteria </Link>
      <Link className={style.heading9}href="https://scholarshiproar.com/muhammad-bin-zaid-university-scholarship/">9: Muhammad Bin Zaid saudi Eligibility Criteria </Link>
      <Link className={style.heading11}href="https://scholarshiproar.com/harvard-university-scholarships/#google_vignette">11: Harvard  University Eligibility Criteria </Link>
      <Link className={style.heading10}href="https://scholarshiproar.com/australian-government-research-training-program/">10: Australian Government Eligibility Criteria </Link>
      <Link className={style.heading12}href="https://gksscholarship.com/gks-scholarship-2025-global-korea-scholarship-2025-apply-now/">12: GKS South Korea Eligibility Criteria </Link>

    </div>
    <Fotter></Fotter>
    </>
  )

}

export default Eligiblecriteria