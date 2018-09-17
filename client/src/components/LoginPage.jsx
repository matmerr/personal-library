import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { userActions } from '../actions/user.actions';
import MenuAppBar from './MenuAppBar';
import BookIcon from './BooksIcon';

const styles = {
  form: {
    display: 'grid',
    paddingLeft: '100px',
    width: '50%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Satisfy',
    fontSize: '5em',
    fontWeight: '100',
    margin: '10px',
  },
  info: {
    fontSize: '30px',
    fontFamily: 'Open Sans',
    margin: 0,
  },
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false,
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
    const { loggingIn, classes } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div>
        <MenuAppBar />
        <div className={classes.content}>
          <BookIcon />
          <form className={classes.form} name="form" onSubmit={this.handleSubmit}>
            <h1 className={classes.title}>Start Blogging Your Books</h1>
            <p className={classes.info}>Collect all your books in one place to view old favorites and to blog about the best parts.Add books as your read and watch your library grow.</p>
            <TextField
              label="Username"
              margin="normal"
              onChange={this.handleChange}
              name="username"
            />
            {submitted && !username
                        && <div>Username is required</div>
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
            {submitted && !password
                        && <div>Password is required</div>
                    }
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >Login
            </Button>
            {loggingIn && <CircularProgress size={20} /> }
            <Button href="/register">Register</Button>
            <div />
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn,
  };
}

const connectedLoginPage = connect(mapStateToProps)(withStyles(styles)(LoginPage));
export { connectedLoginPage as LoginPage };
