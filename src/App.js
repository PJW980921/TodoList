import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import GlobalStyle from './GlobalStyle';

const BtnNames = ["전체", "진행 중", "진행 완료"];
export default function App() {
  const [names, SetNames] = useState(BtnNames[0]);
  return (
    <>
    <GlobalStyle/>
      <Header BtnNames={BtnNames} names={names} onBtnNameChange={SetNames} />
      <TodoList names={names} />
    </>
  );
}

