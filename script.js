var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Nav() {
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
            { href: "#about" },
            "About"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#project-tiles" },
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
};

function About() {
  return React.createElement(
    "div",
    { id: "about" },
    React.createElement(
      "h1",
      null,
      "About me"
    ),
    React.createElement(
      "p",
      null,
      "Hi there! I'm a strategist by day and a code newbie by night. I've dabbled in Ruby, Rails, Swift and am now focusing on Javascript and React."
    ),
    React.createElement(
      "p",
      null,
      "I am learning so much along the way. A big thank you to ",
      React.createElement(
        "a",
        { href: "https://www.freecodecamp.org", target: "_blank" },
        "freeCodeCamp"
      ),
      ". The structured lessons and the open ended projects are amazing. And a shout out to ",
      React.createElement(
        "a",
        { href: "https://exercism.io", target: "_blank" },
        "exercism.io"
      ),
      ". The mentors there are incredible and continue to teach me a lot."
    ),
    React.createElement(
      "p",
      null,
      "Currently I'm practicing atomic commits on ",
      React.createElement(
        "a",
        { href: "https://github.com/ailyntang/ailyntang.github.io", target: "_blank" },
        "GitHub"
      ),
      " and learning coding conventions with the help of ESLint and the ",
      React.createElement(
        "a",
        { href: "https://github.com/airbnb/javascript", target: "_blank" },
        "Airbnb style guides"
      ),
      "."
    ),
    React.createElement(
      "p",
      null,
      "Everything you see here is self taught. Please ",
      React.createElement(
        "a",
        { href: "mailto:ailyntang@gmail.com?subject=Portfolio%20Feedback", target: "_blank" },
        "reach out"
      ),
      " if you have any feedback. I'd love to hear it!"
    )
  );
}

function WebsiteMockup() {
  return React.createElement(
    "div",
    { className: "websiteMockup" },
    React.createElement("div", { className: "header" }),
    React.createElement(
      "div",
      { className: "threeDots" },
      React.createElement("div", { className: "dot" }),
      React.createElement("div", { className: "dot" }),
      React.createElement("div", { className: "dot" })
    ),
    React.createElement(
      "div",
      { className: "hamburger" },
      React.createElement("div", { className: "line" }),
      React.createElement("div", { className: "line" }),
      React.createElement("div", { className: "line" })
    )
  );
}

var ProjectTile = function (_React$Component) {
  _inherits(ProjectTile, _React$Component);

  function ProjectTile(props) {
    _classCallCheck(this, ProjectTile);

    return _possibleConstructorReturn(this, (ProjectTile.__proto__ || Object.getPrototypeOf(ProjectTile)).call(this, props));
  }

  _createClass(ProjectTile, [{
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

  return ProjectTile;
}(React.Component);

;

var Project = function (_React$Component2) {
  _inherits(Project, _React$Component2);

  function Project() {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
  }

  _createClass(Project, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: this.props.cssStyle },
        React.createElement(
          "div",
          { className: "mockup" },
          React.createElement(WebsiteMockup, null),
          React.createElement(
            "a",
            { href: this.props.websiteLink, target: "_blank" },
            React.createElement("img", { className: "largeImg", src: this.props.imageLink })
          )
        ),
        React.createElement(
          "div",
          { className: "projectTitle" },
          this.props.projectTitle
        ),
        React.createElement(
          "div",
          { className: "briefDescription" },
          this.props.briefDescription
        ),
        React.createElement(
          "p",
          { className: "longDescription" },
          this.props.longDescription
        ),
        React.createElement(
          "p",
          { className: "github" },
          "View my code on ",
          React.createElement(
            "a",
            { className: "githubLink", href: this.props.githubLink, target: "_blank" },
            "GitHub"
          ),
          "."
        )
      );
    }
  }]);

  return Project;
}(React.Component);

;

function Contact() {
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
};

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Nav, null),
        React.createElement(
          "div",
          { id: "project-tiles" },
          React.createElement(ProjectTile, {
            projectLink: "https://ailyntang.github.io/pomodoro/",
            imageLink: "https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            imageText: "Alarm clock",
            overlayTextLine1: "Pomodoro Timer",
            overlayTextLine2: "(React)" }),
          React.createElement(ProjectTile, {
            projectLink: "https://codepen.io/ailyntang/full/aaGeoz",
            imageLink: "https://images.pexels.com/photos/56876/queen-cup-honeycomb-honey-bee-new-queen-rearing-compartment-56876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imageText: "Bees in a beehive",
            overlayTextLine1: "Create a hexagon mural",
            overlayTextLine2: "(Javascript)" }),
          React.createElement(ProjectTile, {
            projectLink: "https://codepen.io/ailyntang/full/XoqWmw",
            imageLink: "https://images.unsplash.com/photo-1506555191898-a76bacf004ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
            imageText: "Calculator",
            overlayTextLine1: "Calculator",
            overlayTextLine2: "(React)" }),
          React.createElement(ProjectTile, {
            projectLink: "https://codepen.io/ailyntang/full/qLbopg",
            imageLink: "https://images.unsplash.com/photo-1467049293311-8c2750cda7a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
            imageText: "Camera previewer",
            overlayTextLine1: "Markdown Previewer",
            overlayTextLine2: "(React)" }),
          React.createElement(ProjectTile, {
            projectLink: "https://codepen.io/ailyntang/full/oJeLdr",
            imageLink: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            imageText: "Drums",
            overlayTextLine1: "Drum Machine",
            overlayTextLine2: "(React)" }),
          React.createElement(ProjectTile, {
            projectLink: "https://codepen.io/ailyntang/full/jQxLjJ/",
            imageLink: "https://images.pexels.com/photos/688668/pexels-photo-688668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imageText: "Framed photo of a quote",
            overlayTextLine1: "Quote of the day",
            overlayTextLine2: "(React)" }),
          React.createElement(ProjectTile, {
            projectLink: "https://codepen.io/ailyntang/full/PBXQOY/",
            imageLink: "https://images.pexels.com/photos/270238/pexels-photo-270238.png?cs=srgb&dl=application-blur-business-270238.jpg&fm=jpg",
            imageText: "Magnifying glass over a German document",
            overlayTextLine1: "Technical Documentation" }),
          React.createElement(ProjectTile, {
            projectLink: "https://codepen.io/ailyntang/full/JZrVbj/",
            imageLink: "https://images.pexels.com/photos/263532/pexels-photo-263532.jpeg?cs=srgb&dl=abandoned-antique-architecture-263532.jpg&fm=jpg",
            imageText: "Letterbox with a feedback sign",
            overlayTextLine1: "Survey" }),
          React.createElement(ProjectTile, {
            projectLink: "https://codepen.io/ailyntang/full/WyKEEB/",
            imageLink: "https://images.pexels.com/photos/374006/pexels-photo-374006.jpeg?cs=srgb&dl=business-coffee-computer-374006.jpg&fm=jpg",
            imageText: "Someone working on a laptop at a desk",
            overlayTextLine1: "Product Landing Page" })
        ),
        React.createElement(About, null),
        React.createElement(
          "div",
          { id: "portfolio" },
          React.createElement(Project, {
            cssStyle: "projectStyle1",
            websiteLink: "https://ailyntang.github.io/pomodoro/",
            imageLink: "https://drive.google.com/uc?id=1ORD-OvILAw1U3jBOi8ITCSr4PI-rMVS5",
            projectTitle: "Pomodoro Timer",
            briefDescription: "React / UI",
            longDescription: "My take on the classic 25 minute Pomodoro Timer, with different images for each timer state. Originally built in CodePen for a freeCodeCamp project.",
            githubLink: "https://github.com/ailyntang/pomodoro" })
        ),
        React.createElement(Contact, null)
      );
    }
  }]);

  return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));