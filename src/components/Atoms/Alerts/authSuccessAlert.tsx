import React from 'react'
import "./alert.scss"
import {
  CheckSquareOutlined,
} from '@ant-design/icons';
import ContainImage from '../Image/contain';

function AuthSuccessAlert({message} : {message: string}) {
  return (
    <div className='successAlertContainer'>
      <div className="iconContainer">
        <ContainImage src='/images/icons/check.svg' alt='Checked' />
      </div>
      <p>{message}</p>
    </div>
  )
}

export default AuthSuccessAlert
