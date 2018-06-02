/**
 * MovieAPP
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import {ORANGE, PINK, WHITE, GREYGB} from '../../styles';

export default class MovieList extends Component{
    state = {
        upcoming: [
            {id:0, title: 'Test 0'},
            {id:1, title: 'Test 1'},
            {id:2, title: 'Test 2'},
            {id:3, title: 'Test 3'},
            {id:4, title: 'Test 4'},
            {id:5, title: 'Test 5'},
        ]
    }

    keyExtractor = item => `${item.id}`;

    renderUpcoming = ({item}) => (
        <View>
            <Text>{item.title}</Text>
        </View>
    );

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>MOVIES</Text>
      <FlatList 
        data={this.state.upcoming}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderUpcoming}
        horizontal
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREYGB,
    paddingLeft: 20
  },
  title: {
      fontSize: 24,
      fontWeight: '600',
      marginTop: 80
  }
});
