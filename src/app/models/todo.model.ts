export type TodoState = 'open' | 'done';

export interface Todo {
  uuid: string;
  index: number;
  content: string;
  state: TodoState;
}