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
        this.getData = this.getData.bind(this);
    }
    
    componentDidMount() {
        console.log('app-didMount');
        this.callServer()
            .then(res => console.log({ data: res.express }))
            .castch(err => console.log(err));
        this.getCsvData();
    }

    callServer = async () => {
        const response = await fetch('http://www.georgetownsuper8.org:5000/hello');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        //console.log(body);
        return body;
    };
    
    fetchCsv3(csv){
        var lines=csv.split("\n");      
        var result = [];      
        var headers=lines[0].split(",");
        for(var i=1;i<lines.length;i++){      
            var obj = {};
            var currentline=lines[i].split(",");
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }      
            result.push(obj);
      
        }
        //return result; //JavaScript object
        return JSON.stringify(result); //JSON
      }

    getData(result) {
        this.setState({data: result.data});
        //this.setState({filmData: result.data});
        var didItWork = false;
        if(this.state.data === result.data)
        {
            didItWork = true;
        }
        return didItWork;
    }

    async getCsvData() {
        console.log('<< Carousel2020 02: Getting CSV Data >>');
        let csvData = await this.fetchCsv3('../csv/films.csv');
        console.log('////// Carousel2020 05: Returned result.value //////');
        console.log(csvData);
        console.log('////////////////////////////////////////////////');
        console.log('<< Carousel2020 06: Load CSV Data >>');
        //Papa.parse(csvData, {
           // complete: this.getData
       // });
       var itWorked = this.getData(csvData);
       if(itWorked)
       {
        console.log('////////////////////////////////////////////////');
        console.log('<< Carousel2020 data loaded >>');
       }
       else
       {
        console.log('////////////////////////////////////////////////');
        console.log('<< Carousel2020 data load failed >>');
       }
    }

    
    render() {
        return (
            <div style={styles.filmGalleryStyle}>
                <Carousel year={1942}/>
            </div>
        );
    }
}

App.propTypes = {
    tempData: PropTypes.object
};


export default App;