

const Textarea = () => {
    return(
        <div className={"textarea"}>
            <div>
                <b className={"must"}>*</b><b className={"title"}>描述</b>
            </div>
            <textarea className={"describe"}/>
        </div>
    )
}
export default Textarea