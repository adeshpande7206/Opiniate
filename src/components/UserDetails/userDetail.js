import React from 'react'

function userDetail() {
    return (
        <div class="user">
                <img
                  src={require('../../images/dashboard-sample-image.jpg')}
                  alt="sample-image"
                />
                <div class="info-wrapper">
                  <h2 class="is-size-5 has-text-weight-bold">Ashutosh Panda</h2>
                  <a href="#">Logout</a>
                </div>
        </div>
    )
}

export default userDetail
