var SubredditItem = React.createClass({
  propTypes: {
    subreddit: React.PropTypes.string.isRequired,
    images: React.PropTypes.array
  },

  render: function() {
    return (
      React.createElement('div', {className: 'SubredditItem'},
        React.createElement('div', {className: 'SubredditItem-subreddit'}, this.props.subreddit),
        React.createElement('ul', {className: 'SubredditItem-images'},
          this.props.images.map(function(image) {
            return React.createElement('li', {className: 'SubredditItem-image'}, image)
          }))
      )
    )
  },
});
