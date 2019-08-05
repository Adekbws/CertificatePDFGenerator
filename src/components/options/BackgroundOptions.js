import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as eventActions from '../../actions/events';

import { Row, Col} from 'react-bootstrap';

const BgSelect = styled.select`
display:inline-block;
width:auto;
margin-left:15px;
`;

class BackgroundOptions extends React.Component {

  bgChangeImage(event) {
    event.preventDefault();
    const selectedBg = event.target.value;
    this.props.bgChangeImage(selectedBg);
  }

  render () {
    return (
        <Row className={this.props.className+" settings"}>
          <Col md="6">
            <span>Select certificate background:</span>
            <BgSelect className="form-control" value={this.props.eventsStore.cert_background} onChange={this.bgChangeImage.bind(this)}>
            {this.props.eventsStore.background_files.map((item, index) => {
                const clearedName = item.split('.').slice(0, -1).join('.');
                return (
                    <option key={index} value={item}  >{clearedName}</option>
                );
            })}
            </BgSelect>
          </Col>
        </Row>
    );
  };
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bgChangeImage: (selectedBg) => dispatch(eventActions.bgChangeImage(selectedBg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundOptions);