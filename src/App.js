import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import SerachPage from './SerachPage'
import './App.css'


class BooksApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: [],
      query: "",
      shelf:"none"
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      // showSearchPage: true
    }
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
    console.log( this.query,"this query", this.state.query, "this.state.query")
    BooksAPI.search(this.query).then((books)=>{
      
      console.log("quer",this.query)
      this.setState({books})
      console.log("app.js", books)
    })
   
    //BooksAPI.search(this.state.query).then((books)=>{
    // this.state.query = "T";
    
  
}
updateQuery = (query)=>{
   this.setState({
     query : query
    })
};
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
          <Route exact path="/"  render={()=> (
            <BooksList books={this.state.books}/>
          )} />
            
          <Route exact path="/search"  render={() => (
            <SerachPage updateQuery={this.updateQuery} books = {this.books}/>
          )} />
          

          
      </div>
    
    )
  }
}

export default BooksApp
