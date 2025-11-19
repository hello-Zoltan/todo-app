export type TodoState = 'open' | 'done';

export interface Todo {
  id: string;
  content: string;
  state: TodoState;
}