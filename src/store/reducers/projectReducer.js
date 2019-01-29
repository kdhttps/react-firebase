const initState = {
  projects: [
    {id:1, title: 'Project 1', content: 'Posted by Little things'},
    {id:2, title: 'Project 2', content: 'Posted by Little things'},
    {id:3, title: 'Project 3', content: 'Posted by Little things'},
    {id:4, title: 'Project 4', content: 'Posted by Little things'},
    {id:5, title: 'Project 5', content: 'Posted by Little things'},
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Create project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('Create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
