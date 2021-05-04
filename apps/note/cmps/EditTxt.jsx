export class EditTxt extends React.Component {
    state = {
        noteTxt: null,
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            txt: {
                ...prevState.noteTxt,
                [field]: value

            }
        }))
    }
    onEditTxt = (ev) => {
        ev.preventDefault()
        eventBusService.emit('hello', this.state)
    }
    render() {
        const { noteTxt } = this.state
        return (
            <section className="edit-txt-container flex justify-center mb-10">
                <form onSubmit={this.onEditTxt} >
                    <label htmlFor="user-txt" />
                    <input type="text" id="user-txt" name="txt" txt={noteTxt} onChange={this.handleChange} />
                    <button  >Close</button>
                </form>
            </section>

        )
    }
}
