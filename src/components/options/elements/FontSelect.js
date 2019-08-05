import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledSelect = styled.select`
width:150px;
margin:0 5px;
color:red;
padding-top: 8px;
padding-bottom: 8px;
padding-left: 16px;
padding-right: 16px;
`

const FontSelect = (props) => {
  return (
    <StyledSelect className="form-control" value={props.initfont} onChange={props.fontChange.bind(this, props.textId)}>
        {props.font_files.map((item, index) => {
            return (
                <option key={index} value={item}>{item}</option>
            );
        })}
    </StyledSelect>
  );
};

/*
EventItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onDeleteClicked: PropTypes.func.isRequired
}; */

export default FontSelect;