import React, { Component } from 'react'
import { Switch, Redirect, BrowserRouter, Route } from 'react-router-dom'
// import Raven from 'react-raven';

// Styles
import 'NODE_MODULES/semantic-ui-css/semantic.min.css'
import 'LESS/global.less'

// Containers / Views
import Dashboard from '../Dashboard'
import Unknown from '../Unknown'

// Components
import { Container, Grid } from 'semantic-ui-react'
import { Nav, AdminSidebar } from 'COMPONENT'

// Includes
import GlobalStateModel from './GlobalState'
import Events from 'MOD/Events'
import Merge from 'MOD/Merge'
import Pulse from 'MOD/Pulse'


/**
 * @class App
 * @description Base View Controller
 * - Global UI State handler & constructor
 * - Root layout & layer
 * - Router base
 */
export default class App extends Component {
  constructor(props) {
    super(props);

    // import base global state object definition
    this.state = GlobalStateModel;

    // bind upgraded React setState handler for props pass-thru
    this.state.setGlobalState = this.setGlobalState.bind(this);

    // init Pulse
    this.state.Pulse = Pulse;
    this.state.Pulse.start();

    // bind scoped events
    Events(data => this.setGlobalState(data) );
  }

  // global state handler ( standard props => child ), Merge is used to ensure full state change event is triggered on deeply nested props
  setGlobalState(data, cb=false) {
    this.setState(Merge(this.state, data), () => { console.log('[GlobalState] :: ', data); if(cb !== false) cb() });
  }

  // catch errors
  componentDidCatch(error, info) {
    console.log('[ APP ERROR ] :: ', error, info);
  }

  render() {
    return (
      <BrowserRouter>
        <Container fluid className="clearall bg-grey">
          <Nav {...this.state} />
          <Grid columns="2" className="clearall">
            <Grid.Row className="clearall">
              <Grid.Column stretched mobile="2" tablet="4" computer="3" className="clearall">
                <AdminSidebar {...this.state} />                  
              </Grid.Column>
              <Grid.Column stretched mobile="14" tablet="12" computer="13" className="clearall">
                <div className="view">
                  <Switch>
                    <Route exact path="/" render={props => <Dashboard {...this.state} /> } />
                    <Route exact path="/add" render={props => <div>TODO: create some 'add' component</div> } />
                    <Route exact path="/list" render={props => <div>TODO: create some 'list' component</div> } />
                    
                    <Route render={props => <Unknown /> } />
                  </Switch>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {/* {document.location.href.match(/takealot/gi) && <Raven dsn="" />} */}
        </Container>
      </BrowserRouter>
    )
  }
}