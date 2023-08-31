// "use server";

import { Todo } from "@/lib/types";
import Link from "next/link";
import { todo } from "node:test";

// import PageControlButton from "@/components/pageControlButton";
// import TodoList from "@/components/todoList";
// import { Todo } from "@/lib/types";

// async function getData(page: number): Promise<Todo[]> {
//   const limit = 3;
//   if ((page = 0)) page = 1;

//   const data = await fetch(
//     `https://dummyjson.com/todos?limit=${limit}&skip=${(page - 1) * limit}`,
//     {
//       cache: "no-store",
//     }
//   );

//   const ret = await data.json();

//   console.log(ret.todos);

//   return ret.todos;
// }

// //function changePage(increase: boolean): void {}
// //const changePage = (increase: boolean): void => {};

// export default async function SomePage() {
//   var todos = await getData(1);

//   const changePage = async (gotoPageNo: number): Promise<void> => {
//     'use server';

//     todos = await getData(gotoPageNo);
//     console.log(`hi serveree ${gotoPageNo}`);

//   };

//   return (
//     <>
//       <div className="p-2">
//         <h1>Todos</h1>
//       </div>
//       <TodoList todos={todos} />
//       {/* <PageControlButton  /> */}
//     </>
//   );
// }

// export default async function () {}

const getData = async (
  page: number = 1,
  limit: number = 3
): Promise<Todo[]> => {
  if (page < 1) page = 1;

  const data = await fetch(
    `https://dummyjson.com/todos?limit=${limit}&skip=${(page - 1) * limit}`,
    {
      cache: "no-store",
    }
  );

  const todos = await data.json();

  //   console.log(todos.todos);

  return todos.todos;
};

const Page = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 10;

  //   console.log(`${page} - ${limit}`);

  const todos = await getData(page, limit);

  console.log(todos);

  return (
    <div>
      <h1>HEllo</h1>
      <ul className="p-3">
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
      <div>
        <Link
          className="border border-black-50 bg-cyan-100 p-3 mx-2"
          href={`/some?page=${page - 1}`}
        >
          Prev
        </Link>
        <Link
          className="border border-black-50 bg-cyan-100 p-3 mx-2"
          href={`/some?page=${page + 1}`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Page;
