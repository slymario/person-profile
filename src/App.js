import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Dwayne Johnson',
      bio: "Dwayne Johnson, also known as THE ROCK is a multi-talented actor, former Pro wrestler, and movie producer. With a charismatic personality and a towering physique, he quickly rose to fame in both the world of wrestling and Hollywood. Johnson's journey began as a football player before transitioning to wrestling, where he became one of the most celebrated WWE stars. Leveraging his success in the ring, he ventured into acting, starring in blockbuster movies like The Scorpion King, Fast & Furious franchise, Rampage and Jumanji. Dwayne Johnson's relentless work ethic, genuine charm, and diverse talents have earned him a massive global fan following, making him one of the most influential and highest-paid actors in the entertainment industry.",
      imgSrc: 'https://media.gettyimages.com/id/484053022/photo/pixar-and-walt-disney-animation-studios-the-upcoming-films-presentation-at-disneys-d23-expo.jpg?s=2048x2048&w=gi&k=20&c=yUqmzg5jkss--4qCVsCzZHBrOevVjPXyfpcoYhwV4Ng=',
      profession: 'Actor',
    },
    show: false,
    intervalId: null,
    timeSinceMount: 0,
  };

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.setState({ intervalId: setInterval(this.updateTimeSinceMount, 1000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeSinceMount = () => {
    this.setState((prevState) => ({ timeSinceMount: prevState.timeSinceMount + 1 }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1 className='person'>PERSON PROFILE</h1>
        <button onClick={this.toggleProfile}>{show ? 'Hide Profile' : 'Show Profile'}</button>
        {show && (
          <div className="profile">
            <img style={{width : '35rem'}} src={imgSrc} alt="Profile" />
            <h2 className='name'>{fullName}</h2>
            <p className='bio'>{bio}</p>
            <span>PROFESSION: {profession}</span>
          </div>
        )}
        <p className='tsm'>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;