import "./header.scss"

function Header() {
    return (
        <div className="header">
            <h1 className="motto">
                The place<br /> where,<br />
                ideas finds you<span className="recording-animation ">.</span>
            </h1>
            <div className="headerImage">
                <img src="https://i.postimg.cc/9MmWHSf4/blog.png" alt="" />
            </div>
        </div>
    )
}

export default Header