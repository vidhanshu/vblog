import "./section.scss"

function Section({ children, title, className }) {
    return (
        <div className={`section ${className}`} >
            <h1 className="sectionTitle">
                {title}
            </h1>
            {children}
        </div>
    )
}

export default Section