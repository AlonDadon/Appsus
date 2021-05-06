import { utilService } from '../../../app-service/util-service.js'

export const mailService = {
    query,
    removeMail,
    setStarred,
    getMailById,
    readMail,
    saveMail
}
const gMails = [
    { id: 'qw123', subject: 'Wassap?', body: 'Pick up!', isStarred: false, isRead: false, sentAt: 1551133930594, to: 'Bendavid@lolo.com', },
    { id: '20ded', subject: 'Demo release', body: 'Hey greg, the demo should be start today', isStarred: false, isRead: false, sentAt: 1551733930594, to: 'Bendavid@lolo.com' },
    { id: '857oij', subject: 'New offer?', body: 'Why do we tell actors to “break a leg? Because every play has a cast.', isStarred: false, isRead: false, sentAt: 1561133930594, to: 'Bendavid@lolo.com' }
]
console.log(gMails);

//check mails data as {mails={id,[mailInfo],}}
function query(filterBy) {
    if (!filterBy) return Promise.resolve(gMails)

    var { txt, isRead, isStarred, } = filterBy
    if (isRead === 'true') isRead = true;
    if (isRead === 'false') isRead = false;
    const filteredMails = gMails.filter(mail => {
        if (isRead === 'all') {
            return (mail.subject.toLowerCase()).includes(txt.toLowerCase()) ||
                (mail.body.toLowerCase()).includes(txt.toLowerCase()) ||
                (mail.to.toLowerCase()).includes(txt.toLowerCase())
        } else
            return mail.isRead === isRead &&
                mail.isStarred === isStarred &&
                ((mail.subject.toLowerCase()).includes(txt.toLowerCase()) ||
                    (mail.body.toLowerCase()).includes(txt.toLowerCase()) ||
                    (mail.to.toLowerCase()).includes(txt.toLowerCase()))
    })
    return Promise.resolve(filteredMails)
}
function createMails() {

}

function _createMail(to, subject, body) {
    const mail = {
        id: utilService.makeId(),
        subject,
        body,
        isStarred: false,
        isRead: false,
        sentAt: Date.now(),
        to,
    }
return mail
}

function saveMail(mail) {
    console.log(mail);
    return mail.id ? _updateMail(mail) : _addMail(mail)
}
function _updateMail(mailToUpdate) {
    const mailIdx = gMails.find(mail => mailToUpdate.id === mail.id)
    gMails.splice(mailIdx, 1, mailToUpdate)
    //saveMailToStorage
    return Promise.resolve()
}
function _addMail(mailToAdd) {
    const mail = _createMail(mailToAdd.to, mailToAdd.subject, mailToAdd.body)
    gMails.unshift(mail)
    //saveMailToStorage
    console.log(gMails);
    return Promise.resolve()
}
function removeMail(mailId) {
    const mailIdx = gMails.findIndex(mail => mailId === mail.id)
    gMails.splice(mailIdx, 1)
    return Promise.resolve()
}
function setStarred(mailId) {
    const mailIdx = gMails.findIndex(mail => mailId === mail.id)
    gMails[mailIdx].isStarred = !gMails[mailIdx].isStarred
    return Promise.resolve()
}

function getMailById(id) {
    const mail = gMails.find(mail => id === mail.id)
    return Promise.resolve(mail)
}

function readMail(mailId) {
    const mail = gMails.find(mail => mailId === mail.id)
    mail.isRead = true
    return Promise.resolve(mail)
}
