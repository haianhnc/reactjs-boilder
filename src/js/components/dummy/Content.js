/*  eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DummyContentStyle = styled.div`
  width: 100%;
  height: 200px;
  position: relative;

  img {
    vertical-align: middle;    
  }
`;

const ImageStyle = styled.div`
  width: 100%;
  height: 100%;
  &::before {
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
  }
`;

export default class Content extends Component {
componentDidMount() {}

render() {
  const imageStyle = {
    backgroundImage: `url(${this.props.dummy.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: 3,
    backgroundOrigin: 'border-box',
    backgroundRepeat: 'no-repeat',
  };

  const { dummy } = this.props;

  return (
    <DummyContentStyle className="Article-Content charmmy-margin4">
      <h1>{dummy.id}</h1>
      <ImageStyle className="app-card-responsive app-fortune-border-less-than-1px" style={imageStyle} />
      <p>{dummy.description}</p>
    </DummyContentStyle>
  );
}
}

Content.propTypes = {
  dummy: PropTypes.object.isRequired,
};