import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

function Flow() {
    const navigate = useNavigate()
    const location = useLocation()
    const data = location.state
    console.log(data)
 

    function handleClick() {
        navigate('/writemsg')
    }
    return (
        <article data-id='flow'>
            <h1>Här ska meddelanden komma</h1>
            <button data-id='flowBtn' onClick={ handleClick }>skriv</button>
        </article>
    )
}

export default Flow