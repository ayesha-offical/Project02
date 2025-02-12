import style from "./contactus.module.css"

const Contactus = () => {
  return (
    <>
    
    <div  className={style.main}>
 <div>
  <h1 className={style.formhead}>Contact Us</h1>
  <p className={style.text}>If you have any questions or need assistance, please dont hesitate to reach out to us.</p>
  <form className={style.formback}>
    {/* Your form inputs and other elements */}
    <input className={style.input} type="text" placeholder="Name" required />
    <input className={style.input} type="email" placeholder="Email" required />
    <input className={style.input} type="text" placeholder="Subject" required />
    <textarea className={style.textarea} placeholder="Message" required></textarea>
    <button className={style.button}>Submit</button>
  </form>

 </div>
 
    </div>


    
</>
  );
}

export default  Contactus ;