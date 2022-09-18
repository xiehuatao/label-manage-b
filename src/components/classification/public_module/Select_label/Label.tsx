import React from "react";
import "./Label.css"


type Props = {name:String}
class Label extends React.Component<Props>{
    render() {
        const {name} = this.props;
        return <div className="Div">
            <input className="label_input" type={"checkbox"}/>
            <p className="P" >{name}</p>
        </div>;
    }
}

export default Label;





