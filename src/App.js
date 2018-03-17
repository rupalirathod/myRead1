import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import SerachPage from './SerachPage'
import './App.css'


class BooksApp extends Component {
  state = {
    screen: 'search',
    books: [],
    // books : [
    //   {id : 1, name: "yahoo" , author: "rupali", title:"title", url:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"},
    //   {id : 2, name: "comehere", author: "rupali", title:"title1", url:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api" },
    //   {id : 3, name: "comehere2", author: "rupali", title:"title2",  url:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api" }
    // ],
    value:"none",
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  // moveBook = (book) => {
  //   this.setState((state) => ({
  //     // books: state.books.filter((b) => b.id !== book.id)
  //     books: state.books.update((b)=> b.shelf)
  //   }))
  //   BooksAPI.update(book, shelf)
  // }
  
  render() {
    
    return (
     <div>
          {/* <BooksList onSelect={this.moveBook} books={this.state.books}/> */}
          {this.state.screen === 'list' && (
            <BooksList books={this.state.books}/>
          )}
          {this.state.screen === 'search' && (
            <SerachPage books={this.state.books} />
          )}

      </div>
    
    )
  }
}

export default BooksApp
