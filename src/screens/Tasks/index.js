import React, {useState} from 'react';
import {FlatList} from 'react-native';

import Header from '../../components/Header';
import TaskFile from './TaskFile';
import TaskForm from './TaskForm';

export default function TasksScreen() {
  // Liste de tâches
  // State pour garder en mémoire les tâches
  const [tasks, setTasks] = useState([]);

  // item = un élément
  const renderItem = ({item}) => {
    return (
      <TaskFile
        task={item}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    );
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

  const onDeleteTask = id => {
    let newTasks = [];

    tasks.forEach(t => {
      if (t.id !== id) {
        newTasks.push(t);
        return;
      }
    });

    setTasks(newTasks);
  };

  const onUpdateTask = id => {
    let newTasks = [];

    tasks.forEach(t => {
      if (t.id !== id) {
        newTasks.push(t);
        return;
      }

      newTasks.push({
        id: t.id,
        title: t.title,
        isCompleted: !t.isCompleted,
      });
    });

    setTasks(newTasks);
  };

  // 2x TasksCounter => props nb & title
  // TasksList => return FlatList => TaskTile

  // Ajouter un bouton flottant => style absolute
  // callback => rendu conditionnel. TaskForm
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
