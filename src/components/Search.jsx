var Search = (props) => (
  <div className="search-bar form-inline">
  {/* Added this function, based on reference script (github.com/ajgrande924) */}
    <input className="form-control" type="text" onChange={(e) => props.handleSearchClick($('.form-control').val())}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
