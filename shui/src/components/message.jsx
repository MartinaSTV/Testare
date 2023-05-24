import './message.scss'

function Message(props) {

    function remove(){
        const localMsgs = JSON.parse(localStorage.getItem('allMessages'))
        console.log(localMsgs)
      
    

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