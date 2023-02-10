import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function TaskForm() {
  const [newTitle, setNewTitle] = useState();

  const onChangeText = title => {
    setNewTitle(title);
  };

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={newTitle}
      placeholder="Nouvelle tâche"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
  },
});
