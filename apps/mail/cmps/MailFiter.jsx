export class MailFilter extends React.Component {
    state = {
        filterBy: {
            txt: '',
            isRead: 'all',
            isStarred: false,
        }
    }
    componentDidMount() {
        // onFilter()
    }
    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }
    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }
    render() {
        const { txt, isRead, isStarred } = this.state.filterBy

        return (
            <form className="mail-filter mb-10">
                <input type="text" name="txt" value={txt} placeholder=" Search mail" onChange={this.handleChange} />
                <label htmlFor="mailOptions"></label>
                <select id="mailOptions" name="isRead" value={isRead} onChange={this.handleChange}>
                    <option value='all'>All</option>
                    <option value={true} >Read</option>
                    <option value={false} >Unread</option>
                </select>
                {/* <button>Search</button> */}
                {/* onSubmit={this.onFilter} */}
            </form>
        )
    }

}