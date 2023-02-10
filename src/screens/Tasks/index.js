import React, {useState} from 'react';
import {Text, FlatList} from 'react-native';

import Header from '../../components/Header';

export default function TasksScreen() {
  // Liste de tâches
  // State pour garder en mémoire les tâches
  const [tasks, setTasks] = useState([
    {title: 'Hello World!', isCompleted: false},
  ]);

  // item = un élément
  const renderItem = ({item}) => {
    return <Text>{item.title}</Text>;
  };

  // 2x TasksCounter => props nb & title
  // TasksList => return FlatList => TaskTile

  return (
    <>
      <Header />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </>
  );
}
