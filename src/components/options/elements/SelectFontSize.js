import React from 'react';
import PropTypes from 'prop-types';

class SelectFontSize extends React.Component  {

   min = this.props.min || false;
   max = this.props.max || false;


   constructor(props){
    super(props);

    this.state = {
     value:this.props.value
    }
  }

  componentDidUpdate(){
    this.state.value = this.props.value;
  }

  decrement() {
    let newValue = this.state.value ;
    newValue--;
    newValue = this.checkValue(newValue);
    this.setValue(newValue);
  }

  increment() {
    let newValue = this.state.value ;
    newValue++;
    newValue = this.checkValue(newValue);
    this.setValue(newValue);
  }

  checkValue(size){
    let validSize = size;

    if(this.props.max && size >= this.props.max){
      validSize = this.props.max;
    }else if(this.props.min && size <= this.props.min){
      validSize = this.props.min;
    }

    return validSize;
  }

  onChange(e){
    const validSize = this.checkValue(event.target.value);
    this.setValue(validSize);
  }
  
  setValue(size){
    this.state.value = size;
    this.props.fontSizeChange.call(this, this.props.textId, size);
  }

  render () {
    return (
            <div className="select-font-size">
              <span className="input-number-decrement" onClick={this.decrement.bind(this)}>–</span>
                <input className="input-number" type="text" value={this.state.value} min={this.props.min} max={this.props.max} onChange={this.onChange.bind(this)}/>
              <span className="input-number-increment" onClick={this.increment.bind(this)}>+</span>
            </div>
    );
  }
};


SelectFontSize.propTypes = {
  textId: PropTypes.number.isRequired,
  fontSizeChange: PropTypes.func
}; 
export default SelectFontSize
