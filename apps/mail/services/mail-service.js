import { utilService } from '../../../app-service/util-service.js'
import { storageService } from '../../../app-service/storage-service.js'

export const mailService = {
    query,
    removeMail,
    setStarred,
    getMailById,
    readMail,
    saveMail
}
const MAILKEY = 'mails'
var gMails;
createMails()

//check mails data as {mails={id,[mailInfo],}}
function query(filterBy) {
    if (!filterBy) return Promise.resolve(gMails)
    var { txt, isRead, isStarred, } = filterBy
    if (isRead === 'true') isRead = true;
    if (isRead === 'false') isRead = false;
    const filteredMails = gMails.filter(mail => {
        if (isStarred){
            return mail.isStarred === isStarred
        }
        if (isRead === 'all') {
            return (mail.subject.toLowerCase()).includes(txt.toLowerCase()) ||
                (mail.body.toLowerCase()).includes(txt.toLowerCase()) ||
                (mail.to.toLowerCase()).includes(txt.toLowerCase())
        } else
            return mail.isRead === isRead &&
                ((mail.subject.toLowerCase()).includes(txt.toLowerCase()) ||
                    (mail.body.toLowerCase()).includes(txt.toLowerCase()) ||
                    (mail.to.toLowerCase()).includes(txt.toLowerCase()))
    })
    return Promise.resolve(filteredMails)
}
function createMails() {
    let mails = storageService.loadFromStorage(MAILKEY)
    if (!mails || !mails.length) {
        mails = [
            _createMail({
                subject: '7 ways sleep affects your work.',
                body: 'We’ve all experienced it: the crushing weight of trying to drag yourself through a workday when you just haven’t had enough sleep the night before.It’s not just unpleasant, it makes everything harder—and erodes the quality, accuracy, and creativity of your work (not to mention impacting your ability to collaborate with colleagues).And if you manage people, sleep issues can invisibly undermine all the good things you do: someone who’s suffering from sleep problems will be far less receptive to even the best management and culture in the world. If your people haven’t slept well, it will be hard to even get their attention much less their full engagement.Few things in work are more important—but few are so rarely discussed. We’d like to help change that. Your workday demands energy that only sleep can provide.',
                sentAt: 1551133930594, to: 'hello@breathe.calm.com', name: 'Calm'
            }),
            _createMail({
                subject: 'New Acapellas recently added.',
                body: 'We are adding new content to the Voclr.it platform every single day to give you the most up to date, freshest and best Acapellas for your next music project. With over 500+ new Acapellas already added to Voclr.it this month, you do not want to miss out on your chance to make amazing music with high quality Acapellas. We have recruited a new team dedicated to introducing these new Acapellas available to Free & Pro users on the platform, so expect alot more sounds over the up-coming months. We are really excited to hear the tracks you create.',
                sentAt: 1551733930594, to: 'noreply@voclr.it', name: 'Voclr'
            }),
            _createMail({
                subject: 'COMPETITION TIME!',
                body: ' Upgrade your home studio with over $1000+ worth of prizes, which includes: 🔊 2x KRK Rokit RP5 G4 Studio Monitors 🎶 1x Focusrite Scarlett 212 Audio Interface 🎛️ 2hr Production Lesson with recent Beatport no.1 Artists Late Replies 👕 2x Brand New Limited Edition Voclr.it Tees 😷 2x Voclr.it Masks 🎫 1 year Voclr.it subscription',
                sentAt: 1561133930594, to: 'noreply@voclr.it', name: 'Voclr'
            }),
            _createMail({
                subject: '7 ways sleep affects your work.',
                body: 'We’ve all experienced it: the crushing weight of trying to drag yourself through a workday when you just haven’t had enough sleep the night before.It’s not just unpleasant, it makes everything harder—and erodes the quality, accuracy, and creativity of your work (not to mention impacting your ability to collaborate with colleagues).And if you manage people, sleep issues can invisibly undermine all the good things you do: someone who’s suffering from sleep problems will be far less receptive to even the best management and culture in the world. If your people haven’t slept well, it will be hard to even get their attention much less their full engagement.Few things in work are more important—but few are so rarely discussed. We’d like to help change that. Your workday demands energy that only sleep can provide.',
                sentAt: 1551133930594, to: 'hello@breathe.calm.com', name: 'Calm'
            }),
            _createMail({
                subject: 'New Acapellas recently added.',
                body: 'We are adding new content to the Voclr.it platform every single day to give you the most up to date, freshest and best Acapellas for your next music project. With over 500+ new Acapellas already added to Voclr.it this month, you do not want to miss out on your chance to make amazing music with high quality Acapellas. We have recruited a new team dedicated to introducing these new Acapellas available to Free & Pro users on the platform, so expect alot more sounds over the up-coming months. We are really excited to hear the tracks you create.',
                sentAt: 1551733930594, to: 'noreply@voclr.it', name: 'Voclr'
            }),
            _createMail({
                subject: 'COMPETITION TIME!',
                body: ' Upgrade your home studio with over $1000+ worth of prizes, which includes: 🔊 2x KRK Rokit RP5 G4 Studio Monitors 🎶 1x Focusrite Scarlett 212 Audio Interface 🎛️ 2hr Production Lesson with recent Beatport no.1 Artists Late Replies 👕 2x Brand New Limited Edition Voclr.it Tees 😷 2x Voclr.it Masks 🎫 1 year Voclr.it subscription',
                sentAt: 1561133930594, to: 'noreply@voclr.it', name: 'Voclr'
            }),
            _createMail({
                subject: 'Studio Ghiblis Earwig and The Witch - In Cinemas Tomorrow',
                body: 'mother had magical powers. Her life changes dramatically when a strange couple takes her in, and she is forced to live with a selfish witch. As the headstrong young girl sets out to uncover the secrets of her new guardians, she discovers a world of spells and potions, and a mysterious song that may be the key to finding the family she has always wanted.The latest film from the legendary Studio Ghibli (Spirited Away, My Neighbor Totoro, Princess Mononoke and more) is directed by Gorō Miyazaki (From Up on Poppy Hill, Tales from Earthsea), and produced by studio co-founder Toshio Suzuki, with planning on the feature from Academy Award®-winner Hayao Miyazaki.Based on the children’s novel by Diana Wynne Jones (Howl’s Moving Castle), this film marks Studio Ghibli’s first 3DCG animated feature, and is proudly presented by AnimeLab.',
                sentAt: 1561133930594, to: 'noreply@animelab.com', name: 'AnimeLab'
            }),
        ]
    }
    gMails = mails
    _saveMailsToStorage()
}

function _createMail({ to, subject, body, sentAt = Date.now(), name = 'Unknown' }) {
    const mail = {
        id: utilService.makeId(),
        subject,
        body,
        isStarred: false,
        isRead: false,
        sentAt,
        to,
        name
    }
    return mail
}

function saveMail(mail) {
    return mail.id ? _updateMail(mail) : _addMail(mail)
}
function _updateMail(mailToUpdate) {
    const mailIdx = gMails.find(mail => mailToUpdate.id === mail.id)
    gMails.splice(mailIdx, 1, mailToUpdate)
    _saveMailsToStorage()
    return Promise.resolve()
}
function _addMail(mailToAdd) {
    const mail = _createMail({ to: mailToAdd.to, subject: mailToAdd.subject, body: mailToAdd.body })
    gMails.unshift(mail)
    _saveMailsToStorage()
    return Promise.resolve()
}
function removeMail(mailId) {
    const mailIdx = gMails.findIndex(mail => mailId === mail.id)
    gMails.splice(mailIdx, 1)
    _saveMailsToStorage()
    return Promise.resolve()
}
function setStarred(mailId) {
    const mailIdx = gMails.findIndex(mail => mailId === mail.id)
    gMails[mailIdx].isStarred = !gMails[mailIdx].isStarred
    _saveMailsToStorage()
    return Promise.resolve()
}

function getMailById(id) {
    const mail = gMails.find(mail => id === mail.id)
    return Promise.resolve(mail)
}

function readMail(mailId) {
    const mail = gMails.find(mail => mailId === mail.id)
    mail.isRead = true
    _saveMailsToStorage()
    return Promise.resolve(mail)
}

function _saveMailsToStorage() {
    storageService.saveToStorage(MAILKEY, gMails)
}
