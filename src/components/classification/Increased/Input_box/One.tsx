import React, {FC} from "react";
import "One.css"

type Props = {Type_name:String}
const Input_name:FC<Props>=({Type_name})=>{
    return <div className="All_One">
        <p className="Star_One">*</p>
        <p className="Type_One">{Type_name}</p><br/>
        <input className="Intput_One" />
    </div>
}


export default Input_name




