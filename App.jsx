const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { Home } from './pages/Home.jsx'
import { MailApp } from './apps/mail/MailApp.jsx'
import { MailDetails } from './apps/mail/cmps/MailDetails.jsx'
import { NoteApp } from './apps/note/NoteApp.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { Footer } from './cmps/Footer.jsx'

export function App() {
    return (
        <Router>
            <AppHeader />
            <main className="main-app container mb-10">
                <Switch>
                    <Route component={MailApp} path="/mail/inbox/:compose?" />
                    <Route component={MailDetails} path="/mail/:mailId" />
                    <Route component={MailApp} path="/mail/" />
                    <Route component={NoteApp} path="/note" />
                    {/* <Route component={BookApp} path="/book" /> */}
                    {/* <Route component={AboutUs} path="/about" /> */}
                    <Route component={Home} path="/" />
                </Switch>
            </main>
            <Footer/>
        </Router>
    )
}

