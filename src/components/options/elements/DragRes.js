import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as eventActions from '../../../actions/events';
import styled, { createGlobalStyle } from "styled-components";

import Draggable from 'react-draggable'; // The default
import { Resizable} from 're-resizable';


class DragRes extends React.Component {


  constructor(props){
    super(props);
    this.draggOffset = React.createRef();
    this.elementRef = React.createRef();
    this.dragRef = React.createRef();
    this.srRef = React.createRef();

    this.state = {
      elementWidth:0,
      firstRender:false,
      axis:false,
      axisPosition:[],
    }
  }

  componentDidMount() {
    var that = this;

    setTimeout(function(){ 
      that.state.elementWidth = that.srRef.current.size.width;
      that.setState({
        firstRender:true
      })
    }, 700);
  }
  componentDidUpdate(){
    if(this.state.firstRender){
      this.setState({
        firstRender:false
      })
    }
  }

  resetDraggable(key,e){
    const elem = e.currentTarget.parentNode;

    this.state.axisPosition[key]={x:-elem.offsetWidth/2, y:0};
    this.setState({});
  }
  dragKeyDown(key,ref,e){
    //shift key  
    if (e.shiftKey){
        // only once pressed
        if(!e.repeat){
        //press Shift first time
        this.state.axisPosition[key]={x:ref.current.state.x, y:ref.current.state.y};
        this.setState({
          axis:"x"
        })
      }else{
        this.state.axisPosition[key]=false;
      }
    }

    if (e.ctrlKey){
        // only once pressed
        if(!e.repeat){
        //press Shift first time
        this.state.axisPosition[key]={x:ref.current.state.x, y:ref.current.state.y};
        this.setState({
          axis:"y"
        })
      }else{
        this.state.axisPosition[key]=false;
      }
    }
  }
  
  dragKeyUp(key,e){

    //shift key up
    if (e.keyCode == 16){
      this.setState({
        axis:false
      })
    }

    if (e.keyCode == 17){
      this.setState({
        axis:false
      })
    }
  }
  
  onDragging(event,elem){
    this.props.eventsStore.activeOptions.posX = elem.x;
    this.props.eventsStore.activeOptions.posY = elem.y;
  }

  setPos(dragRef){
    this.props.eventsStore.activeOptions.posX = dragRef.current.state.x;
    this.props.eventsStore.activeOptions.posY = dragRef.current.state.y;
  }

  onDragStop(key,ref,event,elem){
    var style = window.getComputedStyle(ref.current.resizable);
    var matrix = new WebKitCSSMatrix(style.webkitTransform);
    
    this.state.axisPosition[key]={x:matrix.m41, y:matrix.m42};
    this.forceUpdate();
  }
  
  getDraggablePosition(key, elemProps,activedOpt){
    const firstRender = this.state.firstRender;
    let defaultX = -(this.state.elementWidth/2) || 0 ;
    let defaultY = 0;
    
    if(elemProps && elemProps.p_l){
      defaultX = elemProps.p_l;
    }
  
    if(elemProps && elemProps.p_t){
      defaultY = elemProps.p_t;
    }

    if(firstRender) return {x:defaultX, y:defaultY};
    else if(activedOpt.id==key && activedOpt.type == this.props.type && activedOpt.posToChange){
      activedOpt.posToChange = false;
      return {x:activedOpt.posX, y:activedOpt.posY}
    }
    else if(this.state.axisPosition[key]) return this.state.axisPosition[key] ;
    else {
      return undefined;
    }   
  }

  render () {
    const key = this.props.id;
    const arrayId = this.props.arrayId
    let elemProps = this.props.eventsStore;

    if(this.props.type=="text"){
      elemProps = elemProps.textProps[key];
    }else{
      elemProps = elemProps.images[arrayId];
    }
    
    const activedOpt = this.props.eventsStore.activeOptions;
    const activatetId = activedOpt.id;
    const activatetType = activedOpt.type;
    const activeClass = (activatetId==key && activatetType==this.props.type) ? " active" : "";

      return (
        <Draggable 
        onDrag={this.onDragging.bind(this)}
        onStop={this.onDragStop.bind(this,key,this.srRef)} 
        axis={this.state.axis ? this.state.axis : "both"} 
        ref={this.dragRef} 
        key={key}  
        bounds='parent' 
        handle={'.drag-handle'} 
        position={this.getDraggablePosition.call(this,key,elemProps,activedOpt)} >
          <Resizable 
            ref={this.srRef}
            className={"res-box "+this.props.type+" "+activeClass}
            onKeyDown={this.dragKeyDown.bind(this, key, this.dragRef)} 
            onKeyUp={this.dragKeyUp.bind(this, key)} 
            tabIndex="0"
            enable={{right:true,bottom:true,bottomRight:true}} 
            bounds='parent' 
            defaultSize={{ width: this.props.type=="image" ? ((elemProps && elemProps.width) ? elemProps.width : 300) :'auto', height:'auto', }} 
            onClick={(e) => {this.setPos.call(this,this.dragRef); this.props.activateOption.call(this, key, this.props.type)}} >
              {this.props.children}
              <div className="res-pos-bt" onClick={this.resetDraggable.bind(this,key)}/>
              <div className="drag-handle"/>
          </Resizable>
        </Draggable>
      );
  };
}

DragRes.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number.isRequired
}; 
const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    activateOption: (optionId, type, event) => dispatch(eventActions.activateOption(optionId, type, event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragRes);