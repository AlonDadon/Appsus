const { Link } = ReactRouterDOM
export function MailPreview({ mail, onRemoveMail, onSetStarred, onReadMail }) {
    const starSvg = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="link-svg star-svg svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
    const trashSvg = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="link-svg trash-svg svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
    return (
        <div className={`mail-preview ${(mail.isRead) ? "" : "bold"} clean-list flex row space-around`}>
            <Link to={`/mail/${mail.id}`}>
                <div className="mail-info" onClick={() => onReadMail(mail.id)}>
                        <div className="name-preview">{mail.name}</div>
                        <div className="content-preview">{mail.subject}</div>
                        <div className="sentAt-preview">{new Date(mail.sentAt).toLocaleString()}</div>                    
                </div>
            </Link>
            <button className="preview-btn remove hidden" onClick={() => onRemoveMail(mail.id)} >{trashSvg}</button>
            <button className={`preview-btn stareed hidden ${(mail.isStarred)? "active-star" : ""}`} onClick={() => onSetStarred(mail.id)} >{starSvg}</button>
        </div>
    )
}