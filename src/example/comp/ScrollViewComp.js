import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import TextInputComp from './TextInputComp';

class ScrollViewComp extends Component {
    
    constructor(props){
        super(props);
        this.state = {isRefreshing: false};
    }

    renderItem(id) {
        return (
            <View key={id} style={styles.viewStyle}>
                <Text style={styles.textStyle}>Item-{id}</Text>
            </View>
        );
    }

    _onRefresh = () => {
        this.setState({isRefreshing: true});
        console.log('开始加载');
        setTimeout(()=>
        {
            this.setState({isRefreshing: false});
            console.log('加载完毕');
            // this.myScrollView.scrollTo({x: 0, y: 550, animated: true}); // scrollTo方法: 滚动到指定x,y位置
            // this.myScrollView.scrollToEnd(); // scrollToEnd方法：滚动到尾部
        },5000);
    }

    render() {
        var list = (length) => {
            var res = [];
            for(var i = 0; i < length; i++) {
                res.push(this.renderItem(i));
            }
            return res;
        };

        return (
            <ScrollView
                ref={(view) => { this.myScrollView = view; }}
                style={{flex: 1}}
                scrollEnabled={true} // 当为false时表示禁止滚动，默认为: true
                horizontal={false} // 当此属性为true的时候，所有的子视图会在水平方向上排成一行, 即水平滚动, 默认为: false
                keyboardShouldPersistTaps='never' // 当点击TextInput以外的子组件会使当前的软键盘收起，默认为: never。当为always时相反，软键盘不会被收起
                showsVerticalScrollIndicator={false} // 当此属性为true的时候，显示一个垂直方向的滚动条，默认为: true
                showsHorizontalScrollIndicator={false} // 当此属性为true的时候，显示一个水平方向的滚动条，默认为: true
                pagingEnabled={false} // 当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置，这个可以用在水平分页上。默认为: false
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#ffffff" // 指定刷新指示器的背景色(iOS)
                        title="加载中..." // 指定刷新指示器下显示的文字(iOS)
                        titleColor="#000000" // 指定刷新指示器下显示的文字的颜色(iOS)
                        colors={['#ff0000', '#00ff00', '#0000ff']} // 刷新指示器在刷新期间的过渡颜色(Android)
                        progressBackgroundColor="#ffffff" // 指定刷新指示器的背景色(Android)
                    />
                } // 当ScrollView处于竖直方向的起点位置（scrollY: 0），此时下拉会触发一个onRefresh事件。
                stickyHeaderIndices={[0]} // 让某个成员固定在滚动视图顶端，如当为[0]时表示第一个item将永远不会被滚动到边界外
                onMomentumScrollBegin={()=>{}} // 滚动惯性动画开始时触发的函数
                onMomentumScrollEnd={()=>{}} // 滚动惯性动画结束时触发的函数
                onScrollBeginDrag={()=>{}} // 拖拽开始时触发的函数
                onScrollEndDrag={()=>{}} // 拖拽结束时触发的函数
            >
                <TextInputComp />
                {list(50)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'green',
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 24
    }
});

export default ScrollViewComp;