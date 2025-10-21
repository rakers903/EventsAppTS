import useHomeViewModel from "./useHomeViewModel"
import EventForm from "../../features/Events/components/EventForm"
import EventList from "../../features/Events/components/EventList"

export default function HomeView() {
  const viewModel = useHomeViewModel();
  return(
    <div>
      <EventForm viewModel={viewModel} />
      <EventList viewModel={viewModel} />
    </div>
  )
}