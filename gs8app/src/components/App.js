import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto';
import '../css/App.css';
import styles from '../css/styles';
import Carousel from './Carousel';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselYear: this.props.year,
            allTags: [],
            filmData: [],
            data: [],
            tempData: this.props.tempData,
        };
    }
    
    componentDidMount() {
        console.log('App Mounted');
    }

    getYear() {
        var d = new Date();
        return d.getFullYear();
    }

    render() {
        return (
            <div style={styles.filmGalleryStyle}>
                <Carousel year={1942}/>
                <footer>
                    <small>&copy; Copyright {this.getYear()}, GS8 Bellevue College Dev Team. All Rights Reserved</small>
                </footer>
            </div>
        );
    }
}

App.propTypes = {
    tempData: PropTypes.object
};

export default App;