import React from 'react';
import styles from '../css/styles';
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
    document.getElementById('vid_frame').src='https://www.youtube.com/embed/'+ytID+'?autoplay=1&rel=0&showinfo=0&autohide=1';
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
    }

    componentDidMount() {
        console.log('<< Carousel 01: Mounted successfully >>');
    }



    render() {
        return (
            <div>

                <iframe id="vid_frame"
                        style={styles.vidContainerIframe}
                        title="Figure Man Written by Anthony Thambynayagam"
                        src="http://www.youtube.com/embed/pjMlCHCufrA?autoplay=1&rel=0&showinfo=0"
                        frameBorder="0"
                        width="640"
                        height="480"
                        allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen">
                </iframe>

                <h2>2020 Films</h2>
                <div style={styles.filmGalleryStyle}>
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
                                        onClick={()=>{
                                            setFilmSRC('pjMlCHCufrA');
                                        }}

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
                                        onClick={()=>{
                                            setFilmSRC('mCbqDuNgMp4');
                                        }}
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
                                        onClick={()=>{
                                            setFilmSRC('nBgVaDr0l6I');
                                        }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/nBgVaDr0l6I/0.jpg"
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
                                        onClick={()=>{
                                            setFilmSRC('m89w7f59a6A');
                                        }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/m89w7f59a6A/0.jpg"
                                                alt="Ernest Argyros 2"
                                            />
                                        </div>
                                        <div
                                            className="desc"
                                            style={styles.desc}
                                        >
                                            Chasing Terrence by Terrence Wynder Kevin Drury Kris Brown & Ernest Argyros
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
