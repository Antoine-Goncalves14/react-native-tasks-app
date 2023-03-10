import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export default function FloatingBtn({toogle, isOpen}) {
  return (
    <Pressable onPress={toogle} style={styles.btn}>
      <Text style={styles.txt}>{isOpen ? 'x' : '+'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderRadius: 40,
    height: 40,
    width: 40,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  txt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
