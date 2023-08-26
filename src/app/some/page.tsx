import { Todo } from "@/lib/types";

async function getData(): Promise<Todo[]> {
  const data = await fetch("https://dummyjson.com/todos", {
    cache: "no-store",
  });

  const ret = await data.json();

  console.log(ret.todos);

  return ret.todos;
}

export default async function SomePage() {
  const todos = await getData();

  return (
    <h1>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.todo}</li>;
        })}
        <li></li>
      </ul>
    </h1>
  );
}
