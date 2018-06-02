'use strict';
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';

import {ORANGE, PINK, WHITE, GREYGB, GREYBG} from '../../styles';

export default class NowListItem extends Component {

    render() {
        const {title} = this.props.data;
        return (
            <TouchableOpacity style={styles.container}>
            <Image style={styles.img}/>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.imgShadow}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 240,
        marginRight: 20
    },
    img: {
        backgroundColor: 'rgb(230, 230, 230)',
        width: 140,
        height: 210,
        borderRadius: 6
    },
    title: {
        marginTop: 20,
        fontSize: 15,
    }, 
    imgShadow: {
        top: 20,
        left: 8,
        backgroundColor: '#000',
        opacity: 0.5,
        width: 193,
        height: 185,
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