import type { TEvent } from "../../../../presentation/Home/types";
import type IEventsApi from "../contracts/IEventsApi";
import type { TGetEventsParams } from "../contracts/types";

export default class EventsApi implements IEventsApi {
  async getEvents({ month, day }: TGetEventsParams): Promise<Array<TEvent>> {
    try {
      const endpoint = `https://byabbe.se/on-this-day/${month}/${day}/events.json`;
      const result = await fetch(endpoint);
      if(!result.ok)
        return [];
      const data = await result.json();
      return data.events || [];
    } catch(err) {
      console.error(err);
      return [];
    }
  }
}