import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import FilmGallery from './FilmGallery';

class App extends Component {
    constructor(props) {
        super(props);
        this.filmData = this.props.tempData;
    }

    render() {
        return (
            <div className="App">
                 <FilmGallery
                    {...props}
                    filmData={this.state.filmData}
                 />                 
            </div>
        );
    }

}

App.propTypes = {
    tempData: PropTypes.object
};


export default App;
