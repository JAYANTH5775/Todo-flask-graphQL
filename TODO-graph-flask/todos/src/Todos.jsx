import { Divider, List } from "@mui/material";
import React from "react";
import Task from "./Task";

function Todos() {
  const todos = [
    {
      id: 1,
      name: "Plan trip",
      description: "Plan hotels and transportaion for all the places to go.",
      completed: true,
    },
    {
      id: 2,
      name: "Plan a second trip",
      description: "Plan hotels and transportaion for all the places to go.",
      complted: false,
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <List
        sx={{
          margin: "50px",
          maxWidth: "500px",
          minWidth: "300px",
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {todos.map((todo) => (
          <React.Fragment>
            <Task key={todo.name} todo={todo} />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default Todos;
