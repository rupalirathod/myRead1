import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
class SerachPage extends Component{
    constructor(props){
        super(props);
        this.state ={query: ''}
    }
    // static propTypes = {
    //     books : PropTypes.array.isRequired
    // }
    state = {
        query: ''
    }
    update = (event) => {
        this.props.updateQuery(event.target.value)
        this.setState({query: event.target.value})
        console.log("this is 1")
    }
    clearQuery = () =>{
        this.setState({query: ''})
    }
    render(){
        // const {books} = this.props
        // const {query} = this.state
        const books = this.props.books
        const query = this.state.query
        // let searchBooks = this.props.books.filter(
        //     (book) => {
        //         return (book.title.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1)  ;
        //     }
        // ) 
        // if (query){
        //     const match = new RegExp(escapeRegExp(query), 'i')
        //     searchBooks = books.filter((book)=> match.test(book.name))
        // }else{
        //     searchBooks = this.props.books
        // }
        // searchBooks.sort(sortBy('name'))
        console.log(this.state.query)
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick="">Close</a>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            type="text"   
                            placeholder="Search by title or author" 
                            value={this.state.query} 
                            onChange={this.update} 
                        />
                        
                    </div>
                </div>
                 {/* <div>
                    {searchBooks.length !== books.length && (
                        <div className = 'showing-books'>
                            <span>Now Showing {searchBooks.length} of {books.length}</span>
                            <button onClick={this.clearQuery}>Show All</button>
                        </div>
                    )}
                </div>   */}
                <div className="search-books-results">
                    <ol className="books-grid">
                   
                        {/* {this.props.books.map(book => (
                            <li key={book.id}>{book.title}</li>
                            // <li key = {book.id}>
                            //     <div className="book">
                            //         <div className="book-top">
                            //             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.url})` }}></div>
                            //             <div className="book-shelf-changer">
                            //                 <select>
                            //                     <option value="none" disabled>Move to...</option>
                            //                     <option value="currentlyReading">Currently Reading</option>
                            //                     <option value="wantToRead">Want to Read</option>
                            //                     <option value="read">Read</option>
                            //                     <option value="none">None</option>
                            //                 </select>
                            //             </div>
                            //         </div>
                            //         <div className="book-title">{book.title}</div>
                            //         <div className="book-authors">{book.author}</div>
                            //     </div>
                            // </li>
                        ))}  */}
                    </ol>
                </div>
            </div>
        )
    }
}
export default SerachPage