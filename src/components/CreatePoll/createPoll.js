import React, { Component } from 'react'
import SideDrawer from '../UserDetails/sideDrawer'

export default class createPoll extends Component {

    state={
        ques:"",
        options:[]
    }

    add_options=(e)=>{
        e.preventDefault();
        this.setState({
            ques:this.ques.value,
            options:[...this.state.options,this.option.value]
        })

        this.option.value=''

    }

    delete = (opt,e)=>{
        e.preventDefault();
        this.setState({
            options:this.state.options.filter(new_opt => new_opt!==opt)
        })

        
    }

    render() {

        console.log(this.state.options)

        let i=0;
        let options_html=this.state.options.map(opt=>{
            i++;
            return(
                <span style={{margin:"1.5px"}} key={i} class="tag is-danger is-large">
                    {opt}
                    <button onClick={e=> this.delete(opt,e)} class="delete"></button>
                </span>
            )
        })

        return (

            <div className="dashboard-wrapper">
                <header class="header columns is-desktop">
                    <div class="header--side-menu is-3 column">
                        <SideDrawer />
                    </div>

                    <div class="dashboard-add-main-content is-9-desktop is-full column">
                        <div class="add-wrapper">
                            <h2 class="is-size-1 has-text-weight-bold">Let's Go</h2>
                            <form action="">
                                <div className="poll">
                                    <label for="" class="is-size-3 has-text-weight-semibold">
                                        What's it About :
                                    </label>
                                    <input ref={ele=>this.ques=ele} type="text" />
                                    <h2 class="is-size-3 has-text-weight-semibold">Options :</h2>
                                    <div class="options-wrapper">
                                        <input ref={ele=>this.option=ele} type="text" />
                                        <button onClick={this.add_options}>
                                            <i class="fas fa-plus-circle"></i>
                                        </button>
                                    </div>

                                    <div className="options">
                                        {options_html}
                                    </div>

                                    
                                </div>
                            </form>

                            <div class="dashboard-add-buttons">
                                <button onClick={()=>this.props.history.push('/dashboard')} class="button is-default is-rounded">
                                    <i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Cancel</button>
                                <button class="button is-default is-rounded is-danger has-text-weight-semibold">
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
