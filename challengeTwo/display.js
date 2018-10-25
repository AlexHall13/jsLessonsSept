//DISPLAYHERO CODE BELOW
import React, {Component} from 'react';

class display extends Component{
  constructor(props){
    super(props);
    this.state = {
      starshipIndex :  0
    }
  }

  toggleStarship = () => {
    console.log(this.state.starshipIndex);
    if (this.state.starshipIndex < this.props.starship.length - 1){
      this.setState({starshipIndex: this.state.starshipIndex + 1})
    } else {
      this.setState({starshipIndex: 0})
    }
  }

  render(){
    const i = this.state.starshipIndex;
    return(
      <div>
        <table className="table">
          <tbody>
          <tr>
            <td>{this.props.starship[i].name}</td>
            <td>{this.props.starship[i].superPower}</td>
            <td>{this.props.starship[i].age}</td>
          </tr>
          </tbody>
        </table>
        <button onClick={this.toggleStarship}>Click for Different Hero</button>
      </div>
    );
  }
}

export default display;
//END DISPLAYHERO CODE