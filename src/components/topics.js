import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from '../styles';
import { firebaseApp } from './auth/authentication';

  module.exports = React.createClass({
    getInitialState() {
      return ({
        displayName: ''
      });
    },

    componentDidMount() {
      let user = firebaseApp.auth().currentUser;

      if (!user.displayName) {
        this.props.navigator.push({
          name: 'chooseName'
        });
      } else {
        // proceed normally with application
        this.setState({
          displayName: user.displayName
        });
      }
    },

    signOut() {
      // sign out the user
      firebaseApp.auth().signOut()
      .then(() => {
        //Sign out is successful
        this.props.navigator.popToTop();
      }, (error) => {
        console.log(error);
      });
    },
    render() {
        return (
          <View style={styles.topics}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => this.signOut()}
              >
                <Text style={styles.link}>
                  Sign Out
                </Text>
              </TouchableOpacity>
              <Text style={styles.title}>
                {this.state.displayName}
              </Text>
            </View>

            <View style={styles.body}>
            </View>
          </View>
        );
    }
  });
