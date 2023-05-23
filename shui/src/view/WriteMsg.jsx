import { useNavigate } from "react-router-dom"
import { useState } from "react"

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

    function handleClick() {
        let tempArr = [...allMsgs, newMsg]
        setAllMsgs(tempArr)
        console.log(tempArr);
        console.log(newMsg);
        navigate('/', {state: {allMsgs: allMsgs}})
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