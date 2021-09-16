const activePage = "dashboard";

const activePageReducer = (state = activePage, action) => {
  switch (action.type) {
    case "dashboard":
      return (state = "dashboard");
    case "listofusers":
      return (state = "listofusers");
    case "profile":
      return (state = "profile");
    default:
      return state;
  }
};

export default activePageReducer;
