import React, { Component } from 'react'

export default class yourPolls extends Component {

    state={
        polls:[]
    }

    render() {
        return (
            <div>
                <div class="polls-with-data">
                    <div class="dashboard-data-poll">
                        <div class="">
                            <h2 class="is-size-4 has-text-weight-semibold">What is your Favourite Colour ?</h2>
                            <p class="date is-size-7">27 June 2019</p>
                        </div>
                        <button class="button view-poll is-rounded">View</button>
                    </div>
                    <div class="dashboard-data-poll">
                        <div class="">
                            <h2 class="is-size-4 has-text-weight-semibold">What is your Favourite Colour ?</h2>
                            <p class="date is-size-7">27 June 2019</p>
                        </div>
                        <button class="button view-poll is-rounded">View</button>
                    </div>
                    <div class="dashboard-data-poll">
                        <div class="">
                            <h2 class="is-size-4 has-text-weight-semibold">What is your Favourite Colour ?</h2>
                            <p class="date is-size-7">27 June 2019</p>
                        </div>
                        <button class="button view-poll is-rounded">View</button>
                    </div>
                </div>
            </div>
        )
    }
}
