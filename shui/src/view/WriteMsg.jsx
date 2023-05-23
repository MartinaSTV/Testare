import { useNavigate } from "react-router-dom"
import { useState } from "react"

function WriteMsg() {
    const navigate = useNavigate()
    const [msg, setMsg] = useState()
    const [user, setUser] = useState()
    let timeDate;
    let wholeMsg = {
        user: user,
        msg: msg,
        timeDate: timeDate
    }

    function handleClick() {
        
        navigate('/', {state: {wholeMsg: wholeMsg}})
    }

    return (
        <article data-id='writeMsg'>
            <input onChange={ (e) => setMsg(e.target.value) } type="text" data-id='writeMsgText'/>
            <input onChange={ (e) => setUser(e.target.value) } type="text" data-id='writeMsgUser'/>
            <button data-id='writeMsgPost' onClick={ handleClick }>Publicera</button>
        </article>
    )
}

export default WriteMsg