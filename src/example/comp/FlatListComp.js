import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TextInputComp from './TextInputComp';

class FlatListComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            refreshing: false
        };
    }

    componentDidMount(){
        // 初始化数据
        let list = [];
        for(var i = 0; i < 50; i++) {
            list.push({key: 'key'+i});
        }
        this.setState({list: list});
    }

    _renderItem = ({index, item}) => {
        return (
            <View key={item.key} style={styles.viewStyle}>
                <Text style={styles.textStyle}>{index}-{item.key}</Text>
            </View>
        );
    }

    // 分割线
    _renderSeparator = () => {
        return (
            class Separator extends Component {
                render(){
                    return (
                        <View style={styles.separatorStyle} />
                    );
                }
            }
        );
    }

    _renderListEmptyComp = () => {
        return (
            <View>
                 <Text>没有数据时显示本段文字</Text>
            </View>
        );
    }

    // 下拉加载
    _onEndReached = () => {
        this.setState({refreshing: true});
        // 关于更新state里数组的两种方式
        //setState({ 'arrary': [...this.state.array, newItem]}).
        //setState({ 'array' : this.state.array.concat([neItem])}).
        let list = [...this.state.list];
        for(var i = 0; i < 10; i++) {
            list.push({key: 'load-' + Math.floor(Math.random() * 10000)});
        }

        setTimeout(()=>{
            this.setState({list: list, refreshing: false});
        },5000);
    }

    // 上拉加载
    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(()=>{
            this.setState({refreshing: false});
            // this.myFlatList.scrollToEnd(); // 滚动到底部
            // this.myFlatList.scrollToIndex({animated: true, index:10}); // 将位于索引值为index的元素滚动到可视区域首行位置
            // this.myFlatList.flashScrollIndicators(); // 短暂地显示滚动指示器
        },5000);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInputComp />
                <FlatList
                    ref={(view) => { this.myFlatList = view; }}
                    data={this.state.list} // 数据源
                    renderItem={this._renderItem} // 从data中挨个取出数据并渲染到列表中
                    showsVerticalScrollIndicator={false} // 当此属性为true的时候，显示一个垂直方向的滚动条，默认为: true
                    showsHorizontalScrollIndicator={false} // 当此属性为true的时候，显示一个水平方向的滚动条，默认为: true
                    pagingEnabled={false} // 当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置，这个可以用在水平分页上。默认为: false
                    ItemSeparatorComponent = {this._renderSeparator()} // 行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后
                    ListEmptyComponent = {this._renderListEmptyComp()} // 列表为空时渲染该组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element
                    ListFooterComponent = {()=><View />} // 尾部组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element
                    ListHeaderComponent = {()=><View />} // 头部组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element
                    numColumns = {1} // 多列布局只能在非水平模式下使用，即必须是horizontal={false}。此时组件内元素会从左到右从上到下按 Z 字形排列
                    // columnWrapperStyle = {{backgroundColor:'red'}} // 当numColumns大于1时才可用，表示指定此样式作用在每行容器上
                    horizontal={false} // 设置为 true 则变为水平布局模式，默认为: false
                    // initialNumToRender={6} // 指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容。注意这第一批次渲染的元素不会在滑动过程中被卸载，这样是为了保证用户执行返回顶部的操作时，不需要重新渲染首批元素
                    inverted={false} // 翻转滚动方向。默认为: false
                    onEndReachedThreshold={0.01} // 决定当距离内容最底部还有多远时触发onEndReached回调，范围0~1，如0.01表示触底时触发
                    onEndReached={this._onEndReached} // 表示当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
                    onRefresh={this._onRefresh} // 如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能
                    refreshing={this.state.refreshing} // 在等待加载新数据时将此属性设为 true，列表就会显示出一个正在加载的符号
                    scrollEnabled={true} // 当为false时表示禁止滚动，默认为: true
                    onMomentumScrollBegin={()=>{}} // 滚动惯性动画开始时触发的函数
                    onMomentumScrollEnd={()=>{}} // 滚动惯性动画结束时触发的函数
                    onScrollBeginDrag={()=>{}} // 拖拽开始时触发的函数
                    onScrollEndDrag={()=>{}} // 拖拽结束时触发的函数
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewStyle: {
        backgroundColor: 'green',
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 24
    },
    separatorStyle: {
        height: 6,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5
    }
});

export default FlatListComp;