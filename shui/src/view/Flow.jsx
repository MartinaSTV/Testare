import { useNavigate } from "react-router-dom"
import './flow.scss'
import ikon from '../assets/Subtractikon.svg'
import Message from "../components/message"

function Flow() {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/writemsg')
    }

    const localMessages = JSON.parse(localStorage.getItem('allMessages'))
  
    
    if (localMessages === null){
        
        return (
            <article data-id='flow' className="flow">
                <section className="flow__rectangle"><img src={ikon} alt="ikon" /></section>
                <section><p>ingamedelanden</p></section>
                <button data-id='flowBtn' onClick={ handleClick } className="flow__button">skriv</button>
            </article>
        )
        
    }else{
        let allPost = localMessages.map((item, index)=>{
            return < Message post = {item} key = {index}/>
        })

        return (
            <article data-id='flow' className="flow">
                <section className="flow__rectangle"><img src={ikon} alt="ikon" /></section>
                <section>{ allPost}</section>
                <button data-id='flowBtn' onClick={ handleClick } className="flow__button">skriv</button>
            </article>
        )
    
    }
    
   
}

export default Flow