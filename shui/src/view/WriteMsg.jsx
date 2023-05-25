import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import './writemsg.scss'
import uuid from 'uuid-random'
import logo from '../assets/Subtractikon.svg';
function WriteMsg() {

    const id = uuid()
    console.log(id)

    const navigate = useNavigate()
    const [msg, setMsg] = useState()
    const [user, setUser] = useState()
    const date = 'Monday 11 mars. 13.30'
    let allMsgs = [{
        id: 'hola',
        user: 'stefan',
        msg: 'hejsan',
        timeDate: '11 october'
    }]
    let newMsg = {
        id: id,
        user: user,
        msg: msg,
        timeDate: date
    }

    function getFromLocal() {
        const localMsgs = JSON.parse(localStorage.getItem('allMessages'))
        console.log(localMsgs);
        if (localMsgs === null) {
            console.log('i getfromlocal if');
        }
        else {
            allMsgs = localMsgs
            console.log(allMsgs);
            console.log('i getfromlocal else');
        }
        
    }

    function handleClick() {
        getFromLocal();
        if (!allMsgs) {
            let tempArr = newMsg
            console.log('i klick if');
            localStorage.setItem('allMessages', JSON.stringify(tempArr))
        }
        else {
            allMsgs.push(newMsg)
            console.log('i klick else');
            localStorage.setItem('allMessages', JSON.stringify(allMsgs))
        }
        
        navigate('/')
    }

    return (
        <article data-id='writeMsg' className="write">
            <img src={ logo } alt="logo" className="write__logo"/>
            <textarea placeholder="Skriv något kul!" className="write__text" onChange={ (e) => setMsg(e.target.value) } data-id='writeMsgText'/>
            <input placeholder="Användarnamn" className="write__user" onChange={ (e) => setUser(e.target.value) } type="text" data-id='writeMsgUser'/>
            <button className="write__btn" data-id='writeMsgPost' onClick={ handleClick }>Publicera</button>
        </article>
    )
}

export default WriteMsg