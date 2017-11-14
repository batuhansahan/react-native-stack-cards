import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#2c3e50',
        justifyContent: 'center', /* flex-start(top) - center - flex-end(bottom) */ 
        alignItems: 'center', /* left - center - right */
        height: 60,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        color: 'white',
        fontSize: 20
    }
};

export { Header };
