import * as constants from '../constants';

var textId ;
var p;

const initialState = {};

export function eventsReducer(state = initialState, action) {

  textId = ((action || {}).payload || {}).textId >= 0 ? action.payload.textId : null;
  p = (action || {}).payload ? action.payload : null;

  switch (action.type) {
    case constants.CHANGE_TEXT:
      state.textProps[textId].text = p.newText;
      return { ...state, textId };

    case constants.CHANGE_FONT_FAMILY:
      state.textProps[textId].fontName = p.fontName;
      return { ...state, textId };

    case constants.CHANGE_FONT_COLOR:
      state.textProps[textId].fontColor = p.color;
      return { ...state, textId };

    case constants.CHANGE_FONT_SIZE:
      state.textProps[textId].fontSize = p.fontSize;
      return { ...state, textId };

    case constants.CHANGE_TEXT_ALIGN:
      if(p.eName){
        state.textProps[textId][p.eName+"Align"] = p.align;
      }else{
        state.textProps[textId].align = p.align;
      };
      return { ...state, textId };

    case constants.ADD_NEW_TEXT:
      state.textProps.push({ text:"<p>New Text</p>", fontName:'Roboto-Regular', fontSize: "40" });
      state.activeOptions.id = state.textProps.length-1;
      state.activeOptions.type = "text";

      return { ...state };  

    case constants.ADD_IMAGE_URL:
      state.images.push({url:p.imageURL});
      return { ...state }; 
      
    case constants.CHANGE_POSITION:
      state.activeOptions[p.name]=parseFloat(p.value);
      state.activeOptions.posToChange = true;
      return { ...state };  
      
      
    case constants.BG_CHANGE_IMAGE:
      const selectedBg = p.selectedBg;
      state.cert_background = selectedBg;
      return { ...state };

    case constants.REMOVE_OPTION:
      delete state[p.optionType][p.optionId];
      return { ...state }; 
      
    case constants.ACTIVATE_OPTION:
      state.activeOptions.id = p.optionId;
      state.activeOptions.type = p.optionType;
      return { ...state };   
      
    default:
      return state;
  }
}


