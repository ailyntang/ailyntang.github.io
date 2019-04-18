var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_React$Component) {
  _inherits(Project, _React$Component);

  function Project(props) {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));
  }

  _createClass(Project, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'project-tile' },
        React.createElement(
          'a',
          { href: this.props.projectLink, target: '_blank' },
          React.createElement('img', { className: 'project-img', src: this.props.imageLink, alt: this.props.imageText }),
          React.createElement(
            'div',
            { className: 'overlay' },
            React.createElement(
              'div',
              { className: 'overlay-text' },
              this.props.overlayTextLine1,
              ' ',
              React.createElement('br', null),
              ' ',
              this.props.overlayTextLine2
            )
          )
        )
      );
    }
  }]);

  return Project;
}(React.Component);

;

var Portfolio = function (_React$Component2) {
  _inherits(Portfolio, _React$Component2);

  function Portfolio(props) {
    _classCallCheck(this, Portfolio);

    return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));
  }

  _createClass(Portfolio, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'project-tiles' },
        React.createElement(Project, {
          projectLink: 'https://ailyntang.github.io/pomodoro/',
          imageLink: 'https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          imageText: 'Alarm clock',
          overlayTextLine1: 'Pomodoro Timer',
          overlayTextLine2: '(React)' }),
        React.createElement(Project, {
          projectLink: 'https://codepen.io/ailyntang/full/XoqWmw',
          imageLink: 'https://images.unsplash.com/photo-1506555191898-a76bacf004ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
          imageText: 'Calculator',
          overlayTextLine1: 'Calculator',
          overlayTextLine2: '(React)' }),
        React.createElement(Project, {
          projectLink: 'https://codepen.io/ailyntang/full/qLbopg',
          imageLink: 'https://images.unsplash.com/photo-1467049293311-8c2750cda7a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
          imageText: 'Camera previewer',
          overlayTextLine1: 'Markdown Previewer',
          overlayTextLine2: '(React)' })
      );
    }
  }]);

  return Portfolio;
}(React.Component);

;

ReactDOM.render(React.createElement(Portfolio, null), document.getElementById('app'));