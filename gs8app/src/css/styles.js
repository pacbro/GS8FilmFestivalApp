const filmGalleryStyle = {
    textAlign: 'center',
    display: 'inline-block',
    //background: 'rgb(0,0,0)',
    color: 'white',
};

const vidContainerIframe = {
    position: 'relative',
    align: 'center',
    width: '50em',
    height: '37.5em',
    background: 'rgb(50,50,65)',
};
const sliderDiv = {
    //position: 'relative',
    width: 'auto',
    padding: '0px .2em 0px .2em',
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'LightGrey',
    background: 'rgb(50,50,65)',
};
const nextBackDiv = {
    position: 'relative',
    width: '68.9em',
    padding: '0px 2.8em 0px 2.8em',
    //border: '1px',
    //borderStyle: 'solid',
    //borderColor: 'Red',
};

const logos = {
    width: '86px',
    height: '110px',
    border: '3px solid #ccc',
    padding: '5px',
    //margin: '-9px',
    margin: '0px -9px 0px -9px',
    marginBottom: '.2em',
    borderRadius: '.3em .3em 0em 0em',
    background: 'rgb(50,50,50)',
};

const logo2011 = {
    width: '160px',
    height: '110px',
    border: '3px solid #ccc',
    padding: '25px 5px 0px 5px',
    //margin: '-9px',
    margin: '0px -9px 0px -9px',
    marginBottom: '.2em',
    borderRadius: '.3em .3em 0em 0em',
    background: 'rgb(50,50,50)',
};

const vidItem = {
    display: 'block',
    background: 'rgb(255,255,255)',
    width: '12em',
    height: '16.2em',
    float: 'left', //new
    padding: '.3em',
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'LightGrey',
    borderRadius: '.3em',
    //overflow: 'visible',
};
const thumb = {
    height: '144px',
    width: 'auto',
};
const desc = {
    color: 'black',
    fontSize: '1.1em',
    fontWeight: 'bold',
    fontFamily: 'American Typewriter'
};



const testTextDiv = {
    width: '10em',
    background: 'rgb(0,0,0)',
    border: '5px',
    borderStyle: 'solid',
    borderColor: 'Red',
    //overflow: 'hidden',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
};

const sprocPerfsFirst = {
    display: 'block',
    background: 'rgb(255,255,255)',
    width: '1em',
    height: '1em',
    float: 'left',
    margin: '.2em .76em .2em .6em',
    //marginLeft: '.6em',
    //marginRight: '.76em',
    //marginTop: '.2em',
    //marginBottom: '.2em',
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'LightGrey',
    borderRadius: '.2em',
};
const sprocPerfsMid = {
    display: 'block',
    background: 'rgb(255,255,255)',
    width: '1em',
    height: '1em',
    float: 'left',
    marginLeft: '.76em',
    marginRight: '.75em',
    marginTop: '.2em',
    marginBottom: '.2em',
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'LightGrey',
    borderRadius: '.2em',
};
const sprocPerfsLast = {
    display: 'block',
    background: 'rgb(255,255,255)',
    width: '1em',
    height: '1em',
    float: 'left',
    marginLeft: '.76em',
    marginRight: '.4em',
    marginTop: '.2em',
    marginBottom: '.2em',
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'LightGrey',
    borderRadius: '.2em',
};

const buttonBack = {
    position: 'absolute',
    textAlign: 'center',
    fontSize: '32px',
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'LightGrey',
    left:-0,
    top: '0em',
    borderRadius: '.2em 0em 0em .2em',
    height: '100%',
    width: '1.4em',
};
const buttonNext = {
    position: 'absolute',
    textAlign: 'center',
    fontSize: '32px',
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'LightGrey',
    right:-0,
    top: '0em',
    borderRadius: '0em .2em .2em 0em',
    height: '100%',
    width: '1.4em',
};

const Styles = {
    filmGalleryStyle,
    vidContainerIframe,
    thumb,
    buttonNext,
    buttonBack,
    sprocPerfsFirst,
    sprocPerfsMid,
    sprocPerfsLast,
    vidItem,
    desc,
    testTextDiv,
    sliderDiv,
    nextBackDiv,
    logos,
    logo2011,
};

export default Styles;
