// import { eventBusService } from '../services/event-bus-service.js'

const { NavLink, withRouter } = ReactRouterDOM

// import { UserMsg } from './UserMsg.jsx'

export class AppHeader extends React.Component {

//   removeEvent;

  state = {
    carCount: 0
  }

  componentDidMount() {
    // Here we listen to the event that we emited, its important to remove the listener 
//     this.removeEvent = eventBusService.on('car-count', (carCount) => {
//       this.setState({ carCount })
//     })
  }

//   componentWillUnmount() {
//     this.removeEvent()
//   }

  render() {

    return (
      <header className="app-header">
        {/* <UserMsg /> */}
        <h1>Apsus</h1>
        <nav>
          <ul className="clean-list flex space-around align-items">
            <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
            <li><NavLink to="/note" >Notes</NavLink></li>
            <li><NavLink to="/mail" >Mails</NavLink></li>
            <li><NavLink to="/book" >Books</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
        {/* <p>
          Loaded cars count: {this.state.carCount}
        </p> */}

      </header>
    )
  }
}

// export const AppHeader = withRouter(_AppHeader)