import logo from '../Mariano.jpeg';

 function AboutMe(){
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              My name is Mariano and I'm going to master React!
            </p>
            <a
              className="App-link"
              href="https://github.com/MarianoCMP"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Me Out!
            </a>
          </header>
        </div>
      );

}

export default AboutMe;

