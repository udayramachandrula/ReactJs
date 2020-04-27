import React from 'react'
import { Link } from 'react-router-dom'

export const FormErrors = ({ formErrors }) =>
    <div className='formErrors'>
        {
            formErrors.length > 0 ? formErrors : ''
        }
    </div>

export const AdminDashboard = () =>
    <div className="adminDiv">
        <h1>Welcome to Admin Dashboard</h1>
        <button type="submit" className="btn btn-primary">
            <Link to="/login">Back to login</Link>
        </button>

    </div>



class LoginComponent extends React.Component {
    constructor() {
        super();
        this.onLogin = this.onLogin.bind(this);
        this.validate = this.validate.bind(this);
        this.getData = this.getData.bind(this);
        this.state = {
            users: [{
                user_name: "uday",
                password: "Uday@123"
            }, {
                user_name: "Sagar",
                password: "Sagar@123"
            }],
            formErrors: {
                errorMsg: ''
            },
            currentUserName: '',
            currentPassword: ''

        }

    }

    componentDidUpdate() {
        let users = this.state.users;
        var userCheck;
        let allUsers = JSON.parse(localStorage.getItem('users'));
        if (allUsers !== null) {
            allUsers.map(function (all_user) {
                userCheck = users.filter((user) =>
                    user.user_name === all_user.u_name && user.password === all_user.pass
                )
                console.log(userCheck);
                if (userCheck.length === 0) {
                    if (all_user.u_name.length > 0 && all_user.pass.length > 0) {
                        users.push({
                            user_name: all_user.u_name,
                            password: all_user.pass
                        })

                    }
                }
                return users;
            })
        }
    }

    getData() {
        let users = this.state.users;
        let u_name = localStorage.getItem('user_name');
        let pass = localStorage.getItem('password');
        if (u_name.length > 0 && pass.length > 0) {
            users.push({
                user_name: u_name,
                password: pass
            })

        }
        this.setState({
            users: users
        })
    }

    validate(e) {
        let users = this.state.users
        // let formerror = this.state.formErrors;
        let errormsg = ''
        var matchedUsers = users.filter(user =>
            user.user_name === this.state.currentUserName && user.password === this.state.currentPassword)

        if (matchedUsers.length === 0) {
            console.log("not mathed")
            errormsg = "Username or password is incorrect"

        }
        return errormsg;
    }


    handleUserInput = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    onLogin = (event) => {
        event.preventDefault();
        const error_msg = this.validate();
        var formerrors = this.state.formErrors;
        if (error_msg.length > 0) {
            formerrors.error_msg = error_msg;
            this.setState({
                formErrors: formerrors
            })
            var errdiv = document.getElementById("errdiv");
            errdiv.innerHTML = error_msg;
        } else {
            this.props.history.push('/home');
        }
    }

    render() {
        return (
            <div className="container">
                <h2>Login here </h2>

                <form onSubmit={this.onLogin} className="container">
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
                                    onChange={this.handleUserInput.bind(this)}
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
                                    onChange={this.handleUserInput.bind(this)}
                                    placeholder="Password"></input>
                            </div>
                        </div>
                    </div>
                    <div id="errdiv" className="error-css">

                    </div>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <input type="submit" value="Login" className="btn btn-info btn-block"></input>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                ><Link to="/register">Click to register</Link>
                                </button>
                            </div>
                        </div>
                    </div>


                </form>
            </div >
        )
    }
}

export default LoginComponent;