import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';

// 相当于RN移动端的 LocalStorage
class AsyncStorageAPI extends React.Component {

    _storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('Error saving data');
        }
    }

    // 注意: async定义的函数返回值类型为Promise
    _retrieveData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
         } catch (error) {
            console.log('Error retrieving data');
         }
    }

    _removeData = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
         } catch (error) {
            console.log('Error removeing data');
         }
    }

    _mergeData = async (key, value) => {
        try {
            await AsyncStorage.mergeItem(key, value);
        } catch (error) {
            console.log('Error mergeing data');
        }
    }

    _multiStoreData = async (keyValuePairs) => {
        try {
            await AsyncStorage.multiSet(keyValuePairs);
        } catch (error) {
            console.log('Error multisaving data');
        }
    }

    _multiRetrieveData = async (keyArray) => {
        try {
            const value = await AsyncStorage.multiGet(keyArray);
            if (value !== null) {
                return value;
            }
         } catch (error) {
            console.log('Error multiretrieving data');
         }
    }

    _multiRemoveData = async (keyArray) => {
        try {
            await AsyncStorage.multiRemove(keyArray);
         } catch (error) {
            console.log('Error multiremoveing data');
         }
    }

    _multiMergeData = async (keyValuePairs) => {
        try {
            await AsyncStorage.multiMerge(keyValuePairs);
        } catch (error) {
            console.log('Error multimergeing data');
        }
    }

    componentDidMount(){
        const object1 = {
            sex: 'man',
            age: 30,
            hair: 'blue'
        };
        // const object2 = {
        //     sex: 'man',
        //     age: 32,
        //     hair: 'yellow'
        // };
        this._retrieveData('user').then((resp)=>{
            console.log('json1:', resp); // {"sex":"man","age":30,"hair":"blue"}
        }); 
        this._storeData('user',JSON.stringify(object1));
        this._retrieveData('user').then((resp)=>{
            console.log('json1:', resp); // {"sex":"man","age":30,"hair":"blue"}
        }); 
        // this._mergeData('user',JSON.stringify(object2));
        // this._retrieveData('user').then((resp)=>{
        //     console.log(resp); // {"sex":"man","age":32,"hair":"yellow"}
        // });
        
        // // 批量存储于取出
        // this._multiStoreData([['multi1','value1'],['multi2','value2'],['multi3','value3']]);
        // this._multiRetrieveData(['multi1','multi3']).then((resp)=>{
        //     console.log(resp);
        // });
    }

    render(){
        return(
            <View>
                <Text>AsyncStorageAPI</Text>
            </View>
        );
    }

}

export default AsyncStorageAPI;