import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { PDFExport } from '@progress/kendo-react-pdf';

import DragRes from '../options/elements/DragRes';

import "../../css/style.scss";
import "../../css/ReactToastify.css";


import * as eventActions from '../../actions/events';

import TextOptions from '../options/TextOptions';
import BackgroundOptions from '../options/BackgroundOptions'
import AddUrlImage from '../options/elements/AddUrlImage'
import AddLocalImage from '../options/elements/AddLocalImage'
import ImageOptions from '../options/ImageOptions';

const background_files = require.context('../../img/backgrounds', true);

const filePath = (file_context, name) => {
  try {
    return file_context(name, true);
   }
   catch (e) {
    console.warn('problem z wgraniem pliku: '+name);
    return false;
   }
};

const TitleHead = styled.h1.attrs(
  props => {
      const f = props.textProps;
      return ({style: {
        color: `${f.fontColor ? `rgba(${ f.fontColor.r }, ${ f.fontColor.g }, ${ f.fontColor.b }, ${ f.fontColor.a })` : 'black'}`,
        fontFamily: `${f.fontName ? f.fontName : "Arial"} , sans-serif`,
        fontSize: `${f.fontSize ? f.fontSize+"px" : "16px"}`,
        textAlign: `${f.align ? f.align : "Center"}`,
      }})
  }
)`
height: 100%;
overflow:hidden;
white-space: pre-wrap;
span{
  cursor: text;
}
`;


const AddedImage = styled.img.attrs(
  props => {
      const img = props.imageProps;
      return ({style: {
        top: `${img.p_t ? img.p_t+"px" : "auto"}`,
        right: `${img.p_r ? img.p_r+"px" : "auto"}`,
        bottom: `${img.p_b ? img.p_b+"px" : "auto"}`,
        left: `${img.p_l ? img.p_l+"px" : "auto"}`,

      }})
  }
)`
display: inline-block;
width: 100%;
height: 100%;
object-fit: contain;
cursor:pointer;
&:hover{
  outline: solid 1px rgba(222, 18, 71, 0.9);
}
`;

const FixedContainer = styled(Container)`  
  width: 100%;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 10px 0;
  &:before{
    content: "";
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #e4e5e7;
  }
`;

const MarginDiv = styled.div`
  margin-top:50px;
`;

const CertMainRow = styled(Row).attrs(
  props => {
    
    const bgFileName = props.bgfilename;
    if(bgFileName){
    const bgUrl = filePath(background_files, './'+bgFileName);
      return ({style: {
        backgroundImage: `url(${bgUrl ? bgUrl : ""})`  
      }})
    }
  }
)`  background-size: 100% 100%;
    justify-content:center;
    margin:0;
`;

const CertMainColumn = styled(Col).attrs(
  props => {
    const height = props.colwidth*1.4142;
      return ({style: {
        height: `${height ? height+'px' : "auto"}`  
      }})
  }
)`  position:relative;
    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0.37);
    box-shadow: 0 0 0 15px rgba(0, 255, 58, 0.45);
    width: 100%;
    padding: 50px;
`;

const TextBox = styled.div.attrs(
  props => {
    const align = props.align;
      return ({style: {
        textAlign: `${align ? align : "center"}`  
      }})
  }
)`
position: relative;
z-index: 2;
`;

class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.textCol = React.createRef();
    this.optionsPane = React.createRef();
    this.loaderBox = React.createRef();

    this.state = {
      a4Width: '',
      pdfScale:1,
    }
  }

  updateDimensions () {
    const doma = ReactDOM.findDOMNode(this.textCol.current);
    const a4Width = doma.scrollWidth;
    // 595px is 72dpi A4 paper size
    const pdfScale = 595/a4Width;

    this.setState({
      a4Width,
      pdfScale
    })
  }

  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this.textCol.current);
    const a4Width = dom.scrollWidth;
    // 595px is 72dpi A4 paper size
    const pdfScale = 595/a4Width;

    window.addEventListener("resize", this.updateDimensions.bind(this));
    document.addEventListener('click', this.handleClickOutside.bind(this));

    this.setState({
      a4Width,
      pdfScale,
      mainColDom:dom
    })
  }

  componentDidUpdate(){
    const that = this;

    setTimeout(function(){ 
      that.loaderBox.current.remove();
    }, 700);
    
  }

  componentWillUnmount () {
      window.removeEventListener("resize", this.updateDimensions);
      document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(e) {
    let x = true;
    const items = this.state.mainColDom.children;

    [].forEach.call(items, (item)=>{
      if(item.contains(e.target)){
        x=false;
      }
    })
  
    if( this.optionsPane && this.optionsPane.nodeType && this.optionsPane.contains(e.target)) x = false;
  
    if(this.props.eventsStore.activeOptions.id != null && x){
      this.props.activateOption(null, null);
    }
  }

  exportPDF = () => {
   this.resume.save();
  }
  
  render() {
    const textProps = this.props.eventsStore.textProps;

    return (
      <div>
        <div className="loader-box" ref={this.loaderBox}>
          <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
              <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
          </div>
        </div>
        <FixedContainer className="container">
        { 
          (() => {
            switch (this.props.eventsStore.activeOptions.type) {
              case 'text':
                return <TextOptions myRef={el => this.optionsPane = el} font_files={this.props.eventsStore.font_files} />
              case 'image':
                return <ImageOptions myRef={el => this.optionsPane = el} />
              default:
                return '';
            }
          })()
        }
        </FixedContainer>
        <BackgroundOptions className="first"/>
        <AddUrlImage />
        <AddLocalImage />
        <div>
          <p>Instruction: Hold Shift or Ctrl to drag items on the axis</p>
          <p>If you're done, click "Download PDF" to download the file</p>
        </div>

        <div className="form-group">
          <ToastContainer />
        </div>
       
        <Button onClick={this.exportPDF} variant="success">Download PDF</Button>
        <Button onClick={this.props.addNewText} variant="primary">Add New Text</Button>
        <MarginDiv/>
        <PDFExport paperSize={'A4'}
            fileName="_____.pdf"
            title=""
            subject=""
            keywords=""
            scale={this.state.pdfScale}
            ref={(r) => this.resume = r}>

          <CertMainRow bgfilename={this.props.eventsStore.cert_background}>
            <CertMainColumn colwidth={this.state.a4Width} ref={this.textCol} className="text-center">
              {
                (()=>{
                  return(
                    [...textProps.map((item, key) => {
                        
                      return (
                        <DragRes type="text" key={key} id={key} ><TitleHead textId={key} textProps={item} dangerouslySetInnerHTML={{__html: item.text}}></TitleHead></DragRes>
                      )
                    }),

                    ...this.props.eventsStore.images.map((image, key) => {
                      let imgKey = textProps.length+key;
                      return (
                      <DragRes type="image" key={key+1000} id={key} arrayId={key}><AddedImage src={image.url} imageProps={image} draggable="false"/></DragRes>
                      ) 
                    }) ] 

                  );
                })()
              }
            </CertMainColumn>
          </CertMainRow>

        </PDFExport>
        <MarginDiv/>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewText: () => dispatch(eventActions.addNewText()),
    addImageURL: (imageURL) => dispatch(eventActions.addImageURL(imageURL)),
    activateOption: (optionId, type, event) => dispatch(eventActions.activateOption(optionId, type, event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
