import React from 'react';
//import Button from '@material-ui/core/Button';



import Card from '@material-ui/core/Card';
import styles from '../css/styles';

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

let filmData = {
    ytID:'123ABC$%^def',
    title:'Title goes here!',
    year:'2020',
    tags:['First tag', 'Second tag', 'Third tag', 'Fourth tag', 'etc...'],
};

class Carousel2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTags: [],
            filmData: [],

        };
    }


    /*
        getTags = async () => {
            console.log('clicked getTags');
            this.setState({ isLoading: true });

            await api.getTags().then(result => {
                this.setState({
                    tags: result.data.data,
                    isLoading: false
                });
            });
        };
    */
    /*
        Table({ columns, data }) {
            // Use the state and functions returned from useTable to build your UI
            const {
                getTableProps,
                getTableBodyProps,
                headerGroups,
                rows,
                prepareRow
            } = useTable({
                columns,
                data
            });

            // Render the UI for your table
            return (
                <table {...getTableProps()}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            );
        }
    */
    render() {
        /*
        //const classes = this.useStyles();
        const { isLoading, tags } = this.state;

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true
            },
            {
                Header: 'Tag',
                accessor: 'tag',
                filterable: true
            }
        ];

        let showTable = true;
        if (!tags.length) {
            showTable = false;
        }*/

        return (
            <div>
                <Card style={styles.cardStyle}>
                    <h1>Film Gallery</h1>
                    <h2>2020 Films</h2>
                    <div className="vid-container" style={styles.vidContainer}>
                        <iframe id="vid_frame2"
                                style={styles.vidContainerIframe}
                                title="Figure Man Written by Anthony Thambynayagam"
                                src="http://www.youtube.com/embed/pjMlCHCufrA?rel=0&fs=1&showinfo=0&autohide=1"
                                frameBorder="0"
                                width="100%"
                                height="100%"
                                allowfullscreen="allowfullscreen"
                                mozallowfullscreen="mozallowfullscreen"
                                msallowfullscreen="msallowfullscreen"
                                oallowfullscreen="oallowfullscreen"
                                webkitallowfullscreen="webkitallowfullscreen">
                        </iframe>
                    </div>
                    <br/>
                    <div>
                        <CarouselProvider
                            visibleSlides={4.5}
                            totalSlides={10}
                            step={4}
                            naturalSlideWidth={425}
                            naturalSlideHeight={500}
                            hasMasterSpinner
                        >
                            <div style={styles.sliderDiv2}>

                                <Slider>
                                    <Slide index={0}>
                                        <div
                                            className="vid-item"
                                            style={styles.vidItem}
                                            onClick={() => {
                                                document.getElementById('vid_frame2').src='https://www.youtube.com/embed/pjMlCHCufrA?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                            }
                                        >
                                            <div className="thumb" style={styles.thumb}>
                                                <Image
                                                    src="http://img.youtube.com/vi/pjMlCHCufrA/0.jpg"
                                                    alt="Figure Man Written by Anthony Thambynayagam"
                                                />
                                            </div>
                                            <div className="desc" style={styles.desc}>
                                                Figure Man Written by Anthony Thambynayagam
                                            </div>
                                        </div>
                                    </Slide>

                                    <Slide index={1}>
                                        <div
                                            className="vid-item"
                                            style={styles.vidItem}
                                            onClick={() => {
                                                document.getElementById('vid_frame2').src='https://www.youtube.com/embed/mCbqDuNgMp4?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                            }
                                        >
                                            <div className="thumb" style={styles.thumb}>
                                                <Image
                                                    src="http://img.youtube.com/vi/mCbqDuNgMp4/0.jpg"
                                                    alt="The Best Day of My Life by Jason Austin"
                                                />
                                            </div>
                                            <div className="desc" style={styles.desc}>
                                                The Best Day of My Life by Jason Austin
                                            </div>
                                        </div>
                                    </Slide>

                                    <Slide index={2}>
                                        <div
                                            className="vid-item"
                                            style={styles.vidItem}
                                            onClick={() => {
                                                document.getElementById('vid_frame2').src='http://youtube.com/embed/DVJU9-3QHzE?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                            }
                                        >
                                            <div className="thumb" style={styles.thumb}>
                                                <Image
                                                    src="http://img.youtube.com/vi/DVJU9-3QHzE/0.jpg"
                                                    alt="Untitled by Nolan Gonzalez"
                                                />
                                            </div>
                                            <div className="desc" style={styles.desc}>
                                                Untitled by Nolan Gonzalez
                                            </div>
                                        </div>
                                    </Slide>

                                    <Slide index={3}>
                                        <div
                                            className="vid-item"
                                            style={styles.vidItem}
                                            onClick={() => {
                                                document.getElementById('vid_frame2').src='http://youtube.com/embed/OgovstrZ5OU?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                            }
                                        >
                                            <div className="thumb" style={styles.thumb}>
                                                <Image
                                                    src="http://img.youtube.com/vi/OgovstrZ5OU/0.jpg"
                                                    alt="Ernest Argyros 2"
                                                />
                                            </div>
                                            <div className="desc" style={styles.desc}>
                                                Ernest Argyros 2
                                            </div>
                                        </div>
                                    </Slide>

                                    <Slide index={4}>
                                        <div className="vid-item"
                                             style={styles.vidItem}
                                             onClick={() => {
                                                 document.getElementById('vid_frame2').src='http://youtube.com/embed/gt9pDsYuubI?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                             }
                                        >
                                            <div className="thumb" style={styles.thumb}>
                                                <Image
                                                    src="http://img.youtube.com/vi/gt9pDsYuubI/0.jpg"
                                                    alt="Public Grief by Ali Rowenna"
                                                />
                                            </div>
                                            <div className="desc" style={styles.desc}>Our Usual Table by La Dele Sines and Alan Phillips
                                                Public Grief by Ali Rowenna
                                            </div>
                                        </div>
                                    </Slide>

                                    <Slide index={5}>
                                        <div
                                            className="vid-item"
                                            style={styles.vidItem}
                                            onClick={() => {
                                                document.getElementById('vid_frame2').src='http://youtube.com/embed/hXyDYJLn_sE?autoplay=1&rel=0&showinfo=0&autohide=1'}
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
                                                document.getElementById('vid_frame2').src='http://youtube.com/embed/UURuEgH2yqw?autoplay=1&rel=0&showinfo=0&autohide=1'}
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
                                                document.getElementById('vid_frame2').src='http://youtube.com/embed/JTDctcyssJM?autoplay=1&rel=0&showinfo=0&autohide=1'}
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
                                                 document.getElementById('vid_frame2').src='http://youtube.com/embed/jSgNTYQtolI?autoplay=1&rel=0&showinfo=0&autohide=1'}
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
                                                 document.getElementById('vid_frame2').src='http://youtube.com/embed/3ODq0UvATTc?autoplay=1&rel=0&showinfo=0&autohide=1'}
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
                                    style={styles.buttonBack2}
                                >
                                    &#10096;
                                </ButtonBack>
                                <ButtonNext
                                    className="buttonNext"
                                    style={styles.buttonNext2}
                                >
                                    &#10097;
                                </ButtonNext>
                            </div>
                            <DotGroup className="dotGroup" style={styles.dotGroup}/>

                        </CarouselProvider>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Carousel2;
