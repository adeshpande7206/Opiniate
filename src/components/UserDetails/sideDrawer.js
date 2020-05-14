import React, { Component } from 'react'
import User_Detail from './userDetail'
import '../app.scss'


export default class sideDrawer extends Component {

    state={
        contacts:[]
    }

    add_contact = (e) =>{
        e.preventDefault()
        let detail = {
            name:this.name.value,
            email:this.email.value
        }

        this.setState({
            contacts:[...this.state.contacts,detail]
        })

        this.name.value=''
        this.email.value=''
    }

    hamburger=(e)=>{
        e.preventDefault()
        const sidemenu = document.querySelector(".header--side-menu");
        const userDetail = document.querySelector(".user");
        const contacts = document.querySelector(".contacts div");

        sidemenu.classList.toggle("sidemenu-hamburger");
        userDetail.classList.toggle("user-hamburger");
    }

    delete=(con,e)=>{
        e.preventDefault()
        this.setState({
            contacts:this.state.contacts.filter(new_con=> new_con.name!=con.name)
        })
    }
    

    render() {

        let contact_html=this.state.contacts.map(con=>{
            return(
                <div class="user-contact-detail">
                    <img src={require('../../images/dashboard-user-icon.png')} alt="user-icon"></img>
                    <div>
                        <h2 class="is-size-6 has-text-weight-semibold">{con.name}</h2><a href="#">{con.email}</a>
                        <a onClick={e=>this.delete(con,e)} class="has-text-centered is-pulled-right delete is-medium"></a>
                    </div>
                </div>
            )
        })

        return (
            <div class="contact-details">

                <div class="hamburger dashboard is-hidden-desktop">
                    <img onClick={this.hamburger} src={require('../../images/arrow-hamburger.png')} alt="arrow-hamburger" />
                </div>

                <div class="personal-details">
                <User_Detail/>
                <p class="has-text-weight-semibold is-size-5">Your People</p>
                <div class="add-contact">
                    <img onClick={this.add_contact} src={require('../../images/dashboard-add-btn.svg')} alt="add-btn" />
                    <div class="input-details">
                    <input ref={ele=>this.name =ele} class="name" type="text" placeholder="Name"></input>
                    <input ref={ele=>this.email =ele} class="num" type="email" placeholder="Email"></input>
                    </div>
                </div>
                </div>
                <div class="contacts">
                    <div>{contact_html}</div>
                </div>
            </div>
        )
    }
}
