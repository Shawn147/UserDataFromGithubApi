import {Body, Left, Right, Header} from 'native-base';
import React, {Component} from 'react';
import * as Icons from './icons';
import {View, Text, StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
export default class GlobalHeader extends React.Component {
  render() {
    return (
      <Header style={{backgroundColor: '#fff'}}>
        <Left
          style={{
            flex: 0.15,
            height: '100%',
            width: '100%',
          }}>
          {this.props.LeftMenu && (
            <Ripple
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons.Entypo name="menu" size={22} color={'green'} />
            </Ripple>
          )}
        </Left>
        <Body
          style={{
            flex: 0.7,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 19}}>
            {this.props.headingText
              ? this.props.headingText
              : 'Checkout Github Users'}
          </Text>
        </Body>
        <Right style={{flex: 0.15, height: '100%', width: '100%'}}>
          {this.props.RightMenu && (
            <Ripple
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons.AntDesign name="sharealt" size={22} color={'green'} />
            </Ripple>
          )}
        </Right>
      </Header>
    );
  }
}
