import "./header.scss"

function Header() {
    return (
        <div className="header">
            <h1 className="motto">
                The place<br /> where,<br />
                ideas finds you.
            </h1>
            <div className="headerImage">
                <img src="./blog.png" alt="" />
            </div>
        </div>
    )
}

export default Header