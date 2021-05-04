
export const mailService = {
    query,
    removeMail,
    setStarred
}

const gMails = [
    { id: 'qw123', subject: 'Wassap?', body: 'Pick up!', isStarred: false, isRead: false, sentAt: 1551133930594, sentBy: { name: 'Alon', mail: 'alon@lolo.com' } },
    { id: '20ded', subject: 'Demo release', body: 'Hey greg, the demo should be start today', isStarred: false, isRead: false, sentAt: 1551733930594, sentBy: { name: 'Alon', mail: 'alon@lolo.com' } },
    { id: '857oij', subject: 'New offer?', body: 'Pick up!', isStarred: false, isRead: false, sentAt: 1561133930594, sentBy: { name: 'Alon', mail: 'alon@lolo.com' } }
]
//check mails data as {mails={id,[mailInfo],}}
function query() {
    return Promise.resolve(gMails)
}

function createMails() {

}

function removeMail(mailId) {
    const mailIdx = gMails.findIndex(mail => mailId === mail.id)
    gMails.splice(mailIdx, 1)
    return Promise.resolve() //needed???
}

function setStarred(mailId){
    const mailIdx = gMails.findIndex(mail => mailId === mail.id)
    gMails[mailIdx].isStarred = !gMails[mailIdx].isStarred
    return Promise.resolve()
}
