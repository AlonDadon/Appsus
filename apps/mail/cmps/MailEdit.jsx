const { NavLink, withRouter } = ReactRouterDOM

import { mailService } from '../services/mail-service.js'

class _MailEdit extends React.Component {

    state = {
        mail: {
            to: '',
            subject: '',
            body: '',
        }
    }

    componentDidMount() {
        console.log(this.props);
        const id = this.props.match.params.mailId
        // console.log('this.props', this.props);
        // console.log('MailEdit Mount');
        if (!id) return
        mailService.getMailById(id).then(mail => {
            this.setState({ mail }, () => console.log(this.state))
        })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            mail: {
                ...prevState.mail,
                [field]: value
            }
        }))
    }

    onSaveMail = (ev) => {
        ev.preventDefault()
        const id = this.props.match.params.mailId
        const { mail } = this.state
        mailService.saveMail(mail).then(() => {
            this.props.history.push('/mail')
            if (!id) this.props.setComposing()
        })
    }

    render() {
        // const { mail } = this.state
        // console.log(this.props);
        const trashSvg = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="link-svg trash-svg svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
        const { subject, body, id, to } = this.state.mail
        return (
            <div className="mail-edit">
                <h1 className="compose-head">{id ? 'Reply' : 'New message'}</h1>
                <form className="form-edit" onSubmit={this.onSaveMail}>
                    <input type="email" id="email" name="to" placeholder="To" className="compose-mail" value={to} onChange={this.handleChange} required />
                    <input type="text" id="compose-subject" placeholder="Subject" name="subject" className="compose-subject" value={subject} onChange={this.handleChange} required />
                    <input type="textarea" name="body" className="compose-body" value={body} onChange={this.handleChange} required />
                    <div className="Compose-btns flex space-between">
                        <button className="compose-send-btn">Send</button>
                        <button className="compose-send-btn" onClick={() => this.props.setComposing()}>{trashSvg}</button>
                    </div>
                </form>
            </div>
        )
    }
}
export const MailEdit = withRouter(_MailEdit)