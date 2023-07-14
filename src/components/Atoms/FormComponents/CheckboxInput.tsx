import "./formComponents.scss" 

export default function TextField({ text, value, onchange} : {text: React.ReactNode, value: string, onchange: (e: React.ChangeEvent<HTMLInputElement>)=>void}) {

  return (
    <div className='checkboxGroup'>
        <input value={value} onChange={onchange} type={"checkbox"} />
        <p>{text}</p>
    </div>
  )
}
