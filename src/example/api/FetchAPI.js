import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

class FetchAPI extends Component {

    // get请求-无参
    _getJson = () => {
        fetch('http://www.helloui.net/api/json/products.json')
            .then((resp) => resp.json())
            .then((json)=>{
                Alert.alert('请求成功：', JSON.stringify(json)); // json：Array(3) [Object, Object, Object]
            })
            .catch((error)=>{
                console.log(error);
            }
        );
    }

    // get请求-带参
    _getWithParam = () => {
        fetch('http://www.helloui.net/rn_get?name=admin')
            .then((resp) => resp.json())
            .then((json)=>{
                Alert.alert('请求成功：', JSON.stringify(json)); // json：Object {name: "admin"}
            })
            .catch((error)=>{
                console.log(error);
            }
        );
    }

    // post请求
    _post = () => {
        let data = JSON.stringify({
            name:'admin'
        });
        const body = new FormData();
        body.append('data', data);
        fetch('http://www.helloui.net/rn_post', {
                method: 'POST',
                body,
                headers: {
                    'Content-Type':'multipart/form-data',
                    'Accept': 'application/json'
                }
            })
            .then((resp) => resp.json())
            .then((json)=>{
                Alert.alert('请求成功：', JSON.stringify(json)); // json：Object {name: "admin"}
            })
            .catch((error)=>{
                console.log(error);
            }
        );
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                
                <TouchableOpacity 
                    onPress={this._getJson}
                    activeOpacity={0.8}
                >
                    <View style={styles.btnViewStyle}>
                        <Text style={styles.btnTextStyle}>GET JSON Fetch请求</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={this._getWithParam}
                    activeOpacity={0.8}
                >
                    <View style={styles.btnViewStyle}>
                        <Text style={styles.btnTextStyle}>GET WithParam Fetch请求</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={this._post}
                    activeOpacity={0.8}
                >
                    <View style={styles.btnViewStyle}>
                        <Text style={styles.btnTextStyle}>POST Fetch请求</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flex: 1
    },
    btnViewStyle: {
        backgroundColor: 'green',
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTextStyle: {
        color: 'white',
        fontSize: 24
    }
});

export default FetchAPI;