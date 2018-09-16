import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { userActions } from './actions/user.actions';
import MenuAppBar from './MenuAppBar';
// import BookCard from './BookCard';

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
      ) : (
        <div>here</div>
      /*         books.items.map((book, i) =>
            <BookCard
                key={i}
                id={book.id}
                onClick={this.handleAddBook}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks.smallThumbnail}
            />
        ) */
      )}
    </div>
  );
}

class HomePage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    const { dispatch } = this.props;
    return () => dispatch(userActions.delete(id));
  }

  render() {
    const { classes, user, users } = this.props;

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

        <h3>All registered users:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.items
            && (
            <ul>
                {users.items.map((user) => {
                return (
                    <li key={user.id}>
                    {`${user.firstName} ${user.lastName}`}
                    {user.deleting ?
                        <em> - Deleting...</em>
                        : user.deleteError ?
                        (<span className="error">{` - ERROR: ${user.deleteError}`}</span>)
                        : (<span>{`  -  `}<a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>)}
                    </li>
                );
                })}
            </ul>
            )
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
    users,
  };
}

const connectedHomePage = connect(mapStateToProps)(withStyles(styles)(HomePage));
export { connectedHomePage as HomePage };
