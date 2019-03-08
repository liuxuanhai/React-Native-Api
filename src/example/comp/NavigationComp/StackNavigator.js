import React, { Component } from 'react';
import { View, Easing, Animated } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { AuthScreen, ListScreen, ItemScreen, ModalScreen } from './StackScreen';

const mainNavigator = createStackNavigator(
    {
      Auth: { screen: AuthScreen },
      List: { screen: ListScreen, params: {defaultParam: 'List defaultParam'}}, // 给页面传递参数
      Item: { screen: ItemScreen }
    },
    {
      initialRouteName: 'Auth', // 设置 stack navigator 的默认页面， 必须是路由配置中的某一个
      initialRouteParams: { param: 'initParam' }, // 初始路由的参数，仅对初始页有效
      defaultNavigationOptions: {
        headerStyle:{}, // 导航栏样式
        headerTitle:'', // 或使用title，导航栏标题
        headerTitleStyle:{}, // 导航栏标题样式
        headerLeft:(<View />), // 导航栏左边如'返回'的显示容器
        headerRight:(<View />), // 导航栏右边如'其它辅助功能'的显示容器
        gesturesEnabled: false, // 是否支持滑动返回手势，iOS默认支持，安卓默认关闭
      },
      // 类似于微信的左右切换路由页
      transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;
            const Width = layout.initWidth;
            //沿X轴平移
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [Width, 0, -(Width)], // Width,0指新页面进入坐标变化; 0,-(Width)是指旧页面推出坐标变化
            });
            //透明度
            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });
            return {opacity, transform: [{translateX}]};
        }
      }),
      // 上下切换路由页
      // transitionConfig: () => ({
      //   transitionSpec: {
      //       duration: 300,
      //       easing: Easing.out(Easing.poly(4)),
      //       timing: Animated.timing,
      //   },
      //   screenInterpolator: sceneProps => {
      //       const { layout, position, scene } = sceneProps;
      //       const { index } = scene;

      //       const height = layout.initHeight;
      //       //沿Y轴平移
      //       const translateY = position.interpolate({
      //           inputRange: [index - 1, index, index + 1],
      //           outputRange: [height, 0, 0],
      //       });
      //       //透明度
      //       const opacity = position.interpolate({
      //           inputRange: [index - 1, index - 0.99, index],
      //           outputRange: [0, 1, 1],
      //       });
      //       return { opacity, transform: [{ translateY }] };
      //   },
      // })
    }
);

// 根导航堆栈
const rootStack = createStackNavigator(
    {
      Main: { screen: mainNavigator }, 
      Modal: { screen: ModalScreen } // modal屏操作，常会使用不同的屏间切换样式，且会禁用头部导航
    },
    {
      initialRouteName: 'Main', // 设置 stack navigator 的默认页面， 必须是路由配置中的某一个
      initialRouteParams: { defaultParam: 'defaultParam' }, // 初始路由的参数，仅对初始页有效
      mode: 'modal', // 定义跳转风格
      headerMode: 'none' // 隐藏该导航堆栈中的标题栏
    }
);

const AppNavigatorContainer  = createAppContainer(rootStack);

class StackNavigator extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <AppNavigatorContainer />
            </View>
        );
    }
}

export default StackNavigator;