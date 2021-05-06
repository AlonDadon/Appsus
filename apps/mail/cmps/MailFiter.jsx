export class MailFilter extends React.Component {
    state = {
        filterBy: {
            txt: '',
            isRead: 'all',
            isStarred: false,
        }
    }
    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
            console.log(this.state.filterBy);
        })
    }
    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }
    render() {
        const { txt, isRead, isStarred } = this.state.filterBy

        return (
            <form className="mail-filter" onSubmit={this.onFilter}>
                <input type="text" name="txt" value={txt} placeholder="Search mail" onChange={this.handleChange} />
                <label htmlFor="mailOptions"></label>
                <select id="mailOptions" name="isRead" value={isRead} onChange={this.handleChange}>
                    <option value='all'>all</option>
                    <option value={true} >Read mails</option>
                    <option value={false} >Unread mails</option>
                </select>
                <button>Search</button>
            </form>
        )
    }

}