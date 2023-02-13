import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Counter from '../../components/Counter';
import FloatingBtn from '../../components/FloattingBtn';

import Header from '../../components/Header';
import TaskFile from './TaskFile';
import TaskForm from './TaskForm';

export default function TasksScreen() {
  // Liste de tâches
  // State pour garder en mémoire les tâches
  const [isFormVisible, setIsFormVisible] = useState(false);
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

  const _toogleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  // 2x TasksCounter => props nb & title
  // TasksList => return FlatList => TaskTile

  // Ajouter un bouton flottant => style absolute
  // callback => rendu conditionnel. TaskForm
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {isFormVisible && <TaskForm onAddTask={onAddTask} />}
            <View style={styles.containerCounters}>
              <Counter nb={tasks.length} title="Tâches créer" />
              <Counter
                nb={tasks.filter(t => t.isCompleted === true).length}
                title="Tâches effectuées"
              />
            </View>
          </>
        }
        contentContainerStyle={{flexGrow: 1}}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <FloatingBtn toogle={_toogleForm} isOpen={isFormVisible} />
    </>
  );
}

const styles = StyleSheet.create({
  containerCounters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
