import {Input} from "antd";

const Inputs=(ke:String)=> {
    return(
        <div className={"basicInfo"}>
        <div>
            <b className={"must"}>*</b><b className={"title"}>{ke}</b>
    </div>
    <Input className={"infoInput"}/>
    </div>
    )
}

export default Inputs