import React, {Component} from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

class SectionListComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: [],
            refreshing: false
        };
    }

    componentDidMount() {
        let sections = [];
        for(var i = 0; i < 3; i++) {
            let section = {};
            section.title = '标题'+i;
            section.data = [];
            if(i === 0){
                section.renderItem = this._renderFirstItem;
            }
            for(var n = 0; n < 5; n++) {
                let item = {};
                item.key = 'item' + n;
                item.value = '内容' + n;
                section.data.push(item);
            }
            sections.push(section);
        }
        this.setState({sections: sections});
    }

    _renderItem = ({ item, index, section }) => {
        return (
            <View style={styles.itemViewStyle}>
                <Text style={styles.itemTextStyle} key={item.key}>{index}-{section.title}-{item.value}</Text>
            </View>
        );
    }

    _renderFirstItem = ({ item, index, section }) => {
        return (
            <View style={styles.firstItemViewStyle}>
                <Text style={styles.itemTextStyle} key={item.key}>{index}-{section.title}-{item.value}</Text>
            </View>
        );
    }

    _renderSectionHeader = ({section: {title}}) => {
        return (
            <View style={styles.titleViewStyle}>
                <Text style={styles.titleTextStyle}>{title}</Text>
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

    // 下拉加载
    _onEndReached = () => {
        this.setState({refreshing: true});
        // 关于更新state里数组的两种方式
        //setState({ 'arrary': [...this.state.array, newItem]}).
        //setState({ 'array' : this.state.array.concat([neItem])}).
        let sections = [...this.state.sections];
        let section = {};
        section.title = '标题'+ Math.floor(Math.random() * 10000);
        section.data = [];
        for(var n = 0; n < 5; n++) {
            let item = {};
            item.key = 'item' + n;
            item.value = '内容' + n;
            section.data.push(item);
        }
        sections.push(section);

        setTimeout(()=>{
            this.setState({sections: sections, refreshing: false});
        },5000);
    }

    // 上拉加载
    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(()=>{
            this.setState({refreshing: false});
            // this.mySectionList.scrollToLocation({animated: true, itemIndex:2, sectionIndex:1}); // 将位于索引值为sectionIndex中itemIndex的元素滚动到可视区域首行位置
            // this.myFlatList.flashScrollIndicators(); // 短暂地显示滚动指示器
        },5000);
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    ref={(view) => { this.mySectionList = view; }}
                    style={{flex: 1}}
                    sections={this.state.sections}
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader} // 每个组的头部组件
                    renderSectionFooter={()=>{}} // 每个组的尾部组件
                    ListHeaderComponent = {()=><View />} // 头部组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element
                    ListFooterComponent = {()=><View />} // 尾部组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element
                    ListEmptyComponent = {this._renderListEmptyComp()} // 列表为空时渲染该组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element
                    ItemSeparatorComponent = {this._renderSeparator()} // 行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后
                    SectionSeparatorComponent = {this._renderSeparator()} // 组与组之间的分割线组件
                    inverted={false} // 翻转滚动方向。默认为: false
                    stickySectionHeadersEnabled = {false} // 当下一个section把它的前一个section的可视区推离屏幕的时候，让这个section的header粘连在屏幕的顶端。默认为: false
                    horizontal= {false} // 设置为 true 则变为水平布局模式，默认为: false
                    showsVerticalScrollIndicator={false} // 当此属性为true的时候，显示一个垂直方向的滚动条，默认为: true
                    showsHorizontalScrollIndicator={false} // 当此属性为true的时候，显示一个水平方向的滚动条，默认为: true
                    scrollEnabled={true} // 当为false时表示禁止滚动，默认为: true
                    onEndReachedThreshold={0.01} // 决定当距离内容最底部还有多远时触发onEndReached回调，范围0~1，如0.01表示触底时触发
                    onEndReached={this._onEndReached} // 表示当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
                    onRefresh={this._onRefresh} // 如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能
                    refreshing={this.state.refreshing} // 在等待加载新数据时将此属性设为 true，列表就会显示出一个正在加载的符号
                    onMomentumScrollBegin={()=>{}} // 滚动惯性动画开始时触发的函数
                    onMomentumScrollEnd={()=>{}} // 滚动惯性动画结束时触发的函数
                    onScrollBeginDrag={()=>{}} // 拖拽开始时触发的函数
                    onScrollEndDrag={()=>{}} // 拖拽结束时触发的函数
                    // initialNumToRender={6} // 指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容。注意这第一批次渲染的元素不会在滑动过程中被卸载，这样是为了保证用户执行返回顶部的操作时，不需要重新渲染首批元素
                    // keyExtractor={(item, index) => item + index} // 当item没有key属性时，可以通过该函数生成一个不重复的key值
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleViewStyle: {
        backgroundColor: 'red',
        height: 30,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    titleTextStyle: {
        color: 'white',
        fontSize: 24
    },
    itemViewStyle: {
        backgroundColor: 'green',
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemTextStyle: {
        color: 'white',
        fontSize: 24
    },
    firstItemViewStyle: {
        backgroundColor: 'gray',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separatorStyle: {
        height: 6,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5
    }
});

export default SectionListComp;