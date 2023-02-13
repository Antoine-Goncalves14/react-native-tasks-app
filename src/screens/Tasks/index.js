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

  // Ajouter une fonction pour ajouter une tâche au state
  // Passer cette fonction à notre formulaire
  const onAddTask = title => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        isCompleted: false,
      },
    ]);
  };

  // 2x TasksCounter => props nb & title
  // TasksList => return FlatList => TaskTile

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Header />
          <TaskForm onAddTask={onAddTask} />
        </>
      }
      contentContainerStyle={{flexGrow: 1}}
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}
