// A reducer takes in two things:

// 1. The action (info about WHAT happened)
// 2. Copy of the current State

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('Incrementing Likes');
  }
}

export default posts;