webpackJsonp([1],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeText = changeText;
exports.changeFontFamily = changeFontFamily;
exports.changeFontColor = changeFontColor;
exports.changeFontSize = changeFontSize;
exports.changeTextAlign = changeTextAlign;
exports.bgChangeImage = bgChangeImage;
exports.addNewText = addNewText;
exports.addImageURL = addImageURL;
exports.changePosition = changePosition;
exports.removeOption = removeOption;
exports.activateOption = activateOption;

var _constants = __webpack_require__(327);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function changeText(newText, textId) {
  return {
    type: constants.CHANGE_TEXT,
    payload: {
      newText: newText,
      textId: textId
    }
  };
}

function changeFontFamily(fontName, textId) {
  return {
    type: constants.CHANGE_FONT_FAMILY,
    payload: {
      fontName: fontName,
      textId: textId
    }
  };
}

function changeFontColor(color, textId) {
  return {
    type: constants.CHANGE_FONT_COLOR,
    payload: {
      color: color,
      textId: textId
    }
  };
}

function changeFontSize(fontSize, textId) {
  return {
    type: constants.CHANGE_FONT_SIZE,
    payload: {
      fontSize: fontSize,
      textId: textId
    }
  };
}

function changeTextAlign(align, textId, eName) {
  return {
    type: constants.CHANGE_TEXT_ALIGN,
    payload: {
      align: align,
      textId: textId,
      eName: eName
    }
  };
}

function bgChangeImage(selectedBg) {
  return {
    type: constants.BG_CHANGE_IMAGE,
    payload: {
      selectedBg: selectedBg
    }
  };
}

function addNewText() {
  return {
    type: constants.ADD_NEW_TEXT,
    payload: {}
  };
}

function addImageURL(imageURL) {
  return {
    type: constants.ADD_IMAGE_URL,
    payload: {
      imageURL: imageURL
    }
  };
}

function changePosition(value, name) {
  return {
    type: constants.CHANGE_POSITION,
    payload: {
      value: value,
      name: name
    }
  };
}

function removeOption(optionId, optionType) {
  return {
    type: constants.REMOVE_OPTION,
    payload: {
      optionType: optionType,
      optionId: optionId
    }
  };
}

function activateOption(optionId, optionType, event) {
  //console.log(event.clientX);
  //console.log(this);
  return {
    type: constants.ACTIVATE_OPTION,
    payload: {
      optionType: optionType,
      optionId: optionId
    }
  };
}

/***/ }),

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6911da8686aa42d9a18581fb6ea58486.png";

/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(1124);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(261)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./skin.min.css", function() {
		var newContent = require("!!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/lib/loader.js!./skin.min.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(260)(false);
// Module
exports.push([module.i, "/**\n * Copyright (c) Tiny Technologies, Inc. All rights reserved.\n * Licensed under the LGPL or a commercial license.\n * For LGPL see License.txt in the project root for license information.\n * For commercial licenses see https://www.tiny.cloud/\n */\n.tox {\n  box-sizing: content-box;\n  color: #222f3e;\n  cursor: auto;\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  -webkit-tap-highlight-color: transparent;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  vertical-align: initial;\n  white-space: normal; }\n\n.tox :not(svg) {\n  box-sizing: inherit;\n  color: inherit;\n  cursor: inherit;\n  direction: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  -webkit-tap-highlight-color: inherit;\n  text-align: inherit;\n  text-decoration: inherit;\n  text-shadow: inherit;\n  text-transform: inherit;\n  vertical-align: inherit;\n  white-space: inherit; }\n\n.tox :not(svg) {\n  background: 0 0;\n  border: 0;\n  float: none;\n  height: auto;\n  margin: 0;\n  max-width: none;\n  outline: 0;\n  padding: 0;\n  position: static;\n  width: auto; }\n\n.tox:not([dir=rtl]) {\n  direction: ltr;\n  text-align: left; }\n\n.tox[dir=rtl] {\n  direction: rtl;\n  text-align: right; }\n\n.tox-tinymce {\n  border: 1px solid #ccc;\n  border-radius: 0;\n  box-shadow: none;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  overflow: hidden;\n  position: relative;\n  visibility: inherit !important; }\n\n.tox-editor-container {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  overflow: hidden; }\n\n.tox-editor-container > :first-child {\n  border-top: none !important; }\n\n.tox-tinymce-aux {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif; }\n\n.tox-tinymce :focus, .tox-tinymce-aux :focus {\n  outline: 0; }\n\nbutton::-moz-focus-inner {\n  border: 0; }\n\n.tox-silver-sink {\n  z-index: 1300; }\n\n.tox .tox-anchorbar {\n  display: flex;\n  flex: 0 0 auto; }\n\n.tox .tox-bar {\n  display: flex;\n  flex: 0 0 auto; }\n\n.tox .tox-button {\n  background-color: #207ab7;\n  background-image: none;\n  background-position: none;\n  background-repeat: none;\n  border-color: #207ab7;\n  border-radius: 3px;\n  border-style: solid;\n  border-width: 1px;\n  box-shadow: none;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 1;\n  line-height: 24px;\n  margin: 0;\n  outline: 0;\n  padding: 4px 16px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: capitalize;\n  white-space: nowrap; }\n\n.tox .tox-button[disabled] {\n  background-color: #207ab7;\n  background-image: none;\n  border-color: #207ab7;\n  box-shadow: none;\n  color: rgba(255, 255, 255, 0.5);\n  cursor: not-allowed; }\n\n.tox .tox-button:focus:not(:disabled) {\n  background-color: #1c6ca1;\n  background-image: none;\n  border-color: #1c6ca1;\n  box-shadow: none;\n  color: #fff; }\n\n.tox .tox-button:hover:not(:disabled) {\n  background-color: #1c6ca1;\n  background-image: none;\n  border-color: #1c6ca1;\n  box-shadow: none;\n  color: #fff; }\n\n.tox .tox-button:active:not(:disabled) {\n  background-color: #185d8c;\n  background-image: none;\n  border-color: #185d8c;\n  box-shadow: none;\n  color: #fff; }\n\n.tox .tox-button--secondary {\n  background-color: #f0f0f0;\n  background-image: none;\n  background-position: none;\n  background-repeat: none;\n  border-color: #f0f0f0;\n  border-radius: 3px;\n  border-style: solid;\n  border-width: 1px;\n  box-shadow: none;\n  color: #222f3e;\n  outline: 0;\n  padding: 4px 16px;\n  text-decoration: none;\n  text-transform: capitalize; }\n\n.tox .tox-button--secondary[disabled] {\n  background-color: #f0f0f0;\n  background-image: none;\n  border-color: #f0f0f0;\n  box-shadow: none;\n  color: rgba(34, 47, 62, 0.5); }\n\n.tox .tox-button--secondary:focus:not(:disabled) {\n  background-color: #e3e3e3;\n  background-image: none;\n  border-color: #e3e3e3;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-button--secondary:hover:not(:disabled) {\n  background-color: #e3e3e3;\n  background-image: none;\n  border-color: #e3e3e3;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-button--secondary:active:not(:disabled) {\n  background-color: #d6d6d6;\n  background-image: none;\n  border-color: #d6d6d6;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-button--icon, .tox .tox-button.tox-button--icon, .tox .tox-button.tox-button--secondary.tox-button--icon {\n  padding: 4px; }\n\n.tox .tox-button--icon .tox-icon svg, .tox .tox-button.tox-button--icon .tox-icon svg, .tox .tox-button.tox-button--secondary.tox-button--icon .tox-icon svg {\n  display: block;\n  fill: currentColor; }\n\n.tox .tox-button-link {\n  background: 0;\n  border: none;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.3;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap; }\n\n.tox .tox-button-link--sm {\n  font-size: 14px; }\n\n.tox .tox-button--naked {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: unset;\n  color: #222f3e; }\n\n.tox .tox-button--naked:hover:not(:disabled) {\n  background-color: #e3e3e3;\n  border-color: #e3e3e3;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-button--naked:focus:not(:disabled) {\n  background-color: #e3e3e3;\n  border-color: #e3e3e3;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-button--naked:active:not(:disabled) {\n  background-color: #d6d6d6;\n  border-color: #d6d6d6;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-button--naked .tox-icon svg {\n  fill: currentColor; }\n\n.tox .tox-button--naked.tox-button--icon {\n  color: currentColor; }\n\n.tox .tox-button--naked.tox-button--icon:hover:not(:disabled) {\n  color: #222f3e; }\n\n.tox .tox-checkbox {\n  align-items: center;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  height: 36px;\n  min-width: 36px; }\n\n.tox .tox-checkbox__input {\n  height: 1px;\n  left: -10000px;\n  overflow: hidden;\n  position: absolute;\n  top: auto;\n  width: 1px; }\n\n.tox .tox-checkbox__icons {\n  align-items: center;\n  border-radius: 3px;\n  box-shadow: 0 0 0 2px transparent;\n  box-sizing: content-box;\n  display: flex;\n  height: 24px;\n  justify-content: center;\n  padding: calc(4px - 1px);\n  width: 24px; }\n\n.tox .tox-checkbox__icons .tox-checkbox-icon__unchecked svg {\n  display: block;\n  fill: rgba(34, 47, 62, 0.3); }\n\n.tox .tox-checkbox__icons .tox-checkbox-icon__indeterminate svg {\n  display: none;\n  fill: #207ab7; }\n\n.tox .tox-checkbox__icons .tox-checkbox-icon__checked svg {\n  display: none;\n  fill: #207ab7; }\n\n.tox input.tox-checkbox__input:checked + .tox-checkbox__icons .tox-checkbox-icon__unchecked svg {\n  display: none; }\n\n.tox input.tox-checkbox__input:checked + .tox-checkbox__icons .tox-checkbox-icon__checked svg {\n  display: block; }\n\n.tox input.tox-checkbox__input:indeterminate + .tox-checkbox__icons .tox-checkbox-icon__unchecked svg {\n  display: none; }\n\n.tox input.tox-checkbox__input:indeterminate + .tox-checkbox__icons .tox-checkbox-icon__indeterminate svg {\n  display: block; }\n\n.tox input.tox-checkbox__input:focus + .tox-checkbox__icons {\n  border-radius: 3px;\n  box-shadow: inset 0 0 0 1px #207ab7;\n  padding: calc(4px - 1px); }\n\n.tox:not([dir=rtl]) .tox-checkbox__label {\n  margin-left: 4px; }\n\n.tox:not([dir=rtl]) .tox-bar .tox-checkbox {\n  margin-left: 4px; }\n\n.tox[dir=rtl] .tox-checkbox__label {\n  margin-right: 4px; }\n\n.tox[dir=rtl] .tox-bar .tox-checkbox {\n  margin-right: 4px; }\n\n.tox .tox-collection--toolbar .tox-collection__group {\n  display: flex;\n  padding: 0; }\n\n.tox .tox-collection--grid .tox-collection__group {\n  display: flex;\n  flex-wrap: wrap;\n  max-height: 208px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 0; }\n\n.tox .tox-collection--list .tox-collection__group {\n  border-bottom-width: 0;\n  border-color: #ccc;\n  border-left-width: 0;\n  border-right-width: 0;\n  border-style: solid;\n  border-top-width: 1px;\n  padding: 4px 0; }\n\n.tox .tox-collection--list .tox-collection__group:first-child {\n  border-top-width: 0; }\n\n.tox .tox-collection__group-heading {\n  background-color: #e6e6e6;\n  color: rgba(34, 47, 62, 0.7);\n  cursor: default;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  margin-bottom: 4px;\n  margin-top: -4px;\n  padding: 4px 8px;\n  text-transform: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.tox .tox-collection__item {\n  align-items: center;\n  color: #222f3e;\n  cursor: pointer;\n  display: flex;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.tox .tox-collection--list .tox-collection__item {\n  padding: 4px 8px; }\n\n.tox .tox-collection--toolbar .tox-collection__item {\n  border-radius: 3px;\n  padding: 4px; }\n\n.tox .tox-collection--grid .tox-collection__item {\n  border-radius: 3px;\n  padding: 4px; }\n\n.tox .tox-collection--list .tox-collection__item--enabled {\n  background-color: inherit;\n  color: contrast(inherit, #222f3e, #fff); }\n\n.tox .tox-collection--list .tox-collection__item--active:not(.tox-collection__item--state-disabled) {\n  background-color: #dee0e2;\n  color: #222f3e; }\n\n.tox .tox-collection--toolbar .tox-collection__item--enabled {\n  background-color: #c8cbcf;\n  color: #222f3e; }\n\n.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--state-disabled) {\n  background-color: #dee0e2;\n  color: #222f3e; }\n\n.tox .tox-collection--grid .tox-collection__item--enabled {\n  background-color: #c8cbcf;\n  color: #222f3e; }\n\n.tox .tox-collection--grid .tox-collection__item--active:not(.tox-collection__item--state-disabled) {\n  background-color: #dee0e2;\n  color: #222f3e; }\n\n.tox .tox-collection__item--state-disabled {\n  background-color: transparent;\n  color: rgba(34, 47, 62, 0.5);\n  cursor: default; }\n\n.tox .tox-collection__item-icon {\n  align-items: center;\n  display: flex;\n  height: 24px;\n  justify-content: center;\n  width: 24px; }\n\n.tox .tox-collection__item-icon svg {\n  fill: currentColor; }\n\n.tox .tox-collection--toolbar-lg .tox-collection__item-icon {\n  height: 48px;\n  width: 48px; }\n\n.tox .tox-collection__item[role=menuitemcheckbox]:not(.tox-collection__item--enabled) .tox-collection__item-checkmark svg {\n  display: none; }\n\n.tox .tox-collection__item-label {\n  color: currentColor;\n  display: inline-block;\n  flex: 1;\n  -ms-flex-preferred-size: auto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n  text-transform: none;\n  word-break: break-all; }\n\n.tox .tox-collection__item-accessory {\n  color: rgba(34, 47, 62, 0.7);\n  display: inline-block;\n  font-size: 14px;\n  height: 24px;\n  line-height: 24px;\n  text-transform: normal; }\n\n.tox .tox-collection__item-caret {\n  align-items: center;\n  display: flex;\n  min-height: 24px; }\n\n.tox .tox-collection__item-caret::after {\n  content: '';\n  font-size: 0;\n  min-height: inherit; }\n\n.tox:not([dir=rtl]) .tox-collection--list .tox-collection__item > :not(:first-child) {\n  margin-left: 8px; }\n\n.tox:not([dir=rtl]) .tox-collection--list .tox-collection__item-label:first-child {\n  margin-left: 4px; }\n\n.tox:not([dir=rtl]) .tox-collection__item-accessory {\n  margin-left: 16px;\n  text-align: right; }\n\n.tox:not([dir=rtl]) .tox-collection__item-caret {\n  margin-left: 16px; }\n\n.tox[dir=rtl] .tox-collection--list .tox-collection__item > :not(:first-child) {\n  margin-right: 8px; }\n\n.tox[dir=rtl] .tox-collection--list .tox-collection__item-label:first-child {\n  margin-right: 4px; }\n\n.tox[dir=rtl] .tox-collection__item-icon-rtl .tox-collection__item-icon svg {\n  transform: rotateY(180deg); }\n\n.tox[dir=rtl] .tox-collection__item-accessory {\n  margin-right: 16px;\n  text-align: left; }\n\n.tox[dir=rtl] .tox-collection__item-caret {\n  margin-right: 16px;\n  transform: rotateY(180deg); }\n\n.tox .tox-color-picker-container {\n  display: flex;\n  flex-direction: row;\n  height: 225px;\n  margin: 0; }\n\n.tox .tox-sv-palette {\n  box-sizing: border-box;\n  display: flex;\n  height: 100%; }\n\n.tox .tox-sv-palette-spectrum {\n  height: 100%; }\n\n.tox .tox-sv-palette, .tox .tox-sv-palette-spectrum {\n  width: 225px; }\n\n.tox .tox-sv-palette-thumb {\n  background: 0 0;\n  border: 1px solid #000;\n  border-radius: 50%;\n  box-sizing: content-box;\n  height: 12px;\n  position: absolute;\n  width: 12px; }\n\n.tox .tox-sv-palette-inner-thumb {\n  border: 1px solid #fff;\n  border-radius: 50%;\n  height: 10px;\n  position: absolute;\n  width: 10px; }\n\n.tox .tox-hue-slider {\n  box-sizing: border-box;\n  height: 100%;\n  width: 25px; }\n\n.tox .tox-hue-slider-spectrum {\n  background: linear-gradient(to bottom, red, #ff0080, #f0f, #8000ff, #00f, #0080ff, #0ff, #00ff80, #0f0, #80ff00, #ff0, #ff8000, red);\n  height: 100%;\n  width: 100%; }\n\n.tox .tox-hue-slider, .tox .tox-hue-slider-spectrum {\n  width: 20px; }\n\n.tox .tox-hue-slider-thumb {\n  background: #fff;\n  border: 1px solid #000;\n  box-sizing: content-box;\n  height: 4px;\n  width: 100%; }\n\n.tox .tox-rgb-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.tox .tox-rgb-form div {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  width: inherit; }\n\n.tox .tox-rgb-form input {\n  width: 6em; }\n\n.tox .tox-rgb-form input.tox-invalid {\n  border: 1px solid red !important; }\n\n.tox .tox-rgb-form .tox-rgba-preview {\n  border: 1px solid #000;\n  flex-grow: 2;\n  margin-bottom: 0; }\n\n.tox:not([dir=rtl]) .tox-sv-palette {\n  margin-right: 15px; }\n\n.tox:not([dir=rtl]) .tox-hue-slider {\n  margin-right: 15px; }\n\n.tox:not([dir=rtl]) .tox-hue-slider-thumb {\n  margin-left: -1px; }\n\n.tox:not([dir=rtl]) .tox-rgb-form label {\n  margin-right: .5em; }\n\n.tox[dir=rtl] .tox-sv-palette {\n  margin-left: 15px; }\n\n.tox[dir=rtl] .tox-hue-slider {\n  margin-left: 15px; }\n\n.tox[dir=rtl] .tox-hue-slider-thumb {\n  margin-right: -1px; }\n\n.tox[dir=rtl] .tox-rgb-form label {\n  margin-left: .5em; }\n\n.tox .tox-toolbar .tox-swatches, .tox .tox-toolbar__overflow .tox-swatches, .tox .tox-toolbar__primary .tox-swatches {\n  margin: 2px 0 3px 4px; }\n\n.tox .tox-collection--list .tox-collection__group .tox-swatches-menu {\n  border: 0;\n  margin: -4px 0; }\n\n.tox .tox-swatches__row {\n  display: flex; }\n\n.tox .tox-swatch {\n  height: 30px;\n  transition: transform .15s,box-shadow .15s;\n  width: 30px; }\n\n.tox .tox-swatch:focus, .tox .tox-swatch:hover {\n  box-shadow: 0 0 0 1px rgba(127, 127, 127, 0.3) inset;\n  transform: scale(0.8); }\n\n.tox .tox-swatch--remove {\n  align-items: center;\n  display: flex;\n  justify-content: center; }\n\n.tox .tox-swatch--remove svg path {\n  stroke: #e74c3c; }\n\n.tox .tox-swatches__picker-btn {\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  display: flex;\n  height: 30px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  width: 30px; }\n\n.tox .tox-swatches__picker-btn svg {\n  height: 24px;\n  width: 24px; }\n\n.tox .tox-swatches__picker-btn:hover {\n  background: #dee0e2; }\n\n.tox:not([dir=rtl]) .tox-swatches__picker-btn {\n  margin-left: auto; }\n\n.tox[dir=rtl] .tox-swatches__picker-btn {\n  margin-right: auto; }\n\n.tox .tox-comment-thread {\n  background: #fff;\n  position: relative; }\n\n.tox .tox-comment-thread > :not(:first-child) {\n  margin-top: 8px; }\n\n.tox .tox-comment {\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-shadow: 0 4px 8px 0 rgba(34, 47, 62, 0.1);\n  padding: 8px 8px 16px 8px;\n  position: relative; }\n\n.tox .tox-comment__header {\n  align-items: center;\n  color: #222f3e;\n  display: flex;\n  justify-content: space-between; }\n\n.tox .tox-comment__date {\n  color: rgba(34, 47, 62, 0.7);\n  font-size: 12px; }\n\n.tox .tox-comment__body {\n  color: #222f3e;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.3;\n  margin-top: 8px;\n  position: relative;\n  text-transform: initial; }\n\n.tox .tox-comment__body textarea {\n  resize: none;\n  white-space: normal;\n  width: 100%; }\n\n.tox .tox-comment__expander {\n  padding-top: 8px; }\n\n.tox .tox-comment__expander p {\n  color: rgba(34, 47, 62, 0.7);\n  font-size: 14px;\n  font-style: normal; }\n\n.tox .tox-comment__body p {\n  margin: 0; }\n\n.tox .tox-comment__buttonspacing {\n  padding-top: 16px;\n  text-align: center; }\n\n.tox .tox-comment-thread__overlay::after {\n  background: #fff;\n  bottom: 0;\n  content: \"\";\n  display: flex;\n  left: 0;\n  opacity: .9;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 5; }\n\n.tox .tox-comment__reply {\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  margin-top: 8px; }\n\n.tox .tox-comment__reply > :first-child {\n  margin-bottom: 8px;\n  width: 100%; }\n\n.tox .tox-comment__edit {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  margin-top: 16px; }\n\n.tox .tox-comment__gradient::after {\n  background: linear-gradient(rgba(255, 255, 255, 0), #fff);\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 5em;\n  margin-top: -40px;\n  position: absolute;\n  width: 100%; }\n\n.tox .tox-comment__overlay {\n  background: #fff;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  left: 0;\n  opacity: .9;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  z-index: 5; }\n\n.tox .tox-comment__loading-text {\n  align-items: center;\n  color: #222f3e;\n  display: flex;\n  flex-direction: column;\n  position: relative; }\n\n.tox .tox-comment__loading-text > div {\n  padding-bottom: 16px; }\n\n.tox .tox-comment__overlaytext {\n  bottom: 0;\n  flex-direction: column;\n  font-size: 14px;\n  left: 0;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10; }\n\n.tox .tox-comment__overlaytext p {\n  background-color: #fff;\n  box-shadow: 0 0 8px 8px #fff;\n  color: #222f3e;\n  text-align: center; }\n\n.tox .tox-comment__overlaytext div:nth-of-type(2) {\n  font-size: .8em; }\n\n.tox .tox-comment__busy-spinner {\n  align-items: center;\n  background-color: #fff;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1103; }\n\n.tox .tox-comment__scroll {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 1;\n  overflow: auto; }\n\n.tox .tox-conversations {\n  margin: 8px; }\n\n.tox:not([dir=rtl]) .tox-comment__edit {\n  margin-left: 8px; }\n\n.tox:not([dir=rtl]) .tox-comment__buttonspacing > :last-child, .tox:not([dir=rtl]) .tox-comment__edit > :last-child, .tox:not([dir=rtl]) .tox-comment__reply > :last-child {\n  margin-left: 8px; }\n\n.tox[dir=rtl] .tox-comment__edit {\n  margin-right: 8px; }\n\n.tox[dir=rtl] .tox-comment__buttonspacing > :last-child, .tox[dir=rtl] .tox-comment__edit > :last-child, .tox[dir=rtl] .tox-comment__reply > :last-child {\n  margin-right: 8px; }\n\n.tox .tox-user {\n  align-items: center;\n  display: flex; }\n\n.tox .tox-user__avatar svg {\n  fill: rgba(34, 47, 62, 0.7); }\n\n.tox .tox-user__name {\n  color: rgba(34, 47, 62, 0.7);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 700;\n  text-transform: uppercase; }\n\n.tox:not([dir=rtl]) .tox-user__avatar svg {\n  margin-right: 8px; }\n\n.tox:not([dir=rtl]) .tox-user__avatar + .tox-user__name {\n  margin-left: 8px; }\n\n.tox[dir=rtl] .tox-user__avatar svg {\n  margin-left: 8px; }\n\n.tox[dir=rtl] .tox-user__avatar + .tox-user__name {\n  margin-right: 8px; }\n\n.tox .tox-dialog-wrap {\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1100; }\n\n.tox .tox-dialog-wrap__backdrop {\n  background-color: rgba(255, 255, 255, 0.75);\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1101; }\n\n.tox .tox-dialog {\n  background-color: #fff;\n  border-color: #ccc;\n  border-radius: 3px;\n  border-style: solid;\n  border-width: 1px;\n  box-shadow: 0 16px 16px -10px rgba(34, 47, 62, 0.15), 0 0 40px 1px rgba(34, 47, 62, 0.15);\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  max-width: 480px;\n  overflow: hidden;\n  position: relative;\n  width: 95vw;\n  z-index: 1102; }\n\n@media only screen and (max-width: 767px) {\n  .tox .tox-dialog {\n    align-self: flex-start;\n    margin: 8px auto;\n    width: calc(100vw - 16px); } }\n\n.tox .tox-dialog__header {\n  align-items: center;\n  background-color: #fff;\n  border-bottom: none;\n  color: #222f3e;\n  display: flex;\n  font-size: 16px;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  padding: 8px 16px 0 16px;\n  position: relative; }\n\n.tox .tox-dialog__header .tox-button {\n  z-index: 1; }\n\n.tox .tox-dialog__draghandle {\n  cursor: grab;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\n.tox .tox-dialog__draghandle:active {\n  cursor: grabbing; }\n\n.tox .tox-dialog__dismiss {\n  margin-left: auto; }\n\n.tox .tox-dialog__title {\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.3;\n  margin: 0;\n  text-transform: normal; }\n\n.tox .tox-dialog__body {\n  color: #222f3e;\n  display: flex;\n  flex: 1;\n  -ms-flex-preferred-size: auto;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.3;\n  min-width: 0;\n  padding: 0 16px;\n  text-align: left;\n  text-transform: normal; }\n\n@media only screen and (max-width: 767px) {\n  .tox .tox-dialog__body {\n    flex-direction: column; } }\n\n.tox .tox-dialog__body-nav {\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column; }\n\n@media only screen and (max-width: 767px) {\n  .tox .tox-dialog__body-nav {\n    flex-direction: row;\n    margin-bottom: 8px;\n    -webkit-overflow-scrolling: touch;\n    overflow-x: auto; } }\n\n.tox .tox-dialog__body-nav-item {\n  border-bottom: 2px solid transparent;\n  color: rgba(34, 47, 62, 0.7);\n  display: inline-block;\n  font-size: 14px;\n  line-height: 1.3;\n  margin-bottom: 8px;\n  text-decoration: none;\n  white-space: nowrap; }\n\n.tox .tox-dialog__body-nav-item--active {\n  border-bottom: 2px solid #207ab7;\n  color: #207ab7; }\n\n.tox .tox-dialog__body-content {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  -ms-flex-preferred-size: auto;\n  max-height: 650px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.tox .tox-dialog__body-content > * {\n  margin-bottom: 0;\n  margin-top: 16px; }\n\n.tox .tox-dialog__body-content > :first-child {\n  margin-top: 0; }\n\n.tox .tox-dialog__body-content > :last-child {\n  margin-bottom: 0; }\n\n.tox .tox-dialog__body-content > :only-child {\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.tox .tox-dialog--width-lg {\n  height: 650px;\n  max-width: 1200px; }\n\n.tox .tox-dialog--width-md {\n  max-width: 800px; }\n\n.tox .tox-dialog--width-md .tox-dialog__body-content {\n  overflow: auto; }\n\n.tox .tox-dialog__body-content--centered {\n  text-align: center; }\n\n.tox .tox-dialog__body-content--spacious {\n  margin-bottom: 16px; }\n\n.tox .tox-dialog__footer {\n  align-items: center;\n  background-color: #fff;\n  border-top: 1px solid #ccc;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n  padding: 8px 16px; }\n\n.tox .tox-dialog__busy-spinner {\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.75);\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1103; }\n\n.tox .tox-dialog__table {\n  border-collapse: collapse;\n  width: 100%; }\n\n.tox .tox-dialog__table thead th {\n  font-weight: 700;\n  padding-bottom: 8px; }\n\n.tox .tox-dialog__table tbody tr {\n  border-bottom: 1px solid #ccc; }\n\n.tox .tox-dialog__table tbody tr:last-child {\n  border-bottom: none; }\n\n.tox .tox-dialog__table td {\n  padding-bottom: 8px;\n  padding-top: 8px; }\n\n.tox .tox-dialog__popups {\n  position: absolute;\n  width: 100%;\n  z-index: 1100; }\n\n.tox .tox-dialog__body-iframe {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  -ms-flex-preferred-size: auto; }\n\n.tox .tox-dialog__body-iframe .tox-navobj {\n  display: flex;\n  flex: 1;\n  -ms-flex-preferred-size: auto; }\n\n.tox .tox-dialog__body-iframe .tox-navobj :nth-child(2) {\n  flex: 1;\n  -ms-flex-preferred-size: auto;\n  height: 100%; }\n\nbody.tox-dialog__disable-scroll {\n  overflow: hidden; }\n\n.tox.tox-platform-ie .tox-dialog-wrap {\n  position: -ms-device-fixed; }\n\n.tox:not([dir=rtl]) .tox-dialog__body-nav {\n  margin-right: 32px; }\n\n@media only screen and (max-width: 767px) {\n  .tox:not([dir=rtl]) .tox-dialog__body-nav {\n    margin-right: 0; } }\n\n@media only screen and (max-width: 767px) {\n  .tox:not([dir=rtl]) .tox-dialog__body-nav-item:not(:first-child) {\n    margin-left: 8px; } }\n\n.tox:not([dir=rtl]) .tox-dialog__footer .tox-dialog__footer-end > *, .tox:not([dir=rtl]) .tox-dialog__footer .tox-dialog__footer-start > * {\n  margin-left: 8px; }\n\n.tox[dir=rtl] .tox-dialog__body {\n  text-align: right; }\n\n.tox[dir=rtl] .tox-dialog__body-nav {\n  margin-left: 32px; }\n\n@media only screen and (max-width: 767px) {\n  .tox[dir=rtl] .tox-dialog__body-nav {\n    margin-left: 0; } }\n\n@media only screen and (max-width: 767px) {\n  .tox[dir=rtl] .tox-dialog__body-nav-item:not(:first-child) {\n    margin-right: 8px; } }\n\n.tox[dir=rtl] .tox-dialog__footer .tox-dialog__footer-end > *, .tox[dir=rtl] .tox-dialog__footer .tox-dialog__footer-start > * {\n  margin-right: 8px; }\n\n.tox .tox-dropzone-container {\n  display: flex;\n  flex: 1;\n  -ms-flex-preferred-size: auto; }\n\n.tox .tox-dropzone {\n  align-items: center;\n  background: #fff;\n  border: 2px dashed #ccc;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: center;\n  min-height: 100px;\n  padding: 10px; }\n\n.tox .tox-dropzone p {\n  color: rgba(34, 47, 62, 0.7);\n  margin: 0 0 16px 0; }\n\n.tox .tox-edit-area {\n  border-top: 1px solid #ccc;\n  display: flex;\n  flex: 1;\n  -ms-flex-preferred-size: auto;\n  overflow: hidden;\n  position: relative; }\n\n.tox .tox-edit-area__iframe {\n  background-color: #fff;\n  border: 0;\n  box-sizing: border-box;\n  flex: 1;\n  -ms-flex-preferred-size: auto;\n  height: 100%;\n  position: absolute;\n  width: 100%; }\n\n.tox.tox-inline-edit-area {\n  border: 1px dotted #ccc; }\n\n.tox .tox-control-wrap {\n  flex: 1;\n  position: relative; }\n\n.tox .tox-control-wrap:not(.tox-control-wrap--status-invalid) .tox-control-wrap__status-icon-invalid, .tox .tox-control-wrap:not(.tox-control-wrap--status-unknown) .tox-control-wrap__status-icon-unknown, .tox .tox-control-wrap:not(.tox-control-wrap--status-valid) .tox-control-wrap__status-icon-valid {\n  display: none; }\n\n.tox .tox-control-wrap svg {\n  display: block; }\n\n.tox .tox-control-wrap__status-icon-wrap {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%); }\n\n.tox .tox-control-wrap__status-icon-invalid svg {\n  fill: #c00; }\n\n.tox .tox-control-wrap__status-icon-unknown svg {\n  fill: orange; }\n\n.tox .tox-control-wrap__status-icon-valid svg {\n  fill: green; }\n\n.tox:not([dir=rtl]) .tox-control-wrap--status-invalid .tox-textfield, .tox:not([dir=rtl]) .tox-control-wrap--status-unknown .tox-textfield, .tox:not([dir=rtl]) .tox-control-wrap--status-valid .tox-textfield {\n  padding-right: 32px; }\n\n.tox:not([dir=rtl]) .tox-control-wrap__status-icon-wrap {\n  right: 4px; }\n\n.tox[dir=rtl] .tox-control-wrap--status-invalid .tox-textfield, .tox[dir=rtl] .tox-control-wrap--status-unknown .tox-textfield, .tox[dir=rtl] .tox-control-wrap--status-valid .tox-textfield {\n  padding-left: 32px; }\n\n.tox[dir=rtl] .tox-control-wrap__status-icon-wrap {\n  left: 4px; }\n\n.tox .tox-autocompleter {\n  max-width: 25em; }\n\n.tox .tox-autocompleter .tox-menu {\n  max-width: 25em; }\n\n.tox .tox-autocompleter .tox-autocompleter-highlight {\n  font-weight: 700; }\n\n.tox .tox-color-input {\n  display: flex; }\n\n.tox .tox-color-input .tox-textfield {\n  border-radius: 3px 0 0 3px;\n  display: flex; }\n\n.tox .tox-color-input span {\n  border-color: rgba(34, 47, 62, 0.2);\n  border-radius: 0 3px 3px 0;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  box-shadow: none;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: flex;\n  width: 35px; }\n\n.tox .tox-color-input span:focus {\n  border-color: #207ab7; }\n\n.tox[dir=rtl] .tox-color-input .tox-textfield {\n  border-radius: 0 3px 3px 0; }\n\n.tox[dir=rtl] .tox-color-input span {\n  border-radius: 3px 0 0 3px;\n  border-width: 1px 0 1px 1px; }\n\n.tox .tox-label, .tox .tox-toolbar-label {\n  color: rgba(34, 47, 62, 0.7);\n  display: block;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.3;\n  padding: 0 8px 0 0;\n  text-transform: normal;\n  white-space: nowrap; }\n\n.tox .tox-toolbar-label {\n  padding: 0 8px; }\n\n.tox[dir=rtl] .tox-label {\n  padding: 0 0 0 8px; }\n\n.tox .tox-form {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  -ms-flex-preferred-size: auto; }\n\n.tox .tox-form__group {\n  box-sizing: border-box;\n  margin-bottom: 4px; }\n\n.tox .tox-form__group--error {\n  color: #c00; }\n\n.tox .tox-form__group--collection {\n  display: flex; }\n\n.tox .tox-form__grid {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.tox .tox-form__grid--2col > .tox-form__group {\n  width: calc(50% - (8px / 2)); }\n\n.tox .tox-form__grid--3col > .tox-form__group {\n  width: calc(100% / 3 - (8px / 2)); }\n\n.tox .tox-form__grid--4col > .tox-form__group {\n  width: calc(25% - (8px / 2)); }\n\n.tox .tox-form__controls-h-stack {\n  align-items: center;\n  display: flex; }\n\n.tox .tox-form__group--inline {\n  align-items: center;\n  display: flex; }\n\n.tox .tox-form__group--stretched {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  -ms-flex-preferred-size: auto; }\n\n.tox .tox-form__group--stretched .tox-textarea {\n  flex: 1;\n  -ms-flex-preferred-size: auto; }\n\n.tox .tox-form__group--stretched .tox-navobj {\n  display: flex;\n  flex: 1;\n  -ms-flex-preferred-size: auto; }\n\n.tox .tox-form__group--stretched .tox-navobj :nth-child(2) {\n  flex: 1;\n  -ms-flex-preferred-size: auto;\n  height: 100%; }\n\n.tox:not([dir=rtl]) .tox-form__controls-h-stack > :not(:first-child) {\n  margin-left: 4px; }\n\n.tox[dir=rtl] .tox-form__controls-h-stack > :not(:first-child) {\n  margin-right: 4px; }\n\n.tox .tox-lock.tox-locked .tox-lock-icon__unlock, .tox .tox-lock:not(.tox-locked) .tox-lock-icon__lock {\n  display: none; }\n\n.tox .tox-textarea, .tox .tox-textfield, .tox .tox-toolbar-textfield, .tox:not([dir=rtl]) .tox-selectfield select, .tox[dir=rtl] .tox-selectfield select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: #fff;\n  border-color: #ccc;\n  border-radius: 3px;\n  border-style: solid;\n  border-width: 1px;\n  box-shadow: none;\n  box-sizing: border-box;\n  color: #222f3e;\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0;\n  outline: 0;\n  padding: 5px 4.75px;\n  resize: none;\n  width: 100%; }\n\n.tox .tox-selectfield select:focus, .tox .tox-textarea:focus, .tox .tox-textfield:focus {\n  border-color: #207ab7;\n  box-shadow: none;\n  outline: 0; }\n\n.tox .tox-toolbar-textfield {\n  border-width: 0;\n  margin-bottom: 3px;\n  margin-top: 2px;\n  max-width: 250px; }\n\n.tox .tox-naked-btn {\n  background-color: transparent;\n  border: 0;\n  border-color: transparent;\n  box-shadow: unset;\n  color: #207ab7;\n  cursor: pointer;\n  display: block;\n  margin: 0;\n  padding: 0; }\n\n.tox .tox-naked-btn svg {\n  display: block;\n  fill: #222f3e; }\n\n.tox:not([dir=rtl]) .tox-toolbar-textfield + * {\n  margin-left: 4px; }\n\n.tox[dir=rtl] .tox-toolbar-textfield + * {\n  margin-right: 4px; }\n\n.tox .tox-selectfield {\n  cursor: pointer;\n  position: relative; }\n\n.tox .tox-selectfield select::-ms-expand {\n  display: none; }\n\n.tox .tox-selectfield svg {\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%); }\n\n.tox:not([dir=rtl]) .tox-selectfield select {\n  padding-right: 24px; }\n\n.tox:not([dir=rtl]) .tox-selectfield svg {\n  right: 8px; }\n\n.tox[dir=rtl] .tox-selectfield select {\n  padding-left: 24px; }\n\n.tox[dir=rtl] .tox-selectfield svg {\n  left: 8px; }\n\n.tox .tox-textarea {\n  -webkit-appearance: textarea;\n  -moz-appearance: textarea;\n  appearance: textarea;\n  white-space: pre-wrap; }\n\n.tox-fullscreen {\n  border: 0;\n  height: 100%;\n  left: 0;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  width: 100%; }\n\n.tox-fullscreen .tox.tox-tinymce.tox-fullscreen .tox-statusbar__resize-handle {\n  display: none; }\n\n.tox-fullscreen .tox.tox-tinymce.tox-fullscreen {\n  z-index: 1200; }\n\n.tox-fullscreen .tox.tox-tinymce-aux {\n  z-index: 1201; }\n\n.tox .tox-image-tools {\n  width: 100%; }\n\n.tox .tox-image-tools__toolbar {\n  align-items: center;\n  display: flex;\n  justify-content: center; }\n\n.tox .tox-image-tools__image {\n  background-color: #666;\n  height: 380px;\n  overflow: auto;\n  position: relative;\n  width: 100%; }\n\n.tox .tox-image-tools__image, .tox .tox-image-tools__image + .tox-image-tools__toolbar {\n  margin-top: 8px; }\n\n.tox .tox-image-tools__image-bg {\n  background: url(data:image/gif;base64,R0lGODdhDAAMAIABAMzMzP///ywAAAAADAAMAAACFoQfqYeabNyDMkBQb81Uat85nxguUAEAOw==); }\n\n.tox .tox-image-tools__toolbar > .tox-spacer {\n  flex: 1;\n  -ms-flex-preferred-size: auto; }\n\n.tox .tox-croprect-block {\n  background: #000;\n  opacity: .5;\n  position: absolute;\n  zoom: 1; }\n\n.tox .tox-croprect-handle {\n  border: 2px solid #fff;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 20px; }\n\n.tox .tox-croprect-handle-move {\n  border: 0;\n  cursor: move;\n  position: absolute; }\n\n.tox .tox-croprect-handle-nw {\n  border-width: 2px 0 0 2px;\n  cursor: nw-resize;\n  left: 100px;\n  margin: -2px 0 0 -2px;\n  top: 100px; }\n\n.tox .tox-croprect-handle-ne {\n  border-width: 2px 2px 0 0;\n  cursor: ne-resize;\n  left: 200px;\n  margin: -2px 0 0 -20px;\n  top: 100px; }\n\n.tox .tox-croprect-handle-sw {\n  border-width: 0 0 2px 2px;\n  cursor: sw-resize;\n  left: 100px;\n  margin: -20px 2px 0 -2px;\n  top: 200px; }\n\n.tox .tox-croprect-handle-se {\n  border-width: 0 2px 2px 0;\n  cursor: se-resize;\n  left: 200px;\n  margin: -20px 0 0 -20px;\n  top: 200px; }\n\n.tox:not([dir=rtl]) .tox-image-tools__toolbar > .tox-slider:not(:first-of-type) {\n  margin-left: 8px; }\n\n.tox:not([dir=rtl]) .tox-image-tools__toolbar > .tox-button + .tox-slider {\n  margin-left: 32px; }\n\n.tox:not([dir=rtl]) .tox-image-tools__toolbar > .tox-slider + .tox-button {\n  margin-left: 32px; }\n\n.tox[dir=rtl] .tox-image-tools__toolbar > .tox-slider:not(:first-of-type) {\n  margin-right: 8px; }\n\n.tox[dir=rtl] .tox-image-tools__toolbar > .tox-button + .tox-slider {\n  margin-right: 32px; }\n\n.tox[dir=rtl] .tox-image-tools__toolbar > .tox-slider + .tox-button {\n  margin-right: 32px; }\n\n.tox .tox-insert-table-picker {\n  display: flex;\n  flex-wrap: wrap;\n  width: 169px; }\n\n.tox .tox-insert-table-picker > div {\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 0 1px 1px 0;\n  box-sizing: content-box;\n  height: 16px;\n  width: 16px; }\n\n.tox .tox-collection--list .tox-collection__group .tox-insert-table-picker {\n  margin: -4px 0; }\n\n.tox .tox-insert-table-picker .tox-insert-table-picker__selected {\n  background-color: rgba(32, 122, 183, 0.5);\n  border-color: rgba(32, 122, 183, 0.5); }\n\n.tox .tox-insert-table-picker__label {\n  color: rgba(34, 47, 62, 0.7);\n  display: block;\n  font-size: 14px;\n  padding: 4px;\n  text-align: center;\n  width: 100%; }\n\n.tox:not([dir=rtl]) .tox-insert-table-picker > div:nth-child(10n) {\n  border-right: 0; }\n\n.tox[dir=rtl] .tox-insert-table-picker > div:nth-child(10n+1) {\n  border-right: 0; }\n\n.tox .tox-menu {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-shadow: 0 4px 8px 0 rgba(34, 47, 62, 0.1);\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: top;\n  z-index: 1; }\n\n.tox .tox-menu.tox-collection.tox-collection--list {\n  padding: 0; }\n\n.tox .tox-menu.tox-collection.tox-collection--toolbar {\n  padding: 4px; }\n\n.tox .tox-menu.tox-collection.tox-collection--grid {\n  padding: 4px; }\n\n.tox .tox-menu__label blockquote, .tox .tox-menu__label code, .tox .tox-menu__label h1, .tox .tox-menu__label h2, .tox .tox-menu__label h3, .tox .tox-menu__label h4, .tox .tox-menu__label h5, .tox .tox-menu__label h6, .tox .tox-menu__label p {\n  margin: 0; }\n\n.tox .tox-menubar {\n  background: url(\"data:image/svg+xml;charset=utf8,%3Csvg height='43px' viewBox='0 0 40 43px' width='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='42px' width='100' height='1' fill='%23cccccc'/%3E%3C/svg%3E\") left 0 top 0 #fff;\n  background-color: #fff;\n  display: flex;\n  flex: 0 0 auto;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  margin-bottom: -1px;\n  padding: 0 4px; }\n\n.tox .tox-mbtn {\n  align-items: center;\n  background: 0 0;\n  border: 0;\n  border-radius: 3px;\n  box-shadow: none;\n  color: #222f3e;\n  display: flex;\n  flex: 0 0 auto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  height: 34px;\n  justify-content: center;\n  margin: 2px 0 3px 0;\n  outline: 0;\n  overflow: hidden;\n  padding: 0 4px;\n  text-transform: normal;\n  width: auto; }\n\n.tox .tox-mbtn[disabled] {\n  background-color: none;\n  border-color: none;\n  box-shadow: none;\n  color: rgba(34, 47, 62, 0.5);\n  cursor: not-allowed; }\n\n.tox .tox-mbtn:hover:not(:disabled) {\n  background: #dee0e2;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-mbtn:focus:not(:disabled) {\n  background: #dee0e2;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-mbtn--active {\n  background: #c8cbcf;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-mbtn__select-label {\n  cursor: default;\n  font-weight: 400;\n  margin: 0 4px; }\n\n.tox .tox-mbtn[disabled] .tox-mbtn__select-label {\n  cursor: not-allowed; }\n\n.tox .tox-mbtn__select-chevron {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 16px;\n  display: none; }\n\n.tox .tox-notification {\n  background-color: #fffaea;\n  border-color: #ffe89d;\n  border-style: solid;\n  border-width: 1px;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: minmax(40px, 1fr) auto minmax(40px, 1fr);\n  margin-top: 5px;\n  opacity: 0;\n  padding: 5px;\n  transition: transform .1s ease-in,opacity 150ms ease-in; }\n\n.tox .tox-notification--in {\n  opacity: 1; }\n\n.tox .tox-notification--success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6; }\n\n.tox .tox-notification--error {\n  background-color: #f2dede;\n  border-color: #ebccd1; }\n\n.tox .tox-notification--warn {\n  background-color: #fcf8e3;\n  border-color: #faebcc; }\n\n.tox .tox-notification--info {\n  background-color: #d9edf7;\n  border-color: #779ecb; }\n\n.tox .tox-notification__body {\n  align-self: center;\n  color: #222f3e;\n  font-size: 14px;\n  grid-column-end: 3;\n  -ms-grid-column-span: 1;\n  grid-column-start: 2;\n  grid-row-end: 2;\n  grid-row-start: 1;\n  text-align: center;\n  white-space: normal;\n  word-break: break-all;\n  word-break: break-word; }\n\n.tox .tox-notification__body > * {\n  margin: 0; }\n\n.tox .tox-notification__body > * + * {\n  margin-top: 1rem; }\n\n.tox .tox-notification__icon {\n  align-self: center;\n  -ms-grid-column-align: end;\n  grid-column-end: 2;\n  -ms-grid-column-span: 1;\n  grid-column-start: 1;\n  grid-row-end: 2;\n  grid-row-start: 1;\n  justify-self: end; }\n\n.tox .tox-notification__icon svg {\n  display: block; }\n\n.tox .tox-notification__dismiss {\n  align-self: start;\n  -ms-grid-column-align: end;\n  grid-column-end: 4;\n  -ms-grid-column-span: 1;\n  grid-column-start: 3;\n  grid-row-end: 2;\n  grid-row-start: 1;\n  justify-self: end; }\n\n.tox .tox-notification .tox-progress-bar {\n  -ms-grid-column-align: center;\n  grid-column-end: 4;\n  -ms-grid-column-span: 3;\n  grid-column-start: 1;\n  grid-row-end: 3;\n  -ms-grid-row-span: 1;\n  grid-row-start: 2;\n  justify-self: center; }\n\n.tox .tox-pop {\n  display: inline-block;\n  position: relative; }\n\n.tox .tox-pop--resizing {\n  transition: width .1s ease; }\n\n.tox .tox-pop--resizing .tox-toolbar {\n  flex-wrap: nowrap; }\n\n.tox .tox-pop__dialog {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n  min-width: 0;\n  overflow: hidden; }\n\n.tox .tox-pop__dialog > :not(.tox-toolbar) {\n  margin: 4px 4px 4px 8px; }\n\n.tox .tox-pop__dialog .tox-toolbar {\n  background-color: transparent; }\n\n.tox .tox-pop::after, .tox .tox-pop::before {\n  border-style: solid;\n  content: '';\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0; }\n\n.tox .tox-pop.tox-pop--bottom::after, .tox .tox-pop.tox-pop--bottom::before {\n  left: 50%;\n  top: 100%; }\n\n.tox .tox-pop.tox-pop--bottom::after {\n  border-color: #fff transparent transparent transparent;\n  border-width: 8px;\n  margin-left: -8px;\n  margin-top: -1px; }\n\n.tox .tox-pop.tox-pop--bottom::before {\n  border-color: #ccc transparent transparent transparent;\n  border-width: 9px;\n  margin-left: -9px; }\n\n.tox .tox-pop.tox-pop--top::after, .tox .tox-pop.tox-pop--top::before {\n  left: 50%;\n  top: 0;\n  transform: translateY(-100%); }\n\n.tox .tox-pop.tox-pop--top::after {\n  border-color: transparent transparent #fff transparent;\n  border-width: 8px;\n  margin-left: -8px;\n  margin-top: 1px; }\n\n.tox .tox-pop.tox-pop--top::before {\n  border-color: transparent transparent #ccc transparent;\n  border-width: 9px;\n  margin-left: -9px; }\n\n.tox .tox-pop.tox-pop--left::after, .tox .tox-pop.tox-pop--left::before {\n  left: 0;\n  top: calc(50% - 1px);\n  transform: translateY(-50%); }\n\n.tox .tox-pop.tox-pop--left::after {\n  border-color: transparent #fff transparent transparent;\n  border-width: 8px;\n  margin-left: -15px; }\n\n.tox .tox-pop.tox-pop--left::before {\n  border-color: transparent #ccc transparent transparent;\n  border-width: 10px;\n  margin-left: -19px; }\n\n.tox .tox-pop.tox-pop--right::after, .tox .tox-pop.tox-pop--right::before {\n  left: 100%;\n  top: calc(50% + 1px);\n  transform: translateY(-50%); }\n\n.tox .tox-pop.tox-pop--right::after {\n  border-color: transparent transparent transparent #fff;\n  border-width: 8px;\n  margin-left: -1px; }\n\n.tox .tox-pop.tox-pop--right::before {\n  border-color: transparent transparent transparent #ccc;\n  border-width: 10px;\n  margin-left: -1px; }\n\n.tox .tox-pop.tox-pop--align-left::after, .tox .tox-pop.tox-pop--align-left::before {\n  left: 20px; }\n\n.tox .tox-pop.tox-pop--align-right::after, .tox .tox-pop.tox-pop--align-right::before {\n  left: calc(100% - 20px); }\n\n.tox .tox-sidebar-wrap {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  min-height: 0; }\n\n.tox .tox-sidebar {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end; }\n\n.tox .tox-sidebar__slider {\n  display: flex;\n  overflow: hidden; }\n\n.tox .tox-sidebar__pane-container {\n  display: flex; }\n\n.tox .tox-sidebar__pane {\n  display: flex; }\n\n.tox .tox-sidebar--sliding-closed {\n  opacity: 0; }\n\n.tox .tox-sidebar--sliding-open {\n  opacity: 1; }\n\n.tox .tox-sidebar--sliding-growing, .tox .tox-sidebar--sliding-shrinking {\n  transition: width .5s ease,opacity .5s ease; }\n\n.tox .tox-slider {\n  align-items: center;\n  display: flex;\n  flex: 1;\n  -ms-flex-preferred-size: auto;\n  height: 24px;\n  justify-content: center;\n  position: relative; }\n\n.tox .tox-slider__rail {\n  background-color: transparent;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  height: 10px;\n  min-width: 120px;\n  width: 100%; }\n\n.tox .tox-slider__handle {\n  background-color: #207ab7;\n  border: 2px solid #185d8c;\n  border-radius: 3px;\n  box-shadow: none;\n  height: 24px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  width: 14px; }\n\n.tox .tox-source-code {\n  overflow: auto; }\n\n.tox .tox-spinner {\n  display: flex; }\n\n.tox .tox-spinner > div {\n  animation: tam-bouncing-dots 1.5s ease-in-out 0s infinite both;\n  background-color: rgba(34, 47, 62, 0.7);\n  border-radius: 100%;\n  height: 8px;\n  width: 8px; }\n\n.tox .tox-spinner > div:nth-child(1) {\n  animation-delay: -.32s; }\n\n.tox .tox-spinner > div:nth-child(2) {\n  animation-delay: -.16s; }\n\n@keyframes tam-bouncing-dots {\n  0%, 100%, 80% {\n    transform: scale(0); }\n  40% {\n    transform: scale(1); } }\n\n.tox:not([dir=rtl]) .tox-spinner > div:not(:first-child) {\n  margin-left: 4px; }\n\n.tox[dir=rtl] .tox-spinner > div:not(:first-child) {\n  margin-right: 4px; }\n\n.tox .tox-statusbar {\n  align-items: center;\n  background-color: #fff;\n  border-top: 1px solid #ccc;\n  color: rgba(34, 47, 62, 0.7);\n  display: flex;\n  flex: 0 0 auto;\n  font-size: 12px;\n  font-weight: 400;\n  height: 18px;\n  overflow: hidden;\n  padding: 0 8px;\n  position: relative;\n  text-transform: uppercase; }\n\n.tox .tox-statusbar__text-container {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-end;\n  overflow: hidden; }\n\n.tox .tox-statusbar__path {\n  display: flex;\n  flex: 1 1 auto;\n  margin-right: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.tox .tox-statusbar__path > * {\n  display: inline;\n  white-space: nowrap; }\n\n.tox .tox-statusbar__wordcount {\n  flex: 0 0 auto;\n  margin-left: 1ch; }\n\n.tox .tox-statusbar a, .tox .tox-statusbar__path-item, .tox .tox-statusbar__wordcount {\n  color: rgba(34, 47, 62, 0.7);\n  text-decoration: none; }\n\n.tox .tox-statusbar a:focus, .tox .tox-statusbar a:hover, .tox .tox-statusbar__path-item:focus, .tox .tox-statusbar__path-item:hover, .tox .tox-statusbar__wordcount:focus, .tox .tox-statusbar__wordcount:hover {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.tox .tox-statusbar__resize-handle {\n  align-items: flex-end;\n  align-self: stretch;\n  cursor: nwse-resize;\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: flex-end;\n  margin-left: auto;\n  margin-right: -8px;\n  padding-left: 1ch; }\n\n.tox .tox-statusbar__resize-handle svg {\n  display: block;\n  fill: rgba(34, 47, 62, 0.7); }\n\n.tox:not([dir=rtl]) .tox-statusbar__path > * {\n  margin-right: 4px; }\n\n.tox:not([dir=rtl]) .tox-statusbar__branding {\n  margin-left: 1ch; }\n\n.tox[dir=rtl] .tox-statusbar {\n  flex-direction: row-reverse; }\n\n.tox[dir=rtl] .tox-statusbar__path > * {\n  margin-left: 4px; }\n\n.tox .tox-throbber {\n  z-index: 1400; }\n\n.tox .tox-throbber__busy-spinner {\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.6);\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.tox .tox-tbtn {\n  align-items: center;\n  background: 0 0;\n  border: 0;\n  border-radius: 3px;\n  box-shadow: none;\n  color: #222f3e;\n  display: flex;\n  flex: 0 0 auto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  height: 34px;\n  justify-content: center;\n  margin: 2px 0 3px 0;\n  outline: 0;\n  overflow: hidden;\n  padding: 0;\n  text-transform: normal;\n  width: 34px; }\n\n.tox .tox-tbtn svg {\n  display: block;\n  fill: #222f3e; }\n\n.tox .tox-tbtn.tox-tbtn-more {\n  padding-left: 5px;\n  padding-right: 5px;\n  width: inherit; }\n\n.tox .tox-tbtn--enabled {\n  background: #c8cbcf;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-tbtn--enabled > * {\n  transform: none; }\n\n.tox .tox-tbtn--enabled svg {\n  fill: #222f3e; }\n\n.tox .tox-tbtn:hover {\n  background: #dee0e2;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-tbtn:hover svg {\n  fill: #222f3e; }\n\n.tox .tox-tbtn:focus {\n  background: #dee0e2;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-tbtn:focus svg {\n  fill: #222f3e; }\n\n.tox .tox-tbtn:active {\n  background: #c8cbcf;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-tbtn:active svg {\n  fill: #222f3e; }\n\n.tox .tox-tbtn--disabled, .tox .tox-tbtn--disabled:hover, .tox .tox-tbtn:disabled, .tox .tox-tbtn:disabled:hover {\n  background: 0 0;\n  box-shadow: none;\n  color: rgba(34, 47, 62, 0.5);\n  cursor: not-allowed; }\n\n.tox .tox-tbtn--disabled svg, .tox .tox-tbtn--disabled:hover svg, .tox .tox-tbtn:disabled svg, .tox .tox-tbtn:disabled:hover svg {\n  fill: rgba(34, 47, 62, 0.5); }\n\n.tox .tox-tbtn:active > * {\n  transform: none; }\n\n.tox .tox-tbtn--md {\n  height: 51px;\n  width: 51px; }\n\n.tox .tox-tbtn--lg {\n  flex-direction: column;\n  height: 68px;\n  width: 68px; }\n\n.tox .tox-tbtn--return {\n  align-self: stretch;\n  height: unset;\n  width: 16px; }\n\n.tox .tox-tbtn--labeled {\n  padding: 0 4px;\n  width: unset; }\n\n.tox .tox-tbtn__vlabel {\n  display: block;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: -.025em;\n  margin-bottom: 4px;\n  white-space: nowrap; }\n\n.tox .tox-tbtn--select {\n  margin: 2px 0 3px 0;\n  padding: 0 4px;\n  width: auto; }\n\n.tox .tox-tbtn__select-label {\n  cursor: default;\n  font-weight: 400;\n  margin: 0 4px; }\n\n.tox .tox-tbtn__select-chevron {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 16px; }\n\n.tox .tox-tbtn__select-chevron svg {\n  fill: rgba(34, 47, 62, 0.7); }\n\n.tox .tox-tbtn--bespoke .tox-tbtn__select-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 7em; }\n\n.tox .tox-split-button {\n  border: 0;\n  border-radius: 3px;\n  box-sizing: border-box;\n  display: flex;\n  margin: 2px 0 3px 0;\n  overflow: hidden; }\n\n.tox .tox-split-button:hover {\n  box-shadow: 0 0 0 1px #dee0e2 inset; }\n\n.tox .tox-split-button:focus {\n  background: #dee0e2;\n  box-shadow: none;\n  color: #222f3e; }\n\n.tox .tox-split-button > * {\n  border-radius: 0; }\n\n.tox .tox-split-button__chevron {\n  width: 16px; }\n\n.tox .tox-split-button__chevron svg {\n  fill: rgba(34, 47, 62, 0.7); }\n\n.tox .tox-pop .tox-split-button__chevron svg {\n  transform: rotate(-90deg); }\n\n.tox .tox-split-button .tox-tbtn {\n  margin: 0; }\n\n.tox .tox-split-button.tox-tbtn--disabled .tox-tbtn:focus, .tox .tox-split-button.tox-tbtn--disabled .tox-tbtn:hover, .tox .tox-split-button.tox-tbtn--disabled:focus, .tox .tox-split-button.tox-tbtn--disabled:hover {\n  background: 0 0;\n  box-shadow: none;\n  color: rgba(34, 47, 62, 0.5); }\n\n.tox .tox-toolbar, .tox .tox-toolbar__overflow, .tox .tox-toolbar__primary {\n  background: url(\"data:image/svg+xml;charset=utf8,%3Csvg height='39px' viewBox='0 0 40 39px' width='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='38px' width='100' height='1' fill='%23cccccc'/%3E%3C/svg%3E\") left 0 top 0 #fff;\n  background-color: #fff;\n  border-top: 1px solid #ccc;\n  display: flex;\n  flex: 0 0 auto;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  margin-bottom: -1px;\n  padding: 0 0; }\n\n.tox .tox-toolbar__overflow.tox-toolbar__overflow--closed {\n  height: 0;\n  opacity: 0;\n  visibility: hidden; }\n\n.tox .tox-toolbar__overflow--growing {\n  transition: height .3s ease,opacity .2s linear .1s; }\n\n.tox .tox-toolbar__overflow--shrinking {\n  transition: opacity .3s ease,height .2s linear .1s,visibility 0s linear .3s; }\n\n.tox .tox-pop .tox-toolbar {\n  border-width: 0; }\n\n.tox .tox-toolbar--no-divider {\n  background-image: none; }\n\n.tox.tox-tinymce-aux .tox-toolbar__overflow {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15); }\n\n.tox.tox-tinymce-aux:not([dir=rtl]) .tox-toolbar__overflow {\n  margin-left: 4px; }\n\n.tox[dir=rtl] .tox-tbtn__icon-rtl svg {\n  transform: rotateY(180deg); }\n\n.tox[dir=rtl].tox-tinymce-aux .tox-toolbar__overflow {\n  margin-right: 4px; }\n\n.tox .tox-toolbar__group {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 0;\n  padding: 0 4px; }\n\n.tox .tox-toolbar__group--pull-right {\n  margin-left: auto; }\n\n.tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type) {\n  border-right: 1px solid #ccc; }\n\n.tox[dir=rtl] .tox-toolbar__group:not(:last-of-type) {\n  border-left: 1px solid #ccc; }\n\n.tox .tox-tooltip {\n  display: inline-block;\n  padding: 8px;\n  position: relative; }\n\n.tox .tox-tooltip__body {\n  background-color: #222f3e;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px rgba(34, 47, 62, 0.3);\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  padding: 4px 8px;\n  text-transform: normal; }\n\n.tox .tox-tooltip__arrow {\n  position: absolute; }\n\n.tox .tox-tooltip--down .tox-tooltip__arrow {\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-top: 8px solid #222f3e;\n  bottom: 0;\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%); }\n\n.tox .tox-tooltip--up .tox-tooltip__arrow {\n  border-bottom: 8px solid #222f3e;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  left: 50%;\n  position: absolute;\n  top: 0;\n  transform: translateX(-50%); }\n\n.tox .tox-tooltip--right .tox-tooltip__arrow {\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid #222f3e;\n  border-top: 8px solid transparent;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%); }\n\n.tox .tox-tooltip--left .tox-tooltip__arrow {\n  border-bottom: 8px solid transparent;\n  border-right: 8px solid #222f3e;\n  border-top: 8px solid transparent;\n  left: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%); }\n\n.tox .tox-well {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  padding: 8px;\n  width: 100%; }\n\n.tox .tox-well > :first-child {\n  margin-top: 0; }\n\n.tox .tox-well > :last-child {\n  margin-bottom: 0; }\n\n.tox .tox-well > :only-child {\n  margin: 0; }\n\n.tox .tox-custom-editor {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  display: flex;\n  height: 525px; }\n\n.tox .tox-dialog-loading::before {\n  background-color: rgba(0, 0, 0, 0.5);\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 1000; }\n\n.tox .tox-tab {\n  cursor: pointer; }\n\n.tox .tox-dialog__content-js {\n  display: flex;\n  flex: 1;\n  -ms-flex-preferred-size: auto; }\n\n.tox .tox-dialog__body-content .tox-collection {\n  display: flex;\n  flex: 1;\n  -ms-flex-preferred-size: auto; }\n\n.tox ul {\n  display: block;\n  list-style-type: disc;\n  -webkit-margin-before: 1em;\n  margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n  margin-block-end: 1em;\n  -webkit-margin-start: 0;\n  margin-inline-start: 0;\n  -webkit-margin-end: 0;\n  margin-inline-end: 0;\n  -webkit-padding-start: 40px;\n  padding-inline-start: 40px; }\n\n.tox a {\n  cursor: pointer;\n  color: #2276d2; }\n\n.tox .tox-image-tools-edit-panel {\n  height: 60px; }\n\n.tox .tox-image-tools__sidebar {\n  height: 60px; }\n", ""]);



/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\ndisplay:inline-block;\nwidth:auto;\nmargin-left:15px;\n'], ['\ndisplay:inline-block;\nwidth:auto;\nmargin-left:15px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(58);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(78);

var _events = __webpack_require__(102);

var eventActions = _interopRequireWildcard(_events);

var _reactBootstrap = __webpack_require__(79);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BgSelect = _styledComponents2.default.select(_templateObject);

var BackgroundOptions = function (_React$Component) {
  _inherits(BackgroundOptions, _React$Component);

  function BackgroundOptions() {
    _classCallCheck(this, BackgroundOptions);

    return _possibleConstructorReturn(this, (BackgroundOptions.__proto__ || Object.getPrototypeOf(BackgroundOptions)).apply(this, arguments));
  }

  _createClass(BackgroundOptions, [{
    key: 'bgChangeImage',
    value: function bgChangeImage(event) {
      event.preventDefault();
      var selectedBg = event.target.value;
      this.props.bgChangeImage(selectedBg);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Row,
        { className: this.props.className + " settings" },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { md: '6' },
          _react2.default.createElement(
            'span',
            null,
            'Select certificate background:'
          ),
          _react2.default.createElement(
            BgSelect,
            { className: 'form-control', value: this.props.eventsStore.cert_background, onChange: this.bgChangeImage.bind(this) },
            this.props.eventsStore.background_files.map(function (item, index) {
              var clearedName = item.split('.').slice(0, -1).join('.');
              return _react2.default.createElement(
                'option',
                { key: index, value: item },
                clearedName
              );
            })
          )
        )
      );
    }
  }]);

  return BackgroundOptions;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    bgChangeImage: function bgChangeImage(selectedBg) {
      return dispatch(eventActions.bgChangeImage(selectedBg));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BackgroundOptions);

/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display:inline-block;\n  width:auto;\n  margin: 0 15px;\n'], ['\n  display:inline-block;\n  width:auto;\n  margin: 0 15px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(78);

var _events = __webpack_require__(102);

var eventActions = _interopRequireWildcard(_events);

var _styledComponents = __webpack_require__(58);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBootstrap = __webpack_require__(79);

var _axios = __webpack_require__(472);

var _axios2 = _interopRequireDefault(_axios);

var _reactToastify = __webpack_require__(224);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UrlInput = _styledComponents2.default.input(_templateObject);

var AddUrlImage = function (_React$Component) {
  _inherits(AddUrlImage, _React$Component);

  function AddUrlImage(props) {
    _classCallCheck(this, AddUrlImage);

    var _this = _possibleConstructorReturn(this, (AddUrlImage.__proto__ || Object.getPrototypeOf(AddUrlImage)).call(this, props));

    _this.state = { imageURL: '' };
    return _this;
  }

  _createClass(AddUrlImage, [{
    key: 'imageExists',
    value: function imageExists(url, callback) {
      var img = new Image();
      img.onload = function () {
        callback(true);
      };
      img.onerror = function () {
        callback(false);
      };
      img.src = url;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ imageURL: event.target.value });
    }
  }, {
    key: 'getImageFromURL',
    value: function getImageFromURL(event) {
      var _this2 = this;

      event.preventDefault();
      this.imageExists(this.state.imageURL, function (exist) {
        if (exist) {
          var data = { url: _this2.state.imageURL };

          _axios2.default.post("/api/url-photo", data).then(function (res) {
            // then print response status
            _this2.props.addImageURL(res.data.fileLocalUrl);
            _reactToastify.toast.success('upload success');
          }).catch(function (err) {
            _reactToastify.toast.error('upload fail');
          });
        } else {
          alert("wrong url");
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { className: 'd-flex align-items-center settings', onSubmit: this.getImageFromURL.bind(this) },
        _react2.default.createElement(
          'span',
          null,
          'Add image from URL: '
        ),
        _react2.default.createElement(UrlInput, { className: 'form-control', type: 'text', name: 'imageURL', value: this.state.imageURL, onChange: this.handleChange.bind(this) }),
        _react2.default.createElement(
          _reactBootstrap.Button,
          { type: 'submit', variant: 'warning' },
          'Dodaj grafik\u0119'
        )
      );
    }
  }]);

  return AddUrlImage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addImageURL: function addImageURL(imageURL) {
      return dispatch(eventActions.addImageURL(imageURL));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddUrlImage);

/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(78);

var _events = __webpack_require__(102);

var eventActions = _interopRequireWildcard(_events);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(79);

var _axios = __webpack_require__(472);

var _axios2 = _interopRequireDefault(_axios);

var _reactToastify = __webpack_require__(224);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddLocalImage = function (_React$Component) {
  _inherits(AddLocalImage, _React$Component);

  function AddLocalImage(props) {
    _classCallCheck(this, AddLocalImage);

    var _this = _possibleConstructorReturn(this, (AddLocalImage.__proto__ || Object.getPrototypeOf(AddLocalImage)).call(this, props));

    _this.maxSelectFile = function (event) {
      var files = event.target.files; // create file object
      if (files.length > 3) {
        var msg = 'Only 3 images can be uploaded at a time';
        event.target.value = null; // discard selected file
        console.log(msg);
        return false;
      }
      return true;
    };

    _this.checkMimeType = function (event) {
      var files = event.target.files;
      var err = []; // create empty array
      var types = ['image/png', 'image/jpeg', 'image/gif'];
      for (var x = 0; x < files.length; x++) {
        if (types.every(function (type) {
          return files[x].type !== type;
        })) {
          err[x] = files[x].type + ' is not a supported format\n';
          // assign message to array
        }
      };
      for (var z = 0; z < err.length; z++) {
        // loop create toast massage
        event.target.value = null;
        _reactToastify.toast.error(err[z]);
      }
      return true;
    };

    _this.checkFileSize = function (event) {
      var files = event.target.files;
      var size = 5000000;
      var err = [];
      for (var x = 0; x < files.length; x++) {
        if (files[x].size > size) {
          err[x] = files[x].type + 'is too large, please pick a smaller file\n';
        }
      };
      for (var z = 0; z < err.length; z++) {
        _reactToastify.toast.error(err[z]);
        event.target.value = null;
      }
      return true;
    };

    _this.onChangeHandler = function (event) {
      var files = event.target.files;
      if (_this.maxSelectFile(event) && _this.checkMimeType(event) && _this.checkFileSize(event)) {
        // if return true allow to setState
        _this.setState({
          selectedFile: files
        });
      }
    };

    _this.onClickHandler = function () {
      var data = new FormData();

      for (var x = 0; x < _this.state.selectedFile.length; x++) {
        data.append('file', _this.state.selectedFile[x]);
      }
      _axios2.default.post("/api/upload-photo", data, {
        onUploadProgress: function onUploadProgress(ProgressEvent) {
          _this.setState({
            loaded: ProgressEvent.loaded / ProgressEvent.total * 100,
            isLoading: true
          });
        }
      }).then(function (res) {
        _this.state.isLoading = false;
        _this.props.addImageURL(res.data.fileLocalUrl);
        _reactToastify.toast.success('upload success');
      }).catch(function (err) {
        _reactToastify.toast.error('upload fail');
      });
    };

    _this.progressRef = _react2.default.createRef();
    _this.state = {
      selectedFile: null,
      loaded: 0,
      isLoading: false
    };
    return _this;
  }
  // upload plikow 

  _createClass(AddLocalImage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'form-group files color' },
          _react2.default.createElement(
            'label',
            null,
            'Upload your image from disk:'
          ),
          _react2.default.createElement('input', { type: 'file', className: 'form-control', multiple: true, onChange: this.onChangeHandler }),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-success btn-block', onClick: this.onClickHandler },
            'Upload'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(_reactBootstrap.ProgressBar, { className: this.state.isLoading ? "" : "hiding", ref: this.progressRef, max: '100', variant: 'success', now: this.state.loaded, label: Math.round(this.state.loaded, 2) + '%' })
        )
      );
    }
  }]);

  return AddLocalImage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addImageURL: function addImageURL(imageURL) {
      return dispatch(eventActions.addImageURL(imageURL));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddLocalImage);

/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(58);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(78);

var _events = __webpack_require__(102);

var eventActions = _interopRequireWildcard(_events);

var _reactBootstrap = __webpack_require__(79);

var _PosOption = __webpack_require__(469);

var _PosOption2 = _interopRequireDefault(_PosOption);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageOptions = function (_React$Component) {
  _inherits(ImageOptions, _React$Component);

  function ImageOptions() {
    _classCallCheck(this, ImageOptions);

    return _possibleConstructorReturn(this, (ImageOptions.__proto__ || Object.getPrototypeOf(ImageOptions)).apply(this, arguments));
  }

  _createClass(ImageOptions, [{
    key: 'posChange',
    value: function posChange(value, name) {
      this.props.changePosition(value, name);
    }
  }, {
    key: 'removeImage',
    value: function removeImage(imageId, event) {

      this.props.removeOption(imageId, 'images');
    }
  }, {
    key: 'render',
    value: function render() {
      var imgProps = this.props.eventsStore.images;
      var activedOpt = this.props.eventsStore.activeOptions;
      var activatedId = parseInt(activedOpt.id);

      if (activatedId != null && imgProps[activatedId]) {
        return _react2.default.createElement(
          'div',
          { ref: this.props.myRef },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { md: '12', className: 'd-flex align-items-center justify-content-end' },
            _react2.default.createElement(
              'span',
              { className: 'ml-3 mr-1 text-dark' },
              'Position: '
            ),
            _react2.default.createElement(_PosOption2.default, { activedOpt: activedOpt, posChange: this.posChange.bind(this) }),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.removeImage.bind(this, activatedId), variant: 'danger' },
              'X'
            )
          )
        );
      } else {
        return '';
      }
    }
  }]);

  return ImageOptions;
}(_react2.default.Component);

ImageOptions.propTypes = {};
var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changePosition: function changePosition(value, name) {
      return dispatch(eventActions.changePosition(value, name));
    },
    removeOption: function removeOption(optionId, optionType) {
      return dispatch(eventActions.removeOption(optionId, optionType));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ImageOptions);

/***/ }),

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blue.jpg": 1148,
	"./carpet.jpg": 1149,
	"./crown.jpg": 1150,
	"./dwa.jpg": 1151,
	"./one.jpg": 1152
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1147;

/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9005130ec7ad1ca6a52b2d134b0698dd.jpg";

/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3729ac95b25ecae34f200ffc6ef84107.jpg";

/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c7757a42b21f79cd7fa59eadfac00d94.jpg";

/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ec9d1975dca9a5e2ad97ce57151e0395.jpg";

/***/ }),

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5d3fc3bf08519f1db0ec47cba4cb9760.jpg";

/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function About() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'About'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Create your own certificate and export the PDF file'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Project at the development stage'
    )
  );
};

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  return Home;
}(_react2.default.Component);

exports.default = About;

/***/ }),

/***/ 1154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['  \n  width: 100%;\n  position: relative;\n  padding: 0;\n  height:100px;\n  z-index: 999;\n  &:before{\n    content: "";\n    background-color: rgba(248,249,250,0.9);\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 50px;\n  }\n'], ['  \n  width: 100%;\n  position: relative;\n  padding: 0;\n  height:100px;\n  z-index: 999;\n  &:before{\n    content: "";\n    background-color: rgba(248,249,250,0.9);\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 50px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['  \n  position: fixed;\n  top: 0px;\n  width: inherit;\n  max-width: inherit;  \n  padding-bottom: 50px;\n  background-color:transparent !important;\n'], ['  \n  position: fixed;\n  top: 0px;\n  width: inherit;\n  max-width: inherit;  \n  padding-bottom: 50px;\n  background-color:transparent !important;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(58);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBootstrap = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FixedContainer = (0, _styledComponents2.default)(_reactBootstrap.Container)(_templateObject);

var CustomNavbar = (0, _styledComponents2.default)(_reactBootstrap.Navbar)(_templateObject2);

var FontSelect = function FontSelect(props) {
  return _react2.default.createElement(
    FixedContainer,
    null,
    _react2.default.createElement(
      CustomNavbar,
      { bg: 'light', expand: 'lg' },
      _react2.default.createElement(
        _reactBootstrap.Navbar.Brand,
        { href: '/' },
        'PDF Cert - Generator'
      ),
      _react2.default.createElement(_reactBootstrap.Navbar.Toggle, { 'aria-controls': 'basic-navbar-nav' }),
      _react2.default.createElement(
        _reactBootstrap.Navbar.Collapse,
        { id: 'basic-navbar-nav' },
        _react2.default.createElement(
          _reactBootstrap.Nav,
          { className: 'mr-auto' },
          _react2.default.createElement(
            _reactBootstrap.Nav.Link,
            { href: '/about' },
            'About'
          )
        )
      )
    )
  );
};

exports.default = FontSelect;

/***/ }),

/***/ 1159:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1160:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1161:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1162:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANGE_TEXT = exports.CHANGE_TEXT = 'CHANGE_TEXT';
var CHANGE_FONT_FAMILY = exports.CHANGE_FONT_FAMILY = 'CHANGE_FONT_FAMILY';
var CHANGE_FONT_COLOR = exports.CHANGE_FONT_COLOR = 'CHANGE_FONT_COLOR';
var CHANGE_FONT_SIZE = exports.CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';
var BG_CHANGE_IMAGE = exports.BG_CHANGE_IMAGE = 'BG_CHANGE_IMAGE';
var CHANGE_TEXT_ALIGN = exports.CHANGE_TEXT_ALIGN = 'CHANGE_TEXT_ALIGN';
var ADD_NEW_TEXT = exports.ADD_NEW_TEXT = 'ADD_NEW_TEXT';
var ADD_IMAGE_URL = exports.ADD_IMAGE_URL = 'ADD_IMAGE_URL';
var CHANGE_POSITION = exports.CHANGE_POSITION = 'CHANGE_POSITION';
var REMOVE_OPTION = exports.REMOVE_OPTION = 'REMOVE_OPTION';
var ACTIVATE_OPTION = exports.ACTIVATE_OPTION = 'ACTIVATE_OPTION';

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\npadding-left: 4px;\npadding-right: 4px;\nwidth: 75px;\ndisplay: inline-block;\nmargin: 0 5px;\n'], ['\npadding-left: 4px;\npadding-right: 4px;\nwidth: 75px;\ndisplay: inline-block;\nmargin: 0 5px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(58);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MInput = _styledComponents2.default.input(_templateObject);

var PosOption = function (_React$Component) {
  _inherits(PosOption, _React$Component);

  function PosOption() {
    _classCallCheck(this, PosOption);

    return _possibleConstructorReturn(this, (PosOption.__proto__ || Object.getPrototypeOf(PosOption)).apply(this, arguments));
  }

  _createClass(PosOption, [{
    key: 'inputNumberValid',
    value: function inputNumberValid(e) {
      var value = e.target.value;
      var name = e.target.name;
      if (value > 999) {
        value = 999;
      }
      this.props.posChange(value, name);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'd-flex' },
        _react2.default.createElement(MInput, { className: 'form-control', type: 'number', step: '1', name: 'posX', value: this.props.activedOpt.posX || 0, onChange: this.inputNumberValid.bind(this) }),
        _react2.default.createElement(MInput, { className: 'form-control', type: 'number', step: '1', name: 'posY', value: this.props.activedOpt.posY || 0, onChange: this.inputNumberValid.bind(this) })
      );
    }
  }]);

  return PosOption;
}(_react2.default.Component);

PosOption.propTypes = {
  activedOpt: _propTypes2.default.object.isRequired,
  posChange: _propTypes2.default.func
};

exports.default = PosOption;

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(485);
module.exports = __webpack_require__(687);


/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(218);

var _reducers = __webpack_require__(710);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(712);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRedux = __webpack_require__(78);

var _App = __webpack_require__(728);

var _App2 = _interopRequireDefault(_App);

var _reactRouterDom = __webpack_require__(333);

var _reactPdf = __webpack_require__(1155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, { eventsStore: _extends({}, window.APP_STATE) }, (0, _redux.applyMiddleware)(_reduxThunk2.default));

_reactDom2.default.hydrate(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App2.default, null)
  )
), document.getElementById('app'));

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(218);

var _eventsReducer = __webpack_require__(711);

var rootReducer = (0, _redux.combineReducers)({
  eventsStore: _eventsReducer.eventsReducer
});

exports.default = rootReducer;

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.eventsReducer = eventsReducer;

var _constants = __webpack_require__(327);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var textId;
var p;

var initialState = {};

function eventsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  textId = ((action || {}).payload || {}).textId >= 0 ? action.payload.textId : null;
  p = (action || {}).payload ? action.payload : null;

  switch (action.type) {
    case constants.CHANGE_TEXT:
      state.textProps[textId].text = p.newText;
      return _extends({}, state, { textId: textId });

    case constants.CHANGE_FONT_FAMILY:
      state.textProps[textId].fontName = p.fontName;
      return _extends({}, state, { textId: textId });

    case constants.CHANGE_FONT_COLOR:
      state.textProps[textId].fontColor = p.color;
      return _extends({}, state, { textId: textId });

    case constants.CHANGE_FONT_SIZE:
      state.textProps[textId].fontSize = p.fontSize;
      return _extends({}, state, { textId: textId });

    case constants.CHANGE_TEXT_ALIGN:
      if (p.eName) {
        state.textProps[textId][p.eName + "Align"] = p.align;
      } else {
        state.textProps[textId].align = p.align;
      };
      return _extends({}, state, { textId: textId });

    case constants.ADD_NEW_TEXT:
      state.textProps.push({ text: "<p>New Text</p>", fontName: 'Roboto-Regular', fontSize: "40" });
      state.activeOptions.id = state.textProps.length - 1;
      state.activeOptions.type = "text";

      return _extends({}, state);

    case constants.ADD_IMAGE_URL:
      state.images.push({ url: p.imageURL });
      return _extends({}, state);

    case constants.CHANGE_POSITION:
      state.activeOptions[p.name] = parseFloat(p.value);
      state.activeOptions.posToChange = true;
      return _extends({}, state);

    case constants.BG_CHANGE_IMAGE:
      var selectedBg = p.selectedBg;
      state.cert_background = selectedBg;
      return _extends({}, state);

    case constants.REMOVE_OPTION:
      delete state[p.optionType][p.optionId];
      return _extends({}, state);

    case constants.ACTIVATE_OPTION:
      state.activeOptions.id = p.optionId;
      state.activeOptions.type = p.optionType;
      return _extends({}, state);

    default:
      return state;
  }
}

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(333);

var _Home = __webpack_require__(753);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(1153);

var _About2 = _interopRequireDefault(_About);

var _Navigation = __webpack_require__(1154);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _reactBootstrap = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactBootstrap.Container,
    null,
    _react2.default.createElement(_Navigation2.default, null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _About2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default })
    )
  );
};

exports.default = App;

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nheight: 100%;\noverflow:hidden;\nwhite-space: pre-wrap;\nspan{\n  cursor: text;\n}\n'], ['\nheight: 100%;\noverflow:hidden;\nwhite-space: pre-wrap;\nspan{\n  cursor: text;\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\ndisplay: inline-block;\nwidth: 100%;\nheight: 100%;\nobject-fit: contain;\ncursor:pointer;\n&:hover{\n  outline: solid 1px rgba(222, 18, 71, 0.9);\n}\n'], ['\ndisplay: inline-block;\nwidth: 100%;\nheight: 100%;\nobject-fit: contain;\ncursor:pointer;\n&:hover{\n  outline: solid 1px rgba(222, 18, 71, 0.9);\n}\n']),
    _templateObject3 = _taggedTemplateLiteral(['  \n  width: 100%;\n  position: fixed;\n  top: 50px;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  padding: 10px 0;\n  &:before{\n    content: "";\n    position: absolute;\n    width: 100vw;\n    height: 100%;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: #e4e5e7;\n  }\n'], ['  \n  width: 100%;\n  position: fixed;\n  top: 50px;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  padding: 10px 0;\n  &:before{\n    content: "";\n    position: absolute;\n    width: 100vw;\n    height: 100%;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: #e4e5e7;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin-top:50px;\n'], ['\n  margin-top:50px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['  background-size: 100% 100%;\n    justify-content:center;\n    margin:0;\n'], ['  background-size: 100% 100%;\n    justify-content:center;\n    margin:0;\n']),
    _templateObject6 = _taggedTemplateLiteral(['  position:relative;\n    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0.37);\n    box-shadow: 0 0 0 15px rgba(0, 255, 58, 0.45);\n    width: 100%;\n    padding: 50px;\n'], ['  position:relative;\n    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0.37);\n    box-shadow: 0 0 0 15px rgba(0, 255, 58, 0.45);\n    width: 100%;\n    padding: 50px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\nposition: relative;\nz-index: 2;\n'], ['\nposition: relative;\nz-index: 2;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(78);

var _styledComponents = __webpack_require__(58);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactToastify = __webpack_require__(224);

var _reactBootstrap = __webpack_require__(79);

var _kendoReactPdf = __webpack_require__(842);

var _DragRes = __webpack_require__(937);

var _DragRes2 = _interopRequireDefault(_DragRes);

__webpack_require__(942);

__webpack_require__(949);

var _events = __webpack_require__(102);

var eventActions = _interopRequireWildcard(_events);

var _TextOptions = __webpack_require__(951);

var _TextOptions2 = _interopRequireDefault(_TextOptions);

var _BackgroundOptions = __webpack_require__(1125);

var _BackgroundOptions2 = _interopRequireDefault(_BackgroundOptions);

var _AddUrlImage = __webpack_require__(1126);

var _AddUrlImage2 = _interopRequireDefault(_AddUrlImage);

var _AddLocalImage = __webpack_require__(1145);

var _AddLocalImage2 = _interopRequireDefault(_AddLocalImage);

var _ImageOptions = __webpack_require__(1146);

var _ImageOptions2 = _interopRequireDefault(_ImageOptions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var background_files = __webpack_require__(1147);

var filePath = function filePath(file_context, name) {
  try {
    return file_context(name, true);
  } catch (e) {
    console.warn('problem z wgraniem pliku: ' + name);
    return false;
  }
};

var TitleHead = _styledComponents2.default.h1.attrs(function (props) {
  var f = props.textProps;
  return { style: {
      color: '' + (f.fontColor ? 'rgba(' + f.fontColor.r + ', ' + f.fontColor.g + ', ' + f.fontColor.b + ', ' + f.fontColor.a + ')' : 'black'),
      fontFamily: (f.fontName ? f.fontName : "Arial") + ' , sans-serif',
      fontSize: '' + (f.fontSize ? f.fontSize + "px" : "16px"),
      textAlign: '' + (f.align ? f.align : "Center")
    } };
})(_templateObject);

var AddedImage = _styledComponents2.default.img.attrs(function (props) {
  var img = props.imageProps;
  return { style: {
      top: '' + (img.p_t ? img.p_t + "px" : "auto"),
      right: '' + (img.p_r ? img.p_r + "px" : "auto"),
      bottom: '' + (img.p_b ? img.p_b + "px" : "auto"),
      left: '' + (img.p_l ? img.p_l + "px" : "auto")

    } };
})(_templateObject2);

var FixedContainer = (0, _styledComponents2.default)(_reactBootstrap.Container)(_templateObject3);

var MarginDiv = _styledComponents2.default.div(_templateObject4);

var CertMainRow = (0, _styledComponents2.default)(_reactBootstrap.Row).attrs(function (props) {

  var bgFileName = props.bgfilename;
  if (bgFileName) {
    var bgUrl = filePath(background_files, './' + bgFileName);
    return { style: {
        backgroundImage: 'url(' + (bgUrl ? bgUrl : "") + ')'
      } };
  }
})(_templateObject5);

var CertMainColumn = (0, _styledComponents2.default)(_reactBootstrap.Col).attrs(function (props) {
  var height = props.colwidth * 1.4142;
  return { style: {
      height: '' + (height ? height + 'px' : "auto")
    } };
})(_templateObject6);

var TextBox = _styledComponents2.default.div.attrs(function (props) {
  var align = props.align;
  return { style: {
      textAlign: '' + (align ? align : "center")
    } };
})(_templateObject7);

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.exportPDF = function () {
      _this.resume.save();
    };

    _this.textCol = _react2.default.createRef();
    _this.optionsPane = _react2.default.createRef();
    _this.loaderBox = _react2.default.createRef();

    _this.state = {
      a4Width: '',
      pdfScale: 1
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'updateDimensions',
    value: function updateDimensions() {
      var doma = _reactDom2.default.findDOMNode(this.textCol.current);
      var a4Width = doma.scrollWidth;
      // 595px is 72dpi A4 paper size
      var pdfScale = 595 / a4Width;

      this.setState({
        a4Width: a4Width,
        pdfScale: pdfScale
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dom = _reactDom2.default.findDOMNode(this.textCol.current);
      var a4Width = dom.scrollWidth;
      // 595px is 72dpi A4 paper size
      var pdfScale = 595 / a4Width;

      window.addEventListener("resize", this.updateDimensions.bind(this));
      document.addEventListener('click', this.handleClickOutside.bind(this));

      this.setState({
        a4Width: a4Width,
        pdfScale: pdfScale,
        mainColDom: dom
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var that = this;

      setTimeout(function () {
        that.loaderBox.current.remove();
      }, 700);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
      document.removeEventListener('click', this.handleClickOutside);
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(e) {
      var x = true;
      var items = this.state.mainColDom.children;

      [].forEach.call(items, function (item) {
        if (item.contains(e.target)) {
          x = false;
        }
      });

      if (this.optionsPane && this.optionsPane.nodeType && this.optionsPane.contains(e.target)) x = false;

      if (this.props.eventsStore.activeOptions.id != null && x) {
        this.props.activateOption(null, null);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var textProps = this.props.eventsStore.textProps;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'loader-box', ref: this.loaderBox },
          _react2.default.createElement(
            'div',
            { className: 'loader' },
            _react2.default.createElement(
              'svg',
              { className: 'circular', viewBox: '25 25 50 50' },
              _react2.default.createElement('circle', { className: 'path', cx: '50', cy: '50', r: '20', fill: 'none', strokeWidth: '2', strokeMiterlimit: '10' })
            )
          )
        ),
        _react2.default.createElement(
          FixedContainer,
          { className: 'container' },
          function () {
            switch (_this2.props.eventsStore.activeOptions.type) {
              case 'text':
                return _react2.default.createElement(_TextOptions2.default, { myRef: function myRef(el) {
                    return _this2.optionsPane = el;
                  }, font_files: _this2.props.eventsStore.font_files });
              case 'image':
                return _react2.default.createElement(_ImageOptions2.default, { myRef: function myRef(el) {
                    return _this2.optionsPane = el;
                  } });
              default:
                return '';
            }
          }()
        ),
        _react2.default.createElement(_BackgroundOptions2.default, { className: 'first' }),
        _react2.default.createElement(_AddUrlImage2.default, null),
        _react2.default.createElement(_AddLocalImage2.default, null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Instruction: Hold Shift or Ctrl to drag items on the axis'
          ),
          _react2.default.createElement(
            'p',
            null,
            'If you\'re done, click "Download PDF" to download the file'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(_reactToastify.ToastContainer, null)
        ),
        _react2.default.createElement(
          _reactBootstrap.Button,
          { onClick: this.exportPDF, variant: 'success' },
          'Download PDF'
        ),
        _react2.default.createElement(
          _reactBootstrap.Button,
          { onClick: this.props.addNewText, variant: 'primary' },
          'Add New Text'
        ),
        _react2.default.createElement(MarginDiv, null),
        _react2.default.createElement(
          _kendoReactPdf.PDFExport,
          { paperSize: 'A4',
            fileName: '_____.pdf',
            title: '',
            subject: '',
            keywords: '',
            scale: this.state.pdfScale,
            ref: function ref(r) {
              return _this2.resume = r;
            } },
          _react2.default.createElement(
            CertMainRow,
            { bgfilename: this.props.eventsStore.cert_background },
            _react2.default.createElement(
              CertMainColumn,
              { colwidth: this.state.a4Width, ref: this.textCol, className: 'text-center' },
              function () {
                return [].concat(_toConsumableArray(textProps.map(function (item, key) {

                  return _react2.default.createElement(
                    _DragRes2.default,
                    { type: 'text', key: key, id: key },
                    _react2.default.createElement(TitleHead, { textId: key, textProps: item, dangerouslySetInnerHTML: { __html: item.text } })
                  );
                })), _toConsumableArray(_this2.props.eventsStore.images.map(function (image, key) {
                  var imgKey = textProps.length + key;
                  return _react2.default.createElement(
                    _DragRes2.default,
                    { type: 'image', key: key + 1000, id: key, arrayId: key },
                    _react2.default.createElement(AddedImage, { src: image.url, imageProps: image, draggable: 'false' })
                  );
                })));
              }()
            )
          )
        ),
        _react2.default.createElement(MarginDiv, null)
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addNewText: function addNewText() {
      return dispatch(eventActions.addNewText());
    },
    addImageURL: function addImageURL(imageURL) {
      return dispatch(eventActions.addImageURL(imageURL));
    },
    activateOption: function activateOption(optionId, type, event) {
      return dispatch(eventActions.activateOption(optionId, type, event));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(78);

var _events = __webpack_require__(102);

var eventActions = _interopRequireWildcard(_events);

var _styledComponents = __webpack_require__(58);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactDraggable = __webpack_require__(938);

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _reResizable = __webpack_require__(939);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // The default


var DragRes = function (_React$Component) {
  _inherits(DragRes, _React$Component);

  function DragRes(props) {
    _classCallCheck(this, DragRes);

    var _this = _possibleConstructorReturn(this, (DragRes.__proto__ || Object.getPrototypeOf(DragRes)).call(this, props));

    _this.draggOffset = _react2.default.createRef();
    _this.elementRef = _react2.default.createRef();
    _this.dragRef = _react2.default.createRef();
    _this.srRef = _react2.default.createRef();

    _this.state = {
      elementWidth: 0,
      firstRender: false,
      axis: false,
      axisPosition: []
    };
    return _this;
  }

  _createClass(DragRes, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;

      setTimeout(function () {
        that.state.elementWidth = that.srRef.current.size.width;
        that.setState({
          firstRender: true
        });
      }, 700);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.firstRender) {
        this.setState({
          firstRender: false
        });
      }
    }
  }, {
    key: 'resetDraggable',
    value: function resetDraggable(key, e) {
      var elem = e.currentTarget.parentNode;

      this.state.axisPosition[key] = { x: -elem.offsetWidth / 2, y: 0 };
      this.setState({});
    }
  }, {
    key: 'dragKeyDown',
    value: function dragKeyDown(key, ref, e) {
      //shift key  
      if (e.shiftKey) {
        // only once pressed
        if (!e.repeat) {
          //press Shift first time
          this.state.axisPosition[key] = { x: ref.current.state.x, y: ref.current.state.y };
          this.setState({
            axis: "x"
          });
        } else {
          this.state.axisPosition[key] = false;
        }
      }

      if (e.ctrlKey) {
        // only once pressed
        if (!e.repeat) {
          //press Shift first time
          this.state.axisPosition[key] = { x: ref.current.state.x, y: ref.current.state.y };
          this.setState({
            axis: "y"
          });
        } else {
          this.state.axisPosition[key] = false;
        }
      }
    }
  }, {
    key: 'dragKeyUp',
    value: function dragKeyUp(key, e) {

      //shift key up
      if (e.keyCode == 16) {
        this.setState({
          axis: false
        });
      }

      if (e.keyCode == 17) {
        this.setState({
          axis: false
        });
      }
    }
  }, {
    key: 'onDragging',
    value: function onDragging(event, elem) {
      this.props.eventsStore.activeOptions.posX = elem.x;
      this.props.eventsStore.activeOptions.posY = elem.y;
    }
  }, {
    key: 'setPos',
    value: function setPos(dragRef) {
      this.props.eventsStore.activeOptions.posX = dragRef.current.state.x;
      this.props.eventsStore.activeOptions.posY = dragRef.current.state.y;
    }
  }, {
    key: 'onDragStop',
    value: function onDragStop(key, ref, event, elem) {
      var style = window.getComputedStyle(ref.current.resizable);
      var matrix = new WebKitCSSMatrix(style.webkitTransform);

      this.state.axisPosition[key] = { x: matrix.m41, y: matrix.m42 };
      this.forceUpdate();
    }
  }, {
    key: 'getDraggablePosition',
    value: function getDraggablePosition(key, elemProps, activedOpt) {
      var firstRender = this.state.firstRender;
      var defaultX = -(this.state.elementWidth / 2) || 0;
      var defaultY = 0;

      if (elemProps && elemProps.p_l) {
        defaultX = elemProps.p_l;
      }

      if (elemProps && elemProps.p_t) {
        defaultY = elemProps.p_t;
      }

      if (firstRender) return { x: defaultX, y: defaultY };else if (activedOpt.id == key && activedOpt.type == this.props.type && activedOpt.posToChange) {
        activedOpt.posToChange = false;
        return { x: activedOpt.posX, y: activedOpt.posY };
      } else if (this.state.axisPosition[key]) return this.state.axisPosition[key];else {
        return undefined;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var key = this.props.id;
      var arrayId = this.props.arrayId;
      var elemProps = this.props.eventsStore;

      if (this.props.type == "text") {
        elemProps = elemProps.textProps[key];
      } else {
        elemProps = elemProps.images[arrayId];
      }

      var activedOpt = this.props.eventsStore.activeOptions;
      var activatetId = activedOpt.id;
      var activatetType = activedOpt.type;
      var activeClass = activatetId == key && activatetType == this.props.type ? " active" : "";

      return _react2.default.createElement(
        _reactDraggable2.default,
        {
          onDrag: this.onDragging.bind(this),
          onStop: this.onDragStop.bind(this, key, this.srRef),
          axis: this.state.axis ? this.state.axis : "both",
          ref: this.dragRef,
          key: key,
          bounds: 'parent',
          handle: '.drag-handle',
          position: this.getDraggablePosition.call(this, key, elemProps, activedOpt) },
        _react2.default.createElement(
          _reResizable.Resizable,
          {
            ref: this.srRef,
            className: "res-box " + this.props.type + " " + activeClass,
            onKeyDown: this.dragKeyDown.bind(this, key, this.dragRef),
            onKeyUp: this.dragKeyUp.bind(this, key),
            tabIndex: '0',
            enable: { right: true, bottom: true, bottomRight: true },
            bounds: 'parent',
            defaultSize: { width: this.props.type == "image" ? elemProps && elemProps.width ? elemProps.width : 300 : 'auto', height: 'auto' },
            onClick: function onClick(e) {
              _this2.setPos.call(_this2, _this2.dragRef);_this2.props.activateOption.call(_this2, key, _this2.props.type);
            } },
          this.props.children,
          _react2.default.createElement('div', { className: 'res-pos-bt', onClick: this.resetDraggable.bind(this, key) }),
          _react2.default.createElement('div', { className: 'drag-handle' })
        )
      );
    }
  }]);

  return DragRes;
}(_react2.default.Component);

DragRes.propTypes = {
  type: _propTypes2.default.string,
  id: _propTypes2.default.number.isRequired
};
var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    activateOption: function activateOption(optionId, type, event) {
      return dispatch(eventActions.activateOption(optionId, type, event));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DragRes);

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(943);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(261)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./style.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(260)(false);
// Imports
var urlEscape = __webpack_require__(944);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(945));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(946));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(947));

// Module
exports.push([module.i, "*, *:before, *:after {\n  box-sizing: border-box; }\n\nbody {\n  background-color: #000000;\n  background-image: linear-gradient(141deg, #1f1f1f 0%, #3e3e48 51%, #000000 75%);\n  color: white; }\n\n.page-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  z-index: 99999999999; }\n\n.hiding {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 2s, opacity 2s linear; }\n\n.settings {\n  margin-bottom: 10px; }\n  .settings.first {\n    padding-top: 50px; }\n\n.btn {\n  margin-right: 15px; }\n\n.option-row {\n  display: flex;\n  flex-wrap: wrap; }\n  .option-row.active {\n    display: flex; }\n  .option-row .margin-row {\n    height: 5px;\n    width: 100%; }\n\n.res-box {\n  display: inline-block;\n  position: absolute !important;\n  float: left;\n  clear: left;\n  left: 50%;\n  cursor: pointer; }\n  .res-box:hover {\n    outline: solid 1px rgba(7, 132, 226, 0.9); }\n  .res-box.image.active {\n    outline: solid 1.5px rgba(37, 226, 7, 0.9);\n    z-index: 1; }\n    .res-box.image.active h1 {\n      cursor: default; }\n\n.react-draggable.active, .react-draggable.react-draggable-dragging {\n  z-index: 1; }\n  .react-draggable.active:after, .react-draggable.active:before, .react-draggable.react-draggable-dragging:after, .react-draggable.react-draggable-dragging:before {\n    content: '';\n    position: absolute;\n    height: calc(100% - 14px);\n    width: 100%; }\n  .react-draggable.active:before, .react-draggable.react-draggable-dragging:before {\n    width: calc(100% - 28px);\n    top: 0px;\n    left: 14px;\n    border-top: 2px solid #3be467; }\n  .react-draggable.active:after, .react-draggable.react-draggable-dragging:after {\n    bottom: 0px;\n    right: 0px;\n    border-bottom: 2px solid #3be467;\n    border-left: 2px solid #3be467;\n    border-right: 2px solid #3be467; }\n  .react-draggable.active:focus, .react-draggable.react-draggable-dragging:focus {\n    outline: 0; }\n  .react-draggable.active h1, .react-draggable.react-draggable-dragging h1 {\n    cursor: default; }\n  .react-draggable.active .drag-handle, .react-draggable.active .res-pos-bt, .react-draggable.react-draggable-dragging .drag-handle, .react-draggable.react-draggable-dragging .res-pos-bt {\n    display: inline-flex; }\n  .react-draggable.active span div:last-child, .react-draggable.react-draggable-dragging span div:last-child {\n    width: 20px;\n    height: 20px;\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n    background-size: 20px;\n    z-index: 1; }\n\n.drag-handle {\n  display: none;\n  position: absolute;\n  left: -10px;\n  top: -10px;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n  background-size: 20px;\n  z-index: 1; }\n\n.res-pos-bt {\n  display: none;\n  position: absolute;\n  right: -10px;\n  top: -10px;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n  background-size: 20px;\n  z-index: 1; }\n\n.select-font-size {\n  display: flex; }\n  .select-font-size .input-number {\n    width: 80px;\n    padding: 0 12px;\n    vertical-align: top;\n    text-align: center;\n    outline: none; }\n  .select-font-size .input-number,\n  .select-font-size .input-number-decrement,\n  .select-font-size .input-number-increment {\n    border: 1px solid #ccc;\n    height: 40px;\n    user-select: none; }\n  .select-font-size .input-number-decrement,\n  .select-font-size .input-number-increment {\n    display: inline-block;\n    width: 30px;\n    line-height: 38px;\n    background: #f1f1f1;\n    color: #444;\n    text-align: center;\n    font-weight: bold;\n    cursor: pointer; }\n    .select-font-size .input-number-decrement:active,\n    .select-font-size .input-number-increment:active {\n      background: #ddd; }\n  .select-font-size .input-number-decrement {\n    border-right: none;\n    border-radius: 4px 0 0 4px; }\n  .select-font-size .input-number-increment {\n    border-left: none;\n    border-radius: 0 4px 4px 0; }\n", ""]);



/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5aa9ea7cc8a2ad090796fc7e6afd12c3.png";

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c96f55d44ddcb4a9fdcd0f5df1d03a47.png";

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df6b67296225fc8185c4074009864045.png";

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(950);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(261)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./ReactToastify.css", function() {
		var newContent = require("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./ReactToastify.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(260)(false);
// Module
exports.push([module.i, ".Toastify__toast-container {\n  z-index: 9999;\n  position: fixed;\n  padding: 4px;\n  width: 320px;\n  box-sizing: border-box;\n  color: #fff; }\n\n.Toastify__toast-container--top-left {\n  top: 1em;\n  left: 1em; }\n\n.Toastify__toast-container--top-center {\n  top: 1em;\n  left: 50%;\n  margin-left: -160px; }\n\n.Toastify__toast-container--top-right {\n  top: 1em;\n  right: 1em; }\n\n.Toastify__toast-container--bottom-left {\n  bottom: 1em;\n  left: 1em; }\n\n.Toastify__toast-container--bottom-center {\n  bottom: 1em;\n  left: 50%;\n  margin-left: -160px; }\n\n.Toastify__toast-container--bottom-right {\n  bottom: 1em;\n  right: 1em; }\n\n@media only screen and (max-width: 480px) {\n  .Toastify__toast-container {\n    width: 100vw;\n    padding: 0;\n    left: 0;\n    margin: 0; }\n  .Toastify__toast-container--top-left, .Toastify__toast-container--top-center, .Toastify__toast-container--top-right {\n    top: 0; }\n  .Toastify__toast-container--bottom-left, .Toastify__toast-container--bottom-center, .Toastify__toast-container--bottom-right {\n    bottom: 0; }\n  .Toastify__toast-container--rtl {\n    right: 0;\n    left: initial; } }\n\n.Toastify__toast {\n  position: relative;\n  min-height: 64px;\n  box-sizing: border-box;\n  margin-bottom: 1rem;\n  padding: 8px;\n  border-radius: 1px;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  max-height: 800px;\n  overflow: hidden;\n  font-family: sans-serif;\n  cursor: pointer;\n  direction: ltr; }\n\n.Toastify__toast--rtl {\n  direction: rtl; }\n\n.Toastify__toast--default {\n  background: #fff;\n  color: #aaa; }\n\n.Toastify__toast--info {\n  background: #3498db; }\n\n.Toastify__toast--success {\n  background: #07bc0c; }\n\n.Toastify__toast--warning {\n  background: #f1c40f; }\n\n.Toastify__toast--error {\n  background: #e74c3c; }\n\n.Toastify__toast-body {\n  margin: auto 0;\n  -ms-flex: 1;\n  flex: 1; }\n\n@media only screen and (max-width: 480px) {\n  .Toastify__toast {\n    margin-bottom: 0; } }\n\n.Toastify__close-button {\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n  background: transparent;\n  outline: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  opacity: 0.7;\n  transition: 0.3s ease;\n  -ms-flex-item-align: start;\n  align-self: flex-start; }\n\n.Toastify__close-button--default {\n  color: #000;\n  opacity: 0.3; }\n\n.Toastify__close-button:hover, .Toastify__close-button:focus {\n  opacity: 1; }\n\n@keyframes Toastify__trackProgress {\n  0% {\n    transform: scaleX(1); }\n  100% {\n    transform: scaleX(0); } }\n\n.Toastify__progress-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  z-index: 9999;\n  opacity: 0.7;\n  background-color: rgba(255, 255, 255, 0.7);\n  transform-origin: left; }\n\n.Toastify__progress-bar--animated {\n  animation: Toastify__trackProgress linear 1 forwards; }\n\n.Toastify__progress-bar--controlled {\n  transition: transform .2s; }\n\n.Toastify__progress-bar--rtl {\n  right: 0;\n  left: initial;\n  transform-origin: right; }\n\n.Toastify__progress-bar--default {\n  background: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55); }\n\n@keyframes Toastify__bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    transform: translate3d(-5px, 0, 0); }\n  to {\n    transform: none; } }\n\n@keyframes Toastify__bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes Toastify__bounceInLeft {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    transform: translate3d(5px, 0, 0); }\n  to {\n    transform: none; } }\n\n@keyframes Toastify__bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes Toastify__bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    transform: translate3d(0, -5px, 0); }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0); }\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes Toastify__bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    transform: translate3d(0, 5px, 0); }\n  to {\n    transform: none; } }\n\n@keyframes Toastify__bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0); }\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0); } }\n\n.Toastify__bounce-enter--top-left, .Toastify__bounce-enter--bottom-left {\n  animation-name: Toastify__bounceInLeft; }\n\n.Toastify__bounce-enter--top-right, .Toastify__bounce-enter--bottom-right {\n  animation-name: Toastify__bounceInRight; }\n\n.Toastify__bounce-enter--top-center {\n  animation-name: Toastify__bounceInDown; }\n\n.Toastify__bounce-enter--bottom-center {\n  animation-name: Toastify__bounceInUp; }\n\n.Toastify__bounce-exit--top-left, .Toastify__bounce-exit--bottom-left {\n  animation-name: Toastify__bounceOutLeft; }\n\n.Toastify__bounce-exit--top-right, .Toastify__bounce-exit--bottom-right {\n  animation-name: Toastify__bounceOutRight; }\n\n.Toastify__bounce-exit--top-center {\n  animation-name: Toastify__bounceOutUp; }\n\n.Toastify__bounce-exit--bottom-center {\n  animation-name: Toastify__bounceOutDown; }\n\n@keyframes Toastify__zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes Toastify__zoomOut {\n  from {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3); }\n  to {\n    opacity: 0; } }\n\n.Toastify__zoom-enter {\n  animation-name: Toastify__zoomIn; }\n\n.Toastify__zoom-exit {\n  animation-name: Toastify__zoomOut; }\n\n@keyframes Toastify__flipIn {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in; }\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  to {\n    transform: perspective(400px); } }\n\n@keyframes Toastify__flipOut {\n  from {\n    transform: perspective(400px); }\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n.Toastify__flip-enter {\n  animation-name: Toastify__flipIn; }\n\n.Toastify__flip-exit {\n  animation-name: Toastify__flipOut; }\n\n@keyframes Toastify__slideInRight {\n  from {\n    transform: translate3d(110%, 0, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInLeft {\n  from {\n    transform: translate3d(-110%, 0, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInUp {\n  from {\n    transform: translate3d(0, 110%, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInDown {\n  from {\n    transform: translate3d(0, -110%, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(110%, 0, 0); } }\n\n@keyframes Toastify__slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(-110%, 0, 0); } }\n\n@keyframes Toastify__slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 500px, 0); } }\n\n@keyframes Toastify__slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -500px, 0); } }\n\n.Toastify__slide-enter--top-left, .Toastify__slide-enter--bottom-left {\n  animation-name: Toastify__slideInLeft; }\n\n.Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right {\n  animation-name: Toastify__slideInRight; }\n\n.Toastify__slide-enter--top-center {\n  animation-name: Toastify__slideInDown; }\n\n.Toastify__slide-enter--bottom-center {\n  animation-name: Toastify__slideInUp; }\n\n.Toastify__slide-exit--top-left, .Toastify__slide-exit--bottom-left {\n  animation-name: Toastify__slideOutLeft; }\n\n.Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right {\n  animation-name: Toastify__slideOutRight; }\n\n.Toastify__slide-exit--top-center {\n  animation-name: Toastify__slideOutUp; }\n\n.Toastify__slide-exit--bottom-center {\n  animation-name: Toastify__slideOutDown; }\n", ""]);



/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nbackground-image: url(', ');\nbackground-size:100%;\nbacground-position:center;\nheight:38px;\nwidth:38px;\nborder: 0;\nborder-radius:5px;\ncursor:pointer;\n'], ['\nbackground-image: url(', ');\nbackground-size:100%;\nbacground-position:center;\nheight:38px;\nwidth:38px;\nborder: 0;\nborder-radius:5px;\ncursor:pointer;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(58);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(78);

var _events = __webpack_require__(102);

var eventActions = _interopRequireWildcard(_events);

var _reactBootstrap = __webpack_require__(79);

var _SelectFontSize = __webpack_require__(952);

var _SelectFontSize2 = _interopRequireDefault(_SelectFontSize);

var _FontSelect = __webpack_require__(953);

var _FontSelect2 = _interopRequireDefault(_FontSelect);

var _ColorPicker = __webpack_require__(954);

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

var _PosOption = __webpack_require__(469);

var _PosOption2 = _interopRequireDefault(_PosOption);

var _trash = __webpack_require__(1118);

var _trash2 = _interopRequireDefault(_trash);

var _tinymceReact = __webpack_require__(1119);

__webpack_require__(1123);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

///dodac dobrze css-y wziac pod uwage czy nie w componentdidmount


var TrashButton = _styledComponents2.default.button(_templateObject, _trash2.default);

var TextOptions = function (_React$Component) {
  _inherits(TextOptions, _React$Component);

  function TextOptions() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextOptions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextOptions.__proto__ || Object.getPrototypeOf(TextOptions)).call.apply(_ref, [this].concat(args))), _this), _this.handleEditorChange = function (content, editor) {
      var newText = content;
      var textId = _this.props.eventsStore.activeOptions.id;
      if (_this.props.eventsStore.textProps[textId]) _this.props.changeText(newText, textId);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextOptions, [{
    key: 'changeText',
    value: function changeText(event) {
      event.preventDefault();
      var newText = event.target.value;

      var textId = this.props.eventsStore.activeOptions.id;
      this.props.changeText(newText, textId);
    }
  }, {
    key: 'fontChange',
    value: function fontChange(textId, event) {
      event.preventDefault();
      var selectedFont = event.target.value;
      this.props.changeFontFamily(selectedFont, textId);
    }
  }, {
    key: 'fontSizeChange',
    value: function fontSizeChange(textId, size) {
      this.props.changeFontSize(size, textId);
    }
  }, {
    key: 'colorChange',
    value: function colorChange(textId, color, event) {
      this.props.changeFontColor(color, textId);
    }
  }, {
    key: 'textAlignChange',
    value: function textAlignChange(textId) {
      var eName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var event = arguments[2];

      var align = event.target.value;
      this.props.changeTextAlign(align, textId, eName);
    }
  }, {
    key: 'posChange',
    value: function posChange(value, name) {
      this.props.changePosition(value, name);
    }
  }, {
    key: 'removeText',
    value: function removeText(textId, event) {
      this.props.removeOption(textId, 'textProps');
    }
  }, {
    key: 'render',
    value: function render() {
      var textProps = this.props.eventsStore.textProps;
      var activedOpt = this.props.eventsStore.activeOptions;
      var activedOptId = parseInt(activedOpt.id);

      if (activedOptId != null && textProps[activedOptId]) {
        return _react2.default.createElement(
          'div',
          { ref: this.props.myRef, className: 'option-row' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { md: '4', className: 'd-flex align-items-center' },
            _react2.default.createElement(_tinymceReact.Editor, {
              apiKey: 'mt9irt8330ipqetnomhh5t3t9mdgtg22ga8hwzdulizgyzkm',
              id: 'tiny-mce-option',
              value: textProps[activedOptId].text,
              init: {
                plugins: 'link image code',
                width: '100%',
                height: 100,
                max_height: 200,
                menubar: false,
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
                font_formats: 'Arial=arial,helvetica,sans-serif;'
              },
              onEditorChange: this.handleEditorChange
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: '8', className: 'd-flex align-items-center' },
            _react2.default.createElement(_FontSelect2.default, { textId: activedOptId, font_files: this.props.font_files, fontChange: this.fontChange.bind(this), initfont: textProps[activedOptId].fontName }),
            _react2.default.createElement(_SelectFontSize2.default, { min: 1, max: 200, value: textProps[activedOptId].fontSize, textId: activedOptId, fontSizeChange: this.fontSizeChange.bind(this) }),
            _react2.default.createElement(
              'span',
              { className: 'ml-3 mr-1 text-dark' },
              'Color: '
            ),
            _react2.default.createElement(_ColorPicker2.default, { params: textProps[activedOptId], textId: activedOptId, colorChange: this.colorChange.bind(this) }),
            _react2.default.createElement(
              'span',
              { className: 'ml-3 mr-1 text-dark' },
              'Position: '
            ),
            _react2.default.createElement(_PosOption2.default, { activedOpt: activedOpt, posChange: this.posChange.bind(this) }),
            _react2.default.createElement(TrashButton, { onClick: this.removeText.bind(this, activedOptId) })
          ),
          _react2.default.createElement('div', { className: 'margin-row' })
        );
      } else {
        return '';
      }
    }
  }]);

  return TextOptions;
}(_react2.default.Component);

TextOptions.propTypes = {
  font_files: _propTypes2.default.array
};
var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeFontFamily: function changeFontFamily(selectedFont, textId) {
      return dispatch(eventActions.changeFontFamily(selectedFont, textId));
    },
    changeFontColor: function changeFontColor(color, textId) {
      return dispatch(eventActions.changeFontColor(color, textId));
    },
    changeFontSize: function changeFontSize(fontSize, textId) {
      return dispatch(eventActions.changeFontSize(fontSize, textId));
    },
    changeText: function changeText(newText, textId) {
      return dispatch(eventActions.changeText(newText, textId));
    },
    changeTextAlign: function changeTextAlign(align, textId, eName) {
      return dispatch(eventActions.changeTextAlign(align, textId, eName));
    },
    changeMargin: function changeMargin(m_size, m_name, textId) {
      return dispatch(eventActions.changeMargin(m_size, m_name, textId));
    },
    removeOption: function removeOption(optionId, optionType) {
      return dispatch(eventActions.removeOption(optionId, optionType));
    },
    changePosition: function changePosition(value, name) {
      return dispatch(eventActions.changePosition(value, name));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TextOptions);

/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectFontSize = function (_React$Component) {
  _inherits(SelectFontSize, _React$Component);

  function SelectFontSize(props) {
    _classCallCheck(this, SelectFontSize);

    var _this = _possibleConstructorReturn(this, (SelectFontSize.__proto__ || Object.getPrototypeOf(SelectFontSize)).call(this, props));

    _this.min = _this.props.min || false;
    _this.max = _this.props.max || false;


    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(SelectFontSize, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.state.value = this.props.value;
    }
  }, {
    key: 'decrement',
    value: function decrement() {
      var newValue = this.state.value;
      newValue--;
      newValue = this.checkValue(newValue);
      this.setValue(newValue);
    }
  }, {
    key: 'increment',
    value: function increment() {
      var newValue = this.state.value;
      newValue++;
      newValue = this.checkValue(newValue);
      this.setValue(newValue);
    }
  }, {
    key: 'checkValue',
    value: function checkValue(size) {
      var validSize = size;

      if (this.props.max && size >= this.props.max) {
        validSize = this.props.max;
      } else if (this.props.min && size <= this.props.min) {
        validSize = this.props.min;
      }

      return validSize;
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var validSize = this.checkValue(event.target.value);
      this.setValue(validSize);
    }
  }, {
    key: 'setValue',
    value: function setValue(size) {
      this.state.value = size;
      this.props.fontSizeChange.call(this, this.props.textId, size);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'select-font-size' },
        _react2.default.createElement(
          'span',
          { className: 'input-number-decrement', onClick: this.decrement.bind(this) },
          '\u2013'
        ),
        _react2.default.createElement('input', { className: 'input-number', type: 'text', value: this.state.value, min: this.props.min, max: this.props.max, onChange: this.onChange.bind(this) }),
        _react2.default.createElement(
          'span',
          { className: 'input-number-increment', onClick: this.increment.bind(this) },
          '+'
        )
      );
    }
  }]);

  return SelectFontSize;
}(_react2.default.Component);

;

SelectFontSize.propTypes = {
  textId: _propTypes2.default.number.isRequired,
  fontSizeChange: _propTypes2.default.func
};
exports.default = SelectFontSize;

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\nwidth:150px;\nmargin:0 5px;\ncolor:red;\npadding-top: 8px;\npadding-bottom: 8px;\npadding-left: 16px;\npadding-right: 16px;\n'], ['\nwidth:150px;\nmargin:0 5px;\ncolor:red;\npadding-top: 8px;\npadding-bottom: 8px;\npadding-left: 16px;\npadding-right: 16px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(58);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSelect = _styledComponents2.default.select(_templateObject);

var FontSelect = function FontSelect(props) {
  return _react2.default.createElement(
    StyledSelect,
    { className: 'form-control', value: props.initfont, onChange: props.fontChange.bind(undefined, props.textId) },
    props.font_files.map(function (item, index) {
      return _react2.default.createElement(
        'option',
        { key: index, value: item },
        item
      );
    })
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

exports.default = FontSelect;

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nposition:relative;\ndisplay:flex;\naligin-items:center;\nmargin: 0 5px;\n.swatch{\n  display: flex;\n  align-items: center;\n  height:32px;\n  padding: 5px;\n  background: #fff;\n  borderRadius: 1px;\n  boxShadow: 0 0 0 1px rgba(0,0,0,.1);\n  cursor: pointer;\n}\n.popover{\n  position: absolute;\n  zIndex: 2;\n}\n'], ['\nposition:relative;\ndisplay:flex;\naligin-items:center;\nmargin: 0 5px;\n.swatch{\n  display: flex;\n  align-items: center;\n  height:32px;\n  padding: 5px;\n  background: #fff;\n  borderRadius: 1px;\n  boxShadow: 0 0 0 1px rgba(0,0,0,.1);\n  cursor: pointer;\n}\n.popover{\n  position: absolute;\n  zIndex: 2;\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 36px;\n  height: 14px;\n  borderRadius: 2px;\n'], ['\n  width: 36px;\n  height: 14px;\n  borderRadius: 2px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(58);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactColor = __webpack_require__(955);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==";

var ServerCanvas = function ServerCanvas() {
  _classCallCheck(this, ServerCanvas);

  this.toDataURL = function () {
    return dataUrl;
  };
  this.getContext = function () {
    return {
      fillRect: function fillRect() {},
      translate: function translate() {}
    };
  };
};

var ColorDiv = _styledComponents2.default.div(_templateObject);

var ColorView = _styledComponents2.default.div.attrs(function (props) {
  return {
    style: {
      background: 'rgba(' + props.color.r + ', ' + props.color.g + ', ' + props.color.b + ', ' + props.color.a + ')'
    } };
})(_templateObject2);

var ColorPicker = function (_React$Component) {
  _inherits(ColorPicker, _React$Component);

  function ColorPicker(props) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, props));

    _this.state = {
      displayColorPicker: false,
      color: {
        r: '0',
        g: '0',
        b: '0',
        a: '1'
      }
    };

    _this.handleClick = function () {
      _this.setState({ displayColorPicker: !_this.state.displayColorPicker });
    };

    _this.handleClose = function () {
      _this.setState({ displayColorPicker: false });
    };

    _this.handleChange = function (textId, color) {
      _this.props.colorChange.call(_this, textId, color.rgb);
    };

    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }

  _createClass(ColorPicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.setState({ displayColorPicker: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        ColorDiv,
        { ref: function ref(node) {
            _this2.wrapperRef = node;
          } },
        _react2.default.createElement(
          'div',
          { className: 'swatch', onClick: this.handleClick },
          _react2.default.createElement(ColorView, { color: this.props.params.fontColor || this.state.color })
        ),
        this.state.displayColorPicker ? _react2.default.createElement(
          'div',
          { className: 'popover' },
          _react2.default.createElement('div', { className: 'cover', onClick: this.handleClose }),
          _react2.default.createElement(_reactColor.ChromePicker, { color: this.props.params.fontColor || this.state.color, onChange: this.handleChange.bind(this, this.props.textId), renderers: { canvas: ServerCanvas } })
        ) : null
      );
    }
  }]);

  return ColorPicker;
}(_react2.default.Component);

ColorPicker.propTypes = {
  params: _propTypes2.default.object,
  textId: _propTypes2.default.number.isRequired,
  colorChange: _propTypes2.default.func
};

exports.default = ColorPicker;

/***/ })

},[484]);
//# sourceMappingURL=client.js.map