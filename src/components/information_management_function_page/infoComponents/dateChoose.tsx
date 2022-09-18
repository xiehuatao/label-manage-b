import {DatePicker} from "antd";


const DateChoose=(title:String,context:string)=>{
    return(
        <div className={"timeChoose"}>
        <div>
            <b className={"must"}>*</b><b className={"title"}>{title}</b>
    </div>
    <DatePicker className={"infoInput"} placeholder={context}/>
    </div>
    )
}
export default DateChoose