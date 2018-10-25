import React, {Component} from 'react';
import GhibliDisplay from './GhibliDisplay';

class Ghibli extends Component {
    constructor() { 
        super();
        this.state = {
            title: []
            
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json)
        .then(json => {
            let titlesArr = json.map(movie => {
                return movie.title;
            })
            this.setState({
                titles: this.state.titles.concat(titlesArr)
            }, () => {console.log(this.state.titles)};
        })

        .catch(error => console.log(error))

    }

        titlesMap = () => {
            return(
                this.state.titles.map(title => {
                    return (
                }
        }

        console.log(json);
        console.log(titlesArr);



render() {
    return(
        <div>
            <films title={this.state.title} /> 
        </div>
    );
} }



export default Ghibli;

