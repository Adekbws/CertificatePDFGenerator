import React from 'react';
import { connect } from 'react-redux';
import * as eventActions from '../../../actions/events';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';

import axios from 'axios';
import { toast } from 'react-toastify';


class AddLocalImage extends React.Component {

  constructor(props){
    super(props);
    this.progressRef = React.createRef();
    this.state = {
      selectedFile: null,
      loaded:0,
      isLoading:false
    };
  }
    // upload plikow 

    maxSelectFile=(event)=>{
      let files = event.target.files // create file object
          if (files.length > 3) { 
             const msg = 'Only 3 images can be uploaded at a time'
             event.target.value = null // discard selected file
             console.log(msg)
            return false;
   
        }
      return true;
   
   }
  
    checkMimeType=(event)=>{
      let files = event.target.files
      let err = [] // create empty array
      const types = ['image/png', 'image/jpeg', 'image/gif']
      for(var x = 0; x<files.length; x++) {
          if (types.every(type => files[x].type !== type)) {
          err[x] = files[x].type+' is not a supported format\n';
         // assign message to array
        }
      };
      for(var z = 0; z<err.length; z++) { // loop create toast massage
          event.target.value = null 
          toast.error(err[z])
      }
     return true;
    
    }
  
    checkFileSize=(event)=>{
      let files = event.target.files;
      let size = 5000000;
      let err = []; 
      for(var x = 0; x<files.length; x++) {
      if (files[x].size > size) {
        err[x] = files[x].type+'is too large, please pick a smaller file\n';
      }
      };
      for(var z = 0; z<err.length; z++) {
      toast.error(err[z])
      event.target.value = null
      }
      return true;
  
    }
  
    onChangeHandler=event=>{
      var files = event.target.files
      if(this.maxSelectFile(event) && this.checkMimeType(event) && this.checkFileSize(event)){ 
      // if return true allow to setState
         this.setState({
          selectedFile: files
        })
      }
    }
  
    onClickHandler = () => {
      const data = new FormData()
      
      for(var x = 0; x<this.state.selectedFile.length; x++) {
          data.append('file', this.state.selectedFile[x])
      }
      axios.post("/api/upload-photo", data, { 
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
            isLoading: true
          })
        },
      }).then(res => {
        this.state.isLoading = false;
        this.props.addImageURL(res.data.fileLocalUrl);
        toast.success('upload success');
      }).catch(err => { 
          toast.error('upload fail')
      })
    }

  render () {
    return (
      <div>
        <div className="form-group files color">
          <label>Upload your image from disk:</label>
          <input type="file" className="form-control" multiple onChange={this.onChangeHandler}/>
          <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
        </div>

        <div className="form-group">
          <ProgressBar className={ this.state.isLoading ? "" : "hiding"} ref={this.progressRef} max="100" variant="success" now={this.state.loaded} label={`${Math.round(this.state.loaded,2)}%` }/>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddLocalImage);