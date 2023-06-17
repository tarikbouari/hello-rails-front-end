// Actions
const SET_GREETING = 'greetings/greetings/SET_GREETING';
const url = 'http://127.0.0.1:3000/index';

// initial state
const initialState = {
  greeting: '',
};


// Action Creators
const setGreeting = (greetingObj) => ({
    type: SET_GREETING,
    payload: greetingObj,
  });
  
  const getGreeting = () => async (dispatch) => {
    await fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => result.json())
      .then((res) => {
        const msg = {
          greeting_text: res.greeting_text,
        };
        dispatch(setGreeting(msg));
      });
  };
  

// Reducer
export default function greetingsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GREETING:
      return {
        ...state,
        greeting: action.payload.greeting_text,
      };

    default:
      return state;
  }
}

export { getGreeting, setGreeting};