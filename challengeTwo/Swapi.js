
import React, {Component} from 'react';
import display from './display';

class Swapi extends Component {
  constructor()  {
      super();
      this.state = {
          starship: [],
      }
  }

  componentDidMount() {
      fetch('https://swapi.co/api/starships/')
      .then(results => { 
          return results.json();
      }).then(data => {
          console.log(data.results);
          let starships = data.results.map((starship) => {
              return(
                  <div>
                      <starships heroes={this.state.heroes} />
                  </div>
              )
          })
      })


  }

  render() {
    return(
      <div>
        <starships starship={this.state.starship}/>
      </div>
    );
  }
}

export default Swapi;