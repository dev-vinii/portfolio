export default function Profile(props: { image: string, name: string }) {
  return (
    <div className="p-8 flex flex-col items-center">
      <img src={props.image} className="rounded-full h-40 w-40" />
      <div className="font-mono mt-4">
        <span>{props.name}</span>
      </div>
    </div>
  );
}
