const baseUrl = 'https://628b1b037886bbbb37b052d2.mockapi.io/api/v1/tasks';

export const getTasksData = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });

export const addTaskData = dataTask =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataTask),
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Faild to create task');
  });

  export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Faild to create task');
      }
    });
  };


export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  })
};
