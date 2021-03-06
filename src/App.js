import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route, Link } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import HomePage from './HomePage';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  onUpdateBookStatus = (book, shelf) => {
    BooksAPI.update(book,shelf);
    const updatedBooks = this.state.books.map(b => {
      if (b.id === book.id) {
        b.shelf = shelf;
      }
      return b;
    });

    this.setState({
      books: updatedBooks,
    });
    
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Route path='/search' render={() => (
            <SearchBooks 
              books={this.state.books}
              onUpdateBookStatus={this.onUpdateBookStatus}
            />
          )} />
          <Route exact path='/' render={() => (
            <HomePage 
            books={this.state.books}
            onUpdateBookStatus = {this.onUpdateBookStatus}
            />
          )} />
          <Link 
            to='/search'
            className="open-search"
          >
            <button></button></Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
