import './message.scss'

function Message(props) {

    function remove(){
        const localMsgs = JSON.parse(localStorage.getItem('allMessages'))
        console.log(localMsgs)
        let removefromStorage = localMsgs.findIndex((post)=> post.id === localMsgs.id)
           const newRemovePostfromStorage = [...PostfromStorage] 
           newremovedPostfromStorage.splice(removefromStorage, 1)
        
        
       localStorage.setItem('allMessages', JSON.stringify(newremovedPostfromStorage))
    

    }

    return (
        <aside data-id='msg' className='message'>
            <p data-id='msgDateTime'>{props.post.timeDate}</p>
            <p data-id='msgText'>{props.post.msg}</p>
            <p data-id='msgUser' className='message__user'>{props.post.user}</p>
            <button data-id='msgRemove' className='message__button' onClick={ remove }>Ta bort</button>
        </aside>
    )
}

export default Message