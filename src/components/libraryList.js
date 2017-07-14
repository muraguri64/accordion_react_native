import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableWithoutFeddback } from 'react-native';
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
                            <TouchableWithoutFeddback 
                                onPress={() => this.props.selectLibrary(item.id)}
                            >
                                <ListItem>
                                    <Text>{item.title}</Text>
                                </ListItem>
                            </TouchableWithoutFeddback>
                         }
            />
          
        );
    }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps, actions)(Librarylist);

