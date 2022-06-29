import "./loading.scss"
function Loading() {
    return (
        <div className='flex full-height loading'>
            <img src="/loading.gif" alt="loading" />
            <h1 className="txtB-2" style={{ color: "whitesmoke" }}>Loading
                <span className="one"> .</span>
                <span className="two"> .</span>
                <span className="three"> .</span>
            </h1>
        </div>
    )
}

export default Loading