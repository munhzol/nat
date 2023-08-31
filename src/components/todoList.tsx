"use client";

import { PropsWithChildren } from "react";

import { Todo } from "@/lib/types";

export interface Props {
  todos: Todo[];
}

export default function TodoList(props: PropsWithChildren<Props>) {
  return (
    <ul className="p-2">
      {props.todos.map((todo) => {
        return <li key={todo.id}>{todo.todo}</li>;
      })}
    </ul>
  );
}
