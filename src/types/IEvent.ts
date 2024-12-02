export interface IEvent {
  name: string;
  once?: boolean;
  execute: Function;
}
