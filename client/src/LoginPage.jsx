import React from 'react';
import { connect } from 'react-redux';
import { userActions } from './actions/user.actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
 
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
 
        // reset login status
        this.props.dispatch(userActions.logout());
 
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
 
    handleSubmit(e) {
        e.preventDefault();
 
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }
 
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div>
                <h2>Books Your Way</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <TextField
                        label="Username"
                        margin="normal"
                        onChange={this.handleChange}
                        name="username"
                    />
                    {submitted && !username &&
                        <div>Username is required</div>
                    }
                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        onChange={this.handleChange}
                        name="password"
                    />
                    {submitted && !password &&
                        <div>Password is required</div>
                    }
                    <Button type="submit">Login</Button>
                    {loggingIn && <CircularProgress size={20} /> }
                    <Button href="/register">Register</Button>
                </form>
            </div>
        );
    }
}
 
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
 
const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };