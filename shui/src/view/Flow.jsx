import { useNavigate } from "react-router-dom"
import './flow.scss'
import ikon from '../assets/Subtractikon.svg'
import bottom from '../assets/shuibottom2.svg'
import writebtn from '../assets/write.svg'
import Message from "../components/message"



function Flow() {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/writemsg')
    }

    const localMessages = JSON.parse(localStorage.getItem('allMessages'))
  
    console.log(localMessages);
    if (localMessages === null  || localMessages.length === 0){
        
        return (
            <article data-id='flow' className="flow">
                <section className="flow__rectangle"><img src={ikon} alt="ikon" /></section>
                <section><p className="flow__nomessages">Du har inga meddelanden att visa.</p></section>
                <img data-id='flowBtn' onClick={ handleClick } className="flow__button" src={ writebtn } alt="writebutton" />
                <img src={ bottom } alt="" className="flow__bottom"/>
            </article>
        )
        
    }else{
        let allPost = localMessages.map((item, index)=>{
            return < Message post = {item} key = {index}/>
        })

        return (
            <article data-id='flow' className="flow">
                <section className="flow__rectangle"><img src={ikon} alt="ikon" /></section>
                <section className="flow__posts">{ allPost}</section>
                <img data-id='flowBtn' onClick={ handleClick } className="flow__button" src={ writebtn } alt="writebutton" />
                
            </article>
        )
    
    }
    
   
}

export default Flow