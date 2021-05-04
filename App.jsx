const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { Home } from './pages/Home.jsx'

// Simple React Component
export function App() {
    return (
        <Router>
            {/* <Header/> */}
            <main>
                {/* <Switch> */}
                {/* <Route component={NoteApp} path="/note" />
                <Route component={MailApp} path="/mail/" />
                <Route component={BookApp} path="/book" />
            <Route component={AboutUs} path="/about" /> */}
                <Route component={Home} path="/" />
                {/* </Switch> */}
            </main>
            {/* <Footer/> */}
        </Router>
    )
}

