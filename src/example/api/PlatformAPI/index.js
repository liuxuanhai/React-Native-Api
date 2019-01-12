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
        const CompFromExpansionName = require('./Comp').default;
        const CompFromPlatfromSelect = Platform.select({
            ios: () => require('./CompIOS'),
            android: () => require('./CompAndroid')
        })().default;

        return (
            <View>
                <Text>App OS is {this.state.os}@version{this.state.version}</Text>
                <Text>Auto get different component from different OS:</Text>
                <CompFromExpansionName />
                <CompFromPlatfromSelect />
            </View>
        );
    }
}

export default PlatformAPI;