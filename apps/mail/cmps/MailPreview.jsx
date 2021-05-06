const { Link } = ReactRouterDOM
export function MailPreview({ mail,onRemoveMail, onSetStarred, onReadMail }) {
    return (
        <div className={`mail-preview ${(mail.isRead)? "" : "bold"} clean-list flex row space-around`}>
            <Link to={`/mail/${mail.id}` }>
            <div className="mail-info">

            <li onClick={() => onReadMail(mail.id)}>
           
                <span>{mail.to}</span>
                <span>{mail.subject}</span>
            </li>
            </div>
        </Link>
                <button className="preview-btn hidden" onClick={() => onRemoveMail(mail.id)} >X</button>
                <button className="preview-btn hidden" onClick={() => onSetStarred(mail.id)} >✨</button>
        </div>
    )
}