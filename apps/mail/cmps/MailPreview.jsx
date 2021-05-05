const { Link } = ReactRouterDOM
export function MailPreview({ mail,onRemoveMail, onSetStarred }) {
    return (

        <div className="mail-preview clean-list flex column">
            <li>
            <Link to={`/mail/${mail.id}`}>
                {mail.sentBy.name}
                <span>{mail.sentBy.mail}</span>
                <span>{mail.subject}</span>
            </Link>
                <span onClick={() => onRemoveMail(mail.id)}>X</span>
                <span onClick={() => onSetStarred(mail.id)}>✨</span>
            </li>
        </div>
    )
}