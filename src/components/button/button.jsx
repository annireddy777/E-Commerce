import React from 'react'
import styles from './button.module.css'

export const Button = ({isOutline, icon, text,...rest}) => {

  return (
    <button  {...rest}  
    className={isOutline ? styles.mail_btn:styles.primary_btn}>
        {icon}
        {text}
    </button>
  );
};
  