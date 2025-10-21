import type { TEventListProps } from "../types";
import EventItem from "./EventItem";
import styles from "./css/EventList.module.css";

export default function EventList({ viewModel }: TEventListProps): React.JSX.Element
{
  return(
    <div className={styles.EventListContainer}>
      <h1>Event List</h1>
      <ul>
        {
          !viewModel.status.loading && viewModel.events.map((event, i) => {
            return <EventItem key={i} data={event} />
          })
        }
      </ul>
    </div>
  )
}