const { Route, Switch } = ReactRouterDOM
import { mailService } from './services/mail.service.js'
import { MailList } from './cmps/MailList.jsx'
import { MailDetails } from './cmps/MailDetails.jsx'

export class MailApp extends React.Component {
    state = {
        mails: null,
    }
    componentDidMount() {
        this.loadMails()
    }
    loadMails() {
        mailService.query()
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

    render() {
        const { mails } = this.state
        const { mailId} = this.props.match.params
        if (!mails) return <h1>Loading...</h1>
        return (
            <section className="mail-main-container">
                <section>

                </section>
                {/* <switch> */}
                    <Route component={MailDetails} path="/mail/:mailId" />
                    {/* <Route component={Home} path="/" />
                    </switch> */}
                    {/* thinking of making MailAppNav comp that will contorol the navugation inside the mail app. */}
                   { !mailId && <MailList mails={mails} onRemoveMail={this.onRemoveMail}
                        onSetStarred={this.onSetStarred} /> }
            </section>

        )
    }
}
