import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const MInput = styled.input`
padding-left: 4px;
padding-right: 4px;
width: 75px;
display: inline-block;
margin: 0 5px;
`;


class PosOption extends React.Component {

  inputNumberValid(e){
    let value = e.target.value;
    const name = e.target.name;
    if(value > 999){
      value = 999;
    }
    this.props.posChange(value,name);
  }

  render () {
    return (
      <div className="d-flex">
        <MInput className="form-control" type="number" step="1" name="posX" value={this.props.activedOpt.posX || 0} onChange={this.inputNumberValid.bind(this)}/>
        <MInput className="form-control" type="number" step="1" name="posY" value={this.props.activedOpt.posY || 0} onChange={this.inputNumberValid.bind(this)}/>
      </div>
    );
  };
}

PosOption.propTypes = {
  activedOpt: PropTypes.object.isRequired, 
  posChange: PropTypes.func,
}; 

export default PosOption ;