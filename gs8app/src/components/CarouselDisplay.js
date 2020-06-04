import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import styles from '../css/styles';
import 'pure-react-carousel/dist/react-carousel.es.css';
//import {
//    ButtonBack,
//    ButtonNext,
//    CarouselProvider,
//    Image,
//    Slide,
//    Slider,
//} from 'pure-react-carousel';

let setFilmSRC = (ytID) => {
    window.scrollTo(500, 0);
    //let str = 'https://www.youtube.com/embed/'+ytID+'?autoplay=1&rel=0&showinfo=0&autohide=1';
    document.getElementById('vid_frame').src =
        'https://www.youtube.com/embed/' +
        ytID +
        '?autoplay=1&rel=0&showinfo=0&autohide=1';
};

class CarouselDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            html: '',
        };
    }

    componentDidMount() {
        this.generateHTML(this.props.filmData);
        console.log('Fake ass carousel bitch');
    }

    setHTML(html) {
        console.log('setting HTML');
        console.log(html);
        this.setState({
            html: html
        });
    }

    generateSlide = (film, pointer) => {
        console.log('creating slide ' + pointer);
        let slideHTML = '<Slide index={' + pointer + '}>';
        slideHTML += '<div className="vid-item" style={styles.vidItem} onClick={() => {this.setFilmSRC("' + film.filmSrc + '");}}>';
        slideHTML += '<div className="thumb" style={styles.thumb}>'
        slideHTML += '<Image src="' + film.img + '" alt="' + film.name + ' by ' +film.by + '"/>';
        slideHTML += '</div><div className="desc" style={styles.desc}>';
        slideHTML += film.name + ' by ' + film.by;
        slideHTML += '</div></div></Slide>'
        return slideHTML;
    };

    generateHTML = (data) => {
        console.log('creating html');
        let html = '<div style={styles.filmGalleryStyle}>';

        let carouselProvider =
            '<CarouselProvider visibleSlides = {5.12} totalSlides={' + data.length + '} step={5} naturalSlideWidth={425} naturalSlideHeight={500} hasMasterSpinner>';
        html += carouselProvider;
        html += '<div style={styles.sliderDiv}><Slider>';

        let slideHTML = '';
        let pointer = 0;
        data.forEach((element) => {
            let newSlide = this.generateSlide(element, pointer);
            slideHTML += newSlide;
            pointer++;
        })

        html += slideHTML;
        html += '</Slider ></div ></CarouselProvider ></div >';

        this.setHTML(html);
    };

    render() {
        let html = this.state.html;
        return (
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        );
    }
}

CarouselDisplay.propTypes = {
    year: PropTypes.number,
    filmData: PropTypes.array,
};

export default CarouselDisplay;