import React from 'react';
import {connect} from 'react-redux'
import {selectBook} from '../actions/index.js';
import {bindActionCreators} from 'redux';

class Booklist extends React.Component{

    renderList(){
        return this.props.books.map( book=>{
            return <li onClick={ ()=>this.props.selectBook(book)}
                key={book.title} className="list-group-item">{book.title}</li>
        })
    }
 
    render(){
        return <ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
    }
}

function mapStateToProps(state){
    //Whatever is returned will show up as props inside BookList
    return{
        books: state.books
    }
}

//Anything returned from this fn will end up as a props of BookList Container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
