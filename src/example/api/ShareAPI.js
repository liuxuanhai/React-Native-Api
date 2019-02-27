import React from 'react';
import { Share, Button } from 'react-native';

// 分享功能，这个很重要
// 如分享到微信需要使用微信的SDK，请查看相关官网
class ShareAPI extends React.Component {

    async onShare(){
        try {
            const result = await Share.share({
                message:
                'React Native | A framework for building native apps using React',
            });
        
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                // shared with activity type of result.activityType
                } else {
                // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
      }
    
      render() {
            return (
                <Button onPress={this.onShare} title='Share'></Button>
            );
      }
}

export default ShareAPI;