import React from 'react';
import { View, Text, PermissionsAndroid  } from 'react-native';
// import { Geolocation } from 'react-native-amap-geolocation';

// 高德地图
// 在高德地图应用中创建key
// 使用key
class GeolocationAPI extends React.Component{

    // componentDidMount(){
    //     this.requestReadPermission();
    // }

    // async requestReadPermission() {
    //     const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
    //       );
          
    //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         await Geolocation.init({
    //           //ios: "9bd6c82e77583020a73ef1af59d0c759",
    //           android: 'a9df9c7241de4de061a43a8148bfb8b6'
    //         });
          
    //         Geolocation.setOptions({
    //           interval: 8000,
    //           distanceFilter: 20
    //         });
          
    //         Geolocation.addLocationListener(location => console.log(location));
    //         Geolocation.start();
    //     }
    // }

    render(){
        return(
            <View>
                <Text>GeolocationAPI</Text>
            </View>
        );
    }
}

export default GeolocationAPI;