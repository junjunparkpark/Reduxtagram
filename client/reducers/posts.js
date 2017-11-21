// A reducer takes in two things:

// 1. The action (info about WHAT happened)
// 2. Copy of the current State

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('Incrementing Likes');
      const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1),
      ]
    default:
      return state;
  }
}

export default posts;