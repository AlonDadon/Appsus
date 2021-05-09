const { Route, Switch, Link } = ReactRouterDOM
import { mailService } from './services/mail-service.js'
import { MailList } from './cmps/MailList.jsx'
import { MailFilter } from './cmps/MailFiter.jsx'
import { MailEdit } from './cmps/MailEdit.jsx'
import { SideBar } from './cmps/SideBar.jsx'
import { Loader } from '../../cmps/Loader.jsx'

export class MailApp extends React.Component {
    state = {
        mails: null,
        filterBy: {
            txt: '',
            isRead: 'all',
            isStarred: false,
        },
        isComposing: false
    }
    componentDidMount() {
        this.loadMails()
        // console.log(this.props.match);
    }
    loadMails = () => {
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
        if (!mails) return <Loader/>
        return (
            <main className="main-container container">
                <SideBar setComposing={this.setComposing} onSetFilter={this.onSetFilter} loadMails={this.loadMails}/>
                <section className="mail-main-container">
                    <MailFilter onSetFilter={this.onSetFilter} />
                    {!mailId && <MailList mails={mails} onRemoveMail={this.onRemoveMail}
                        onSetStarred={this.onSetStarred} onReadMail={this.onReadMail} />}
                    {isComposing && <MailEdit setComposing={this.setComposing} />}
                </section>
            </main>

        )
    }
}
