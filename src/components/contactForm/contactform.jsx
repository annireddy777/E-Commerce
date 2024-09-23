import React, { useState } from 'react'
import styles from './contact.module.css'
import { Button } from '../button/button'
import {MdMessage} from 'react-icons/md' 
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import servicepic from '/Web Development/React/react-app/src/assests/Service 24_7-pana 1.png'
 

export const Contactform = () => {

  const [formData,setformData] =useState ({
    name:'Aizen',
    email:'Aizen777@gmail.com',
    text:'Yare Yare'
  });

  const onSubmit= (event) => {
    event.preventDefault();
    const{name,email,text} = event.target.elements;
    setformData({
      name:name.value,
      email:email.value,
      text:text.value
    }
    );
  };

/*  const [name,setName] = useState("Aizen");
const [email,setEmail] =useState("Aizen777@gmail.com");
  const [text,setText] = useState("Yare Yare");

  const onSubmit= (event) => {
    event.preventDefault();
    
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  } */

  return (
    <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />}/>
        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />}/>
        </div>
        <Button  isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />}/>

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name='text' rows={8}  />
          </div>
          <div style={{
            display: 'flex',
            justifyContent :'end',
          }}>
          <Button text="SUBMIT BUTTON"/>
          </div>
          <div>{'Name: ' + formData.name + ' | Email: ' + formData.email + ' | Text: ' + formData.text}</div>
        </form>
    </div>
    <div className={styles.contact_image}>
      <img src={servicepic} alt='Service'/>
    </div>
    </section>
  )
}
