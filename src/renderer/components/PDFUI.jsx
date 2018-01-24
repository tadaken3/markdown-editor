import React from "react";
import Previewer from "./Previewer.jsx";
import { ipcRenderer } from "electron";

export default class PDFUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }
    
    componentDidMount() {
        const text = ipcRenderer.sendSync("REQUEST_TEXT");
        this.setState({ text });
    }
    
    render() {
        return (
            <Previewer value={ this.state.text } />
        );
    }
}
