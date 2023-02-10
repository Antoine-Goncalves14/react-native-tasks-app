import React, {useState} from 'react';
import {FlatList} from 'react-native';

import Header from '../../components/Header';
import TaskFile from './TaskFile';
import TaskForm from './TaskForm';

export default function TasksScreen() {
  // Liste de tâches
  // State pour garder en mémoire les tâches
  const [tasks, setTasks] = useState([
    {title: 'Hello World!', isCompleted: false},
  ]);

  // item = un élément
  const renderItem = ({item}) => {
    return <TaskFile task={item} />;
  };

  // 2x TasksCounter => props nb & title
  // TasksList => return FlatList => TaskTile

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Header />
          <TaskForm />
        </>
      }
      contentContainerStyle={{flexGrow: 1}}
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}
