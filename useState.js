const state = {}; //global variable to hold state

export function useState(initialState) {
  //accepts an argument of initial state
  const nextKey = `key${Object.keys(state).length + 1}`; //dynamically create a new key in state for each piece of state as they are declared

  state[nextKey] = initialState; //set that key to have the value of the initial state
  const currentState = state[nextKey]; //hold that value in a variable for clarity

  const setterFunction = (nextState, renderFn) => {
    //the setter takes the next state and optionally a render function
    state[nextKey] = nextState; //set the next state to the key above. Closure makes this possible.

    if (renderFn) renderFn(nextState); //if a render function is given render the next state
  };

  return [currentState, setterFunction]; //return an array with the current state and the setter function
}
