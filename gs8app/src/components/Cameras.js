import React from 'react';
import Button from '@material-ui/core/Button';

const parentDivStyle = {
    textAlign: 'center'
};

const rowDivStyle = {
    align: 'left',
};

const colDivStyle = {
    textAlign: 'center',
    display: 'inline-block',
    width: '10%',
};

const Cameras = () => (
    <div stylr={parentDivStyle}>
        <h1>Camera Manuals</h1>
        <div>
            <div style={rowDivStyle}>
                <div style={colDivStyle}>
                    <Button
                        href={require("../pdfManuals/bce5df_ce55933abdf744f6bb748555b90f811d.pdf")}
                    >
                        <img src={require('../img/icon_PDF.jpg')} alt='PDF icon for Canon Auto Zoom 814'/>
                    </Button>
                    <br />
                    <Button
                        size="large"
                        color="primary"
                        href={require("../pdfManuals/bce5df_ce55933abdf744f6bb748555b90f811d.pdf")}
                    >
                        Canon Auto<br />
                        Zoom 814
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <Button
                        href={require("../pdfManuals/bce5df_92e38c311f804f4eacc038bff8b7a4ce.pdf")}
                    >
                        <img src={require('../img/icon_PDF.jpg')} alt='PDF icon for Sankyo XL 300' />
                    </Button>
                    <br />
                    <Button
                        size="large"
                        color="primary"
                        href={require("../pdfManuals/bce5df_92e38c311f804f4eacc038bff8b7a4ce.pdf")}
                    >
                        Sankyo<br />
                        XL 300
                    </Button>
                </div>
                <div style={colDivStyle}>

                    <Button
                        href={require("../pdfManuals/bce5df_07361c7023864924821c4cccb1d90dd5.pdf")}
                    >
                        <img src={require('../img/icon_PDF.jpg')} alt='PDF icon for Yashica LD8' />
                    </Button>
                    <br />
                    <Button
                        size="large"
                        color="primary"
                        href={require("../pdfManuals/bce5df_07361c7023864924821c4cccb1d90dd5.pdf")}
                    >
                        Yashica LD8
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <Button
                        href={require("../pdfManuals/bce5df_cb61f2fa13d547708b9531dc112e92ab.pdf")}
                    >
                        <img src={require('../img/icon_PDF.jpg')} alt='PDF icon for Minolta XL Sound 84' />
                    </Button>
                    <br />
                    <Button
                        size="large"
                        color="primary"
                        href={require("../pdfManuals/bce5df_cb61f2fa13d547708b9531dc112e92ab.pdf")}
                    >
                        Minolta XL<br /> Sound 84
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <Button
                        href={require("../pdfManuals/bce5df_39e9dcb4a9be48c59f952ea75dcfbb6f.pdf")}
                    >
                        <img src={require('../img/icon_PDF.jpg')} alt='PDF icon for GAF XL415' />
                    </Button>
                    <br />
                    <Button
                        size="large"
                        color="primary"
                        href={require("../pdfManuals/bce5df_39e9dcb4a9be48c59f952ea75dcfbb6f.pdf")}
                    >
                        GAF XL415
                    </Button>
                </div>
            </div>

            <div style={rowDivStyle}>
                <div style={colDivStyle}>
                    <Button
                        href={require("../pdfManuals/bce5df_8efde7504d554109a1b1d15c8ed14b02.pdf")}
                    >
                        <img src={require('../img/icon_PDF.jpg')} alt='PDF icon for Nizo S40' />
                    </Button>
                    <br />
                    <Button
                        size="large"
                        color="primary"
                        href={require("../pdfManuals/bce5df_8efde7504d554109a1b1d15c8ed14b02.pdf")}
                    >
                        Nizo S40
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <Button
                        href={require("../pdfManuals/bce5df_67bc1062faac4adba6bdd8a49ca9df60.pdf")}
                    >
                        <img src={require('../img/icon_PDF.jpg')} alt='PDF icon for GAF SS805' />
                    </Button>
                    <br />
                    <Button
                        size="large"
                        color="primary"
                        href={require("../pdfManuals/bce5df_67bc1062faac4adba6bdd8a49ca9df60.pdf")}
                    >
                        GAF SS805
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <Button
                        href={require("../pdfManuals/bce5df_1cc8729033534f91b4911975501d5879.pdf")}
                    >
                        <img src={require('../img/icon_PDF.jpg')} alt='PDF icon for GAF 505XLM' />
                    </Button>
                    <br />
                    <Button
                        size="large"
                        color="primary"
                        href={require("../pdfManuals/bce5df_1cc8729033534f91b4911975501d5879.pdf")}
                    >
                        GAF 505XLM
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <Button
                        href={require("../pdfManuals/bce5df_1fbeb38d64694a359f93a0b415c4116e.pdf")}
                    >
                        <img src={require('../img/icon_PDF.jpg')} alt='PDF icon for Kodak M4' />
                    </Button>
                    <br />
                    <Button
                        size="large"
                        color="primary"
                        href={require("../pdfManuals/bce5df_1fbeb38d64694a359f93a0b415c4116e.pdf")}
                    >
                        Kodak M4
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <Button
                        href={require("../pdfManuals/bce5df_8c81c45d345d46fcb1fe318bf295d0fa.pdf")}
                    >
                        <img src={require('../img/icon_PDF.jpg')} alt='PDF icon for Canon 310XL' />
                    </Button>
                    <br />
                    <Button
                        size="large"
                        color="primary"
                        href={require("../pdfManuals/bce5df_8c81c45d345d46fcb1fe318bf295d0fa.pdf")}
                    >
                        Canon 310XL
                    </Button>
                </div>
            </div>

            <div style={rowDivStyle}>
                <div style={colDivStyle}>
                    <Button
                        href={require("../pdfManuals/bce5df_f7da7f9a9a0348e0ad0345bf7f710456.pdf")}
                    >
                        <img src={require('../img/icon_PDF.jpg')} alt='PDF icon for GAF802 Manual' />
                    </Button>
                    <br />
                    <Button
                        size="large"
                        color="primary"
                        href={require("../pdfManuals/bce5df_f7da7f9a9a0348e0ad0345bf7f710456.pdf")}
                    >
                        GAF802 Manual
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

export default Cameras;