import { noteService } from "../services/note-service.js"
export class EditTxt extends React.Component {
    state = {
        txt: null,
        id: null,
        isSelect:null
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

    onSaveNode = (ev) => {
        ev.preventDefault()
        const { txt } = this.state
        const { id } = this.props
        // here
        // this.setState({ id: id })
        // todo fix setState
        this.state.id = id
        if (!txt) return alert('fill the text field')
    
        noteService.saveNote(this.state).then(() => {
            this.props.loadNotes()
        })
    }

    render() {
        // console.log(this.props);
        const { txt } = this.state
        return (
            <section className="edit-txt-container flex justify-center mb-10">

                <form onSubmit={this.onSaveNode} >
                    <label htmlFor="user-txt" />
                    {/* <input type="text" id="user-txt" name="txt" txt={txt} onChange={this.handleChange}
                        placeholder="Post a comment ..." autoFocus /> */}
                    <textarea  id="user-txt" name="txt" txt={txt} onChange={this.handleChange} ></textarea>
                    <button title="Save a note" className="btn" >📄</button>
                </form>
            </section>

        )
    }
}
