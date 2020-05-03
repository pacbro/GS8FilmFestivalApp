import React from 'react';
import styles from '../css/styles';

import Carousel from './Carousel';
import Carousel2 from './Carousel2';
import Card from "@material-ui/core/Card";
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




const FilmGallery = () => (
    <div style={styles.parentDivStyle}>
        <Card style={styles.cardStyle}>
            <h1>Film Gallery</h1>
            <h2>2020 Films</h2>

            <Carousel year={1942}/>
            <Carousel2 />
        </Card>
    </div>
);

export default FilmGallery;
