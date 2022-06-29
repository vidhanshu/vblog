import "./onoff.scss"
function OnOffLine() {
    return (
        <div className='flex full-height onoff'>
            <img src="/lostinternet.jpg" alt="loading" />
            <button className="login-btn mt-1">refresh</button>
            <p className="txtL-2">Please check your internet connection.</p>
        </div>
    )
}

export default OnOffLine