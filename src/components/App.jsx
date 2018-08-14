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
      videos: exampleVideoData, //videos: [],

      video: exampleVideoData[0]  //Initial value for video player; will be changed by click
      //done: false
    };
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
            {/* Just for testing */}
            {/* <div><h5 onClick={this.onVideoTitleClick}><em>videoList</em> <VideoList videos={this.state.videos}/></h5></div> */}
            {/* For video title click: use React's method setState() to get App's state*/}
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