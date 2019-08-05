import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ChromePicker } from 'react-color';

const dataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==";

class ServerCanvas {
    constructor() {
        this.toDataURL = () => dataUrl;
        this.getContext = () => ({
            fillRect: () => {},
            translate: () => {}
        });
    }
}


let ColorDiv = styled.div`
position:relative;
display:flex;
aligin-items:center;
margin: 0 5px;
.swatch{
  display: flex;
  align-items: center;
  height:32px;
  padding: 5px;
  background: #fff;
  borderRadius: 1px;
  boxShadow: 0 0 0 1px rgba(0,0,0,.1);
  cursor: pointer;
}
.popover{
  position: absolute;
  zIndex: 2;
}
`;

let ColorView = styled.div.attrs(
  props => ({
    style: {
      background: `rgba(${ props.color.r }, ${ props.color.g }, ${ props.color.b }, ${ props.color.a })`
  }})
)`
  width: 36px;
  height: 14px;
  borderRadius: 2px;
`


class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '0',
      g: '0',
      b: '0',
      a: '1',
    },
  };

  constructor(props) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }


  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({displayColorPicker: false})
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };
  
  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };
  
  handleChange = (textId, color) => {
    this.props.colorChange.call(this, textId, color.rgb);
  };

  render() {
    return (
      <ColorDiv ref={node => {this.wrapperRef = node}} >
          <div className='swatch' onClick={ this.handleClick }>
            <ColorView color={this.props.params.fontColor || this.state.color}/>
          </div>
          { this.state.displayColorPicker ? <div className='popover'>
            <div className='cover' onClick={ this.handleClose }/>
            <ChromePicker  color={this.props.params.fontColor || this.state.color} onChange={this.handleChange.bind(this, this.props.textId)} renderers={{canvas: ServerCanvas}} />
          </div> : null }
      </ColorDiv>
    )
  }
}



ColorPicker.propTypes = {
  params: PropTypes.object, 
  textId: PropTypes.number.isRequired,
  colorChange: PropTypes.func,
}; 

export default ColorPicker;