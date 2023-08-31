"use client";

import { useState } from "react";

import { useSearchParams } from "next/navigation";

// export interface Props {
//   cpage: number;
//   //   getData?: (cpage:number) => void;
//   changePage: (gotoPageNo: number) => void;
// }

export default function PageControlButton({ props }) {
  const [page, setPage] = useState(1);

  const searchParams = useSearchParams();
  const cpage = searchParams.get("cpage");
  console.log(cpage);

  function onClick(next) {
    console.log("something");
  }

  return (
    <div>
      <button
        className="border border-black-50 bg-cyan-100 p-3 mx-2"
        onClick={() => props.changePage(1)}
      >
        Prev
      </button>
      <button
        className="border border-black-50 bg-cyan-100 p-3 mx-2"
        onClick={() => props.changePage(2)}
      >
        Next
      </button>
    </div>
  );
}
