import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser, deleteUser } from "../../../actions/userList";
import { getUsers } from "../../../reducers/userList";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { FormControl, Select } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Alert from "../../Elements/Alert/Alert";

import "./UserList.css";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.userList);

  const [tableDisplayLimit, setTableDisplayLimit] = useState({
    start: 0,
    finish: 10,
    increasement: 10,
  });

  const [alert, setAlert] = useState({
    rowId: null,
    show: false,
    mode: "",
  });

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const tableFunctionalites = [
    "You can add user by clicking +",
    "You can edit user by clicking pen button",
    "You can remove user by clicking trash button",
    "You can go next page by clicking next arrow",
    "You can go prev page by clicking prev arrow",
    "You can go 10, 20, 50 and 100 rows at once by selecting rows increment from dropdown",
  ];

  const handleTableBtns = (action) => {
    const { start, finish, increasement } = tableDisplayLimit;
    if (action === "next" && finish < users.length) {
      setTableDisplayLimit((prevVal) => {
        return { ...prevVal, start: finish, finish: finish + increasement };
      });
    }
    if (action === "prev" && start !== 0) {
      setTableDisplayLimit((prevVal) => {
        return {
          ...prevVal,
          start: start - increasement <= 0 ? 0 : start - increasement,
          finish: finish - increasement <= 0 ? 10 : finish - increasement,
        };
      });
    }
  };

  const closeAlert = () =>
    setTimeout(() => setAlert({ rowId: null, show: false }), 1500);

  const deleteRow = () => {
    dispatch(deleteUser(alert.rowId));
    closeAlert();
  };

  const handleUpdateUser = (updatedUser) => {
    dispatch(updateUser(updatedUser));
    closeAlert();
  };

  const addNewUser = (newUser) => {
    dispatch(addUser(newUser));
    closeAlert();
  };

  const renderPaginationBtns = () => {
    return (
      <div className="pagination-control-btns">
        <FormControl>
          <Select
            native
            value={tableDisplayLimit.increasement}
            onChange={(e) => {
              setTableDisplayLimit((prevVal) => {
                return {
                  ...prevVal,
                  increasement: parseInt(e.target.value),
                };
              });
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={50}>Fifty</option>
            <option value={100}>Hundred</option>
          </Select>
        </FormControl>
        <div className="pagination-arrows">
          <span
            onClick={() => handleTableBtns("prev")}
            style={{
              color: tableDisplayLimit.start === 0 && "grey",
            }}
            className="prev-arrow"
          >
            &lt;
          </span>
          <span
            style={{
              color: tableDisplayLimit.finish + 1 > users.length && "grey",
            }}
            onClick={() => handleTableBtns("next")}
            className="next-arrow"
          >
            &gt;
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="user-list-table-container active-page">
        <div className="table-information-container">
          <h1 className="table-title">Welcome to list of users table</h1>
          <h3 className="table-subtitle">
            You have able to do fallowing functionalities:
          </h3>
          <ul>
            {tableFunctionalites.map((command) => (
              <li key={command} className="command-item">
                {command}
              </li>
            ))}
          </ul>
        </div>
        {!loading ? (
          <>
            <TableContainer className="table-container" component={Paper}>
              <Table className="table-container" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Content</TableCell>
                    <TableCell align="right">Action</TableCell>
                    <TableCell align="right">
                      {renderPaginationBtns()}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map(
                    (user, i) =>
                      tableDisplayLimit.start - 1 < i &&
                      i < tableDisplayLimit.finish && (
                        <TableRow key={user.id} className="user-table-row">
                          <TableCell component="th" scope="row">
                            {user.id}
                          </TableCell>
                          <TableCell align="left">
                            {user.name.substring(0, 10)}
                          </TableCell>
                          <TableCell align="left">{user.email}</TableCell>
                          <TableCell align="left">
                            {user.body.substring(0, 50)}
                          </TableCell>
                          <TableCell align="right">
                            <span
                              className="delete-icon"
                              onClick={() =>
                                setAlert({
                                  show: true,
                                  rowId: user.id,
                                  mode: "delete",
                                })
                              }
                            >
                              <DeleteIcon />
                            </span>
                            <span
                              onClick={() =>
                                setAlert({
                                  show: true,
                                  rowId: user.id,
                                  mode: "edit",
                                })
                              }
                            >
                              <EditIcon />
                            </span>
                          </TableCell>
                        </TableRow>
                      )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="table-control-buttons-container">
              <div className="add-user-btn-container">
                <Button
                  onClick={() => {
                    setAlert({
                      rowId: users.length + 1,
                      show: true,
                      mode: "add",
                    });
                  }}
                  className="add-btn"
                  variant="contained"
                  color="primary"
                >
                  +
                </Button>
              </div>
              {renderPaginationBtns()}
            </div>
          </>
        ) : (
          <h1>Users List Loading...</h1>
        )}
      </div>
      {alert.show && (
        <Alert
          user={
            alert.mode === "edit" &&
            users?.find((user) => user.id === alert.rowId)
          }
          alert={alert}
          setAlert={setAlert}
          deleteRow={() => deleteRow()}
          updateUser={(updatedUser) => handleUpdateUser(updatedUser)}
          addUser={(newUser) => addNewUser(newUser)}
        />
      )}
    </>
  );
};

export default UserList;
