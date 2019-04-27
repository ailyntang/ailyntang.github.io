var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { id: "navbar" },
          React.createElement(
            "div",
            { id: "logo" },
            "Coder Lyn"
          ),
          React.createElement(
            "ul",
            { id: "nav-text" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#welcome-section" },
                "Welcome"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#projects" },
                "Projects"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#contact" },
                "Contact"
              )
            )
          ),
          React.createElement(
            "a",
            { href: "#", id: "nav-hamburger", onclick: "myFunction()" },
            React.createElement("i", { "class": "fa fa-bars" })
          )
        )
      );
    }
  }]);

  return Nav;
}(React.Component);

;

var Project = function (_React$Component2) {
  _inherits(Project, _React$Component2);

  function Project(props) {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));
  }

  _createClass(Project, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "project-tile" },
        React.createElement(
          "a",
          { href: this.props.projectLink, target: "_blank" },
          React.createElement("img", { className: "project-img", src: this.props.imageLink, alt: this.props.imageText }),
          React.createElement(
            "div",
            { className: "overlay" },
            React.createElement(
              "div",
              { className: "overlay-text" },
              this.props.overlayTextLine1,
              " ",
              React.createElement("br", null),
              " ",
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

var Contact = function (_React$Component3) {
  _inherits(Contact, _React$Component3);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "contact" },
        React.createElement(
          "h1",
          null,
          "Contact"
        ),
        React.createElement(
          "div",
          { id: "contact-container" },
          React.createElement(
            "div",
            { id: "contact-links" },
            React.createElement(
              "p",
              null,
              "Would you like to chat? Please feel free to get in touch. I look forward to speaking with you soon!"
            ),
            React.createElement(
              "div",
              { className: "contact-link" },
              "GitHub:  ",
              React.createElement(
                "a",
                { id: "profile-link", href: "https://github.com/ailyntang", target: "_blank" },
                "https://github.com/ailyntang"
              )
            ),
            React.createElement(
              "div",
              { className: "contact-link" },
              "CodePen:  ",
              React.createElement(
                "a",
                { href: "https://codepen.io/ailyntang/", target: "_blank" },
                "https://codepen.io/ailyntang/"
              )
            ),
            React.createElement(
              "div",
              { className: "contact-link" },
              "Medium:  ",
              React.createElement(
                "a",
                { href: "https://medium.com/@CoderLyn", target: "_blank" },
                "https://medium.com/@CoderLyn"
              )
            )
          ),
          React.createElement(
            "form",
            { id: "contact-form" },
            React.createElement("input", { id: "firstName", type: "text", placeholder: "Your First Name" }),
            React.createElement("input", { id: "lastName", type: "text", placeholder: "Your Last Name" }),
            React.createElement("input", { id: "email", type: "email", placeholder: "Your Email" }),
            React.createElement("input", { id: "message", type: "text", placeholder: "Your Message" }),
            React.createElement("input", { id: "submit", type: "submit", value: "SEND MESSAGE" })
          )
        )
      );
    }
  }]);

  return Contact;
}(React.Component);

;

var Portfolio = function (_React$Component4) {
  _inherits(Portfolio, _React$Component4);

  function Portfolio(props) {
    _classCallCheck(this, Portfolio);

    return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));
  }

  _createClass(Portfolio, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Nav, null),
        React.createElement(
          "div",
          { id: "welcome-section" },
          React.createElement(
            "div",
            { id: "welcome-text" },
            React.createElement(
              "h1",
              null,
              "Welcome to Coder Lyn's Portfolio"
            ),
            React.createElement(
              "p",
              null,
              "I'm an aspiring developer, learning on my own.",
              React.createElement("br", null),
              "Below is a collection of my work.",
              React.createElement("br", null),
              "Please feel free to reach out if you'd like my help with something, or you'd like to be a mentor."
            )
          )
        ),
        React.createElement(
          "div",
          { id: "projects" },
          React.createElement(
            "h1",
            null,
            "Projects"
          ),
          React.createElement(
            "div",
            { id: "project-tiles" },
            React.createElement(Project, {
              projectLink: "https://ailyntang.github.io/pomodoro/",
              imageLink: "https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
              imageText: "Alarm clock",
              overlayTextLine1: "Pomodoro Timer",
              overlayTextLine2: "(React)" }),
            React.createElement(Project, {
              projectLink: "https://codepen.io/ailyntang/full/aaGeoz",
              imageLink: "https://images.pexels.com/photos/56876/queen-cup-honeycomb-honey-bee-new-queen-rearing-compartment-56876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              imageText: "Bees in a beehive",
              overlayTextLine1: "Create a hexagon mural",
              overlayTextLine2: "(Javascript)" }),
            React.createElement(Project, {
              projectLink: "https://codepen.io/ailyntang/full/XoqWmw",
              imageLink: "https://images.unsplash.com/photo-1506555191898-a76bacf004ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
              imageText: "Calculator",
              overlayTextLine1: "Calculator",
              overlayTextLine2: "(React)" }),
            React.createElement(Project, {
              projectLink: "https://codepen.io/ailyntang/full/qLbopg",
              imageLink: "https://images.unsplash.com/photo-1467049293311-8c2750cda7a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
              imageText: "Camera previewer",
              overlayTextLine1: "Markdown Previewer",
              overlayTextLine2: "(React)" }),
            React.createElement(Project, {
              projectLink: "https://codepen.io/ailyntang/full/oJeLdr",
              imageLink: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
              imageText: "Drums",
              overlayTextLine1: "Drum Machine",
              overlayTextLine2: "(React)" }),
            React.createElement(Project, {
              projectLink: "https://codepen.io/ailyntang/full/jQxLjJ/",
              imageLink: "https://images.pexels.com/photos/688668/pexels-photo-688668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              imageText: "Framed photo of a quote",
              overlayTextLine1: "Quote of the day",
              overlayTextLine2: "(React)" }),
            React.createElement(Project, {
              projectLink: "https://codepen.io/ailyntang/full/PBXQOY/",
              imageLink: "https://images.pexels.com/photos/270238/pexels-photo-270238.png?cs=srgb&dl=application-blur-business-270238.jpg&fm=jpg",
              imageText: "Magnifying glass over a German document",
              overlayTextLine1: "Technical Documentation" }),
            React.createElement(Project, {
              projectLink: "https://codepen.io/ailyntang/full/JZrVbj/",
              imageLink: "https://images.pexels.com/photos/263532/pexels-photo-263532.jpeg?cs=srgb&dl=abandoned-antique-architecture-263532.jpg&fm=jpg",
              imageText: "Letterbox with a feedback sign",
              overlayTextLine1: "Survey" }),
            React.createElement(Project, {
              projectLink: "https://codepen.io/ailyntang/full/WyKEEB/",
              imageLink: "https://images.pexels.com/photos/374006/pexels-photo-374006.jpeg?cs=srgb&dl=business-coffee-computer-374006.jpg&fm=jpg",
              imageText: "Someone working on a laptop at a desk",
              overlayTextLine1: "Product Landing Page" })
          )
        ),
        React.createElement(Contact, null)
      );
    }
  }]);

  return Portfolio;
}(React.Component);

;

ReactDOM.render(React.createElement(Portfolio, null), document.getElementById('app'));