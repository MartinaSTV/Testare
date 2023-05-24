import './message.scss'
import trekant from '../assets/trekant.svg'

function Message(props) {

    function remove(){
        const localMsgs = JSON.parse(localStorage.getItem('allMessages'))
       
        let removefromStorage = localMsgs.findIndex((post)=> post.id === props.post.id)
        console.log(removefromStorage)
        const NewPostfromStorage = [...localMsgs] 
        NewPostfromStorage.splice(removefromStorage, 1)
            
        localStorage.setItem('allMessages', JSON.stringify( NewPostfromStorage))

        location.reload()
    }

    return (
        <aside data-id='msg' >
            <section className='message'>
                <p data-id='msgDateTime' className='message__date'>{props.post.timeDate}</p>
                <p data-id='msgText' className='message__text'>{props.post.msg}</p>
                <p data-id='msgUser' className='message__user'>-{props.post.user}</p>
                <button data-id='msgRemove' className='message__button' onClick={ remove }>Ta bort</button>
            </section>
            <section className='message__trekant'><img src={trekant} alt="" /></section>
            
        </aside>
        
    )
}

export default Message