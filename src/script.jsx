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

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='project-tiles'>
        <Project
        projectLink='https://ailyntang.github.io/pomodoro/'
        imageLink='https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        imageText='Alarm clock'
        overlayTextLine1='Pomodoro Timer'
        overlayTextLine2='(React)'/>
      </div>
    );
  }
};

ReactDOM.render(<Portfolio />, document.getElementById('app'));
