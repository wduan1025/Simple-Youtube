import './App.css';
import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'
import lodash from 'lodash'

// Create new component. This component should produce some html
const API_KEY =process.env.REACT_APP_YOUTUBE_API_KEY;
console.log(API_KEY);
// const API_KEY = "AIzaSyC7-cyDhwFarMGtL0j4AU0uath3GZxpmLE";
// alert();
class App extends Component{
  constructor(props){
    super(props);
    this.state = {videos:[]}; //it is an array
    this.selectedVideo = null;
    this.videoSearch("");
  }
  videoSearch(term){
    YTSearch({key:API_KEY, term:term}, (data) =>{
      this.setState({videos:data, selectedVideo:data[0]});
    })
  }
  render(){
    const videoSearch = lodash.debounce(term=>{this.videoSearch(term)}, 300)
    return <div>
              <SearchBar onSearchTermChange={videoSearch}/>
              <VideoDetail video={this.state.selectedVideo}/>
              <VideoList
                onVideoSelect={video=>{this.setState({selectedVideo:video})}}
                videos={this.state.videos}/>
           </div>;
    }
}

export default App;
