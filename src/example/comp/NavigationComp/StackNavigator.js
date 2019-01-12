import React, { Component } from 'react';
import { View, Easing, Animated } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { AuthScreen, ListScreen, ItemScreen, ModalScreen } from './StackScreen';

// 子导航堆栈，需要嵌套到根导航堆栈中
const mainNavigator = createStackNavigator(
    {
      Auth: { screen: AuthScreen },
      List: { screen: ListScreen, params: { defaultParam: 'defaultParam' } },
      Item: { screen: ItemScreen }
    },
    {
      initialRouteName: 'Auth',
      defaultNavigationOptions: {
        gesturesEnabled: false,
      },
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
            console.log('Width:', Width);
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
      })
    }
);

// 根导航堆栈
const rootStack = createStackNavigator(
    {
      Main: { screen: mainNavigator }, 
      MyModal: { screen: ModalScreen } // modal屏操作，常会使用不同的屏间切换样式，且会禁用头部导航
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