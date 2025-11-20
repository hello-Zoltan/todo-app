import { Todo } from "./todo.model";

export type TodoModifactionType = 'add' | 'edit';

export interface AddModificationDialogInput {
  type: 'add';
}

export interface EditModificationDialogInput {
  type: 'edit';
  todo: Todo;
}

export type ModificationDialogDataInput = AddModificationDialogInput | EditModificationDialogInput;

export interface ModificationDialogDataOutput {
  modificationType: TodoModifactionType,
  todo: Todo
}