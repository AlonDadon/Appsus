const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { Home } from './pages/home.jsx'

// Simple React Component
export function App() {
    return (
        <Router>
            {/* <Header/> */}
            <main>
                {/* <Switch> */}
                {/* <Route component={NoteApp} path="/Note" />
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

