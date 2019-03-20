import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as dummyActions from '../actions/dummy';

import Content from '../components/dummy/Content';

class Dummy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errorMessage: '',
    };
  }

  componentDidMount() {
    this.fetchData(1);
  }

  goHome() {
    this.props.history.push('/home');
  }

  onLoading(value) {
    this.setState({ isLoading: value });
  }

  onError(error) {
    // write you error handle here
    console.log(error);
  }

  fetchData(id) {
    this.props.actions.dummy.fetchData(id, this.onLoading.bind(this), this.onError.bind(this));
  }

  render() {
    const { dummy } = this.props.data;
    if(this.state.isLoading || !dummy) {
      return (
        <div>
          LOADING...
        </div>
      );
    } else {
      return (
        <div className="container-dummy">
          <Content dummy={dummy}/>
        </div>
      );
    }
  }
}

Dummy.propTypes = {
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    data: {
      dummy: state.dummy,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      dummy: bindActionCreators(dummyActions, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dummy);
