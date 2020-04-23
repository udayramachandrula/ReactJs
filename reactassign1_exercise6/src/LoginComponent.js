import React from 'react'
import { Link } from 'react-router-dom'

const FormErrors = ({ formErrors }) =>

    <div className='formErrors'>
        { 
            formErrors.length > 0 ? formErrors : ''
        }
    </div>

  


class LoginComponent extends React.Component {
    constructor() {
        super();
        this.onLogin = this.onLogin.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.state = {
            users: [{
                user_name: "uday",
                password: "uday@123"
            }, {
                user_name: "sagar",
                password: "sagar@456"
            }],
            formErrors: {
               errorMsg:''
            },
            currentUserName: '',
            currentPassword: ''

        }

    }

    validate(e) {
       // debugger
       // e.preventDefault();
         let users = this.state.users
        // let formerror = this.state.formErrors;
        let errormsg=''
        var matchedUsers = users.filter(user =>
            user.user_name === this.state.currentUserName && user.password === this.state.currentPassword)
        
        if(matchedUsers.length===0){
            errormsg="Username or password is incorrect"
            
        }
        return errormsg;
    }


    handleUserInput(e) {
        debugger;
        e.preventDefault();
        //let target = e.target;
        const value = e.target.value;
        const name = e.target.name;

        this.setState({[name]: value});
       
    }

    onLogin(event){
        event.preventDefault();
        const error_msg = this.validate();
        let {formErrors}= this.state;
        if(error_msg.length>0){

            formErrors.error_msg=error_msg;
            this.setState=({
                formErrors: formErrors

            })
            alert(error_msg);
        }
        else
        alert("SuccessFully loged in............")
    }

    render() {
        return (
            
            <div className="container" >
                <div><h2>Yash Technologies </h2></div>

                

                <form onSubmit={this.onLogin} className="container">
                <h4> Login here.. </h4>
                
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <label >Enter User Name : </label>
                                <input type="text"
                                    name="currentUserName"
                                    id="user_name"
                                    value={this.state.currentUserName}
                                    className="form-control input-sm"
                                    placeholder="User Name"
                                    onChange={(event) => this.handleUserInput(event)}
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <label >Enter Password : </label>
                                <input type="password"
                                    name="currentPassword"
                                    id="password"
                                    value={this.state.currentPassword}
                                    className="form-control input-sm"
                                    onChange={(event) => this.handleUserInput(event)}
                                    placeholder="Password"></input>
                            </div>
                        </div>
                    </div>
                    <div className="error-css panel panel-default">
                        <FormErrors formErrors={this.state.formErrors.errorMsg} />
                    </div>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <input type="submit"  value="Login" className="btn btn-info btn-block"></input>
                            </div>
                        </div>
                    </div>
                    

                </form>
                <div className="btn btn-info">
                        <Link to="/register">Click to register</Link>
                    </div>


            </div >
            
        )
    }
}

export default LoginComponent;