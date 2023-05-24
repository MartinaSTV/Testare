import { useNavigate } from "react-router-dom"
import './flow.scss'
import ikon from '../assets/Subtractikon.svg'
import { useState } from "react"

function Flow() {

    const [allMessages, setAllMessages] = useState()
    console.log(allMsgs)
    const navigate = useNavigate()

    function handleClick() {
        navigate('/writemsg')
    }

    useEffect(() => {
        function getFromLocal() {
            const localMessages = JSON.parse(localStorage.getItem('allMessages'))
            setAllMessages(localMessages)
        }
        getFromLocal();
    }, [])

    return (
        <article data-id='flow' className="flow">
            <section className="flow__rectangle"><img src={ikon} alt="ikon" /></section>
            <button data-id='flowBtn' onClick={ handleClick } className="flow__button">skriv</button>
        </article>
    )
}

export default Flow