import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Text } from 'native-base';
import * as actions from '../actions';

class Librarylist extends Component {
    componentWillMount() {
        this.dataItems = this.props.libraries;
    }

    render() {
        return (
            <List 
                dataArray={this.dataItems}
                renderRow={(item) =>
                            <ListItem>
                                <Text>{item.title}</Text>
                            </ListItem>
                         }
            />
          
        );
    }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps, actions)(Librarylist);

