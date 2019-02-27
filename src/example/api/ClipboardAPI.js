import React from 'react';
import { View, Text, Clipboard, Button } from 'react-native';

// 剪切板
class ClipboardAPI extends React.Component {

    _setContent() {
        Clipboard.setString('hello world');
    }

    async _getContent() {
        var content = await Clipboard.getString();
        console.log(content);
        return content;
    }

    render(){
        return(
            <View>
                <Text>ClipboardAPI</Text>
                <Button 
                    onPress={()=>{
                        this._setContent();
                    }}
                    title='setContent'
                />
                <Button 
                    onPress={()=>{
                        this._getContent();
                    }}
                    title='getContent'
                />
            </View>
        );
    }
}

export default ClipboardAPI;