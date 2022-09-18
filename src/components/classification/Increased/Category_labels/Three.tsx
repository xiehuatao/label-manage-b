import React from "react";
import "./Three.css";
import Star from "../../public_module/Red_star/Star";
import Label from "../../public_module/Select_label/Label";
import Blank from "../../public_module/Blank/Blank";

type Props = {type_name:String};
class Three extends React.Component<Props>{
    render() {
        const {type_name} = this.props
        return <div>
            <Star/>
            <p className="Type_Three">{type_name}</p><Blank My_width={"20px"}/>
            <Label name={"全选"}/><br/><Label name={"运营机构"}/><Blank My_width={"20px"}/><Label name={"主管财政"}/><Blank My_width={"20px"}/>
            <Label name={"采购人"}/><Blank My_width={"20px"}/><Label name={"供应商"}/><Blank My_width={"20px"}/><Label name={"代理机构"}/><Blank My_width={"20px"}/><Label name={"专家"}/><Blank My_width={"20px"}/><Label name={"银行"}/><br/>
        </div>;
    }
}


export default Three;











