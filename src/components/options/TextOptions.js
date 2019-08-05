import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as eventActions from '../../actions/events';

import { Row, Col, Button} from 'react-bootstrap';

import SelectFontSize from './elements/SelectFontSize';
import FontSelect from './elements/FontSelect';
import ColorPicker from './elements/ColorPicker';
import PosOption from './elements/PosOption';

import trash from '../../img/trash.png';


import { Editor } from '@tinymce/tinymce-react';
import'../../frameworks/tinymce/skins/ui/oxide/skin.min.css'; ///dodac dobrze css-y wziac pod uwage czy nie w componentdidmount



const TrashButton = styled.button`
background-image: url(${trash});
background-size:100%;
bacground-position:center;
height:38px;
width:38px;
border: 0;
border-radius:5px;
cursor:pointer;
`;

class TextOptions extends React.Component {

  
  handleEditorChange = (content, editor) => {
    const newText = content;
      const textId = this.props.eventsStore.activeOptions.id;
      if(this.props.eventsStore.textProps[textId])
        this.props.changeText(newText, textId);
  }

  changeText(event){
    event.preventDefault();
    const newText = event.target.value;

    const textId = this.props.eventsStore.activeOptions.id;
    this.props.changeText(newText, textId);
  }

  fontChange(textId, event) {
    event.preventDefault();
    const selectedFont = event.target.value;
    this.props.changeFontFamily(selectedFont, textId);
    
  }

  fontSizeChange(textId, size) {
    this.props.changeFontSize(size, textId);
  }
    
  colorChange(textId, color, event) {
    this.props.changeFontColor(color, textId);
  }

  textAlignChange(textId, eName = null, event) {
    const align = event.target.value;
    this.props.changeTextAlign(align, textId, eName);
  }
  posChange(value, name) {
    this.props.changePosition(value,name);
  }

  removeText(textId ,event){
    this.props.removeOption(textId, 'textProps');
  }
  
  render () {
    const textProps = this.props.eventsStore.textProps;
    const activedOpt = this.props.eventsStore.activeOptions;
    const activedOptId = parseInt(activedOpt.id);
    
    if(activedOptId != null && textProps[activedOptId]){
      return (
          <div ref={this.props.myRef} className="option-row">
            <Col md="4" className="d-flex align-items-center">
                <Editor
                  apiKey="mt9irt8330ipqetnomhh5t3t9mdgtg22ga8hwzdulizgyzkm"
                  id="tiny-mce-option"
                  value={textProps[activedOptId].text}
                  init={{
                    plugins: 'link image code',
                    width : '100%',
                    height: 100,
                    max_height: 200,
                    menubar: false,
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
                    font_formats: 'Arial=arial,helvetica,sans-serif;'
                  }}
                  onEditorChange={this.handleEditorChange}
                />
            </Col>
            <Col xs="8" className="d-flex align-items-center">
                <FontSelect textId={activedOptId} font_files={this.props.font_files} fontChange={this.fontChange.bind(this)} initfont={textProps[activedOptId].fontName} ></FontSelect>
                <SelectFontSize min={1} max={200} value={textProps[activedOptId].fontSize} textId={activedOptId} fontSizeChange={this.fontSizeChange.bind(this)}/>
              <span className="ml-3 mr-1 text-dark">Color: </span>
              <ColorPicker params={textProps[activedOptId]} textId={activedOptId} colorChange={this.colorChange.bind(this)} />
              <span className="ml-3 mr-1 text-dark">Position: </span>
              <PosOption activedOpt={activedOpt} posChange={this.posChange.bind(this)} />
              <TrashButton onClick={this.removeText.bind(this, activedOptId)} ></TrashButton>
            </Col>
            <div className="margin-row"></div>
          </div>
      );
    }else{
      return '';
    }
  };
}

TextOptions.propTypes = {
  font_files: PropTypes.array
}; 
const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFontFamily: (selectedFont, textId) => dispatch(eventActions.changeFontFamily(selectedFont, textId)),
    changeFontColor: (color, textId) => dispatch(eventActions.changeFontColor(color, textId)),
    changeFontSize: (fontSize, textId) => dispatch(eventActions.changeFontSize(fontSize, textId)),
    changeText: (newText, textId) => dispatch(eventActions.changeText(newText, textId)),
    changeTextAlign: (align, textId, eName) => dispatch(eventActions.changeTextAlign(align, textId, eName)),
    changeMargin: (m_size, m_name, textId) => dispatch(eventActions.changeMargin(m_size, m_name, textId)),
    removeOption: (optionId, optionType) => dispatch(eventActions.removeOption(optionId, optionType)),
    changePosition: (value,name) =>dispatch(eventActions.changePosition(value,name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextOptions);