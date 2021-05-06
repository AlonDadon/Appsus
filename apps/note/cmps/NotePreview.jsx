

import { NoteTxt } from './DynamicCmp/preview/NoteTxt.jsx'
import { NoteTodos } from './DynamicCmp/preview/NoteTodos.jsx'
// import { NoteTodos } from './DynamicCmp/preview/NoteTodos.jsx'

// export function NotePreview(props) {
export class NotePreview extends React.Component {
    state = {
        selectNote: null,
        prevSelect: null
    }

    onToggleEditNote = (id) => {
        this.setState({ selectNote: id })
    }

    render() {
        // const { onDeleteNote, loadNotes, onSaveNote } = this.props
        const { type, isPinned, info, id } = this.props.note
        {/* <NoteTxt /> */ }
        {/* <NoteImg />
                <NoteTodos />
                <NoteVideo /> */}

        {/* <NoteAudio>: bonus
             <NoteMap>: bonus */}

        const DynamicCmp = () => {

            switch (type) {
                case 'NoteTxt':
                    return <NoteTodos props={this.props} />
                case 'NoteTodos':
                    return <NoteTodos />
                default:
                    return //...some default error view
            }
        }

        // console.log(DynamicCmp);
        return (
            // <section className="note mb-10 color-dark">
         
                <DynamicCmp />

          
            //     <button onClick={() => onDeleteNote(id)}>❌❎</button>
            //     <p onClick={() => this.onToggleEditNote(id)} >{info.txt}</p>

            //     { this.state.selectNote && <EditNote id={id}
            //         loadNotes={loadNotes}
            //         onSaveNote={onSaveNote}
            //         onToggleEditNote={this.onToggleEditNote}
            //     ></EditNote>}
            // </section>

        )
    }
}