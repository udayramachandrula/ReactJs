import React from 'react'
import { Link } from 'react-router-dom'

export const FormErrors = ({ formErrors }) =>
    <div className='formErrors'>
        {
            formErrors.length > 0 ? formErrors : ''
        }
    </div>

class RegisterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this)
        this.register = this.register.bind(this);
        this.state = {
            first_name: '',
            last_name: '',
            user_name: '',
            password: '',
            formErrors: {
                first_name: '',
                last_name: '',
                user_name: '',
                password: '',
            },
            first_nameValid: false,
            last_nameValid: false,
            user_nameValid: false,
            passwordValid: false,
            formValid: false

        }
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => {
                this.validateField(name, value)
            });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let first_nameValid = this.state.first_nameValid;
        let last_nameValid = this.state.last_nameValid;
        let user_nameValid = this.state.user_nameValid;
        let passwordValid = this.state.passwordValid;
        switch (fieldName) {
            case 'first_name':
                first_nameValid = value.length >= 3;;
                fieldValidationErrors.first_name = first_nameValid ? '' : ' First name should be greater that 3 letter';
                break;
            case 'last_name':
                last_nameValid = value.length >= 3;;
                fieldValidationErrors.last_name = last_nameValid ? '' : 'Last name should be greater that 3 letter';
                break;
            case 'user_name':
                user_nameValid = value.length >= 3;;
                fieldValidationErrors.user_name = user_nameValid ? '' : 'User name should be greater that 3 letter';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            first_nameValid: first_nameValid,
            last_nameValid: last_nameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.first_nameValid && this.state.passwordValid });
    }

    register(event) {
        event.preventDefault();
        var user={
            u_name:this.state.user_name,
            pass:this.state.password
        }
        let userarr=JSON.parse(localStorage.getItem('users'));
        if(userarr===null){
            userarr=[]
        }
        userarr.push(user);
        localStorage.setItem('users',JSON.stringify(userarr));
        this.setState({
            first_name: '',
            last_name: '',
            user_name: '',
            password: ''
        })
    
        document.getElementById('successmsg').innerHTML = "Registration successful !!! you can log in now "

    }

    render() {
        return (
            <div className="container">
                <h2>Registration Form</h2>

                <form onSubmit={this.register} className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <label >Enter First Name : </label>
                                <input type="text"
                                    name="first_name"
                                    value={this.state.first_name}
                                    id="first_name"
                                    className="form-control input-sm"
                                    placeholder="First Name"
                                    onChange={(event) => this.handleUserInput(event)}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="error-css panel panel-default">
                        <FormErrors formErrors={this.state.formErrors.first_name} />
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <label >Enter Last Name : </label>
                                <input type="text"
                                    name="last_name"
                                    value={this.state.last_name}
                                    id="last_name"
                                    className="form-control input-sm"
                                    placeholder="Last Name"
                                    onChange={(event) => this.handleUserInput(event)}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="error-css panel panel-default">
                        <FormErrors formErrors={this.state.formErrors.last_name} />
                    </div>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <label >Enter User Name : </label>
                                <input type="text"
                                    name="user_name"
                                    value={this.state.user_name}
                                    id="user_name"
                                    className="form-control input-sm"
                                    placeholder="User Name"
                                    onChange={(event) => this.handleUserInput(event)}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="error-css panel panel-default">
                        <FormErrors formErrors={this.state.formErrors.user_name} />
                    </div>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <label >Enter Password : </label>
                                <input type="password"
                                    name="password"
                                    value={this.state.password}
                                    id="password"
                                    className="form-control input-sm"
                                    placeholder="Password"
                                    onChange={(event) => this.handleUserInput(event)}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="error-css panel panel-default">
                        <FormErrors formErrors={this.state.formErrors.password} />
                    </div>

                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2">
                            <div className="form-group">
                                <button type="submit"
                                    className="btn btn-primary"
                                    disabled={!this.state.formValid}>Sign up</button>
                            </div>
                        </div>
                        <div id="successmsg" className="successmsg">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">
                                    <Link to="/login">Click to login</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </div >
        )
    }
}

export default RegisterComponent;