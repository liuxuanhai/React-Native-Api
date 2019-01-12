import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

class IconfontComp extends Component {

    render(){
        return(
            <View>
                <View style={styles.viewStyle}>
                    <Text style={styles.iconStyle}>iconfont引用:</Text>
                    <Text style={styles.iconStyle}>{'\ueb61'}</Text>
                    <Text style={styles.iconStyle}>{'\ueb62'}</Text>
                    <Text style={styles.iconStyle}>{'\ueb63'}</Text>
                    <Text style={styles.iconStyle}>{'\ueb64'}</Text>
                    <Text style={styles.iconStyle}>{'\ueb65'}</Text>
                </View>
                
                <View style={styles.viewStyle}>
                    <Text style={styles.iconStyle}>SVG引用:</Text>
                    <View style={styles.svgStyle}>
                        <Svg class="icon" width="24px" height="24px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <Path fill="#8a8a8a" d="M544 388.512V96a32 32 0 0 0-64 0v292.512c-55.104 14.272-96 63.904-96 123.488s40.896 109.216 96 123.488v291.616c0 18.176 14.336 32.896 32 32.896s32-14.72 32-32.928v-291.616c55.104-14.272 96-63.904 96-123.488s-40.896-109.184-96-123.456zM223.136 708.256C223.328 706.816 224 705.504 224 704V96a32 32 0 0 0-64 0v608c0 1.504 0.672 2.816 0.864 4.256A127.744 127.744 0 0 0 64 832a128 128 0 0 0 256 0 127.744 127.744 0 0 0-96.864-123.744zM192 896a64 64 0 1 1 0.032-128.032A64 64 0 0 1 192 896zM960 192a128 128 0 0 0-256 0 127.744 127.744 0 0 0 96.864 123.744c-0.192 1.44-0.864 2.752-0.864 4.256v608a32 32 0 0 0 64 0V320c0-1.504-0.672-2.816-0.864-4.256A127.744 127.744 0 0 0 960 192z m-128 64a64 64 0 1 1 0.032-128.032A64 64 0 0 1 832 256z" />
                        </Svg>
                    </View>
                    <View style={styles.svgStyle}>
                        <Svg class="icon" width="24px" height="24px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <Path fill="#8a8a8a" d="M880.288 232.48L560.192 45.12a95.648 95.648 0 0 0-96.64 0L143.68 232.48A96.64 96.64 0 0 0 96 315.904v397.664c0 34.784 18.624 66.88 48.736 84l320 181.92a95.52 95.52 0 0 0 94.496 0l320-181.92A96.576 96.576 0 0 0 928 713.568V315.904a96.64 96.64 0 0 0-47.712-83.424zM864 713.568c0 11.584-6.208 22.304-16.256 28l-320 181.92a31.776 31.776 0 0 1-31.488 0l-320-181.92A32.192 32.192 0 0 1 160 713.568V315.904c0-11.456 6.048-22.048 15.904-27.808l319.872-187.36a31.84 31.84 0 0 1 32.192 0l320.128 187.392c9.856 5.728 15.904 16.32 15.904 27.776v397.664zM512 320a192 192 0 1 0 0 384 192 192 0 0 0 0-384z m0 320a128 128 0 1 1 0-256 128 128 0 0 1 0 256z" />
                        </Svg>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        marginTop: 10
    },
    iconStyle: {
        fontFamily: 'iconfont',
        fontSize: 24,
        marginTop: 10,
        marginLeft: 10
    },
    svgStyle: {
        marginTop: 10,
        marginLeft: 30
    }
});

export default IconfontComp;