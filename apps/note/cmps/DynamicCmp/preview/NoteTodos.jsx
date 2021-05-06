
import { todoService } from '../../../services/todo-service.js'

export class NoteTodos extends React.Component {
    state = {
        id: null,
        prevSelect: null,
        todos: [{ txt: '' }],
        todoId: null,
        todo: {
            txt: null,
            isAddLine: null
        }
    }
    componentDidMount() {
        this.loadTodos()
    }
    setId = (id) => {
        this.setState({ id: id })
    }
    setTodoId = (id) => {
        console.log(id);
        this.setState({ todoId: id })
        console.log(this.state);
    }

    loadTodos = () => {
        todoService.query()
            .then(todos => {
                // console.log(todos.length, 'service');
                // console.log(this.state.todos.length, 'state');
                if (todos.length === this.state.todos.length) {
                    // todos.push({ txt: '' })
                }
                this.setState({ todos: todos })
                this.setState({ todos })
            })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({
            todo: {
                ...prevState.todo,
                [field]: value
            },
        }))
    }
    onAddLine = (ev) => {
        ev.preventDefault()
        // console.log('id', id);
        const { txt } = this.state.todo
        const { todoId } = this.state
        console.log(todoId);
        if (!txt) return alert('Add text')
        // this.setState(this.todoId = id)
        // console.log(this.state.todoID);
        todoService.saveTodo({ txt: txt, id: todoId })
        this.setState({ txt: null }, () => { this.loadTodos() })
    }

    render() {
        // console.log(this.state.txt);
        const { onDeleteNote, loadNotes, onSaveNote } = this.props.props
        const { type, isPinned, info, id } = this.props.props.note
        const { txt } = this.state
        const { todos } = this.state

        return (
            <div>
                {<div className={`${this.state.id && 'active'} screen`} onClick={() => this.setId(null)}></div>}
                <section onClick={() => this.setId(id)} className={`${this.state.id && 'active-edit-note'} todo mb-10 color-dark`} >
                    <button className="btn-mark btn" >📌</button>
                    <ul className="clean-list">
                        {/* {todos.map((todo, idx) => <li key={idx + todo} ><textarea  onChange={this.handleChange} txt={txt} placeholder="Add a comment" defaultValue={todo} ></textarea><input className="todo-checkbox" type="checkbox" name="" id="" /></li>)} */}
                        {todos.map((todo, idx) => <li key={idx + todo} >
                            <form onSubmit={() => this.onAddLine(event, todo.id)} >
                                <input type="text"
                                    onClick={() => this.setTodoId(todo.id)}
                                    autoFocus
                                    name={'txt'}
                                    onChange={this.handleChange}
                                    txt={txt}
                                    placeholder="Add a comment"
                                    autoComplete="off"
                                    defaultValue={todo.txt} />
                            </form>

                            <input className="todo-checkbox" type="checkbox" name="" id="" /></li>)}
                    </ul>






                    <div className="btn-note-container" >
                        <button onClick={() => onSaveNote(id)}>Close</button>
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