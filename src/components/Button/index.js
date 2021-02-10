import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

export default function index(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      // activeOpacity={10}
      style={[
        styles.container,
        {
          backgroundColor: props.BgColor,
          borderColor: props.BorderColor ?? null,
          borderWidth: props.BorderColor != null ? 3 : null,
        },
      ]}>
      <Text style={[styles.Text, {color: props.TextColor}]}>{props.Text}</Text>
    </TouchableOpacity>
  );
}
