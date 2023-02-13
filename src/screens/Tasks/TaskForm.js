import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export default function TaskForm({onAddTask}) {
  const [newTitle, setNewTitle] = useState('');

  const onChangeText = title => {
    setNewTitle(title);
  };

  const onAddNewTask = () => {
    if (newTitle === '') {
      return;
    }

    onAddTask(newTitle);
    setNewTitle('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={newTitle}
        placeholder="Nouvelle tâche"
      />
      <Button
        title="Ajouter"
        onPress={onAddNewTask}
        color="blue"
        accessibilityLabel="Add new Task"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: '70%',
    height: 40,
  },
});
