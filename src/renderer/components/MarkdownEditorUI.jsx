import React from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";
import style from "./MarkdownEditorUI.css"

export default class MarkdownEditorUI extends React.Component {
  render() {
    return (
        <div className={style.markdownEditor}>
            <Editor
                className={style.editorArea}
                value={this.state.text}
                onChange={this.onChangeText}
            />
            <Previewer
                className={style.previewArea}
                value={this.state.text}
            />
        </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText(e){
    this.setState({text: e.target.value});
  }
}

