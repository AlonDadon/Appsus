


export function NoteBtn(props) {
    const { onAddNote } = props
    return (
        <section className="note-btn-container flex justify-center wrap" >
            <button className='btn-add' onClick={() => onAddNote()} >Add todo list</button>
        </section >
    )

}