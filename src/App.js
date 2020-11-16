import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {

    state = {
        isLoggedIn: false
    }
    loginHandler = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to='/' exact activeClassName={'navActive'}
              >
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink
                  to="/about"

              >About</NavLink>
            </li>
              <li>
                  <NavLink to='/cars'
                  >Cars</NavLink>
              </li>
          </ul>
        </nav>

        <hr/>
        <div style={{ textAlign: 'center '}}>
            <h3>Is logged in {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</h3>
            <button
                onClick={this.loginHandler}
            >Login
            </button>
        </div>

        <Switch>
            <Route path="/" exact render={() => <h1>Home Page</h1>} />
            { this.state.isLoggedIn ?  <Route path="/about" component={About} /> : null}
            {/*<Route path="/about" component={About} />*/}
            <Route path="/cars/:name" component={CarDetail}/>
            <Route path="/cars" component={Cars}/>

            {/*<Redirect from={'/about'} to={'/cars'} />*/}
            <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />
        </Switch>
          {/*<About />*/}

        {/*<Cars />/!**!/*/}
      </div>
    );
  }
}

export default App
