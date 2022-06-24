import "./divider.scss"

function Divider({ theme }) {
    return (
        <hr className='divider' style={{ borderTop: theme === 'light' ? '.2px solid white' : '.2px solid var(--hoverText)' }} />
    )
}

export default Divider