type EventItemProps = {
  key: number;
  data: TEventData;
}

type TEventData = {
  year: string;
  description: string;
}

export default function EventItem({ key, data }: EventItemProps): React.JSX.Element
{
  return(
    <li key={key}>
      <div>
        <p>{data.year}</p>
        <p>{data.description}</p>
      </div>
    </li>
  );
}