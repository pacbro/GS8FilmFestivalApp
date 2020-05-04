import React from 'react';
import styles from '../css/styles';

import * as fs from 'fs';
//import csvController from '../controllers/csv-controller';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    DotGroup,
    Image,
    Slide,
    Slider,
} from 'pure-react-carousel';
import Papa from "papaparse";


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

class Carousel extends React.Component {
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
        console.log('<< Carousel 01: Mounted successfully >>');
        this.getCsvData();
    }

    fetchCsv() {
        /*
        return fetch('../csv/films.csv').then(function (response) {
            console.log('<< Carousel 03: Fetching films.csv >>');
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            let fileName = '../csv/films.csv';
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
                console.log('////// Carousel 04: Returned result.value //////');
                console.log(decoder.decode(result.value));
                console.log('////////////////////////////////////////////////');
                return decoder.decode(result.value);
            });
        });
        */
    }



    fetchCsv2(req, res){
        console.log('<< Carousel 03: Fetching films.csv >>');
        //let fileName = '../csv/films.csv';
        //let fs = require('fs');

        const readStream = fs.createReadStream('../csv/films.csv', {encoding: 'utf8'});
        console.log("readStream:");
        console.log(readStream);
        logChunks(readStream);

        //const readable = Readable.from('../csv/films.csv', {encoding: 'utf8'});
        //this.assert.equal(await readableToString2(readable), 'Good morning!');
        /*
        readStream.on('open', function () {
            // This just pipes the read stream to the response object (which goes to the client)
            readStream.pipe(res);
            console.log('////// Carousel 04: Returned result.value //////');
            console.log(res);
            console.log('////////////////////////////////////////////////');
        });
        readStream.on('error', function(err) {
            res.end(err);
        });
        return res.value;
        */
    }

    getData(result) {
        this.setState({data: result.data});
        //this.setState({filmData: result.data});
    }

    async getCsvData() {
        console.log('<< Carousel 02: Getting CSV Data >>');
        let csvData = await this.fetchCsv2();
        console.log('////// Carousel 05: Returned result.value //////');
        console.log(csvData);
        console.log('////////////////////////////////////////////////');
        console.log('<< Carousel 06: Papa Parse >>');
        Papa.parse(csvData, {
            complete: this.getData
        });
    }



    render() {
        return (
            <div>
                <div className="vid-container" style={styles.vidContainer}>
                    <iframe id="vid_frame"
                            style={styles.vidContainerIframe}
                            title="Figure Man Written by Anthony Thambynayagam"
                            src="http://www.youtube.com/embed/pjMlCHCufrA?autoplay=1&rel=0&showinfo=0"
                            frameBorder="0"
                            width="100%"
                            height="100%"
                            allowFullScreen="allowFullScreen"
                            mozallowfullscreen="mozallowfullscreen"
                            msallowfullscreen="msallowfullscreen"
                            oallowfullscreen="oallowfullscreen"
                            webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>
                </div>
                <br/>
                <div>
                    <CarouselProvider
                        visibleSlides={4.12}
                        totalSlides={10}
                        step={4}
                        naturalSlideWidth={425}
                        naturalSlideHeight={500}
                        hasMasterSpinner
                    >
                        <div style={styles.sliderDiv}>

                            <Slider>

                                <Slide index={0}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={() => {
                                            document.getElementById('vid_frame').src='https://www.youtube.com/embed/pjMlCHCufrA?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                        }
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            {/*src="http://img.youtube.com/vi/{index0ytID}/0.jpg" */}
                                            <Image
                                                src="http://img.youtube.com/vi/pjMlCHCufrA/0.jpg"
                                                alt="Figure Man Written by Anthony Thambynayagam"
                                            />
                                        </div>
                                        <div
                                            className="desc"
                                            style={styles.desc}
                                        >
                                            Figure Man Written by Anthony Thambynayagam
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={1}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={() => {
                                            document.getElementById('vid_frame').src='https://www.youtube.com/embed/mCbqDuNgMp4?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                        }
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/mCbqDuNgMp4/0.jpg"
                                                alt="The Best Day of My Life by Jason Austin"
                                            />
                                        </div>
                                        <div
                                            className="desc"
                                            style={styles.desc}
                                        >
                                            The Best Day of My Life by Jason Austin
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={2}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={() => {
                                            document.getElementById('vid_frame').src='http://youtube.com/embed/DVJU9-3QHzE?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                        }
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/DVJU9-3QHzE/0.jpg"
                                                alt="Untitled by Nolan Gonzalez"
                                            />
                                        </div>
                                        <div
                                            className="desc"
                                            style={styles.desc}
                                        >
                                            Untitled by Nolan Gonzalez
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={3}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={() => {
                                            document.getElementById('vid_frame').src='http://youtube.com/embed/OgovstrZ5OU?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                        }
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/OgovstrZ5OU/0.jpg"
                                                alt="Ernest Argyros 2"
                                            />
                                        </div>
                                        <div
                                            className="desc"
                                            style={styles.desc}
                                        >
                                            Ernest Argyros 2
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={4}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={() => {
                                             document.getElementById('vid_frame').src='http://youtube.com/embed/gt9pDsYuubI?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                         }
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/gt9pDsYuubI/0.jpg"
                                                alt="Public Grief by Ali Rowenna"
                                            />
                                        </div>
                                        <div
                                            className="desc"
                                            style={styles.desc}
                                        >
                                            Our Usual Table by La Dele Sines and Alan Phillips
                                            Public Grief by Ali Rowenna
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={5}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={() => {
                                            document.getElementById('vid_frame').src='http://youtube.com/embed/hXyDYJLn_sE?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                        }
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/hXyDYJLn_sE/0.jpg"
                                                alt="Surprise in the Freezer by Corrie Greening"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Surprise in the Freezer by Corrie Greening
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={6}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={() => {
                                            document.getElementById('vid_frame').src='http://youtube.com/embed/UURuEgH2yqw?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                        }
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/UURuEgH2yqw/0.jpg"
                                                alt="Block Party by Clint Berquist Music by DUBCAR"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Block Party by Clint Berquist Music by DUBCAR
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={7}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={() => {
                                            document.getElementById('vid_frame').src='http://youtube.com/embed/JTDctcyssJM?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                        }
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/JTDctcyssJM/0.jpg"
                                                alt="Our Usual Table by La Dele Sines and Alan Phillips"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Our Usual Table by La Dele Sines and Alan Phillips
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={8}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={() => {
                                             document.getElementById('vid_frame').src='http://youtube.com/embed/jSgNTYQtolI?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                         }>
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/jSgNTYQtolI/0.jpg"
                                                alt="Leap Year MMXX by Angelina Tolentino"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Leap Year MMXX by Angelina Tolentino
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={9}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={() => {
                                             document.getElementById('vid_frame').src='http://youtube.com/embed/3ODq0UvATTc?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                         }>
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/3ODq0UvATTc/0.jpg"
                                                alt="The Big Con by Augie Pagan"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            The Big Con by Augie Pagan
                                        </div>
                                    </div>
                                </Slide>
                            </Slider>

                            <ButtonBack
                                className="buttonBack"
                                style={styles.buttonBack}
                            >
                                &#10096;
                            </ButtonBack>
                            <ButtonNext
                                className="buttonNext"
                                style={styles.buttonNext}
                            >
                                &#10097;
                            </ButtonNext>
                        </div>
                        <DotGroup className="dotGroup" style={styles.dotGroup}/>

                    </CarouselProvider>
                </div>
                <br />
            </div>
        );
    }
}

export default Carousel;
