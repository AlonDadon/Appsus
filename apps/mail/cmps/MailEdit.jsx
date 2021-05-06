const { NavLink, withRouter } = ReactRouterDOM

import { mailService } from '../services/mail.service.js'

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
        const { subject, body, id, to } = this.state.mail
        return (
            <div className="mail-edit">
                <form onSubmit={this.onSaveMail}>
                    <h1>{id ? 'Reply' : 'New message'}</h1>
                    <label>To:
                    <input type="email" name="to" value={to} onChange={this.handleChange} required />
                    </label>
                    <label>subject
                     <input type="text" name="subject" value={subject} onChange={this.handleChange} required />
                    </label>
                    <input type="textarea" name="body" value={body} onChange={this.handleChange} required />
                    <button>Send</button>
                </form>
            </div>
        )
    }
}
export const MailEdit = withRouter(_MailEdit)