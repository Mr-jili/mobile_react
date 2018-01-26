import * as Types from '../action-types';

let initState = {
  sliders: []
};

function main(state = initState, action) {
  switch (action.type) {
    case Types.INIT_STATE:
      return {...state};
  }

  return state;
}

export default main;