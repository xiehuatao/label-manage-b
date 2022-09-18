import React from "react";
import "./Two.css"


type Props = { Type_name: String, HaveStar: Boolean }

class Two extends React.Component<Props> {
    render() {
        const {Type_name, HaveStar} = this.props;
        return <div>
            {
                HaveStar ?
                <p className="Star_Two">*</p>:<div/>
            }
            <p className="Type_Two">{Type_name}</p><br/>
            <textarea className="Intput_Two"></textarea>
        </div>;
    }
}


export default Two;