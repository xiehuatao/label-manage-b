import React from "react";
import "./My_Button.css"


type Props = {name:String,Name_color:String}

class My_Button extends React.Component<Props> {
    render() {
        const {name,Name_color} = this.props;
        return <div className="MB">
            <button className="MB" style={{background:Name_color+""}}>{name}</button>
        </div>;
    }
}
export default My_Button;