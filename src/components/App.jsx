/*
  [Key takeaways] from our whiteboarding (Daniel and Lancy)
  - We write scripts in ES6
  - Babel (translates from ES6 to ES5): stopped running sometimes, need to double check its folder (components)
  - A diagram of how the following 8 scripts are linked
    index.html (needs to reference all working scripts), index.js (DOM to pass App.js and searchYouTube.jsx)
    App.jsx: where 'state' resides
      component: VideoList.jsx (videos), VideoListEntry.jsx (video)
      component: VideoPlayer.jsx
      component: Search.jsx (used some help from reference script, of a student's from 2016)
    searchYouTube.jsx (GET live data from YouTube)
*/

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={exampleVideoData}/></h5></div>
//       </div>
//     </div>
//   </div>
// );


// Refactor App into ES6's class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //videos' data is updated with live data, once Ajax request is done
      videos: [], //videos: exampleVideoData,
      video: exampleVideoData[0],  //Initial value for video player; will be changed by click
      //done: false
      //options: {
      q: 'cartoon',
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
      //}
    }
  }
  //Use this method (lifecycle hook), to render your app with live videos from searchYouTube()
  componentDidMount() {
    //[Ref] Try using React to debug, in Chrome console
    //debugger;
    //var youTubeOptions = this.state.options;
    var youTubeOptions = {
      q: this.state.q,
      maxResults: this.state.maxResults,
      key: this.state.key,
      part: this.state.part,
      type: this.state.type,
      videoEmbeddable: this.state.videoEmbeddable
    };
    //console.log(youTubeOptions);
    //debugger;
    // [Note] The use of 'context' here
    var context = this;
    //Live invoke the function below
    this.props.searchYouTube(youTubeOptions, function(data) {  //Pass searchYouTube() to 'this' (might not work)
      context.setState({videos: data, video: data[0]});
      //context.setState({video: data[0]});
    });
  }
  //Added this function, based on reference script (github.com/ajgrande924)
  handleSearchClick(text) {
    var context = this;
    this.setState({q: text});  //Simplified for this line
    var youTubeOptions = {
      q: this.state.q,
      maxResults: this.state.maxResults,
      key: this.state.key,
      part: this.state.part,
      type: this.state.type,
      videoEmbeddable: this.state.videoEmbeddable
    };
 
    this.props.searchYouTube(youTubeOptions, function(data){
      context.setState({videos:data, video: data[0]});
    });
  }
  render() {
    return (
      <div>
        {/* ._.debounce() is a method from lodash library, similiar as setTimeOut()  */}
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
          {/* [Note] Understand the use of 'bind' here */}
            <Search handleSearchClick={_.debounce(this.handleSearchClick.bind(this), 500)}/>
            {/* <div><h5><em>search</em> view goes here</h5></div> */}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.video}/> </h5></div>
          </div>
          
          <div className="col-md-5">
            {/* For video title click: use React's method setState() to get App's state
                [Note] setState (as below) is a function (concise version)
                       Or, further my undrestanding of why 'appState' is defined here*/}
                {/* [Note] The use of 'bind' here */}
            <div><h5><em>videoList</em><VideoList videos={this.state.videos} appState={this.setState.bind(this)}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;