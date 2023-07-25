import "./formComponents.scss" 
import {
    ArrowLeftOutlined
} from "@ant-design/icons"

function GoBack({action} : {action: (e: React.MouseEvent<HTMLElement>)=> void}) {
  return (
    <div onClick={action} className="goBack">
        <ArrowLeftOutlined />
        <p>Back</p>
    </div>
  )
}

export default GoBack
