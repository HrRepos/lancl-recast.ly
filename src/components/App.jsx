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
      //[Todo] Replace the following line with live data from YouTube
      videos: [], //videos: exampleVideoData,
      video: exampleVideoData[0],  //Initial value for video player; will be changed by click
      //done: false
      options: {
        query: 'cat',
        max: 5,
        key: window.YOUTUBE_API_KEY
        //part: 'snippet',
        //type: 'video',
        //videoEmbeddable: 'true'
      }
    }
  }
  //Use this method (lifecycle hook), to render your app with live videos from searchYouTube()
  componentDidMount() {
    //debugger;
    var youTubeOptions = this.state.options;
    //console.log(youTubeOptions);

    //Live invoke the function below
    this.props.searchYouTube(youTubeOptions, function(data) {  //Pass searchYouTube() to 'this' (might not work)
      this.setState({videos: data});
      this.setState({video: data[0]});
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.video}/> </h5></div>
          </div>
          
          <div className="col-md-5">
            {/* For video title click: use React's method setState() to get App's state
                [Todo] If having time, try refactoring 'appState' by moving it up as part of the class constructor*/}
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