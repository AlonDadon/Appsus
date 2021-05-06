const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { Home } from './pages/Home.jsx'
import { MailApp } from './apps/mail/MailApp.jsx'
import { MailDetails } from './apps/mail/cmps/MailDetails.jsx'
import { NoteApp } from './apps/note/NoteApp.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'

export function App() {
    return (
        <Router>
            <AppHeader />
            <main>
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
            {/* <Footer/> */}
        </Router>
    )
}

