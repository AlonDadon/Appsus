export function MailPreview({ mail,onRemoveMail, onSetStarred }) {
    return (

        <div className="mail-preview clean-list flex column">
            <li>
                {mail.sentBy.name}
                <span>{mail.sentBy.mail}</span>
                <span>{mail.subject}</span>
                <span onClick={() => onRemoveMail(mail.id)}>X</span>
                <span onClick={() => onSetStarred(mail.id)}>✨</span>
            </li>
        </div>
    )
}