export const addUser = (newUser) => {
  return {
    type: "ADD_USER",
    payload: {
      newUser: newUser,
    },
  };
};
export const updateUser = (updatedUser) => {
  return {
    type: "UPADETE_USER",
    payload: {
      updatedUser: updatedUser,
    },
  };
};
export const deleteUser = (userId) => {
  return {
    type: "REMOVE_USER",
    payload: {
      userId: userId,
    },
  };
};

export const setUser = (users) => {
  return {
    type: "SET_USERS",
    payload: {
      users: users,
    },
  };
};
