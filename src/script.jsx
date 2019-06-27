function Nav() {
  return (
    <div>
      <nav id="navbar">
        <div id="logo">Coder Lyn</div>
        
        <ul id="nav-text">
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <a href="#" id="nav-hamburger" onclick="myFunction()"><i class="fa fa-bars"></i></a>
        
      </nav>
    </div>
  );
};

function About() {  
  return (
    <div className='mainSection' id='about'>
      <div id='aboutText'>
        <h1>About me</h1>
        <p>Hi there! I'm a strategist by day and a code newbie by night. I've dabbled in Ruby, Rails, Swift and am now focusing on Javascript and React.</p>
        <p>I am learning so much along the way. A big thank you to <a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp</a>. The structured lessons and the open ended projects are amazing. And a shout out to <a href="https://exercism.io" target="_blank">exercism.io</a>. The mentors there are incredible and continue to teach me a lot.</p>
        <p>Currently I'm practicing atomic commits on <a href="https://github.com/ailyntang/ailyntang.github.io" target="_blank">GitHub</a> and learning coding conventions with the help of ESLint and the <a href="https://github.com/airbnb/javascript" target="_blank">Airbnb style guides</a>.</p>
        <p>Everything you see here is self taught. Please <a href='#contact'>reach out</a> if you have any feedback. I'd love to hear it!</p>
      </div>
    </div>
  );
}

function WebsiteMockup() {
  return (
    <div className='websiteMockup'>
      <div className='header'></div>
      <div className='threeDots'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
      <div className='hamburger'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </div>
  );
}

class ProjectTile extends React.Component {
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

class Project extends React.Component {
  render() {
    let viewCode = '';
    if (this.props.githubLink) {
      viewCode = <p className='github'>View my code on <a className='githubLink' href={this.props.githubLink} target='_blank'>GitHub</a>.</p>;
    }

    return(
      <div className='mainSection' id={this.props.cssStyle}>
        <div className='mockup'>
          <WebsiteMockup />
          <a href={this.props.websiteLink} target='_blank'><img className='largeImg' src={this.props.imageLink} /></a>
        </div>
        <div className='projectDescription'>
          <div className='projectTitle'>{this.props.projectTitle}</div>
          <div className='briefDescription'>{this.props.briefDescription}</div>
          <p className='longDescription'>{this.props.longDescription}</p>
          {viewCode}
        </div>
      </div>
    );
  };
};

class Article extends React.Component {
  render() {
    return(
      <div className='article'>
        <img className='articleImage' src={this.props.imageLink} />
        <div className='articleText'>
          <div className='articleTitle'>{this.props.articleTitle}</div>
          <div className='articleBlurb'>{this.props.articleBlurb}</div>
          <a href={this.props.articleLink} target='_blank'>Read more..</a>
        </div>
      </div>
    );
  };
};

function Contact() {
  return(
    <div className='mainSection' id='contact'>
      <h1>Contact</h1>
  
      <div id="contact-links">
        <p>Here's where you can find me. Look forward to chatting!</p>
        <div className="contact-link">GitHub:  <a id="profile-link" href="https://github.com/ailyntang" target="_blank">https://github.com/ailyntang</a></div>
        <div className="contact-link">Medium:  <a href="https://medium.com/@CoderLyn" target="_blank">https://medium.com/@CoderLyn</a></div>
        <div className="contact-link">LinkedIn:  <a href="https://www.linkedin.com/in/ai-lyn-tang-2054b812" target="_blank">https://www.linkedin.com/in/ai-lyn-tang</a></div>
      </div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Nav />

        <div id='project-tiles'>
          <ProjectTile
          projectLink='#projectPomodoro'
          imageLink='https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
          imageText='Alarm clock'
          overlayTextLine1='Pomodoro Timer'
          overlayTextLine2='(React, design)'/>

          <ProjectTile
          projectLink='#projectHexagon'
          imageLink='https://images.pexels.com/photos/56876/queen-cup-honeycomb-honey-bee-new-queen-rearing-compartment-56876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          imageText='Bees in a beehive'
          overlayTextLine1='Create a hexagon mural'
          overlayTextLine2='(Javascript)'/>

          <ProjectTile
          projectLink='https://ailyntang.github.io/d3Charts/'
          imageLink='https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          imageText='Hand drawn chart'
          overlayTextLine1='d3 charts'
          overlayTextLine2='(d3, API, git)'/>

          <ProjectTile
          projectLink='https://codepen.io/ailyntang/full/jQxLjJ/'
          imageLink='https://images.pexels.com/photos/688668/pexels-photo-688668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          imageText='Framed photo of a quote'
          overlayTextLine1='Quote of the day'
          overlayTextLine2='(React, design)'/>

          <ProjectTile
          projectLink='https://codepen.io/ailyntang/full/XoqWmw'
          imageLink='https://images.unsplash.com/photo-1506555191898-a76bacf004ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
          imageText='Calculator'
          overlayTextLine1='Calculator'
          overlayTextLine2='(React)'/>

          <ProjectTile
          projectLink='https://codepen.io/ailyntang/full/qLbopg'
          imageLink='https://images.unsplash.com/photo-1467049293311-8c2750cda7a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'
          imageText='Camera previewer'
          overlayTextLine1='Markdown Previewer'
          overlayTextLine2='(React)'/>

          <ProjectTile
          projectLink='https://codepen.io/ailyntang/full/oJeLdr'
          imageLink='https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
          imageText='Drums'
          overlayTextLine1='Drum Machine'
          overlayTextLine2='(React)'/>

          <ProjectTile
          projectLink='https://codepen.io/ailyntang/full/PBXQOY/'
          imageLink='https://images.pexels.com/photos/270238/pexels-photo-270238.png?cs=srgb&dl=application-blur-business-270238.jpg&fm=jpg'
          imageText='Magnifying glass over a German document'
          overlayTextLine1='Technical Documentation'/>

          <ProjectTile
          projectLink='https://codepen.io/ailyntang/full/JZrVbj/'
          imageLink='https://images.pexels.com/photos/263532/pexels-photo-263532.jpeg?cs=srgb&dl=abandoned-antique-architecture-263532.jpg&fm=jpg'
          imageText='Letterbox with a feedback sign'
          overlayTextLine1='Survey'/>

          <ProjectTile
          projectLink='https://codepen.io/ailyntang/full/WyKEEB/'
          imageLink='https://images.pexels.com/photos/374006/pexels-photo-374006.jpeg?cs=srgb&dl=business-coffee-computer-374006.jpg&fm=jpg'
          imageText='Someone working on a laptop at a desk'
          overlayTextLine1='Product Landing Page'/>
        </div>

        <About />

        <div id='portfolio'>
          <Project 
          cssStyle='projectPomodoro'
          websiteLink='https://ailyntang.github.io/pomodoro/'
          imageLink='https://drive.google.com/uc?id=19ow_qZ6ay6W-LhAcJ9ZdrYmpabXj2Nn-'
          projectTitle='Pomodoro Timer'
          briefDescription='React / UI'
          longDescription='My take on the classic 25 minute Pomodoro Timer, with different images for each timer state. Originally built in CodePen for a freeCodeCamp project.'
          githubLink='https://github.com/ailyntang/pomodoro' />

          <Project 
          cssStyle='projectPortfolio'
          websiteLink='https://ailyntang.github.io'
          imageLink='https://drive.google.com/uc?id=1B9ihrUTPsmUsGQvDW2P5MS2pMOeCzF3E'
          projectTitle='Personal Portfolio'
          briefDescription='React / UI / Git'
          longDescription='A place to showcase my work. Originally built in HTML, I refactored it to be in React using atomic commits on GitHub. I have a great deal of respect for people who know CSS better than I do. It is hard! There are many CSS elements in my backlog, for when I have a CSS mentor.'
          githubLink='https://github.com/ailyntang/ailyntang.github.io' />

          <Project 
          cssStyle='projectHexagon'
          websiteLink='https://codepen.io/ailyntang/full/aaGeoz'
          imageLink='https://drive.google.com/uc?id=1ZhjZqBxg6MQ1M5OkqJA7UNh7VVY7_0EV'
          projectTitle='Hexagon Blanket'
          briefDescription='Javascript'
          longDescription='I am crocheting a blanket for a double bed. I have five different colors and was randomly placing them next to each other. This app creates options for this random color selection to finish my blanket. There are lots of things that could be better, but it was a fantastic tool to help me finalise the colors for my blanket.'
          />
        </div>

        <div className='mainSection' id='articles'>
          <h1>Articles</h1>
          <p>Often I find myself googling the same thing, again and again. Or wishing I remembered how to do something I know I did a few months ago, but can no longer remember how. So I started writing down my thoughts. It began on Google Docs, but I moved it to Medium in case I could help out other code newbies along the way.</p>
          <p>I'm a writer for Code Like A Girl and a top writer in Women in Tech. If my articles help you, I'd love to <a href='#contact'>hear about it</a>! Below are a few of my articles to give you an idea. For the most recent ones, head over to <a href='https://medium.com/@CoderLyn' target='_blank'>Medium</a>.</p>
          
          <Article 
          imageLink='https://images.unsplash.com/photo-1496867557017-559adb93b339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
          articleTitle='How to use React outside of CodePen'
          articleBlurb="I'm just learning React and so far I love it. It's amazing to have more structured HTML code that can use Javascript! Through freeCodeCamp I was used to writing in JSX. On CodePen, I continued doing the same. However what about in the 'real' world?"
          articleLink='https://code.likeagirl.io/how-to-use-react-outside-of-codepen-98be57b256e6' />

          <Article 
          imageLink='https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          articleTitle='How to move from CodePen to GitHub'
          articleBlurb="I'm just learning React and so far I love it. It's amazing to have more structured HTML code that can use Javascript! Through freeCodeCamp I was used to writing in JSX. On CodePen, I continued doing the same. However what about in the 'real' world?"
          articleLink='https://code.likeagirl.io/how-to-move-from-codepen-to-github-44a65511048e' />
        </div>

        <Contact />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
