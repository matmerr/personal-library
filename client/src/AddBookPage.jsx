import React from 'react';
import { connect } from 'react-redux';
import { bookActions } from './actions/books.actions';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import BookCard from './BookCard';

const styles = {};

class AddBookPage extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            searchTerms: "",
        };
 
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({ searchTerms: event.target.value });
    }
 
    handleSearch(){
        const { searchTerms } = this.state;
        const { dispatch } = this.props;
        if (searchTerms !== ""){
            dispatch(bookActions.search(searchTerms));
        }
    }

    render() {
        const { searching, books } = this.props;
        const { searchTerms } = this.state;

        return (
            <div>
                <h1>Add a Book</h1>
                <TextField
                    id="search"
                    label="Search for a book"
                    type="search"
                    margin="normal"
                    value={searchTerms}
                    onChange={this.handleChange}
                />
                <IconButton mini variant="fab" color="primary" onClick={this.handleSearch}>
                    <SearchIcon />
                </IconButton>

                {books && books.items.map((book) =>
                    <BookCard
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        image={book.volumeInfo.imageLinks.thumbnail}
                    />
                )}

                {searching && <CircularProgress size={20} /> }
            </div>
        );
    }
}
 
function mapStateToProps(state) {
    const { searching, books } = state.books;
    return {
        searching,
        books
    };
}
 
const connectedAddBookPage = connect(mapStateToProps)(withStyles(styles)(AddBookPage));
export { connectedAddBookPage as AddBookPage };