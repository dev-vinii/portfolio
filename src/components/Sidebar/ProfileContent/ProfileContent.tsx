export default function Profile(props: { image: string, name: string }) {
  return (
    <div className="p-8">
      <img src={props.image} className="rounded-full" />
      <div className="font-mono flex justify-center mt-4">
        <span>{props.name}</span>
      </div>
    </div>
  );
}
