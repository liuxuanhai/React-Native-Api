import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

class PlatformAPI extends Component { 

    constructor(props) {
        super(props);
        this.state = { os: '', version: '' };
    }

    componentDidMount() {
        const os = Platform.OS; // android or ios
        const version = Platform.Version; // 版本
        this.setState({os, version});
    }

    render() {
        // 方式一
        const CompFromExpansionName = require('./Comp').default;
        // 方式二
        const CompFromPlatfromSelect = Platform.select({
            ios: () => require('./CompIOS'),
            android: () => require('./CompAndroid')
        })().default;

        return (
            <View>
                <Text>os:{this.state.os}</Text>
                <Text>version:{this.state.version}</Text>
                <Text>自动根据不同的系统装载不同的组件：</Text>
                <CompFromExpansionName />
                <CompFromPlatfromSelect />
            </View>
        );
    }
}

export default PlatformAPI;