import * as constants from '../constants';

export function changeText(newText, textId) {
  return {
    type: constants.CHANGE_TEXT,
    payload: {
      newText,
      textId
    }
  }
}

export function changeFontFamily(fontName, textId) {
  return {
    type: constants.CHANGE_FONT_FAMILY,
    payload: {
      fontName,
      textId
    }
  }
}

export function changeFontColor(color, textId) {
  return {
    type: constants.CHANGE_FONT_COLOR,
    payload: {
      color,
      textId
    }
  }
}

export function changeFontSize(fontSize, textId) {
  return {
    type: constants.CHANGE_FONT_SIZE,
    payload: {
      fontSize,
      textId
    }
  }
}

export function changeTextAlign(align, textId, eName) {
  return {
    type: constants.CHANGE_TEXT_ALIGN,
    payload: {
      align,
      textId,
      eName
    }
  }
}

export function bgChangeImage(selectedBg) {
  return {
    type: constants.BG_CHANGE_IMAGE,
    payload: {
      selectedBg
    }
  }
}


export function addNewText() {
  return {
    type: constants.ADD_NEW_TEXT,
    payload: {
      
    }
  }
}

export function addImageURL(imageURL) {
  return {
    type: constants.ADD_IMAGE_URL,
    payload: {
      imageURL,
    }
  }
}

export function changePosition(value, name) {
  return {
    type: constants.CHANGE_POSITION,
    payload: {
      value,
      name
    }
  }
}

export function removeOption(optionId, optionType) {
  return {
    type: constants.REMOVE_OPTION,
    payload: {
      optionType,
      optionId
    }
  }
}

export function activateOption(optionId, optionType, event) {
  //console.log(event.clientX);
  //console.log(this);
  return {
    type: constants.ACTIVATE_OPTION,
    payload: {
      optionType,
      optionId
    }
  }
}


