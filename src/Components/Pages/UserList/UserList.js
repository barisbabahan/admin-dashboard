import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { FormControl, Select } from "@material-ui/core";
import Alert from "../../Elements/Alert/Alert";
import "./UserList.css";

const UserList = () => {
  const [tableDisplayLimit, setTableDisplayLimit] = useState({
    start: 0,
    finish: 10,
    increasement: 10,
  });
  const [users, setUsers] = useState(null);
  const [alert, setAlert] = useState({
    rowId: null,
    show: false,
    mode: "",
  });

  useEffect(() => {
    const getUsers = async () => {
      await fetch(process.env.REACT_APP_API_URL)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };
    getUsers();
  }, []);

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

  return (
    <>
      <div className="user-list-table-container active-page">
        {users ? (
          <>
            <TableContainer className="table-container" component={Paper}>
              <Table className="table-container" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">content</TableCell>
                    <TableCell align="left">Delete / Edit</TableCell>
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
                          <TableCell align="left">
                            <span
                              onClick={() =>
                                setAlert({
                                  show: true,
                                  rowId: user.id,
                                  mode: "delete",
                                })
                              }
                            >
                              Delete
                            </span>{" "}
                            /{" "}
                            <span
                              onClick={() =>
                                setAlert({
                                  show: true,
                                  rowId: user.id,
                                  mode: "edit",
                                })
                              }
                            >
                              Edit
                            </span>
                          </TableCell>
                        </TableRow>
                      )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="table-control-buttons-container">
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
                </Select>
              </FormControl>
              <div className="pagination-arrow">
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
                    color:
                      tableDisplayLimit.finish + 1 > users.length && "grey",
                  }}
                  onClick={() => handleTableBtns("next")}
                  className="next-arrow"
                >
                  &gt;
                </span>
              </div>
            </div>
          </>
        ) : (
          <h1>Users List Loading...</h1>
        )}
      </div>
      {alert.show && (
        <Alert
          user={users.find((user) => user.id === alert.rowId)}
          alert={alert}
          setAlert={setAlert}
          deleteRow={() => {
            setUsers((prevVal) => {
              return prevVal.filter((user) => user.id !== alert.rowId);
            });
            setTimeout(() => setAlert({ rowId: null, show: false }), 1500);
          }}
          updateUser={(updatedUser) => {
            setUsers((prevVal) =>
              prevVal.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
              )
            );
            setTimeout(() => setAlert({ rowId: null, show: false }), 1500);
          }}
        />
      )}
    </>
  );
};

export default UserList;