import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/styles';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Image,
    Slide,
    Slider,
} from 'pure-react-carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


let setFilmSRC = (ytID) => {
    window.scrollTo(500, 0);
    document.getElementById('vid_frame').src =
        'https://www.youtube.com/embed/' +
        ytID +
        '?autoplay=1&rel=0&showinfo=0&autohide=1';
    console.log('Setting ytID: ' + ytID);
};

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmData: this.props.filmData,
            carouselYear: this.props.year,
            allTags: [],
            data: [],
            wWidth: window.innerWidth,
            wHeight: window.innerHeight,
            visibleSlides: 5.2,
            step: 5,
            naturalSlideWidth: 425,
            naturalSlideHeight: 650,

        };
    }

    componentDidMount() {
        /*
        componentDidMount() is invoked immediately after a component is mounted (inserted
        into the tree). Initialization that requires DOM nodes should go here. If you need
        to load data from a remote endpoint, this is a good place to instantiate the network
        request.

        This method is a good place to set up any subscriptions. If you do that, don’t forget
         to unsubscribe in componentWillUnmount().

        You may call setState() immediately in componentDidMount(). It will trigger an extra
        rendering, but it will happen before the browser updates the screen. This guarantees
        that even though the render() will be called twice in this case, the user won’t see
        the intermediate state. Use this pattern with caution because it often causes
        performance issues. In most cases, you should be able to assign the initial state
        in the constructor() instead. It can, however, be necessary for cases like modals
        and tooltips when you need to measure a DOM node before rendering something that
        depends on its size or position.
        */
        setFilmSRC('jvq7-b-Ko1g');
    }


    //https://medium.com/@josh.j.pearson/handling-iframe-loading-in-react-57f044a9d0fa
    render() {
        return (
            <div>
                <iframe
                    id="vid_frame"
                    style={styles.vidContainerIframe}
                    title="Georgetown Super 8 Film Archive"
                    src="https://youtu.be/jvq7-b-Ko1g?autoplay=1&rel=0&showinfo=0&autohide=1"
                    frameBorder="0"
                    width="640"
                    height="480"
                    allowFullScreen="allowFullScreen"
                    mozallowfullscreen="mozallowfullscreen"
                    msallowfullscreen="msallowfullscreen"
                    oallowfullscreen="oallowfullscreen"
                    webkitallowfullscreen="webkitallowfullscreen"
                />
                <br/>
                <br/>
                <div>
                    <Tabs style={styles.logoBar}>
                        <TabList>
                        {/* <------------------------ This is the first paste point ------------------------> */}


                                <Tab>
                                    <div style={styles.logos}>
                                        <img src={require("../img/2020_logo.png")} height="105" width="107"
                                             alt="2020 Films Tab"/>
                                        <br/><b>2020</b>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div style={styles.logos}>
                                        <img src={require("../img/2019_logo.png")} height="105" width="107"
                                             alt="2019 Films Tab"/>
                                    <br/><b>2019</b>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div style={styles.logos}>
                                        <img src={require("../img/2011_logo.png")} height="105" width="107"
                                             alt="2011 Films Tab"/>
                                        <br/><b>2011</b>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div style={styles.logos}>
                                        <img src={require("../img/2010_logo.png")} height="105" width="107"
                                             alt="2010 Films Tab"/>
                                    <br/><b>2010</b>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div style={styles.logos}>
                                        <img src={require("../img/2009_logo.png")} height="105" width="107"
                                             alt="2009 Films Tab"/>
                                        <br/><b>2009</b>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div style={styles.logos}>
                                        <img src={require("../img/2008_logo.png")} height="105" width="107"
                                             alt="2008 Films Tab"/>
                                        <br/><b>2008</b>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div style={styles.logos}>
                                        <img src={require("../img/2007_logo.png")} height="105" width="107"
                                             alt="2007 Films Tab"/>
                                        <br/><b>2007</b>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div style={styles.logos}>
                                        <img src={require("../img/2006_logo.png")} height="105" width="107"
                                             alt="2006 Films Tab"/>
                                        <br/><b>2006</b>
                                    </div>
                                </Tab>
                        </TabList>
                         {/* <------------------------ This is the second paste point ------------------------> */}

                        
                        <TabPanel>
                            {/*2020*/}
                            <div style={styles.filmGalleryStyle}>
                                <CarouselProvider
                                    totalSlides={20}
                                    visibleSlides={this.state.visibleSlides}
                                    step={this.state.step}
                                    naturalSlideWidth={this.state.naturalSlideWidth}
                                    naturalSlideHeight={this.state.naturalSlideHeight}
                                    hasMasterSpinner
                                >
                                <div style={styles.nextBackDiv}>
                                    <div style={styles.sliderDiv}>
                                        <Slider>
                                            <Slide index={0}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div
                                                    className="vid-item"
                                                    style={styles.vidItem}
                                                    onClick={() => {
                                                        setFilmSRC('pjMlCHCufrA');
                                                    }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        {/*src="https://img.youtube.com/vi/{index0ytID}/0.jpg" */}
                                                        <Image
                                                            src="https://img.youtube.com/vi/pjMlCHCufrA/0.jpg"
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
                                                <br />
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>

                                            <Slide index={1}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div
                                                    className="vid-item"
                                                    style={styles.vidItem}
                                                    onClick={() => {
                                                        setFilmSRC('mCbqDuNgMp4');
                                                    }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/mCbqDuNgMp4/0.jpg"
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
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>

                                            <Slide index={2}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div
                                                    className="vid-item"
                                                    style={styles.vidItem}
                                                    onClick={() => {
                                                        setFilmSRC('nBgVaDr0l6I');
                                                    }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/nBgVaDr0l6I/0.jpg"
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
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>

                                            <Slide index={3}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div
                                                    className="vid-item"
                                                    style={styles.vidItem}
                                                    onClick={() => {
                                                        setFilmSRC('m89w7f59a6A');
                                                    }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/m89w7f59a6A/0.jpg"
                                                            alt="Ernest Argyros 2"
                                                        />
                                                    </div>
                                                    <div

                                                        style={styles.desc}
                                                    >
                                                        Chasing Terrence by Terrence Wynder Kevin Drury Kris Brown &
                                                        Ernest Argyros
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>

                                            <Slide index={4}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('gt9pDsYuubI');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/gt9pDsYuubI/0.jpg"
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
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>

                                            <Slide index={5}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div
                                                    className="vid-item"
                                                    style={styles.vidItem}
                                                    onClick={() => {
                                                        setFilmSRC('hXyDYJLn_sE');
                                                    }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/hXyDYJLn_sE/0.jpg"
                                                            alt="Surprise in the Freezer by Corrie Greening"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        Surprise in the Freezer by Corrie Greening
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>

                                            <Slide index={6}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div
                                                    className="vid-item"
                                                    style={styles.vidItem}
                                                    onClick={() => {
                                                        setFilmSRC('UURuEgH2yqw');
                                                    }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/UURuEgH2yqw/0.jpg"
                                                            alt="Block Party by Clint Berquist Music by DUBCAR"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        Block Party by Clint Berquist Music by DUBCAR
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>

                                            <Slide index={7}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div
                                                    className="vid-item"
                                                    style={styles.vidItem}
                                                    onClick={() => {
                                                        setFilmSRC('JTDctcyssJM');
                                                    }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/JTDctcyssJM/0.jpg"
                                                            alt="Our Usual Table by La Dele Sines and Alan Phillips"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        Our Usual Table by La Dele Sines and Alan Phillips
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>

                                            <Slide index={8}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('jSgNTYQtolI');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/jSgNTYQtolI/0.jpg"
                                                            alt="Leap Year MMXX by Angelina Tolentino"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        Leap Year MMXX by Angelina Tolentino
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>
                                            <Slide index={9}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('3ODq0UvATTc');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/3ODq0UvATTc/0.jpg"
                                                            alt="The Big Con by Augie Pagan"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        The Big Con by Augie Pagan
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>
                                            <Slide index={10}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('20NS42MUPBE');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/20NS42MUPBE/0.jpg"
                                                            alt="The Big Con by Augie Pagan"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        Special Olympics Basketball by Cedar Bushue
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>
                                            <Slide index={11}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('FA86M03VZgA');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/FA86M03VZgA/0.jpg"
                                                            alt="The Big Con by Augie Pagan"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        HOLD FAST by Chris Pfeifle
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>
                                            <Slide index={12}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('XmLLo9PCcYY');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/XmLLo9PCcYY/0.jpg"
                                                            alt="The Big Con by Augie Pagan"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        The Adventures of Oak and Humbug by Christopher Kimbrough &
                                                        Elahe Zare
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>
                                            <Slide index={13}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('vy4219QQ908');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/vy4219QQ908/0.jpg"
                                                            alt="The Big Con by Augie Pagan"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        The Adventures of Oak and Humbug by Christopher Kimbrough &
                                                        Elahe Zare
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>
                                            <Slide index={14}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('rfhxLAPNFzc');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/rfhxLAPNFzc/0.jpg"
                                                            alt="The Big Con by Augie Pagan"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        Return of Robot by Grant Crawford
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>
                                            <Slide index={15}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('0F0SQwkre1A');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/0F0SQwkre1A/0.jpg"
                                                            alt="The Big Con by Augie Pagan"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        Innocent Chaos by Jason Zook
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>
                                            <Slide index={16}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('6sLDxt2ZUik');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/6sLDxt2ZUik/0.jpg"
                                                            alt="The Big Con by Augie Pagan"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        Headstones by Jesse Moore and Patty Foley
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>
                                            <Slide index={17}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('_9XuTT1IqUY');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/_9XuTT1IqUY/0.jpg"
                                                            alt="The Big Con by Augie Pagan"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        West Nebraska by Just John
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>
                                            <Slide index={18}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('lZ_7x3Fddhg');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/lZ_7x3Fddhg/0.jpg"
                                                            alt="The Big Con by Augie Pagan"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        The Ghosts of GT by Hazel Lucy & Emma
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>
                                            <Slide index={19}>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                                <div className="vid-item"
                                                     style={styles.vidItem}
                                                     onClick={() => {
                                                         setFilmSRC('cSUCoi98LKY');
                                                     }}
                                                >
                                                    <div className="thumb" style={styles.thumb}>
                                                        <Image
                                                            src="https://img.youtube.com/vi/cSUCoi98LKY/0.jpg"
                                                            alt="The Big Con by Augie Pagan"
                                                        />
                                                    </div>
                                                    <div className="desc" style={styles.desc}>
                                                        ENDEMIC by Kevin Coulton
                                                    </div>
                                                </div>
                                                <div style={styles.sprocPerfsFirst}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsMid}/>
                                                <div style={styles.sprocPerfsLast}/>
                                            </Slide>
                                        </Slider>
                                    </div>
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

                                </CarouselProvider>
                                <br/>
                                <CarouselProvider
                                    totalSlides={23}
                                    visibleSlides={this.state.visibleSlides}
                                    step={this.state.step}
                                    naturalSlideWidth={this.state.naturalSlideWidth}
                                    naturalSlideHeight={this.state.naturalSlideHeight}
                                    hasMasterSpinner
                                >
                                    <div style={styles.nextBackDiv}>
                                        <div style={styles.sliderDiv}>
                                            <Slider>
                                                <Slide index={0}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('4677tCafGs8');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/4677tCafGs8/0.jpg"
                                                                alt="Purveyor of Lost Dreams by Mackenzi Wakley"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Purveyor of Lost Dreams by Mackenzi Wakley
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={1}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('HgpzVJo6L5M');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/HgpzVJo6L5M/0.jpg"
                                                                alt="Sun's there, you're just not high enough by Madison Holup"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Sun's there, you're just not high enough by Madison Holup
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={2}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('ZKZ6GaW3reI');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/ZKZ6GaW3reI/0.jpg"
                                                                alt="Georgetown: Where the Cats Play by Davis Creative Productions"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Georgetown: Where the Cats Play by Davis Creative Productions
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={3}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('jBIVtqcQKc8');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/jBIVtqcQKc8/0.jpg"
                                                                alt="A Glimpse of the Connections Museum by Neil Rhoades & Alyson Stoner-Rhoades"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            A Glimpse of the Connections Museum by Neil Rhoades & Alyson
                                                            Stoner-Rhoades
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={4}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('IV78XRDl5So');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/IV78XRDl5So/0.jpg"
                                                                alt="A Search for Community by Paul Dewald"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            A Search for Community by Paul Dewald
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={5}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('qJUBu6seFi4');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/qJUBu6seFi4/0.jpg"
                                                                alt="The Busker by Peter Reiquam"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            The Busker by Peter Reiquam
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={6}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('oDB7hpCHR6M');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/oDB7hpCHR6M/0.jpg"
                                                                alt="Sparks by Michael Campos, Lauren Harris, Jordan Maples and Ryan Rohrer"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Sparks by Michael Campos, Lauren Harris, Jordan Maples and Ryan
                                                            Rohrer
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={7}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('WlSFqFBaVKI');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/WlSFqFBaVKI/0.jpg"
                                                                alt="River City Racers by Sean Byrne"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            River City Racers by Sean Byrne
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={8}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('--faHh58Iz4');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/--faHh58Iz4/0.jpg"
                                                                alt="No Fly Zone by Trinh Duong & Rob Jellinek"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            No Fly Zone by Trinh Duong & Rob Jellinek
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={9}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('g34pD0hxkxA');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/g34pD0hxkxA/0.jpg"
                                                                alt="Frances Doesn’t Care for the Blues  by William Brandt"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Frances Doesn’t Care for the Blues by William Brandt
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={10}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('jCGknIvwYXg');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/jCGknIvwYXg/0.jpg"
                                                                alt="Flower People by Nemo Campisi"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Flower People by Nemo Campisi
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={11}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('BIcijHZbFvU');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/BIcijHZbFvU/0.jpg"
                                                                alt="Perros Manos (dog hands) by Zack Lindsey and Keturah Walker"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Perros Manos (dog hands) by Zack Lindsey and Keturah Walker
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={12}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('rlPc377aevk');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/rlPc377aevk/0.jpg"
                                                                alt="Flyght Path (or The Girl is Fly) By Tracy Thompson"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Flyght Path (or The Girl is Fly) By Tracy Thompson
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={13}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('phDhkC2S5xE');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/phDhkC2S5xE/0.jpg"
                                                                alt="THE 1979 BIZARRE by Alex Miller"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            THE 1979 BIZARRE by Alex Miller
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={14}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('GWK_LN-RTLE');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/GWK_LN-RTLE/0.jpg"
                                                                alt="Observation of Place by Alexis Wood"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Observation of Place by Alexis Wood
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={15}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('NG7kofsBQCw');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/NG7kofsBQCw/0.jpg"
                                                                alt="In the Air by Ann Sammon"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            In the Air by Ann Sammon
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={16}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('SWqxs01FK4A');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/SWqxs01FK4A/0.jpg"
                                                                alt="Untitled by Channel Horner"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Untitled by Channel Horner
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={17}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('wj2bxuFzNcM');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/wj2bxuFzNcM/0.jpg"
                                                                alt="A Hard Day's Day by Adam Walker and Charlotte Blythe"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            A Hard Day's Day by Adam Walker and Charlotte Blythe
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={18}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('dWF2buyQQVk');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/dWF2buyQQVk/0.jpg"
                                                                alt="In Search of the Perfect Beer by John Krull & Yukari Romano"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            In Search of the Perfect Beer by John Krull & Yukari Romano
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={19}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('z3u5__Ql4O4');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/z3u5__Ql4O4/0.jpg"
                                                                alt="letters to [and from] Pablo by Rana San"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            letters to [and from] Pablo by Rana San
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={20}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('aM-krzeLi14');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/aM-krzeLi14/0.jpg"
                                                                alt="The Great Paralysis by Stephen Samelko"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            The Great Paralysis by Stephen Samelko
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={21}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('5PwVZzJNoUg');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/5PwVZzJNoUg/0.jpg"
                                                                alt="The Owl & the Pussycat by Edward Lear"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            The Owl & the Pussycat by Edward Lear
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={22}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('mZGLL68-6QQ');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/mZGLL68-6QQ/0.jpg"
                                                                alt="Mystery 3 by Jenelle Sauvageau"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Mystery 3 by Jenelle Sauvageau
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>


                                            </Slider>

                                        </div>
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
                                </CarouselProvider>
                                <br/>
                            </div>
                            <br /> <br />

                        </TabPanel>
                        <TabPanel>
                            {/*2019*/}
                            <div style={styles.filmGalleryStyle}>
                                <CarouselProvider
                                    totalSlides={15}
                                    visibleSlides={this.state.visibleSlides}
                                    step={this.state.step}
                                    naturalSlideWidth={this.state.naturalSlideWidth}
                                    naturalSlideHeight={this.state.naturalSlideHeight}
                                    hasMasterSpinner
                                >
                                    <div style={styles.nextBackDiv}>
                                        <div style={styles.sliderDiv}>

                                            <Slider>

                                                <Slide index={0}>
                                                    <div style={styles.sprocPerfsFirst}></div>
                                                    <div style={styles.sprocPerfsMid}></div>
                                                    <div style={styles.sprocPerfsMid}></div>
                                                    <div style={styles.sprocPerfsMid}></div>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('vQQe83JGuuM');
                                                        }}

                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/vQQe83JGuuM/0.jpg"
                                                                alt="Duwamish Rowing Club Youth Program by Mike Merta"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Duwamish Rowing Club Youth Program by Mike Merta
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={1}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('NCDebzHXmlI');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/NCDebzHXmlI/0.jpg"
                                                                alt="Le Pickle by Anthony Thambynayagam"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Le Pickle by Anthony Thambynayagam
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={2}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('HgZedpzdwio');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/HgZedpzdwio/0.jpg"
                                                                alt="Crud, Rats & Beyond by Robert Daniels, Alison Zerbe, Josh Pollock, Brian Wisniewski, Aaron Rommel"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Crud, Rats & Beyond by Robert Daniels, Alison Zerbe, Josh
                                                            Pollock, Brian Wisniewski, Aaron Rommel
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={3}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('UH1sZFRjriY');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/UH1sZFRjriY/0.jpg"
                                                                alt="WAKE UP by The Jam Squad"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            WAKE UP by The Jam Squad
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={4}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('s1neAAjvEzg');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/s1neAAjvEzg/0.jpg"
                                                                alt="Jellybean the Sidecar Queen by Peter Reiquam"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Jellybean the Sidecar Queen by Peter Reiquam
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={5}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('XINjL0jPDQ4');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/XINjL0jPDQ4/0.jpg"
                                                                alt="Alert by Ahmad White"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Alert by Ahmad White
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={6}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('qZpTOJAyrNk');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/qZpTOJAyrNk/0.jpg"
                                                                alt="Alien Gas Mask Robot by Grant Crawford"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Alien Gas Mask Robot by Grant Crawford
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={7}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('_ZnM5wUJzB4');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/_ZnM5wUJzB4/0.jpg"
                                                                alt="Time to Spare by Katie Lewis & Reid Priewe"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Time to Spare by Katie Lewis & Reid Priewe
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={8}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('mdDlc-DaIq8');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/mdDlc-DaIq8/0.jpg"
                                                                alt="Birth of a Libation II: Who’s Yer Mama by Amee Shepard"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Birth of a Libation II: Who’s Yer Mama by Amee Shepard
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={9}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('FjjK5Nt-WJk');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/FjjK5Nt-WJk/0.jpg"
                                                                alt="Masters of the Universe of Guitars, Dogs, Hats, and Boots by Adam Walker"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Masters of the Universe of Guitars, Dogs, Hats, and Boots by
                                                            Adam Walker
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={10}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('EB_4uAI2gzg');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/EB_4uAI2gzg/0.jpg"
                                                                alt="PNW Grrrls by Madison Holup"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            PNW Grrrls by Madison Holup
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={11}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('DReXr6rvscE');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/DReXr6rvscE/0.jpg"
                                                                alt="The Life and Times of Mr. Plumbean by Jake and Emmett Bookwalter"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            The Life and Times of Mr. Plumbean by Jake and Emmett Bookwalter
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={12}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('Q00LdMynhkc');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/Q00LdMynhkc/0.jpg"
                                                                alt="The Only Cure for Love by Ella E. Anderson, Alexzandyr Biernat"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            The Only Cure for Love by Ella E. Anderson, Alexzandyr Biernat
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={13}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('j4RPub-XlCw');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/j4RPub-XlCw/0.jpg"
                                                                alt="Iron Rising By Kasey Williams"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Iron Rising By Kasey Williams
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={14}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('2qERqHa8HHg');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/2qERqHa8HHg/0.jpg"
                                                                alt="PINLAND EMPIRE by Kevin Coulton"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            PINLAND EMPIRE by Kevin Coulton
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                            </Slider>


                                        </div>
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
                                </CarouselProvider>
                                <br />

                                <CarouselProvider
                                    totalSlides={16}
                                    visibleSlides={this.state.visibleSlides}
                                    step={this.state.step}
                                    naturalSlideWidth={this.state.naturalSlideWidth}
                                    naturalSlideHeight={this.state.naturalSlideHeight}
                                    hasMasterSpinner
                                >
                                    <div style={styles.nextBackDiv}>
                                        <div style={styles.sliderDiv}>
                                            <Slider>
                                                <Slide index={0}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('prUpHa0XyIw');
                                                        }}

                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/prUpHa0XyIw/0.jpg"
                                                                alt="SUPER NATURAL by Wittman Estes Architecture + Landscape"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            SUPER NATURAL by Wittman Estes Architecture + Landscape
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={1}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('6VJG2Jb5JmA');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/6VJG2Jb5JmA/0.jpg"
                                                                alt="deadalive by Tammy Martin"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            deadalive by Tammy Martin
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={2}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('TGQFcohx5SA');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/TGQFcohx5SA/0.jpg"
                                                                alt="Making Money by Bryan Allan Krauss"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Making Money by Bryan Allan Krauss
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={3}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('Lh_QBcA39K0');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/Lh_QBcA39K0/0.jpg"
                                                                alt="Georgetown Papers by Kris Brown, Ernest Argyros, Joseph Burchetta & John Flowers"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Georgetown Papers by Kris Brown, Ernest Argyros, Joseph
                                                            Burchetta & John Flowers
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={4}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('W1cjdIR7vcw');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/W1cjdIR7vcw/0.jpg"
                                                                alt="Allegory of the Pinball by Neil Rhoades and Alyson Stoner-Rhoades"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Allegory of the Pinball by Neil Rhoades and Alyson
                                                            Stoner-Rhoades
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={5}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('cvNjrJoYIjY');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/cvNjrJoYIjY/0.jpg"
                                                                alt="Gorgetown by Simone Sweet-Chavez and her parents"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Gorgetown by Simone Sweet-Chavez and her parents
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={6}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('dXy72g4D244');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/dXy72g4D244/0.jpg"
                                                                alt="Private Video"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Private Video
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={7}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={() => {
                                                            setFilmSRC('-QOghA9qpRY');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/-QOghA9qpRY/0.jpg"
                                                                alt="Infinite Push/Pull by Ali Rowenna"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Infinite Push/Pull by Ali Rowenna
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>

                                                <Slide index={8}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('CR-gnHw--mc');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/CR-gnHw--mc/0.jpg"
                                                                alt="Foreign and Familiar. by Brad Curran"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Foreign and Familiar. by Brad Curran
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={9}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('Hl712CFrnr0');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/Hl712CFrnr0/0.jpg"
                                                                alt="Georgetown Roundup by Corinne Arnold & John Colter Arnold"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Georgetown Roundup by Corinne Arnold & John Colter Arnold
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={10}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('p0SxtriJVd4');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/p0SxtriJVd4/0.jpg"
                                                                alt="Then and Now by Lovelee"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Then and Now by Lovelee
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={11}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('QVp30Ic52D8');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/QVp30Ic52D8/0.jpg"
                                                                alt="Live and Let Dive by Jordan Pasek"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Live and Let Dive by Jordan Pasek
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={12}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('eNS6GyzXqVI');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/eNS6GyzXqVI/0.jpg"
                                                                alt="Transportation by Ion Gardescu"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Transportation by Ion Gardescu
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={13}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('b4Wj_uDVQmI');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/b4Wj_uDVQmI/0.jpg"
                                                                alt="Flora By Mike Poetzel"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Flora By Mike Poetzel
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={14}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('bsAjP_1WOrI');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/bsAjP_1WOrI/0.jpg"
                                                                alt="Duwamish Valley Youth Corps"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Duwamish Valley Youth Corps
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                                <Slide index={15}>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={() => {
                                                             setFilmSRC('XwN4pUY0y-8');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="https://img.youtube.com/vi/XwN4pUY0y-8/0.jpg"
                                                                alt="The Stallion by Laura C Wright"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            The Stallion by Laura C Wright
                                                        </div>
                                                    </div>
                                                    <div style={styles.sprocPerfsFirst}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsMid}/>
                                                    <div style={styles.sprocPerfsLast}/>
                                                </Slide>
                                            </Slider>

                                        </div>
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
                                </CarouselProvider>
                                <br/>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            {/*2011*/}
   {/* <------------------------ This is the third paste point ------------------------> */}


                            <h2>Coming soon!</h2>
                        </TabPanel>
                        <TabPanel>
                            {/*2010*/}
   {/* <------------------------ This is the third paste point ------------------------> */}


                            <h2>Coming soon!</h2>
                        </TabPanel>
                        <TabPanel>
                            {/*2009*/}
   {/* <------------------------ This is the third paste point ------------------------> */}


                            <h2>Coming soon!</h2>
                        </TabPanel>
                        <TabPanel>
                            {/*2008*/}
   {/* <------------------------ This is the third paste point ------------------------> */}

                            <h2>Coming soon!</h2>
                        </TabPanel>
                        <TabPanel>
                            {/*2007*/}
   {/* <------------------------ This is the third paste point ------------------------> */}

                            
                            <h2>Coming soon!</h2>
                        </TabPanel>
                        <TabPanel>
                            {/*2006*/}
   {/* <------------------------ This is the third paste point ------------------------> */}

                            
                            <h2>Coming soon!</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
};

Carousel.propTypes = {
    filmData: PropTypes.array,
};

export default Carousel;
