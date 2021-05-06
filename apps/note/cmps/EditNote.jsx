import { NoteTxtEdit } from './DynamicCmp/EditNote/NoteTxtEdit.jsx'
export class EditNote extends React.Component {
    state = {
        txt: null,
        id: null,
        isFocus: null,
        todos: null,
        type: null
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            txt: {
                ...prevState.txt,
                [field]: value
            },

        }))
    }

    onSetNote = (ev) => {
        ev.preventDefault()
        const { txt } = this.state
        const { id, onSaveNote, onToggleEditNote } = this.props
        if (!txt) return alert('fill the text field')
        this.setState({ id: id }, () => {
            console.log(this.state);
            onSaveNote(this.state)
            if (onToggleEditNote) onToggleEditNote(null)
        })
    }

    // onUpdateFocus = () => {
    //     this.setState({ isFocus: true })
    // }

    render() {
        const { txt, isFocus } = this.state
        const { type } = this.props

        const DynamicCmp = () => {
            // console.log(type);
            switch (type) {
                case 'NoteTxt':
                    return <NoteTxt props={this.props} />
                // case 'NoteTodos':
                //     return <NoteTodos />
                default:
                    return <NoteTxtEdit props={this.props} />
            }
        }
        return (
            <DynamicCmp />
            // <section className="edit-note-container flex justify-center mb-10">
            //     <form onSubmit={this.onSetNote} >
            //         <label htmlFor="user-txt" />

            //         <textarea onFocus={this.onUpdateFocus}
            //             className={isFocus && 'active-txt-input'}
            //             id="user-txt" name="txt" txt={txt}
            //             onChange={this.handleChange}
            //             placeholder="Post a comment ..." ></textarea>
            //         <button title="Save a note" className="btn" >Close</button>

            //     </form>
            // </section>
        )
    }
}
