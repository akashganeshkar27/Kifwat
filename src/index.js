import React, { Component } from 'react';
import Navigator from './navigator';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

class AppWrapper extends Component {
    render() {
        return <Navigator />;
    }
}

export default AppWrapper;