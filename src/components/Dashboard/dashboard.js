import React, { Component } from 'react'
import SideDrawer from '../UserDetails/sideDrawer'
import EmptyDash from './emptyDash'
import YourPolls from './yourPolls'

export default class dashboard extends Component {

    state={
        polls:[]
    }


    render() {
        return (
            <div className="dashboard-wrapper">
            <header class="header columns is-desktop">
                <div class="header--side-menu is-3 column">
                    <SideDrawer/>
                </div>

                
                <div class="dashboard-content is-9-desktop is-full column">
                    {this.state.polls.length?<EmptyDash/>:<YourPolls/>}
                </div>

            </header>
            </div>
        )
    }
}

