import "./section.scss"

function Section({ children, title, className }) {
    return (
        <div className={`section ${className}`} >
            <h1 className="txt-1x mb-2xx">
                {title}
            </h1>
            {children}
        </div>
    )
}

export default Section