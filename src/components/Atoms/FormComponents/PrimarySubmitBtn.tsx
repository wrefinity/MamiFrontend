import React from 'react'
import "./formComponents.scss"
import {Loading3QuartersOutlined} from "@ant-design/icons"
import {Spin} from "antd"

export default function PrimarySubmitBtn({text, action, loading} : {text: string, action: (e: React.MouseEvent<HTMLElement>)=> void, loading: boolean}) {

      // Loading Spinner
    const antIcon = (
     <Loading3QuartersOutlined style={{ fontSize: "24px", color: "white" }} spin />
    );
  return (
    <div className='priBtnContainer'>
      <button onClick={action} disabled={loading} type={"submit"} >{loading ? <Spin indicator={antIcon} /> : text}</button>
    </div>
  )
}
