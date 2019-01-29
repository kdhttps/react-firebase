export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const fireStore = getFirestore();
    fireStore.collection('projects').add({
      ...project,
      authorFirstName: 'KD',
      authorLastName: 'Maaa',
      authorId: 12345,
      createAt: Date.now()
    }).then(() => {
      dispatch({type: 'CREATE_PROJECT', project})
    }).catch((err) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', err })
    });
  }
};
