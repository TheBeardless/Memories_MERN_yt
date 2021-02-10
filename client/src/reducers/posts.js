// takes (state, action)
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;

    default:
      return posts;
  }
};

// const reducer = (posts = [], action) => {
//   switch (action.type) {
//     case "FETCH_ALL":
//       return posts;
//     case "CREATE":
//       return posts;

//     default:
//       return posts;
//   }
// };
