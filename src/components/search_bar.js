import React, {Component} from 'react'

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term:''};
  }
  render(){
    return (
      <div className="search-bar">
          <p className="logo">Simple Youtube</p>
          <input
            type="text" className="form-control"
            value = {this.state.term}
            onChange = {event=>this.onInputChange(event.target.value)}/>
      </div>
    )
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
