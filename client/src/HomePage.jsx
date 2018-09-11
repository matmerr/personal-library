import React from 'react';
import { connect } from 'react-redux';
import { userActions } from './actions/user.actions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import MenuAppBar from './MenuAppBar';

const styles = {
    addBook: {
        display: 'flex',
        alignItems: 'center',
    },
    addLabel: {
        paddingLeft: 5,
    }
};
 
class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }
 
    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }
 
    render() {
        const { classes, user, users } = this.props;
        return (
            <div>
                <MenuAppBar />
                <h1>Welcome {user.firstName}!</h1>
                <div className={classes.addBook}>
                <Button
                    mini
                    href="/addBook"
                    variant="fab"
                    color="primary"
                >
                    <AddIcon />
                </Button>
                <h1 className={classes.addLabel}>Add a Book</h1>
                </div>



                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="error"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
            </div>
        );
    }
}
 
function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}
 
const connectedHomePage = connect(mapStateToProps)(withStyles(styles)(HomePage));
export { connectedHomePage as HomePage };