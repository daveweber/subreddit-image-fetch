var SubredditForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  },

  onSubredditInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {subreddit: e.target.value}))
  },

  onSubmit: function(e) {
    e.preventDefault()
    this.props.value.images = []
    this.props.onSubmit()
  },

  // getInitialState: function() {
  //   return {
  //     images: ''
  //   };
  // },

  // componentDidMount: function() {
  //   this.serverRequest = $.get('http://www.reddit.com/r/'.concat(this.props.value.subreddit), function (result) {
  //     var lastGist = result[0];
  //     this.setState({
  //       images: [lastGist.html_url]
  //     });
  //   }.bind(this));
  // },

  // componentWillUnmount: function() {
  //   this.serverRequest.abort();
  // },

  render: function() {
    var errors = this.props.value.errors || {}

    return (
      React.createElement('form', {onSubmit: this.onSubmit, className: 'SubredditForm', noValidate: true},
        React.createElement('input', {
          type: 'text',
          className: errors.subreddit && 'SubredditForm-error',
          placeholder: 'Subreddit name',
          onInput: this.onSubredditInput,
          value: this.props.value.subreddit,
          ref: 'subreddit',
        }),
        React.createElement('button', {type: 'submit'}, "Fetch images")
      )
    )
  },
});
