var SubredditView = React.createClass({
  propTypes: {
    subreddits: React.PropTypes.array.isRequired,
    newSubreddit: React.PropTypes.object.isRequired,
    onNewSubredditChange: React.PropTypes.func.isRequired,
    onNewSubredditSubmit: React.PropTypes.func.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'SubredditView'},
        React.createElement('h1', {className: 'SubredditView-title'}, "Subreddit Image Fetcher"),
        React.createElement('ul', {className: 'SubredditView-images'},
          this.props.subreddits.map(function(subreddit) {
            return React.createElement(SubredditItem, subreddit)
          })),
        React.createElement(SubredditForm, {
          value: this.props.newSubreddit,
          onChange: this.props.onNewSubredditChange,
          onSubmit: this.props.onNewSubredditSubmit,
        })
      )
    )
  },
});
