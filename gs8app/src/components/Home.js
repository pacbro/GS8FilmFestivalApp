import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Contact from './Contact';
import Subscribe from './Subscribe';
import styles from '../css/styles';

//import FilmGallery from './FilmGallery';
//import csvController from '../controllers/csv-controller';
//import 'pure-react-carousel/dist/react-carousel.es.css';
/*import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    DotGroup,
    Image,
    Slide,
    Slider,
} from 'pure-react-carousel';
*/


const imgStyle = {
    maxWidth: '100%',
    height: 'auto'
};





// noinspection SpellCheckingInspection
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = props.filmData
    }

    //componentDidMount() {
    //    this.setState(this.props.filmData);
    //    console.log('Home mounted with props');
    //}

    render() {
        return (
            <div style={styles.parentDivStyle}>

                <div>
                    <h1>Hideous Output block:</h1>
                    <p>Name: {this.state[0].name.toString()}</p>
                    <p>Year: {this.state[0].year.toString()}</p>
                    <p>URL: {this.state[0].url.toString()}</p>
                </div>

                <img
                src={require('../img/MyPost.jpg')}
                alt="The Georgetown Super 8 Film Festival logo"
                style={imgStyle}
            />
            <h1>Thank you for making GS8 2019 a Success!</h1>



            {/*<FilmGallery />*/}



            <Card style={styles.cardStyle}>
                <h2>Little Films for the Big Picture</h2>
                <p style={styles.pStyle}>
                    Georgetown Super 8 is dedicated to the creation and sharing of
                    amateur super 8 films to foster inclusive dialogue, ensuring a
                    Cardersity of community voices can define, document, and tell
                    the story of their neighborhood.
            </p>
                <Button variant="contained" style={styles.divButtonStyle}>
                    Learn More
            </Button>
            </Card>
            <Contact />
            <Card style={styles.cardStyle}>
                <p>Missing banner image</p>
                <h2 style={styles.titleStyle}>Thank you to our 2019 Donors</h2>
                <img
                    src={require('../img/2018sponsors.jpg')}
                    alt="2018 sponsors"
                    style={imgStyle}
                />
            </Card>
            <p>Map goes here</p>
            {/* Uha why is there a API key here? We should remove it or deactivate it! */}
            {/* API key AIzaSyDizypkVSGXwtOacsa73GX0DcqSE6l5KAg  */}

            <Subscribe />
        </div>
        )
    }
}


Home.propTypes = {
    filmData: PropTypes.array
};


export default Home;
