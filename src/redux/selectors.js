// Selectors: sélectionner une partie de notre store

export const getTasks = store => store.tasksList;
export const getCompletedTasks = store =>
  store.tasksList.filter(task => task.isCompleted);
