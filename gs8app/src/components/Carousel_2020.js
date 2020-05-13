import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class Carousel_2020 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmData: this.props.filmData,
            carouselYear: this.props.year,
            allTags: [],
            filmData: [],
            data: [],
            wWidth: window.innerWidth,
            wHeight: window.innerHeight,
        };
    }

    componentDidMount() {
        console.log('<< Carousel_2020 01: Mounted successfully >>');
    }

    /*
                <div>
                    <h1>Hideous Output block:</h1>
                    <p>Name: {this.state.filmData[0].name.toString()}</p>
                </div>

    */ 

    render() {
        return (
            <div>

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

                <h2>2020 Films</h2>
                <div style={styles.filmGalleryStyle}>
                    <CarouselProvider
                        visibleSlides={5.12}
                        totalSlides={20}
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
                                         onClick={()=>{
                                             setFilmSRC('gt9pDsYuubI');
                                         }}
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
                                        onClick={()=>{
                                            setFilmSRC('hXyDYJLn_sE');
                                        }}
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
                                        onClick={()=>{
                                            setFilmSRC('UURuEgH2yqw');
                                        }}
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
                                        onClick={()=>{
                                            setFilmSRC('JTDctcyssJM');
                                        }}
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
                                         onClick={()=>{
                                             setFilmSRC('jSgNTYQtolI');
                                         }}
                                    >
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
                                         onClick={()=>{
                                             setFilmSRC('3ODq0UvATTc');
                                         }}
                                    >
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
                                <Slide index={10}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('20NS42MUPBE');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/20NS42MUPBE/0.jpg"
                                                alt="The Big Con by Augie Pagan"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Special Olympics Basketball by Cedar Bushue
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={11}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('FA86M03VZgA');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/FA86M03VZgA/0.jpg"
                                                alt="The Big Con by Augie Pagan"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            HOLD FAST by Chris Pfeifle
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={12}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('XmLLo9PCcYY');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/XmLLo9PCcYY/0.jpg"
                                                alt="The Big Con by Augie Pagan"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            The Adventures of Oak and Humbug by Christopher Kimbrough & Elahe Zare
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={13}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('vy4219QQ908');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/vy4219QQ908/0.jpg"
                                                alt="The Big Con by Augie Pagan"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            The Adventures of Oak and Humbug by Christopher Kimbrough & Elahe Zare
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={14}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('rfhxLAPNFzc');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/rfhxLAPNFzc/0.jpg"
                                                alt="The Big Con by Augie Pagan"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Return of Robot by Grant Crawford
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={15}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('0F0SQwkre1A');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/0F0SQwkre1A/0.jpg"
                                                alt="The Big Con by Augie Pagan"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Innocent Chaos by Jason Zook
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={16}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('6sLDxt2ZUik');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/6sLDxt2ZUik/0.jpg"
                                                alt="The Big Con by Augie Pagan"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Headstones by Jesse Moore and Patty Foley
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={17}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('_9XuTT1IqUY');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/_9XuTT1IqUY/0.jpg"
                                                alt="The Big Con by Augie Pagan"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            West Nebraska  by Just John
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={18}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('lZ_7x3Fddhg');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/lZ_7x3Fddhg/0.jpg"
                                                alt="The Big Con by Augie Pagan"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            The Ghosts of GT by Hazel Lucy & Emma
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={19}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('cSUCoi98LKY');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/cSUCoi98LKY/0.jpg"
                                                alt="The Big Con by Augie Pagan"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            ENDEMIC by Kevin Coulton
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

                    <CarouselProvider
                        visibleSlides={5.12}
                        totalSlides={23}
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
                                            setFilmSRC('4677tCafGs8');
                                        }}

                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/4677tCafGs8/0.jpg"
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
                                </Slide>

                                <Slide index={1}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={()=>{
                                            setFilmSRC('HgpzVJo6L5M');
                                        }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/HgpzVJo6L5M/0.jpg"
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
                                </Slide>

                                <Slide index={2}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={()=>{
                                            setFilmSRC('ZKZ6GaW3reI');
                                        }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/ZKZ6GaW3reI/0.jpg"
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
                                </Slide>

                                <Slide index={3}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={()=>{
                                            setFilmSRC('jBIVtqcQKc8');
                                        }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/jBIVtqcQKc8/0.jpg"
                                                alt="A Glimpse of the Connections Museum by Neil Rhoades & Alyson Stoner-Rhoades"
                                            />
                                        </div>
                                        <div
                                            className="desc"
                                            style={styles.desc}
                                        >
                                            A Glimpse of the Connections Museum by Neil Rhoades & Alyson Stoner-Rhoades
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={4}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('IV78XRDl5So');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/IV78XRDl5So/0.jpg"
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
                                </Slide>

                                <Slide index={5}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={()=>{
                                            setFilmSRC('qJUBu6seFi4');
                                        }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/qJUBu6seFi4/0.jpg"
                                                alt="The Busker by Peter Reiquam"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            The Busker by Peter Reiquam
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={6}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={()=>{
                                            setFilmSRC('oDB7hpCHR6M');
                                        }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/oDB7hpCHR6M/0.jpg"
                                                alt="Sparks by Michael Campos, Lauren Harris, Jordan Maples and Ryan Rohrer"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Sparks by Michael Campos, Lauren Harris, Jordan Maples and Ryan Rohrer
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={7}>
                                    <div
                                        className="vid-item"
                                        style={styles.vidItem}
                                        onClick={()=>{
                                            setFilmSRC('WlSFqFBaVKI');
                                        }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/WlSFqFBaVKI/0.jpg"
                                                alt="River City Racers by Sean Byrne"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            River City Racers by Sean Byrne
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={8}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('--faHh58Iz4');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/--faHh58Iz4/0.jpg"
                                                alt="No Fly Zone by Trinh Duong & Rob Jellinek"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            No Fly Zone by Trinh Duong & Rob Jellinek
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={9}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('g34pD0hxkxA');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/g34pD0hxkxA/0.jpg"
                                                alt="Frances Doesn’t Care for the Blues  by William Brandt"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Frances Doesn’t Care for the Blues  by William Brandt
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={10}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('jCGknIvwYXg');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/jCGknIvwYXg/0.jpg"
                                                alt="Flower People by Nemo Campisi"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Flower People by Nemo Campisi
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={11}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('BIcijHZbFvU');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/BIcijHZbFvU/0.jpg"
                                                alt="Perros Manos (dog hands) by Zack Lindsey and Keturah Walker"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Perros Manos (dog hands) by Zack Lindsey and Keturah Walker
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={12}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('rlPc377aevk');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/rlPc377aevk/0.jpg"
                                                alt="Flyght Path (or The Girl is Fly) By Tracy Thompson"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Flyght Path (or The Girl is Fly) By Tracy Thompson
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={13}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('phDhkC2S5xE');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/phDhkC2S5xE/0.jpg"
                                                alt="THE 1979 BIZARRE by Alex Miller"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            THE 1979 BIZARRE by Alex Miller
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={14}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('GWK_LN-RTLE');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/GWK_LN-RTLE/0.jpg"
                                                alt="Observation of Place by Alexis Wood"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Observation of Place by Alexis Wood
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={15}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('NG7kofsBQCw');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/NG7kofsBQCw/0.jpg"
                                                alt="In the Air by Ann Sammon"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            In the Air by Ann Sammon
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={16}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('SWqxs01FK4A');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/SWqxs01FK4A/0.jpg"
                                                alt="Untitled by Channel Horner"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Untitled by Channel Horner
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={17}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('wj2bxuFzNcM');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/wj2bxuFzNcM/0.jpg"
                                                alt="A Hard Day's Day by Adam Walker and Charlotte Blythe"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            A Hard Day's Day by Adam Walker and Charlotte Blythe
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={18}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('dWF2buyQQVk');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/dWF2buyQQVk/0.jpg"
                                                alt="In Search of the Perfect Beer by John Krull & Yukari Romano"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            In Search of the Perfect Beer by John Krull & Yukari Romano
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={19}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('z3u5__Ql4O4');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/z3u5__Ql4O4/0.jpg"
                                                alt="letters to [and from] Pablo by Rana San"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            letters to [and from] Pablo by Rana San
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={20}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('aM-krzeLi14');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/aM-krzeLi14/0.jpg"
                                                alt="The Great Paralysis by Stephen Samelko"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            The Great Paralysis by Stephen Samelko
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={21}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('5PwVZzJNoUg');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/5PwVZzJNoUg/0.jpg"
                                                alt="The Owl & the Pussycat by Edward Lear"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            The Owl & the Pussycat by Edward Lear
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={22}>
                                    <div className="vid-item"
                                         style={styles.vidItem}
                                         onClick={()=>{
                                             setFilmSRC('mZGLL68-6QQ');
                                         }}
                                    >
                                        <div className="thumb" style={styles.thumb}>
                                            <Image
                                                src="http://img.youtube.com/vi/mZGLL68-6QQ/0.jpg"
                                                alt="Mystery 3 by Jenelle Sauvageau"
                                            />
                                        </div>
                                        <div className="desc" style={styles.desc}>
                                            Mystery 3 by Jenelle Sauvageau
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

Carousel_2020.propTypes = {
    filmData: PropTypes.array
};

export default Carousel_2020;
