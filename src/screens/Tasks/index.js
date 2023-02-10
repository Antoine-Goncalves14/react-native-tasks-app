import React, {useState} from 'react';
import {Text} from 'react-native';

import Header from '../../components/Header';

export default function TasksScreen() {
  // Liste de tâches
  // State pour garder en mémoire les tâches
  const [tasks, setTasks] = useState([
    {title: 'Hello World!', isCompleted: false},
  ]);

  // 2x TasksCounter => props nb & title
  // TasksList => return FlatList => TaskTile

  return (
    <>
      <Header />
      {tasks.map(t => (
        <Text key={t}>{t.title}</Text>
      ))}
    </>
  );
}
