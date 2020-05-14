import React, { Component } from 'react'

export default class emptyDash extends Component {
    render() {
        return (
            <div>
                <div class="button-mobile">
                    <button class="button has-text-weight-semibold is-medium is-hidden-tablet is-danger is-rounded">
                        Create !
                    </button>
                </div>
                <div class="header--main-content-mobile is-hidden-tablet is-full column"></div>
                <div class="header--main-content is-8-desktop is-hidden-mobile is-full column">
                    <div class="new-poll-wrapper">
                        <h2 class="is-capitalized is-size-3 has-text-weight-bold">
                            it's so lonely in here
                        </h2>
                        <p class="is-size-4">Make a new Poll</p>
                        <button class="button has-text-weight-semibold is-medium is-danger is-rounded">
                            Create !
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
