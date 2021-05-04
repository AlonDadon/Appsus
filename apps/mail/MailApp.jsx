import { mailService } from './services/mail.service.js'
import { MailList } from './cmps/MailList.jsx'

export class MailApp extends React.Component {
    state = {
        mails: null,
    }
    componentDidMount() {
        this.loadMails()
    }
    loadMails(){
        mailService.query()
            .then(mails => {
                this.setState({ mails })
            })
    }
    onRemoveMail = (mailId) =>{
        mailService.removeMail(mailId)
            this.loadMails()
    }
    onSetStarred = (mailId) =>{
        mailService.setStarred(mailId)
    }

    render() {
        const {mails} = this.state
        if(!mails) return <h1>Loading...</h1>
        return (
            <section className="Mail-main-container">
                <MailList mails={mails} onRemoveMail={this.onRemoveMail} 
                    onSetStarred={this.onSetStarred}/>
            </section>

        )
    }
}
