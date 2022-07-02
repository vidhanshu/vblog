import "./tagwithcross.scss"
import { AiOutlineClose } from "react-icons/ai"
function TagWCross(props) {
    return (
        <span  className={`tag ${props.className}`}>
            {props.children}
            <AiOutlineClose style={{fontSize:"14px",margin:"0px 4px"}} onClick={props.handler} />
        </span>
    )
}

export default TagWCross