import React from "react";
import "./Blank.css"

type Props = {My_width:String}

class Blank extends React.Component<Props> {
    render() {
        const {My_width} = this.props;
        return <div className="Blank" style={{width:My_width+""}}></div>;
    }
}
export default Blank;