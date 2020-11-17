
/**
 * Core nav for project china, a whole app is managed by this function.
 * @module navCore
 * @param {object} state - This is the current state of the app.
 * @param {object} action - These are the actions you would like to take pass to the app.
 */

export default function reducer(state, action) {
    switch (action.type) {
        case 'stateChange':
            return action.object(state);
        case 'selectStateChange':
            return action.object(action.data,state);
        case 'selectNavStateChange':
                return action.object(action.data,state);
        case 'restStateChange':
            return {response: action.data, status: "Sucess"};
      default:
        throw new Error("if your not changing state then what are you doing");
    }
  }