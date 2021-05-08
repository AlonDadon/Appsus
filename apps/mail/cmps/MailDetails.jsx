const { Link, Route } = ReactRouterDOM
import { mailService } from '../services/mail-service.js'
import { MailEdit } from './MailEdit.jsx'
import { SideBar } from './SideBar.jsx'

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
        const trashSvg = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="link-svg trash-svg svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
        const backSvg = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-left" className="link-svg back-svg svg-inline--fa fa-arrow-alt-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"></path></svg>
        const replySvg= <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="replyd" className="link-svg reply-svg svg-inline--fa fa-replyd fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M320 480H128C57.6 480 0 422.4 0 352V160C0 89.6 57.6 32 128 32h192c70.4 0 128 57.6 128 128v192c0 70.4-57.6 128-128 128zM193.4 273.2c-6.1-2-11.6-3.1-16.4-3.1-7.2 0-13.5 1.9-18.9 5.6-5.4 3.7-9.6 9-12.8 15.8h-1.1l-4.2-18.3h-28v138.9h36.1v-89.7c1.5-5.4 4.4-9.8 8.7-13.2 4.3-3.4 9.8-5.1 16.2-5.1 4.6 0 9.8 1 15.6 3.1l4.8-34zm115.2 103.4c-3.2 2.4-7.7 4.8-13.7 7.1-6 2.3-12.8 3.5-20.4 3.5-12.2 0-21.1-3-26.5-8.9-5.5-5.9-8.5-14.7-9-26.4h83.3c.9-4.8 1.6-9.4 2.1-13.9.5-4.4.7-8.6.7-12.5 0-10.7-1.6-19.7-4.7-26.9-3.2-7.2-7.3-13-12.5-17.2-5.2-4.3-11.1-7.3-17.8-9.2-6.7-1.8-13.5-2.8-20.6-2.8-21.1 0-37.5 6.1-49.2 18.3s-17.5 30.5-17.5 55c0 22.8 5.2 40.7 15.6 53.7 10.4 13.1 26.8 19.6 49.2 19.6 10.7 0 20.9-1.5 30.4-4.6 9.5-3.1 17.1-6.8 22.6-11.2l-12-23.6zm-21.8-70.3c3.8 5.4 5.3 13.1 4.6 23.1h-51.7c.9-9.4 3.7-17 8.2-22.6 4.5-5.6 11.5-8.5 21-8.5 8.2-.1 14.1 2.6 17.9 8zm79.9 2.5c4.1 3.9 9.4 5.8 16.1 5.8 7 0 12.6-1.9 16.7-5.8s6.1-9.1 6.1-15.6-2-11.6-6.1-15.4c-4.1-3.8-9.6-5.7-16.7-5.7-6.7 0-12 1.9-16.1 5.7-4.1 3.8-6.1 8.9-6.1 15.4s2 11.7 6.1 15.6zm0 100.5c4.1 3.9 9.4 5.8 16.1 5.8 7 0 12.6-1.9 16.7-5.8s6.1-9.1 6.1-15.6-2-11.6-6.1-15.4c-4.1-3.8-9.6-5.7-16.7-5.7-6.7 0-12 1.9-16.1 5.7-4.1 3.8-6.1 8.9-6.1 15.4 0 6.6 2 11.7 6.1 15.6z"></path></svg>
        const { mail } = this.state
        if (!mail) return <h1>Loading...</h1>
        return (
            <div className="flex">
                <SideBar />
                <section className="main-details-container flex ">
                    <div className="mail-detail flex column">
                        <div className="detail-btns flex mb-10">
                        <button className="mail-btn back-to" onClick={() => this.props.history.push('/mail')}>{backSvg}</button>
                        <Route component={MailEdit} path="/mail/edit/:mailId" />
                        <Link className="mail-btn replay" to={`/mail/edit/${mail.id}`}>{replySvg}</Link>
                        <button className="mail-btn remove" onClick={() => this.onRemoveMail()}>{trashSvg}</button>
                        </div>
                        <h1>{mail.subject}</h1>
                        <h4 className="detail-info flex column mb-10">From: {mail.name} E-mail Address: {mail.to}<span> Sent At: {new Date(mail.sentAt).toLocaleString()}</span></h4>
                        <p className="detail-body mb-10">{mail.body}</p>
                    </div>

                </section>
            </div>
        )
    }
}

