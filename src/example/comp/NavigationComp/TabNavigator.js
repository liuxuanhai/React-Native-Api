import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HomeScreen, SettingsScreen } from './TabScreen';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const rootTab = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
    {
        initialRouteName: 'Home', // 第一次加载时初始选项卡路由的 routeName
        order: ['Home', 'Settings'], // 定义选项卡顺序的 routeNames 数组
        backBehavior: 'initialRoute', // 触发navigation.goBack()方法时是否包括Tab页间切换的的返回操作，不包括为none，包括为initialRoute(默认包括)
        // tabBarComponent : (props) => {return <BottomTabBar {...props} />}, // 可选，覆盖用作标签栏的组件，一般会用不上
        tabBarOptions: {
            activeTintColor: 'red', // 活动选项卡标签文本和图标颜色
            activeBackgroundColor: '#FFFFFF', // 活动选项卡的背景色
            inactiveTintColor: 'gray', // 非活动选项卡的标签文本和图标颜色
            inactiveBackgroundColor: '#FFFFFF', // 非活动选项卡的背景色
            showLabel: true, // 是否显示选项卡的标签, 默认值为 true
            showIcon: true, // 是否显示 Tab 的图标，默认为false
            // 选项卡栏的样式
            style: {
                borderTopColor: 'red',
                height: 50
            }, 
            // 选项卡的默认样式
            tabStyle: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }, 
            // 选项卡标签文本的默认样式
            labelStyle: {
                fontSize: 14
            }, 
            allowFontScaling: true // 允许标签字体自动缩放以对界面更友好，默认为: true
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarVisible: true, // true或false用于显示或隐藏标签栏，如果未设置，则默认为true
            // 选项卡 自定义图标
            // eslint-disable-next-line
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state; // 选项卡名称
                console.log(focused); // 是否处于活动状态,是为true
                console.log(horizontal); // 是否处于横屏,是为true
                console.log(tintColor); // 状态颜色值
                let textStyle = {};
                if(focused){
                    textStyle = {
                        color: 'red'
                    };
                }
                return(
                    <View>
                        <Text style={textStyle}>{routeName}-Icon</Text>
                    </View>
                );
            },
            // 选项卡 自定义标签文本
            // eslint-disable-next-line
            // tabBarLabel: ({focused, tintColor}) => {
            //     const { routeName } = navigation.state; // 选项卡名称
            //     console.log(focused); // 是否处于活动状态,是为true
            //     console.log(tintColor); // 状态颜色值
            //     return(
            //         <View>
            //             <Text>{routeName}-Label</Text>
            //         </View>
            //     );
            // }
        })
    }
);
const AppNavigatorContainer  = createAppContainer(rootTab);

class TabNavigator extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <AppNavigatorContainer />
            </View>
        );
    }
}

export default TabNavigator;