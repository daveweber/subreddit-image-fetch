var SUBREDDIT_TEMPLATE = {subreddit: "", images: [], errors: null}

var state = {};

function setState(changes) {
  Object.assign(state, changes);
  
  ReactDOM.render(
    React.createElement(SubredditView, Object.assign({}, state, {
      onNewSubredditChange: updateNewSubreddit,
      onNewSubredditSubmit: submitNewSubreddit,
    })),
    document.getElementById('react-app')
  );
}

setState({
  subreddits: [],
  newSubreddit: Object.assign({}, SUBREDDIT_TEMPLATE),
});


function updateNewSubreddit(subreddit) {
  setState({ newSubreddit: subreddit });
}


function submitNewSubreddit() {
  var subreddit = Object.assign({}, state.newSubreddit, {key: state.subreddits.length + 1, errors: {}});
  
  if (!subreddit.subreddit) {
    subreddit.errors.subreddit = ["Please enter a subreddit"]
  }

  setState(
    Object.keys(subreddit.errors).length === 0
    ? {
        newSubreddit: Object.assign({}, SUBREDDIT_TEMPLATE),
        subreddits: state.subreddits.slice(0).concat(subreddit),
      }
    : { newSubreddit: subreddit }
  )
}
