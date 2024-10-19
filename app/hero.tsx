import style from "./hero.module.css";



const Hero = () => {
  return (
    <div className={style.scholarshipcontent}>
      <h1>Scholarship Page</h1>
      <h3 className={style.head}>Investing in Your Future</h3>
      <div className={style.maincontent}>
      At  your Dream University, we believe that education should be accessible to all. That’s why we offer a range of scholarships to support our students on their academic journey. Whether you’re an incoming freshman, a transfer student, or pursuing graduate studies, there’s a scholarship opportunity waiting for you.Invest in your education explore our scholarships today!
      </div>
    </div>
  )
}

export default Hero