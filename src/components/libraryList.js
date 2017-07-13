import React, { Component } from 'react';
import { connect } from 'react-redux';

class Librarylist extends Component {
    render() {
        return;
    }
}

const mapStateToProps = state => ({ libraries: state.libraries });
export default connect(mapStateToProps)(Librarylist);

