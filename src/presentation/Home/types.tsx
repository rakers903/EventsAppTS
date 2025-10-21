export interface IHomeViewModel {
  events: Array<TEvent>;
  updateEventForm(e: React.ChangeEvent<HTMLInputElement>): void;
  month: string;
  day: string;
  status: TStatus;
  getEvents(e: React.FormEvent<HTMLFormElement>): Promise<void>
}

export type TStatus = {
  loading: boolean;
  error: boolean;
}

export type TEvent = {
  year: string;
  description: string;
  wikipedia: Array<TWiki>;
}

export type TWiki = {
  title: string;
  description: string;
}

export type TEventForm = {
  month: string;
  day: string;
}