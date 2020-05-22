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
import Button from '@material-ui/core/Button';

import CarouselDisplay from './CarouselDisplay';

/*
let filmData = {
    ytID:'123ABC$%^def',
    title:'Title goes here!',
    year:'2020',
    tags:['First tag', 'Second tag', 'Third tag', 'Fourth tag', 'etc...'],
};
*/

let setFilmSRC = (ytID) => {
    window.scrollTo(500, 0);
    //let str = 'https://www.youtube.com/embed/'+ytID+'?autoplay=1&rel=0&showinfo=0&autohide=1';
    document.getElementById('vid_frame').src =
        'https://www.youtube.com/embed/' +
        ytID +
        '?autoplay=1&rel=0&showinfo=0&autohide=1';
};

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselYear: this.props.year,
            allTags: [],
            filmData: [],
            data: [],
            wWidth: window.innerWidth,
            wHeight: window.innerHeight,
            //year: this.props.year,
            //currentVideo: this.props.currentVideo,
            //filmData: this.props.filmData,
            iFrame: '',
        };
    }

    componentDidMount() {
        this.createIFrame(this.props.currentVideo);
        console.log('<< Carousel 01: Mounted successfully >>');
    }

    setIFrame = newIFrame => {
        this.setState({
            iFrame: newIFrame
        });
    }

    createIFrame(currentVideo) {
        let iFrame = '<iframe id="vid_frame" style ={styles.vidContainerIframe} title=';
        let iFrame2 = 'frameBorder="0" width="640" height="480" allowFullScreen="allowFullScreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe >';
        let title = '"' + this.props.currentVideo.title + ' by ' + this.props.currentVideo.creator + '" ';
        let src = 'src="http://www.youtube.com/embed/jvq7-b-Ko1g?autoplay=0&rel=0&showinfo=0" ';
        iFrame += title + src + iFrame2;
        this.setIFrame(iFrame);
    }

    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.state.iFrame }} />

                <div>
                    <Tabs>
                        <TabList>
                            <Tab>
                                <Button
                                variant="contained"
                                color="primary"
                                data-year='2020'
                                onClick={this.props.setYear}
                                >
                                    2020
                                </Button>
                            </Tab>
                            <Tab>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    data-year='2019'
                                    onClick={this.props.setYear}
                                >
                                    2019
                                </Button>
                            </Tab>
                            <Tab>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    data-year='2011'
                                    onClick={this.props.setYear}
                                >
                                    2011
                                </Button>
                            </Tab>
                            <Tab>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    data-year='2010'
                                    onClick={this.props.setYear}
                                >
                                    2010
                                </Button>
                            </Tab>
                            <Tab>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    data-year='2009'
                                    onClick={this.props.setYear}
                                >
                                    2009
                                </Button>
                            </Tab>
                            <Tab>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    data-year='2008'
                                    onClick={this.props.setYear}
                                >
                                    2008
                                </Button>
                            </Tab>
                            <Tab>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    data-year='2007'
                                    onClick={this.props.setYear}
                                >
                                    2007
                                </Button>
                            </Tab>
                            <Tab>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    data-year='2006'
                                    onClick={this.props.setYear}
                                >
                                    2006
                                </Button>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <CarouselDisplay year={'2020'} filmData={this.props.filmData}/>
                        </TabPanel>
                        {/*
                        <TabPanel>
                                <div style={styles.filmGalleryStyle}>
                                    <CarouselProvider
                                        visibleSlides={5.12}
                                        totalSlides={15}
                                        step={5}
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
                                                        onClick={()=>{
                                                            setFilmSRC('vQQe83JGuuM');
                                                        }}

                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/vQQe83JGuuM/0.jpg"
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
                                                </Slide>

                                                <Slide index={1}>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={()=>{
                                                            setFilmSRC('NCDebzHXmlI');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/NCDebzHXmlI/0.jpg"
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
                                                </Slide>

                                                <Slide index={2}>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={()=>{
                                                            setFilmSRC('HgZedpzdwio');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/HgZedpzdwio/0.jpg"
                                                                alt="Crud, Rats & Beyond by Robert Daniels, Alison Zerbe, Josh Pollock, Brian Wisniewski, Aaron Rommel"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Crud, Rats & Beyond by Robert Daniels, Alison Zerbe, Josh Pollock, Brian Wisniewski, Aaron Rommel
                                                        </div>
                                                    </div>
                                                </Slide>

                                                <Slide index={3}>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={()=>{
                                                            setFilmSRC('UH1sZFRjriY');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/UH1sZFRjriY/0.jpg"
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
                                                </Slide>

                                                <Slide index={4}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('s1neAAjvEzg');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/s1neAAjvEzg/0.jpg"
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
                                                </Slide>

                                                <Slide index={5}>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={()=>{
                                                            setFilmSRC('XINjL0jPDQ4');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/XINjL0jPDQ4/0.jpg"
                                                                alt="Alert by Ahmad White"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Alert by Ahmad White
                                                        </div>
                                                    </div>
                                                </Slide>

                                                <Slide index={6}>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={()=>{
                                                            setFilmSRC('qZpTOJAyrNk');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/qZpTOJAyrNk/0.jpg"
                                                                alt="Alien Gas Mask Robot by Grant Crawford"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Alien Gas Mask Robot by Grant Crawford
                                                        </div>
                                                    </div>
                                                </Slide>

                                                <Slide index={7}>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={()=>{
                                                            setFilmSRC('_ZnM5wUJzB4');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/_ZnM5wUJzB4/0.jpg"
                                                                alt="Time to Spare by Katie Lewis & Reid Priewe"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Time to Spare by Katie Lewis & Reid Priewe
                                                        </div>
                                                    </div>
                                                </Slide>

                                                <Slide index={8}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('mdDlc-DaIq8');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/mdDlc-DaIq8/0.jpg"
                                                                alt="Birth of a Libation II: Who’s Yer Mama by Amee Shepard"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Birth of a Libation II: Who’s Yer Mama by Amee Shepard
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={9}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('FjjK5Nt-WJk');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/FjjK5Nt-WJk/0.jpg"
                                                                alt="Masters of the Universe of Guitars, Dogs, Hats, and Boots by Adam Walker"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Masters of the Universe of Guitars, Dogs, Hats, and Boots by Adam Walker
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={10}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('EB_4uAI2gzg');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/EB_4uAI2gzg/0.jpg"
                                                                alt="PNW Grrrls by Madison Holup"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            PNW Grrrls by Madison Holup
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={11}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('DReXr6rvscE');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/DReXr6rvscE/0.jpg"
                                                                alt="The Life and Times of Mr. Plumbean by Jake and Emmett Bookwalter"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            The Life and Times of Mr. Plumbean by Jake and Emmett Bookwalter
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={12}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('Q00LdMynhkc');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/Q00LdMynhkc/0.jpg"
                                                                alt="The Only Cure for Love by Ella E. Anderson, Alexzandyr Biernat"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            The Only Cure for Love by Ella E. Anderson, Alexzandyr Biernat
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={13}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('j4RPub-XlCw');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/j4RPub-XlCw/0.jpg"
                                                                alt="Iron Rising By Kasey Williams"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Iron Rising By Kasey Williams
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={14}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('2qERqHa8HHg');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/2qERqHa8HHg/0.jpg"
                                                                alt="PINLAND EMPIRE by Kevin Coulton"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            PINLAND EMPIRE by Kevin Coulton
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

                                    </CarouselProvider>

                                    <CarouselProvider
                                        visibleSlides={5.12}
                                        totalSlides={16}
                                        step={5}
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
                                                        onClick={()=>{
                                                            setFilmSRC('prUpHa0XyIw');
                                                        }}

                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/prUpHa0XyIw/0.jpg"
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
                                                </Slide>

                                                <Slide index={1}>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={()=>{
                                                            setFilmSRC('6VJG2Jb5JmA');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/6VJG2Jb5JmA/0.jpg"
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
                                                </Slide>

                                                <Slide index={2}>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={()=>{
                                                            setFilmSRC('TGQFcohx5SA');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/TGQFcohx5SA/0.jpg"
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
                                                </Slide>

                                                <Slide index={3}>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={()=>{
                                                            setFilmSRC('Lh_QBcA39K0');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/Lh_QBcA39K0/0.jpg"
                                                                alt="Georgetown Papers by Kris Brown, Ernest Argyros, Joseph Burchetta & John Flowers"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Georgetown Papers by Kris Brown, Ernest Argyros, Joseph Burchetta & John Flowers
                                                        </div>
                                                    </div>
                                                </Slide>

                                                <Slide index={4}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('W1cjdIR7vcw');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/W1cjdIR7vcw/0.jpg"
                                                                alt="Allegory of the Pinball by Neil Rhoades and Alyson Stoner-Rhoades"
                                                            />
                                                        </div>
                                                        <div
                                                            className="desc"
                                                            style={styles.desc}
                                                        >
                                                            Allegory of the Pinball by Neil Rhoades and Alyson Stoner-Rhoades
                                                        </div>
                                                    </div>
                                                </Slide>

                                                <Slide index={5}>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={()=>{
                                                            setFilmSRC('cvNjrJoYIjY');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/cvNjrJoYIjY/0.jpg"
                                                                alt="Gorgetown by Simone Sweet-Chavez and her parents"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Gorgetown by Simone Sweet-Chavez and her parents
                                                        </div>
                                                    </div>
                                                </Slide>

                                                <Slide index={6}>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={()=>{
                                                            setFilmSRC('dXy72g4D244');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/dXy72g4D244/0.jpg"
                                                                alt="Private Video"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Private Video
                                                        </div>
                                                    </div>
                                                </Slide>

                                                <Slide index={7}>
                                                    <div
                                                        className="vid-item"
                                                        style={styles.vidItem}
                                                        onClick={()=>{
                                                            setFilmSRC('-QOghA9qpRY');
                                                        }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/-QOghA9qpRY/0.jpg"
                                                                alt="Infinite Push/Pull by Ali Rowenna"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Infinite Push/Pull by Ali Rowenna
                                                        </div>
                                                    </div>
                                                </Slide>

                                                <Slide index={8}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('CR-gnHw--mc');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/CR-gnHw--mc/0.jpg"
                                                                alt="Foreign and Familiar. by Brad Curran"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Foreign and Familiar. by Brad Curran
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={9}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('Hl712CFrnr0');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/Hl712CFrnr0/0.jpg"
                                                                alt="Georgetown Roundup by Corinne Arnold & John Colter Arnold"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Georgetown Roundup by Corinne Arnold & John Colter Arnold
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={10}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('p0SxtriJVd4');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/p0SxtriJVd4/0.jpg"
                                                                alt="Then and Now by Lovelee"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Then and Now by Lovelee
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={11}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('QVp30Ic52D8');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/QVp30Ic52D8/0.jpg"
                                                                alt="Live and Let Dive by Jordan Pasek"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Live and Let Dive by Jordan Pasek
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={12}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('eNS6GyzXqVI');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/eNS6GyzXqVI/0.jpg"
                                                                alt="Transportation by Ion Gardescu"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Transportation by Ion Gardescu
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={13}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('b4Wj_uDVQmI');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/b4Wj_uDVQmI/0.jpg"
                                                                alt="Flora By Mike Poetzel"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Flora By Mike Poetzel
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={14}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('bsAjP_1WOrI');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/bsAjP_1WOrI/0.jpg"
                                                                alt="Duwamish Valley Youth Corps"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            Duwamish Valley Youth Corps
                                                        </div>
                                                    </div>
                                                </Slide>
                                                <Slide index={15}>
                                                    <div className="vid-item"
                                                         style={styles.vidItem}
                                                         onClick={()=>{
                                                             setFilmSRC('XwN4pUY0y-8');
                                                         }}
                                                    >
                                                        <div className="thumb" style={styles.thumb}>
                                                            <Image
                                                                src="http://img.youtube.com/vi/XwN4pUY0y-8/0.jpg"
                                                                alt="The Stallion by Laura C Wright"
                                                            />
                                                        </div>
                                                        <div className="desc" style={styles.desc}>
                                                            The Stallion by Laura C Wright
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
                                    </CarouselProvider>
                                </div>
                        </TabPanel>                        
                    */ }
                    </Tabs>
                </div>
            </div>
        );
    }
}

Carousel.propTypes = {
    year: PropTypes.number,
    currentVideo: PropTypes.object,
    filmData: PropTypes.array,
    setYear: PropTypes.func
};

export default Carousel;