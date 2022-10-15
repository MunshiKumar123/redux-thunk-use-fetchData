import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getUsers } from "../store/ActionCreator";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  // const users = useSelector((state) => state.users);

  const incHandler = () => {
    dispatch({ type: "increment" });
  };
  const decHandler = () => {
    dispatch({ type: "decrement" });
  };
  const rest = () => {
    dispatch({ type: "reset" });
  };

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [counter]);

  // console.log(users);
  return (
    <>
      <h2>Functional Base Component</h2>
      <span>{counter}</span>
      <div>
        <button className="btn btn-primary" onClick={incHandler}>
          Increment
        </button>{" "}
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "incrementBy5", payload: 5 })}
        >
          Increment by 5
        </button>{" "}
        <button onClick={decHandler} className="btn btn-primary">
          Decrement
        </button>{" "}
        <button onClick={rest} className="btn btn-primary">
          Reset
        </button>
      </div>
      <div></div>{" "}
      {/* <table>
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
      </table> */}
    </>
  );
};
export default Counter;
