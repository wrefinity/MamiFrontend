import React, {useState, useEffect} from 'react'
import "./formComponents.scss"
import {
  EyeInvisibleOutlined,
  EyeOutlined,
} from '@ant-design/icons';

export default function TextField({label, placeholder, type, value, onchange} : {label?: string, placeholder: string, type: string, value: string, onchange: (e: React.ChangeEvent<HTMLInputElement>)=>void}) {
    const [passwordShown, setPasswordShown] = useState(false)

    const togglePasswordShown = () => {
        setPasswordShown(!passwordShown)
    }
  return (
    <div className='inputGroup'>
        {label && <label>{label}</label>}
        <input value={value} onChange={onchange} placeholder={placeholder} type={passwordShown ? "text" : type} />
        {type === "password" && (
            passwordShown ? <span>
                <EyeOutlined onClick={togglePasswordShown} className='passwordEyeIcon' /> 
            </span>:<span> <EyeInvisibleOutlined onClick={togglePasswordShown} className="passwordEyeIcon" /></span>
        )}
    </div>
  )
}
