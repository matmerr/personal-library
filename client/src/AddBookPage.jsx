import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import { bookActions } from './actions/books.actions';
import BookCard from './BookCard';
import MenuAppBar from './MenuAppBar';

const styles = {};

class AddBookPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerms: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerms: event.target.value });
  }

  handleSearch() {
    const { searchTerms } = this.state;
    const { dispatch } = this.props;
    if (searchTerms !== '') {
      dispatch(bookActions.search(searchTerms));
    }
  }

  handleAddBook(bookID) {
    const { dispatch, user } = this.props;
    if (bookID) {
      const updatedUser = { ...user, books: [bookID] };
      dispatch(bookActions.addBook(updatedUser));
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  render() {
    const { searching, books } = this.props;
    const { searchTerms } = this.state;
    return (
      <div>
        <MenuAppBar />
        <h1>Add a Book</h1>
        <TextField
          id="search"
          label="Search for a book"
          type="search"
          margin="normal"
          value={searchTerms}
          onChange={this.handleChange}
          autoFocus
          onKeyPress={this.handleKeyPress}
        />
        <IconButton mini variant="fab" color="primary" onClick={this.handleSearch}>
          <SearchIcon />
        </IconButton>

        {books && books.items.map((book, i) => (
          <BookCard
            key={i}
            id={book.id}
            onClick={this.handleAddBook}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks.smallThumbnail}
          />
        ))}

        {searching && <CircularProgress size={20} /> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  const { searching, books } = state.books;
  return {
    searching,
    books,
    user,
  };
}

const connectedAddBookPage = connect(mapStateToProps)(withStyles(styles)(AddBookPage));
export { connectedAddBookPage as AddBookPage };
