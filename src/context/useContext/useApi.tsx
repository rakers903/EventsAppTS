import { createContext, useContext } from "react";
import type IEventsApi from "../../infra/Events/http/contracts/IEventsApi";
import type { IApiContext } from "../ApiContext";

export default function useApi() {
  return useContext(ApiContext);
}

export const ApiContext = createContext<IApiContext>({
  eventsApi: {} as IEventsApi
});
