import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { ListItem, Text, View } from 'native-base';
import * as actions from '../actions';

class Libraryitem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    renderDescription() {
         if (this.props.item.id === this.props.selectLibraryId) {
             return (
                        <View padder style={{ flex: 1 }}>
                            <Text>                           
                                {this.props.item.description}
                            </Text>
                            <View 
                                style={{ 
                                        borderBottomColor: '#D3D3D3', 
                                        borderBottomWidth: 0.7, 
                                        marginTop: 10 
                                      }} 
                            />
                        </View>
                    );
         }
    }
    render() {
        return (
            <View>                
                <TouchableWithoutFeedback 
                    onPress={() => this.props.selectLibrary(this.props.item.id)}
                >
                    <ListItem>
                        <Text>{this.props.item.title}</Text>
                    </ListItem>    
                </TouchableWithoutFeedback>                
                {this.renderDescription()}    
            </View>
        );
    }
}

const mapStateToProps = state => (
        { selectLibraryId: state.selectLibraryId }
    );

export default connect(mapStateToProps, actions)(Libraryitem);
