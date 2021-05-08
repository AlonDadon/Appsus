
export class NoteTodos extends React.Component {
    state = {
        type: null,
        noteId: null,
        todoId: null,
        todos: null,
        txt: null,
        isTyping: null,
        isFocus: null,
        isOpenModal: null
    }
    inputRef = React.createRef()
    cleanInputRef = React.createRef()

    componentDidMount() {
        const { type, noteId, info } = this.props.props.note
        this.setState({ type: type })
        this.setState({ noteId: noteId })
        this.setState({ todos: info.todos })
    }

    handleChange = ({ target }) => {
        this.setState({ isTyping: true })
        const field = target.name
        const value = target.value
        this.setState(prevState => ({
            txt: {
                ...prevState.txt,
                [field]: value
            },
        }))
    }
    onAddLine = (ev) => {
        ev.preventDefault()
        this.setState({ isTyping: null })
        this.setState({ isFocus: true })
        this.inputRef.current.value = ''
        const { onSaveTodos } = this.props.props.props
        onSaveTodos(this.state)
    }
    setTodoId = (id, txt) => {
        this.setState({ todoId: id })
        this.setState({ txt: txt })
    }
    toggleModal = (isOpenModal) => {
        this.setState({ isOpenModal: isOpenModal })
    }

    render() {
        const { txt, todos, isTyping, isFocus } = this.state
        return (
            <div>
                {<div className={`${this.state.isOpenModal && 'active'} screen`} onClick={() => this.toggleModal(false)}></div>}
                <section onClick={() => this.toggleModal(true)} className={`${this.state.isOpenModal && 'active-edit-note'} todo mb-10 color-dark`} >
                    <button className="btn-mark btn" >📌</button>
                    <ul className="clean-list">
                        {todos && todos.map((todo, idx) =>
                            <li key={idx + todo} >
                                <form onSubmit={() => this.onAddLine(event)} >
                                    <input type="text"
                                        onClick={() => this.setTodoId(todo.id, todo.txt)}
                                        autoFocus
                                        name={'txt'}
                                        onChange={this.handleChange}
                                        txt={txt}
                                        placeholder="Add a comment"
                                        autoComplete="off"
                                        defaultValue={todo.txt}
                                        ref={todos.length === idx && this.cleanInputRef}
                                    />
                                </form>
                                <input className="todo-checkbox" type="checkbox" name="" id="" /></li>)}

                        {isTyping && <li>
                            <form onSubmit={() => this.onAddLine(event)} >
                                <input type="text"
                                    onClick={() => this.setTodoId(null)}
                                    autoFocus={!isFocus && false}
                                    name={'txt'}
                                    onChange={this.handleChange}
                                    txt={txt}
                                    placeholder="Add a comment"
                                    autoComplete="off"
                                    defaultValue={''}
                                    ref={this.inputRef}

                                />
                            </form>
                            <input className="todo-checkbox" type="checkbox" name="" id="" /></li>}
                    </ul>
                    <div className="btn-note-container" >
                        <button className="btn">...</button>
                        <button className="btn" onClick={() => onDeleteNote(id)}>🗑</button>
                        <button className="btn">🎴</button>
                        <button className="btn">🎨</button>
                        <button className="btn">🔔</button>
                    </div>
                </section>
            </div>
        )
    }
}