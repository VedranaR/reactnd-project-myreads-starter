import React, { Component } from 'react';
import BookShelf from './BookShelf';

class HomePage extends Component {
    state = {  }
    render() { 
        const {books} = this.props;
        const {onUpdateBookStatus} = this.props;
        return ( 
            <div className="list-books-content">
              <div>
                <BookShelf 
                    title = "Currently Reading"
                    books={books.filter(book => book["shelf"] === "currentlyReading"
                    )}
                    onUpdateBookStatus = {onUpdateBookStatus}
                />
                <BookShelf 
                    title = "Want To Read"
                    books={books.filter(book => book["shelf"] === "wantToRead"
                    )}
                    onUpdateBookStatus = {onUpdateBookStatus}
                />
                <BookShelf 
                    title = "Read"
                    books={books.filter(book => book["shelf"] === "read"
                    )}
                    onUpdateBookStatus = {onUpdateBookStatus}
                />
              </div>
            </div>

         );
    }
}
 
export default HomePage;