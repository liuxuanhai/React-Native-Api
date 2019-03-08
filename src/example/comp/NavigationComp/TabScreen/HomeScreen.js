import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
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
                <Text style={textStyle}>{routeName}-Icon-信息({navigation.getParam('msg')})</Text>
            </View>
        );
    },
  })

  state = {
    msg: 100
  }

  componentDidMount() {
      this.props.navigation.setParams({ msg: this.state.msg });
  }

  render() {
    const { navigation } = this.props;
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.contextTextStyle}>HomeScreen!</Text>
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={()=>{navigation.navigate('Settings');}}
            >
                <Text>To SettingsScreen</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
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
      padding: 5
  }
});

HomeScreen.propTypes = {
  navigation: PropTypes.object
};

export default HomeScreen;