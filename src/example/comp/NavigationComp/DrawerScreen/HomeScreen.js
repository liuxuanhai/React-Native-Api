import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home', // 也可以定义为React组件或给定{ focused: boolean, tintColor: string }返回一个 React.Node 的函数
        drawerIcon: ({ focused, tintColor }) => {
            console.log(focused); // 是否为活动选项卡，true为活动选项卡，反之为false
            console.log(tintColor); // 当前状态的显示颜色，与配置项activeTintColor和inactiveTintColor关联
            return (
                <View>
                    <Image
                        source={require('./home.png')}
                        style={[styles.icon, {tintColor: tintColor}]}
                    />
                </View>
            );
        }
    };

    render() {
        // 打开抽屉this.props.navigation.openDrawer();
        // 关闭抽屉this.props.navigation.closeDrawer();
        // 切换抽屉this.props.navigation.toggleDrawer();

        const { navigation } = this.props;
        return (
            <View style={styles.viewContainer} >
                <Text style={styles.contextTextStyle}>Drawer HomeScreen</Text>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={()=>navigation.openDrawer()} 
                >
                    <Text>Open Drawer</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={()=>navigation.toggleDrawer()}
                >
                    <Text>Toggle Drawer</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={()=>navigation.navigate('Notifications')}
                >
                    <Text>Go to NotificationsScreen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24
    },
    viewContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    contextTextStyle: {
        fontSize: 30
    },
    buttonContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderWidth: 1,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 10
    }
});

HomeScreen.propTypes = {
    navigation: PropTypes.object
};

export default HomeScreen;