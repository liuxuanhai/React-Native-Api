import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { HeaderScreen, HomeScreen, NotificationsScreen } from './DrawerScreen';
import { createDrawerNavigator, createAppContainer,DrawerItems, SafeAreaView } from 'react-navigation';

// 侧栏调用建议使用https://github.com/react-native-community/react-native-side-menu
const CustomDrawerContentComponent = (props) => {
    return(
        <ScrollView>
            <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    );
};

const MyDrawerNavigator = createDrawerNavigator(
    {
        Header: { screen: HeaderScreen },
        Home: { screen: HomeScreen },
        Notifications: { screen: NotificationsScreen }
    },
    {   
        initialRouteName:'Header', // 第一次加载时初始选项卡路由的 routeName
        order: ['Header', 'Home', 'Notifications'], // 定义选项卡顺序的 routeNames 数组
        backBehavior: 'initialRoute', // 触发navigation.goBack()方法时是否包括Tab页间切换的的返回操作，不包括为none，包括为initialRoute(默认包括)
        drawerWidth: 300, // 抽屉的宽度或返回它的函数
        drawerPosition: 'left', // 弹出抽屉的位置(从左边弹出或从右边弹出), 可选值：left或right，默认值：left
        contentComponent: CustomDrawerContentComponent, // 用于呈现抽屉内容 (例如, 导航项) 的组件。 接收用于抽屉的 navigation 支柱。 默认为 DrawerItems, 一般会用不上
        useNativeAnimation: true, // 使用原生动画， 默认值: true
        drawerBackgroundColor: 'white', // 抽屉的背景色,默认为: white
        drawerType:'slide', // 抽屉弹出过程类型，有三种: front | back | slide, 默认为: front
        contentOptions: {
            itemsContainerStyle: {
                backgroundColor:'white',
                paddingVertical: 0
            }, // 表示包含着抽屉里选项卡组的容器的样式
            itemStyle: {         
                backgroundColor: '#009688',
                borderWidth: 1,
                borderRadius: 2
            }, // 表示单个选项卡的容器样式, 一般包含了图标和/或标签
            activeLabelStyle: {
                color: '#FF0000',
                fontSize: 20
            }, //  表示活动(或被选择中)的单个选项卡的容器里文本标签的样式
            inactiveLabelStyle:{
                color: '#000000',
                fontSize: 20
            }, // 表示非活动(或未被选择中)的单个选项卡的容器里文本标签的样式
            activeTintColor:'#FF0000',// 活动选项卡的标签和图标的颜色值，默认值为:#2196f3
            activeBackgroundColor:'white', // 活动选项卡的背景色
            inactiveTintColor:'#000000', // 非活动选项卡的标签和图标的颜色值，默认值为:rgba(0, 0, 0, .87)
            inactiveBackgroundColor:'white', // 非活动选项卡的背景色
        }
    }
);
const AppNavigatorContainer = createAppContainer(MyDrawerNavigator);

class DrawerNavigator extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <AppNavigatorContainer />
            </View>
        );
    }
} 

export default DrawerNavigator;
