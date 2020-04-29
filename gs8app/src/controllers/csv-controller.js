import React from 'react';
import Papa from 'papaparse';
import {withRouter} from 'react-router-dom';

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
        return fetch('../csv/films.csv').then(function (response) {
            console.log("csv-controller: Fetching films.csv");
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