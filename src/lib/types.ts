import { ReactChild, ReactFragment, ReactPortal } from "react";

export type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

