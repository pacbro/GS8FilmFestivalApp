import React from 'react';
import styles from '../css/styles';

import Carousel_2020 from './Carousel_2020';
import Carousel_2019 from './Carousel_2019';

//import Card from "@material-ui/core/Card";

//import * as fs from "fs";
//import Papa from "papaparse";
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

/*
import {Readable} from 'stream';
async function readableToString2(readable) {
    let result = '';

    for await (const chunk of readable) {
        result += chunk;
    }
    return result;
}
*/

async function logChunks(readable) {
    console.log('in logChunks');
    for await (const chunk of readable) {
        console.log(chunk);
    }
}

class FilmGallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            carouselYear: this.props.year,
            allTags: [],
            filmData: [],
            data: [],
        };
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        console.log('<< Carousel_2020 01: Mounted successfully >>');
        this.getCsvData();
    }

    //fetchCsv() {
        /*
        return fetch('../csv/films2020.csv').then(function (response) {
            console.log('<< Carousel_2020 03: Fetching films2020.csv >>');
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            let fileName = '../csv/films2020.csv';
            //const fs = require('fs');
            const papa = require('papaparse');

            let file = fs.createReadStream(fileName);
            let count = 0; // cache the running count
            papa.parse(file, {
                //worker: true, // Don't bog down the main thread if its a big file
                step: function(result) {
                    // do stuff with result

                },
                complete: function(results, file) {
                    console.log('parsing complete read', count, 'records.');
                }
            });



            return reader.read().then(function (result) {
                console.log('////// Carousel_2020 04: Returned result.value //////');
                console.log(decoder.decode(result.value));
                console.log('////////////////////////////////////////////////');
                return decoder.decode(result.value);
            });
        });
        */
    //}

    /*
    fetchCsv2(req, res){
        console.log('<< Carousel_2020 03: Fetching films2020.csv >>');
        //let fileName = '../csv/films2020.csv';
        //let fs = require('fs');

        const readStream = fs.createReadStream('../csv/films2020.csv', {encoding: 'utf8'});
        console.log("readStream:");
        console.log(readStream);
        logChunks(readStream);

        //const readable = Readable.from('../csv/films2020.csv', {encoding: 'utf8'});
        //this.assert.equal(await readableToString2(readable), 'Good morning!');
        /*
        readStream.on('open', function () {
            // This just pipes the read stream to the response object (which goes to the client)
            readStream.pipe(res);
            console.log('////// Carousel_2020 04: Returned result.value //////');
            console.log(res);
            console.log('////////////////////////////////////////////////');
        });
        readStream.on('error', function(err) {
            res.end(err);
        });
        return res.value;
        
    } */

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
        console.log('<< Carousel_2020 02: Getting CSV Data >>');
        let csvData = await this.fetchCsv3('../csv/films2020.csv');
        console.log('////// Carousel_2020 05: Returned result.value //////');
        console.log(csvData);
        console.log('////////////////////////////////////////////////');
        console.log('<< Carousel_2020 06: Load CSV Data >>');
        //Papa.parse(csvData, {
           // complete: this.getData
       // });
       var itWorked = this.getData(csvData);
       if(itWorked)
       {
        console.log('////////////////////////////////////////////////');
        console.log('<< Carousel_2020 data loaded >>');
       }
       else
       {
        console.log('////////////////////////////////////////////////');
        console.log('<< Carousel_2020 data load failed >>');
       }
    }

    //<Card style={styles.cardStyle}>
    render() {
        return (
            <div style={styles.filmGalleryStyle}>

                <h1>GS8 Film Gallery</h1>
                <iframe id="vid_frame"
                        style={styles.vidContainerIframe}
                        title="Figure Man Written by Anthony Thambynayagam"
                        src="http://www.youtube.com/embed/jvq7-b-Ko1g?autoplay=0&rel=0&showinfo=0"
                        frameBorder="0"
                        width="640"
                        height="480"
                        allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen">
                </iframe>

                <Carousel_2020 year={1942}/>
                <Carousel_2019 year={1942}/>

            </div>
        )
    }
}

export default FilmGallery;
