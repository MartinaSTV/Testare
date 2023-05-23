

function WriteMsg() {

    return (
        <article data-id='writeMsg'>
            <h1>meddelande</h1>
            <input type="text" data-id='writeMsgText'/>
            <input type="text" data-id='writeMsgUser'/>
            <button data-id='writeMsgPost'>Publicera</button>
        </article>
    )
}

export default WriteMsg