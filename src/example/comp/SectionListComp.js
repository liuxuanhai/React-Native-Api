import React, {Component} from 'react';
import { View, Text, SectionList, StyleSheet, RefreshControl } from 'react-native';

class SectionListComp extends Component {

    state = {
        sections: [],
        refreshing: false
    };
    
    componentDidMount() {
        let sections = [];
        for(var i = 0; i < 4; i++) {
            let section = {};
            section.title = '列表组'+ (i+1);
            section.data = [];
            for(var n = 0; n < 5; n++) {
                let item = {};
                item.key = 'key' + (n+1);
                section.data.push(item);
            }
            sections.push(section);
        }
        this.setState({sections: sections});
    }

    _renderSectionHeader = ({section: {title}}) => {
        return (
            <View style={styles.titleViewStyle}>
                <Text style={styles.titleTextStyle}>{title}</Text>
            </View>
        );
    }

    _renderItem = ({ item, index, section }) => {
        return (
            <View style={styles.itemViewStyle}>
                <Text style={styles.itemTextStyle} key={item.key}>{item.key}</Text>
            </View>
        );
    }

    _renderListEmptyComp = () => {
        return (
            <View>
                 <Text>没有数据时显示本段文字</Text>
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

    // 底部加载
    _onEndReached = () => {
        this.setState({refreshing: true});
        // 关于更新state里数组的两种方式
        //setState({ 'arrary': [...this.state.array, newItem]}).
        //setState({ 'array' : [...this.state.array].concat(newList|newItem)}).
        let sections = [...this.state.sections];
        let section = {};
        section.title = '(new)列表组'+ Math.floor(Math.random() * 10000);
        section.data = [];
        for(var n = 0; n < 5; n++) {
            let item = {};
            item.key = 'key' + n;
            section.data.push(item);
        }
        sections.push(section);

        setTimeout(()=>{
            this.setState({sections: sections, refreshing: false});
        },2000);
    }

    // 顶部加载
    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(()=>{
            this.setState({refreshing: false});
            // this.mySectionList.scrollToLocation({animated: true, itemIndex:2, sectionIndex:1}); // 将位于索引值为sectionIndex中itemIndex的元素滚动到可视区域首行位置
            // this.myFlatList.flashScrollIndicators(); // 短暂地显示滚动指示器
        },2000);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.headerViewStyle}>
                    <Text style={styles.headerTextStyle}>我的APP</Text>
                </View>
                <SectionList
                    ref={(view) => { this.mySectionList = view; }}
                    style={styles.scrollViewStyle}
                    sections={this.state.sections}
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader} // 每个组的头部组件
                    renderSectionFooter={()=>{}} // 每个组的尾部组件
                    ListHeaderComponent = {()=><View />} // 头部组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element
                    ListFooterComponent = {()=><View />} // 尾部组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element
                    ListEmptyComponent = {this._renderListEmptyComp()} // 列表为空时渲染该组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element
                    // ItemSeparatorComponent = {this._renderSeparator()} // 行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后
                    // SectionSeparatorComponent = {this._renderSeparator()} // 组与组之间的分割线组件
                    inverted={false} // 翻转滚动方向。默认为: false
                    stickySectionHeadersEnabled = {true} // 当下一个section把它的前一个section的可视区推离屏幕的时候，让这个section的header粘连在屏幕的顶端。默认为: false
                    horizontal= {false} // 设置为 true 则变为水平布局模式，默认为: false
                    showsVerticalScrollIndicator={false} // 当此属性为true的时候，显示一个垂直方向的滚动条，默认为: true
                    showsHorizontalScrollIndicator={false} // 当此属性为true的时候，显示一个水平方向的滚动条，默认为: true
                    scrollEnabled={true} // 当为false时表示禁止滚动，默认为: true
                    onEndReachedThreshold={0.01} // 决定当距离内容最底部还有多远时触发onEndReached回调，范围0~1，如0.01表示触底时触发
                    onEndReached={this._onEndReached} // 表示当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
                    onMomentumScrollBegin={()=>{}} // 滚动惯性动画开始时触发的函数
                    onMomentumScrollEnd={()=>{}} // 滚动惯性动画结束时触发的函数
                    onScrollBeginDrag={()=>{}} // 拖拽开始时触发的函数
                    onScrollEndDrag={()=>{}} // 拖拽结束时触发的函数
                    // initialNumToRender={6} // 指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容。注意这第一批次渲染的元素不会在滑动过程中被卸载，这样是为了保证用户执行返回顶部的操作时，不需要重新渲染首批元素
                    // keyExtractor={(item, index) => item + index} // 当item没有key属性时，可以通过该函数生成一个不重复的key值
                    // onRefresh={this._onRefresh} // 如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能
                    // refreshing={this.state.refreshing} // 在等待加载新数据时将此属性设为 true，列表就会显示出一个正在加载的符号
                    或
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing} // 在等待加载新数据时将此属性设为 true，列表就会显示出一个正在加载的符号
                            onRefresh={this._onRefresh.bind(this)} // 在列表顶部往下滑时触发该函数。如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能
                            tintColor="#ffffff" // 指定刷新指示器的背景色(iOS)
                            title="加载中..." // 指定刷新指示器下显示的文字(iOS)
                            titleColor="#000000" // 指定刷新指示器下显示的文字的颜色(iOS)
                            colors={['#ff0000', '#00ff00', '#0000ff']} // 刷新指示器在刷新期间的过渡颜色(Android)
                            progressBackgroundColor="#ffffff" // 指定刷新指示器的背景色(Android)
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1, 
        marginLeft: 10,
        marginRight: 10
    },
    headerViewStyle: {
        height: 50,
        backgroundColor: '#f4511e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTextStyle: {
        fontSize: 20,
        color: '#FFFFFF'
    },
    titleViewStyle: {
        backgroundColor: '#E4E4E4',
        marginTop: 20,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleTextStyle: {
        color: 'red',
        fontSize: 24
    },
    itemViewStyle: {
        height: 70,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemTextStyle: {
        color: 'red',
        fontSize: 20
    },
    separatorStyle: {
        borderColor: 'blue',
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 5
    }
});

export default SectionListComp;