const { Route, Switch, Link } = ReactRouterDOM
export function SideBar({ setComposing, onSetFilter, loadMails }) {
    const inboxSvg = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="inbox" className="link-svg inbox-svg svg-inline--fa fa-inbox fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
    const starSvg = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="link-svg star-svg svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
    const sentMailSvg = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" className="link-svg sent-mail-svg svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
    const composeSvg = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="link-svg plus-svg svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
    return (
        <div className="side-bar">
            <button className="compose-btn .mb-10" onClick={() => setComposing()}><Link to="/mail/inbox/compose" ><span>{composeSvg}</span> Compose</Link></button>
            <Link to="/mail" >
                <p className="inbox-btn" onClick={() => {
                    loadMails()
                    onSetFilter({ isStarred: false })
                }}>{inboxSvg} Inbox</p>
            </Link>
            <Link to="/mail" >
                <p className="starred-btn" onClick={() => onSetFilter({ isStarred: true })}>{starSvg} Starred</p>
            </Link>
            <Link>
                <p className="sent-mail-btn">{sentMailSvg} Sent mails</p>
            </Link>
        </div>
    )
}