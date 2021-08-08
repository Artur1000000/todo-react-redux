export default function add(state,action) {
  return { list: [...state.list, action.payload], title: state.title };
}
