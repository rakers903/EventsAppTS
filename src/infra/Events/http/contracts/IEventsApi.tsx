import type { TEvent } from "../../../../presentation/Home/types";
import type { TGetEventsParams } from "./types";

export default interface IEventsApi {
  getEvents({ month, day }: TGetEventsParams): Promise<Array<TEvent>>
}