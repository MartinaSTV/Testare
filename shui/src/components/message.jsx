import './message.scss'

function Message() {

    return (
        <aside data-id='msg'>
            <p data-id='msgDateTime'>Datum och tid</p>
            <p data-id='msgText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae quasi porro, cumque repellendus amet reiciendis asperiores quidem, magni, dolore qui a itaque sit reprehenderit voluptatibus culpa eaque. Dolorem, quaerat!</p>
            <p data-id='msgUser'>Användarnamn</p>
        </aside>
    )
}

export default Message