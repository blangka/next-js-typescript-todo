import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
    { id: 1, text: "마트에 가기", color: "red", checked: false },
    { id: 2, text: "집에 가기", color: "orange", checked: false },
    { id: 3, text: "학교에 가기", color: "yellow", checked: false },
    { id: 4, text: "교실에 가기", color: "blue", checked: false },
];

const index: NextPage = () => {
  return (
    <TodoList todos={todos} />
  );
};

export default index;
