export type TodoState = 'active' | 'closed';

export interface Todo {
  id: string;
  content: string;
  state: TodoState;
}