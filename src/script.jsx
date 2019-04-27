class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav id="navbar">
          <div id="logo">Coder Lyn</div>
          
          <ul id="nav-text">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <a href="#" id="nav-hamburger" onclick="myFunction()"><i class="fa fa-bars"></i></a>
          
        </nav>
      </div>
    );
  }
};

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='project-tile'>
        <a href={this.props.projectLink} target='_blank'>
          <img className='project-img' src={this.props.imageLink} alt={this.props.imageText} />
          <div className='overlay'>
            <div className='overlay-text'>
              {this.props.overlayTextLine1} <br/> {this.props.overlayTextLine2}
            </div>
          </div>
        </a>
      </div>
    );
  }
};

class Contact extends React.Component {
  render() {
    return(
      <div id='contact'>
        <h1>Contact</h1>
    
        <div id="contact-container">
          <div id="contact-links">
            <p>Would you like to chat? Please feel free to get in touch. I look forward to speaking with you soon!</p>
        
            <div className="contact-link">GitHub:  <a id="profile-link" href="https://github.com/ailyntang" target="_blank">https://github.com/ailyntang</a></div>
            <div className="contact-link">CodePen:  <a href="https://codepen.io/ailyntang/" target="_blank">https://codepen.io/ailyntang/</a></div>
            <div className="contact-link">Medium:  <a href="https://medium.com/@CoderLyn" target="_blank">https://medium.com/@CoderLyn</a></div>
          </div>
    
          <form id="contact-form">
            <input id="firstName" type="text" placeholder="Your First Name" />
            <input id="lastName" type="text" placeholder="Your Last Name" />
            <input id="email" type="email" placeholder="Your Email" />
            <input id="message" type="text" placeholder="Your Message" />
            <input id="submit" type="submit" value="SEND MESSAGE" />
          </form>
      
        </div>
      </div>
    );
  }
};

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Nav />

        <div id='projects'>
          <h1>Projects</h1>

          <div id='project-tiles'>
            <Project
            projectLink='https://ailyntang.github.io/pomodoro/'
            imageLink='https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
            imageText='Alarm clock'
            overlayTextLine1='Pomodoro Timer'
            overlayTextLine2='(React)'/>

            <Project
            projectLink='https://codepen.io/ailyntang/full/aaGeoz'
            imageLink='https://images.pexels.com/photos/56876/queen-cup-honeycomb-honey-bee-new-queen-rearing-compartment-56876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            imageText='Bees in a beehive'
            overlayTextLine1='Create a hexagon mural'
            overlayTextLine2='(Javascript)'/>

            <Project
            projectLink='https://codepen.io/ailyntang/full/XoqWmw'
            imageLink='https://images.unsplash.com/photo-1506555191898-a76bacf004ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
            imageText='Calculator'
            overlayTextLine1='Calculator'
            overlayTextLine2='(React)'/>

            <Project
            projectLink='https://codepen.io/ailyntang/full/qLbopg'
            imageLink='https://images.unsplash.com/photo-1467049293311-8c2750cda7a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'
            imageText='Camera previewer'
            overlayTextLine1='Markdown Previewer'
            overlayTextLine2='(React)'/>

            <Project
            projectLink='https://codepen.io/ailyntang/full/oJeLdr'
            imageLink='https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
            imageText='Drums'
            overlayTextLine1='Drum Machine'
            overlayTextLine2='(React)'/>

            <Project
            projectLink='https://codepen.io/ailyntang/full/jQxLjJ/'
            imageLink='https://images.pexels.com/photos/688668/pexels-photo-688668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            imageText='Framed photo of a quote'
            overlayTextLine1='Quote of the day'
            overlayTextLine2='(React)'/>

            <Project
            projectLink='https://codepen.io/ailyntang/full/PBXQOY/'
            imageLink='https://images.pexels.com/photos/270238/pexels-photo-270238.png?cs=srgb&dl=application-blur-business-270238.jpg&fm=jpg'
            imageText='Magnifying glass over a German document'
            overlayTextLine1='Technical Documentation'/>

            <Project
            projectLink='https://codepen.io/ailyntang/full/JZrVbj/'
            imageLink='https://images.pexels.com/photos/263532/pexels-photo-263532.jpeg?cs=srgb&dl=abandoned-antique-architecture-263532.jpg&fm=jpg'
            imageText='Letterbox with a feedback sign'
            overlayTextLine1='Survey'/>

            <Project
            projectLink='https://codepen.io/ailyntang/full/WyKEEB/'
            imageLink='https://images.pexels.com/photos/374006/pexels-photo-374006.jpeg?cs=srgb&dl=business-coffee-computer-374006.jpg&fm=jpg'
            imageText='Someone working on a laptop at a desk'
            overlayTextLine1='Product Landing Page'/>
          </div>
        </div>

        <Contact />
      </div>
    );
  }
};

ReactDOM.render(<Portfolio />, document.getElementById('app'));
