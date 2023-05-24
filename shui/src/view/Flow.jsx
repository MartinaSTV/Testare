import { useNavigate } from "react-router-dom"
import './flow.scss'
import ikon from '../assets/Subtractikon.svg'

function Flow() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/writemsg')
    }
    return (
        <article data-id='flow' className="flow">
            <section className="flow__rectangle"><img src={ikon} alt="ikon" /></section>
            <button data-id='flowBtn' onClick={ handleClick } className="flow__button">skriv</button>
        </article>
    )
}

export default Flow