import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import DoneIcon from "@material-ui/icons/Done";
import Alert from "@material-ui/lab/Alert";

import "./Alert.css";
const AlertModal = ({ alert, setAlert, deleteRow, user, updateUser }) => {
  const [alertDetai, setAlertDetai] = useState({
    message: "",
    type: "",
  });
  const [tempUser, setTempUser] = useState(user);

  const handleActionBtn = () => {
    if (alert.mode === "delete") {
      deleteRow();
      setAlertDetai({ message: `Row ${alert.rowId} deleted`, type: "success" });
    } else {
      if (JSON.stringify(tempUser) === JSON.stringify(user)) {
        setAlertDetai({
          message: "You need to change value to update table!",
          type: "error",
        });
      } else {
        updateUser(tempUser);
        setAlertDetai({
          message: "user updated successfully",
          type: "success",
        });
      }
    }
  };

  const renderEditForm = () => {
    return (
      <div className="form-container">
        <input
          className="alert-form-input"
          type="text"
          value={tempUser.name}
          placeholder="Enter name"
          onChange={(e) =>
            setTempUser((prevVal) => {
              return { ...prevVal, name: e.target.value };
            })
          }
        />
        <input
          className="alert-form-input email"
          type="text"
          value={tempUser.email}
          placeholder="Enter email"
          onChange={(e) =>
            setTempUser((prevVal) => {
              return { ...prevVal, email: e.target.value };
            })
          }
        />
        <textarea
          className="alert-form-input content"
          type="text"
          value={tempUser.body}
          placeholder="Enter content"
          onChange={(e) =>
            setTempUser((prevVal) => {
              return { ...prevVal, body: e.target.value };
            })
          }
        />
      </div>
    );
  };

  return (
    <div className="alert-wrapeer">
      <div className="alert-card-container">
        <p className="card-content">
          {alert.mode === "delete"
            ? `Do you want to delete row ${alert.rowId} ?`
            : `Enter new values for row ${alert.rowId} `}
        </p>
        {alert.mode === "edit" && renderEditForm()}
        <div className="card-btns">
          <Button
            variant="contained"
            style={{
              background: alert.mode === "delete" ? "#ef5350" : "#00c853",
            }}
            className="alert-button delete"
            startIcon={alert.mode === "delete" ? <DeleteIcon /> : <DoneIcon />}
            onClick={() => handleActionBtn()}
          >
            {alert.mode === "delete" ? "Delete" : "Update"}
          </Button>
          <Button
            variant="contained"
            color="default"
            className="alert-button cancel"
            startIcon={<CancelIcon />}
            onClick={() => setAlert({ rowId: null, show: false })}
          >
            Cancel
          </Button>
        </div>
        {alertDetai.message && (
          <>
            <Alert className="alert-message" severity={alertDetai.type}>
              {alertDetai.message}
            </Alert>
          </>
        )}
      </div>
    </div>
  );
};

export default AlertModal;
