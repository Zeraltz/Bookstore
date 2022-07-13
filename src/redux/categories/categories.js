const CHECK_STATUS = 'CHECK_STATUS';

const initialState = {
  categories: [],
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'In Development';
    }
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});
