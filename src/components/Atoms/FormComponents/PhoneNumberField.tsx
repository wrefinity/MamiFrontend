import React, {useState, useEffect} from 'react'
import "./formComponents.scss"
import {
  EyeInvisibleOutlined,
  EyeOutlined,
} from '@ant-design/icons';

export default function TextField({label, placeholder, value, onchange} : {label?: string, placeholder: string, value: string, onchange: (e: React.ChangeEvent<HTMLInputElement>)=>void}) {

  return (
    <div className='phoneNumberGroup'>
      <select name="" id="">
        <option>+234</option>
      </select>
      <input value={value} onChange={onchange} placeholder={placeholder} type={"text"} />
    </div>
  )
}
