'use strict';

import React, { Component } from 'react';

import {
    Stylesheet,
    View,
    TouchableOpacity
} from 'react-native';
import linearGradient from 'react-native-linear-gradient';

import {ORANGE, PINK, WHITE, GREYGB, GREYBG} from '../../styles';

export default class UpcomingListItem extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styes.wrapper}>
                    <Image styles={styles.img}/>
                    <linearGradient colors={[ORANGE, PINK]} style={styles.overlay}/>
                    <Text style={styles.title}></Text>
                </View>
                <View style={styles.imgShadow}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        heigh: 180,
        marginRight: 20
    },
    wrapper: {
        borderRadius: 6,
        zIndex: 1,
        overflow: 'hidden',
        width: 320,
        height: 160
    },
    img: {
        backgroundColor: 'rgb(230, 230, 230)',
        width: 320,
        height: 160
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 320,
        height: 160,
        opacity: 0.3,
        zIndex: 2
    },
    title: {
        fontSize: 20,
        color: WHITE,
        position: 'absolute',
        buttom: 20,
        right: 20,
        zIndex: 3
    }, 
    imgShadow: {
        top: 16,
        left: 16,
        backgroundColor: '#000',
        opacity: 0.5,
        width: 293,
        height: 144,
        zIndex: 0,
        position: 'absolute',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity:1,
        shadowRadius: 9
    }

});