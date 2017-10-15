const initialState = {
  title: 'Home | Sample Site',
  page: 'home',
};

export default function navigation(state = initialState, action) {
  switch (action.type) {
    case 'SET_ACTIVE_PAGE':
      return Object.assign({}, state, {
        title: action.title,
        page: action.page,
      });
    default:
      return state;
  }
}
