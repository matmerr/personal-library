import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { userActions } from './actions/user.actions';
import MenuAppBar from './MenuAppBar';

const styles = {
  addBook: {
    display: 'flex',
    alignItems: 'center',
  },
  addLabel: {
    paddingLeft: 5,
  },
};

function Library(props) {
  const { books } = props;
  return (
    <div>
      {(books.length === 1) ? (
        <div>{books}</div>
      ) : (books.map(book => (<div>{book}</div>)))
      }
    </div>
  );
}

Library.propTypes = {
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
};

class HomePage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch(userActions.getCurrent);
  }

  handleDeleteUser(id) {
    const { dispatch } = this.props;
    return () => dispatch(userActions.delete(id));
  }

  render() {
    const { classes, user } = this.props;

    return (
      <div>
        <MenuAppBar />
        <h1>{`Welcome ${user.firstName}!`}</h1>
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
        {user.books && <Library books={user.books} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    user,
  };
}

const connectedHomePage = connect(mapStateToProps)(withStyles(styles)(HomePage));
export { connectedHomePage as HomePage };
