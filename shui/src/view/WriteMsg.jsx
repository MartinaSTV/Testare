import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import './writemsg.scss'

function WriteMsg() {
    const navigate = useNavigate()
    const [msg, setMsg] = useState()
    const [user, setUser] = useState()
    const date = '11 mars'
    const [allMsgs, setAllMsgs] = useState([{
        user: 'stefan',
        msg: 'hejsan',
        timeDate: '11 october'
    }])
    let newMsg = {
        user: user,
        msg: msg,
        timeDate: date
    }

    useEffect(() => {
        function getFromLocal() {
            const localMsgs = JSON.parse(localStorage.getItem('allMessages'))
            setAllMsgs(localMsgs)
        }

        getFromLocal();
    }, [])

    function handleClick() {
        let tempArr = [...allMsgs, newMsg]
        setAllMsgs(tempArr)
        localStorage.setItem('allMessages', JSON.stringify(tempArr))
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