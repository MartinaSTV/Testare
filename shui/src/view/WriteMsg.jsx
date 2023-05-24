import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import './writemsg.scss'

function WriteMsg() {
    const navigate = useNavigate()
    const [msg, setMsg] = useState()
    const [user, setUser] = useState()
    const date = '11 mars'
    let allMsgs = [{
        user: 'stefan',
        msg: 'hejsan',
        timeDate: '11 october'
    }]
    let newMsg = {
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
        <article data-id='writeMsg'>
            <input onChange={ (e) => setMsg(e.target.value) } type="text" data-id='writeMsgText'/>
            <input onChange={ (e) => setUser(e.target.value) } type="text" data-id='writeMsgUser'/>
            <button data-id='writeMsgPost' onClick={ handleClick }>Publicera</button>
        </article>
    )
}

export default WriteMsg