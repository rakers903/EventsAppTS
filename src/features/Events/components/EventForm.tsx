import TextInput from "../../../shared/components/TextInput";
import Button from "../../../shared/components/Button";
import type { TEventFormProps } from "../types";
import styles from "./css/EventForm.module.css";

export default function EventForm({ viewModel }: TEventFormProps): React.JSX.Element
{
  return(
    <div className={styles.FormContainer}>
      <h1>Event Form</h1>
      <form className={styles.Form} onSubmit={viewModel.getEvents}>
        <TextInput placeholder="Month" min={1} max={12} onChange={viewModel.updateEventForm} value={viewModel.month} name="month" />
        <TextInput placeholder="Day" min={1} max={31} onChange={viewModel.updateEventForm} value={viewModel.day} name="day" />
        <Button title="Search" type="submit" />
      </form>
    </div>
  );
}