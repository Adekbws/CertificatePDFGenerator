import React from 'react';
import { connect } from 'react-redux';
import * as eventActions from '../../../actions/events';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const UrlInput = styled.input`
  display:inline-block;
  width:auto;
  margin: 0 15px;
`;


class AddUrlImage extends React.Component {

  constructor(props){
    super(props);
    this.state = {imageURL: ''};
  }

  imageExists(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
  }

  handleChange(event) {
    this.setState({imageURL: event.target.value});
  }

  getImageFromURL(event){
    event.preventDefault();
    this.imageExists(this.state.imageURL, (exist) => {
      if (exist) {
        const data = {url : this.state.imageURL}

        axios.post("/api/url-photo", data).then( res => { // then print response status
          this.props.addImageURL(res.data.fileLocalUrl);
          toast.success('upload success')
        }).catch(err => { 
          toast.error('upload fail')
        })
      
      }else{
        alert("wrong url");
      }
    })


    
  }

  render () {
    return (
      <form className="d-flex align-items-center settings" onSubmit={this.getImageFromURL.bind(this)}>
          <span>Add image from URL: </span> 
          <UrlInput className="form-control" type="text" name="imageURL" value={this.state.imageURL} onChange={this.handleChange.bind(this)}/>
          <Button  type="submit" variant="warning">Dodaj grafikę</Button>
      </form>
    );
  };
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImageURL: (imageURL) => dispatch(eventActions.addImageURL(imageURL)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUrlImage);