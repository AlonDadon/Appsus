// import { eventBusService } from '../services/event-bus-service.js'

const { NavLink, withRouter } = ReactRouterDOM

// import { UserMsg } from './UserMsg.jsx'

export class AppHeader extends React.Component {

  render() {

    return (
      <header className="app-header flex align-center">
        {/* <UserMsg /> */}
        <nav className="nav-header container flex align-center">
          <h1 className="logo">Apsus</h1>
          <ul className="nav-list clean-list flex align-center">
            <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
            <li><NavLink to="/note" activeClassName="active-nav" >Notes</NavLink></li>
            <li><NavLink to="/mail" activeClassName="active-nav" >Mails</NavLink></li>
            <li><NavLink to="/book" activeClassName="active-nav">Books</NavLink></li>
            <li><NavLink to="/about" activeClassName="active-nav">About</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
}

