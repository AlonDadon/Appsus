import { mailService } from '../services/mail.service.js'

export class MailDetails extends React.Component {
    state = {
        mail: null,
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail() {
        const id = this.props.match.params.mailId
        mailService.getMailById(id).then(mail => {
            if (!mail) return this.props.history.push('/mail')
            this.setState({ mail })
        })
    }

    render() {
        const { mail } = this.state
        console.log(mail);
        if (!mail) return <h1>Loading...</h1>
        return (
            <section className="mail-details-container flex align-center column ">
                <h1>{mail.sentBy.name}<span>{mail.sentBy.mail}</span><span>{new Date(mail.sentAt).toLocaleString()}</span></h1>
                <h3>{mail.subject}</h3>
                <p>{mail.body}</p>
                <button className="back-to-mail-btn" onClick={()=> this.props.history.push('/mail')}>Back</button>
            </section>
        )
    }
}

