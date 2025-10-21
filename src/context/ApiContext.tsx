import type IEventsApi from "../infra/Events/http/contracts/IEventsApi";
import EventsApi from "../infra/Events/http/implementations/EventsApi";
import { ApiContext } from "./useContext/useApi";

export interface IApiContext {
  eventsApi: IEventsApi
}

type ApiProviderProps = {
  children: React.ReactNode;
}

export default function ApiProvider({ children }: ApiProviderProps): React.JSX.Element {
  const value = {
    eventsApi: new EventsApi()
  }
  return(
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  )
}