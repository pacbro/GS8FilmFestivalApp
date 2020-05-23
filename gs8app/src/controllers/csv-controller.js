import React from 'react';
import Papa from 'papaparse';
import {withRouter} from 'react-router-dom';

/*
Notes:

add   "secure": false,  to package JSON to get proxy local file reader to work

https://stackoverflow.com/questions/49752889/how-can-i-read-a-local-file-with-papa-parse

https://www.joyofdata.de/blog/parsing-local-csv-file-with-javascript-papa-parse/

https://www.papaparse.com/docs

https://www.papaparse.com/demo
https://stackoverflow.com/questions/24841855/how-to-access-component-methods-from-outside-in-reactjs
https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b

*/

class DataController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        
        this.getCsvData();
    }

    fetchCsv() {
        return fetch('../csv/films2020.csv').then(function (response) {
            console.log("csv-controller: Fetching films2020.csv");
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result) {
                console.log("////// result.value //////");
                console.log(result.value);
                console.log("//////////////////////////");
                return decoder.decode(result.value);
            });
        });
    }

    getData(result) {
        this.setState({data: result.data});
    }

    async getCsvData() {
        let csvData = await this.fetchCsv();
        console.log("csv-controller: Papa Parse");
        Papa.parse(csvData, {
            complete: this.getData
        });
    }

    render() {
        return (
            <section className="data-controller">
                ...
            </section>
        );
    }
}

export default withRouter(DataController);