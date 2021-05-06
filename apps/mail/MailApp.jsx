const { Route, Switch, Link } = ReactRouterDOM
import { mailService } from './services/mail.service.js'
import { MailList } from './cmps/MailList.jsx'
import { MailFilter } from './cmps/MailFiter.jsx'
import { MailEdit } from './cmps/MailEdit.jsx'

export class MailApp extends React.Component {
    state = {
        mails: null,
        filterBy: {
            txt: '',
            isRead: false,
            isStarred: false,
        },
        isComposing: false
    }
    componentDidMount() {
        this.loadMails()
        // console.log(this.props.match);
    }
    componentDidUpdate() {
        const { mailId } = this.props.match.params
    }
    loadMails() {
        mailService.query(this.state.filterBy)
            .then(mails => {
                this.setState({ mails })
            })
    }
    onRemoveMail = (mailId) => {
        mailService.removeMail(mailId)
        this.loadMails()
    }
    onSetStarred = (mailId) => {
        mailService.setStarred(mailId)
    }
    onReadMail = (mailId) => {
        mailService.readMail(mailId)
        this.loadMails()
    }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy: { ...this.state.filterBy, ...filterBy } }, this.loadMails)
    }
    setComposing = () => {
        this.setState({ isComposing: !this.state.isComposing })
    }
    render() {
        const { mails, isComposing } = this.state
        const { mailId } = this.props.match.params
        if (!mails) return <h1>Loading...</h1>
        return (
            <section className="mail-main-container">
                <section>

                </section>
                <MailFilter onSetFilter={this.onSetFilter} />
                { !mailId && <MailList mails={mails} onRemoveMail={this.onRemoveMail}
                    onSetStarred={this.onSetStarred} onReadMail={this.onReadMail} />}
                <button onClick={ () => this.setComposing()}><Link className="compose-btn" to="/mail/inbox/compose" >Compose</Link></button>
                {isComposing && <MailEdit setComposing={this.setComposing} />}
            </section>

        )
    }
}
