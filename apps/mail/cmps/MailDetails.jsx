const { Link, Route } = ReactRouterDOM
import { mailService } from '../services/mail.service.js'
import { MailEdit } from './MailEdit.jsx'

export class MailDetails extends React.Component {
    state = {
        mail: null,
    }

    componentDidMount() {
        // console.log('MailDetails Mount');
        this.loadMail()
    }

    loadMail() {
        const id = this.props.match.params.mailId
        mailService.getMailById(id).then(mail => {
            if (!mail) return this.props.history.push('/mail')
            this.setState({ mail })
        })
    }
    onRemoveMail = () => {
        mailService.removeMail(this.props.match.params.mailId)
        return this.props.history.push('/mail')
    }
    render() {
        const { mail } = this.state
        if (!mail) return <h1>Loading...</h1>
        return (
            <section className="mail-details-container flex align-center column ">
                <h1>{mail.to}<span>{new Date(mail.sentAt).toLocaleString()}</span></h1>
                <h3>{mail.subject}</h3>
                <p>{mail.body}</p>
                <button className="remove-mail-btn" onClick={()=> this.onRemoveMail()}>X</button>
                <button className="back-to-mail-btn" onClick={()=> this.props.history.push('/mail')}>Back</button>
                <Route component={MailEdit} path="/mail/edit/:mailId" />
                <Link className="replay-mail-btn" to={`/mail/edit/${mail.id}`}>Reply</Link>

            </section>
        )
    }
}

