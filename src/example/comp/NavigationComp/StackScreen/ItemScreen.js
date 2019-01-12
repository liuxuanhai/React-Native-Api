import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class ItemScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'ItemScreen',
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: 26
        },
        headerLeft:(
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={()=>{navigation.goBack();}}
            >
                <Text style={styles.headerLeftTextStyle}>返回 {navigation.getParam('prevScreenTitle','为空时显示这段文字')} 页</Text>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={navigation.getParam('increaseCount')}
            >
            <Text style={styles.headerLeftTextStyle}>计数器 +1</Text> 
        </TouchableOpacity>
        )
    })

    constructor(props){
        super(props);
        this.state = {count:0};
    }

    componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render(){
        const { navigation } = this.props;

        return(
            <View style={styles.viewContainer}>
                <Text>Items Data...({this.state.count})</Text>
                <TouchableOpacity 
                    style={[styles.buttonContainer, styles.modalStyle]}
                    onPress={()=> navigation.navigate('MyModal')}
                >
                    <Text style={styles.modalTextStyle}>进入 ModalScreen 页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

ItemScreen.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    viewContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderWidth: 1,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    headerLeftTextStyle: {
        color: 'blue'
    },
    headerRightTextStyle: {
        color: 'green'
    },
    modalStyle: {
        marginTop: 10,
        borderRadius: 30,
        borderWidth: 1,
        padding: 5
    },
    modalTextStyle: {
        color: 'red'
    },
});

export default ItemScreen;