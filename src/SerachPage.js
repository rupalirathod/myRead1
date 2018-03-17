import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
class SearchPage extends Component{
  
    static propTypes = {
        books : PropTypes.array.isRequired
    }
    state = {
        query: ''
    }
    updateQuery = (query)=>{
        this.setState({
            query: query.trim()
        })
    }
    clearQuery = () =>{
        this.setState({query: ''})
    }
    render(){
        const {books} = this.props
        const {query} = this.state
        let showingBooks 
        if (query){
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = books.filter((book)=> match.test(book.name))
        }else{
            showingBooks = this.props.contacts
        }
        // showingBooks.sort(sortBy('name'))
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
                            onChange={(event) => this.updateQuery(event.target.value)} 
                        />

                    </div>
                </div>
                {/* <div>
                    {showingBooks.length !== books.length && (
                        <div className = 'showing-books'>
                            <span>Now Showing {showingBooks.length} of {books.length}</span>
                            <button onClick={this.clearQuery}>Show All</button>
                        </div>
                    )}
                </div> */}
                <div className="search-books-results">
                    <ol className="books-grid">
                        {/* {showingBooks.map(book => (
                            <li key = {book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.url})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.author}</div>
                                </div>
                            </li>
                        ))} */}
                        <div>hi</div>
                    </ol>
                </div>
            </div>
        )
    }
}
export default SearchPage