const filmGalleryStyle = {
    textAlign: 'center',
    //display: 'inline-block',
    background: 'rgb(0,0,0)',
    color: 'white',
};
const vidContainerIframe = {
    position: 'relative',
    align: 'center',
    width: '50em',
    height: '37.5em',
};

const vidItem = {
    display: 'block',
    background: 'rgb(255,255,255)',
    width: '12em',
    height: '16em',
    //float: 'left',
    padding: '.3em',
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'LightGrey',
    borderRadius: '.3em',
};
const thumb = {
    height: '150px',
};
const desc = {
    color: 'black',
    fontSize: '14px',
    fontWeight: 'bold',
    overflowWrap: 'break-word',
    overflow: 'visible',
    fontFamily: 'American Typewriter'
};

const sprocPerfsFirst = {
    display: 'block',
    background: 'rgb(255,255,255)',
    width: '1em',
    height: '1em',
    float: 'left',
    marginLeft: '.6em',
    marginRight: '.76em',
    marginTop: '.2em',
    marginBottom: '.2em',
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

const sliderDiv = {
    position: 'relative',
    //width: '66em',
    width: 'auto',
    background: 'rgb(50,50,65)',
    padding: '0px .2em 0px .2em',
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'LightGrey',
};
const nextBackDiv = {
    position: 'relative',
    width: '68.9em',
    background: 'rgb(0,0,0)',
    padding: '0px 2.8em 0px 2.8em',
    //border: '1px',
    //borderStyle: 'solid',
    //borderColor: 'Red',
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
    sliderDiv,
    nextBackDiv,
};

export default Styles;
