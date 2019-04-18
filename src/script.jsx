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
      </div>
    );
  }
};

ReactDOM.render(<Portfolio />, document.getElementById('app'));
