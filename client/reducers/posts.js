// A reducer takes in two things:

// 1. The action (info about WHAT happened)
// 2. Copy of the current State


function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;