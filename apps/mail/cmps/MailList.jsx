import { MailPreview } from './MailPreview.jsx'
export function MailList({ mails, onRemoveMail, onSetStarred, onReadMail }) {
    return (
        <div className="mail-list flex column wrap">
                {mails.map(mail => <MailPreview mail={mail} key={mail.id}
                    onRemoveMail={onRemoveMail} onSetStarred={onSetStarred}
                    onReadMail={onReadMail} />)}
        </div>
    )
}