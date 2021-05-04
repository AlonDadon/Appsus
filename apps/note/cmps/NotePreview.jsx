

export function NotePreview(props) {
    const {type,isPinned,info } = props.note
    console.log(type,isPinned,info);

    return (
        <section className="note mb-10 color-dark">
        <p>{info.txt}</p>
        </section>
    )
}