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
      done: false
    };
  }
  // When a video title is clicked, the video will be displayed in the player
  onVideoTitleClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    // [Todo] Let video play
    // var style = {

    // };
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> view goes here</h5></div>
        </div>
        {/* [Todo] Detect the clicking on video title */}
        <div className="col-md-5">
          <div><h5><em>videoList</em> <VideoList videos={exampleVideoData}/></h5></div>
        </div>
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;