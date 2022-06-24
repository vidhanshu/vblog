import "./tag.scss"

function Tag(props) {
    return (
        <span className='tag' {...props}>
            {props.children}
        </span>
    )
}

export default Tag