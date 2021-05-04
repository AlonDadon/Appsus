import {MailPreview} from './MailPreview.jsx'
export function MailList({ mails, onRemoveMail,onSetStarred }) {
    return(
        <div className="mail-list">
            <ul className="flex column ">
                {mails.map(mail => <MailPreview mail={mail} key={mail.id} onRemoveMail={onRemoveMail} onSetStarred={onSetStarred}/>)}
            </ul>
        </div>
    )
}