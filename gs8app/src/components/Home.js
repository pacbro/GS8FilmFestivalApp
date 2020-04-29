import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Contact from './Contact';
import Subscribe from './Subscribe';
import styles from '../css/styles';

import Carousel from './Carousel';
import Carousel2 from './Carousel2';
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
const Home = () => (
    <div style={styles.parentDivStyle}>
        <img
            src={require('../img/MyPost.jpg')}
            alt="The Georgetown Super 8 Film Festival logo"
            style={imgStyle}
        />
        <h1>Thank you for making GS8 2019 a Success!</h1>

        <Carousel />
        <Carousel2 />





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
);

export default Home;
