import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/ActionCreator";

const ApiDataFe = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log(users);
  return (
    <>
      <h1>hloo</h1>
      <table>
        <tbody>
          {users?.map((usr) => {
            return (
              <tr key={usr.id}>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default ApiDataFe;
