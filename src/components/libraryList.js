import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'native-base';
import Libraryitem from './libraryItem';

class Librarylist extends Component {
    componentWillMount() {
        this.dataItems = this.props.libraries;
    }

    render() {
        return (
            <List 
                dataArray={this.dataItems}
                renderRow={(item) =>
                            <Libraryitem item={item} />
                         }
            />
          
        );
    }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(Librarylist);

