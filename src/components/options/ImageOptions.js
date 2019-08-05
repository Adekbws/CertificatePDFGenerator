import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as eventActions from '../../actions/events';

import { Row, Col, Button} from 'react-bootstrap';

import PosOption from './elements/PosOption';

class ImageOptions extends React.Component {

  posChange(value, name) {
    this.props.changePosition(value,name);
  }

  removeImage(imageId ,event){
    
    this.props.removeOption(imageId, 'images');
  }

  render () {
    const imgProps = this.props.eventsStore.images;
    const activedOpt = this.props.eventsStore.activeOptions;
    const activatedId = parseInt(activedOpt.id);
    

    if(activatedId != null && imgProps[activatedId]){
      return (
          <div ref={this.props.myRef}>
            <Col md="12" className="d-flex align-items-center justify-content-end">
              <span className="ml-3 mr-1 text-dark">Position: </span>
              <PosOption activedOpt={activedOpt} posChange={this.posChange.bind(this)} />
              <Button onClick={this.removeImage.bind(this, activatedId)} variant="danger">X</Button>
            </Col>
          </div>
      );
    }else{
      return '';
    }
  };
}

ImageOptions.propTypes = {

}; 
const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePosition: (value,name) =>dispatch(eventActions.changePosition(value,name)),
    removeOption: (optionId, optionType) => dispatch(eventActions.removeOption(optionId, optionType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageOptions);