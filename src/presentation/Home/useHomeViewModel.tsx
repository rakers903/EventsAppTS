import { useState, type FormEvent } from "react";
import type { IHomeViewModel, TEvent, TEventForm, TStatus } from "./types"
import useApi from "../../context/useContext/useApi";

export default function useHomeViewModel(): IHomeViewModel {
  const { eventsApi } = useApi();

  const [status, setStatus] = useState<TStatus>({
    loading: true,
    error: false
  });
  const [events, setEvents] = useState<Array<TEvent>>([]);
  const [eventForm, setEventForm] = useState<TEventForm>({
    month: "",
    day: ""
  });

  async function getEvents(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ error: false, loading: true });
    if(!validateEventForm())
      return;
    try {
      const { month, day } = eventForm;
      const events = await eventsApi.getEvents({
        month: Number(month),
        day: Number(day)
      });
      setEvents(events);
      setStatus({ loading: false, error: false });
    } catch(err) {
      console.error(err);
      setStatus({ loading: false, error: true });
    }
  }

  function validateEventForm() {
    return true;
  }

  function updateEventForm(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.name;
    const value = e.target.value;
    setEventForm({ ...eventForm, [key]: value })
  }

  return {
    events,
    updateEventForm,
    getEvents,
    month: eventForm.month,
    day: eventForm.day,
    status
  } 
}