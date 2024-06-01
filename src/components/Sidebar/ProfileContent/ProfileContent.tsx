export default function Profile(props: { image: string, name: string }) {
  return (
    <div className="p-8 flex flex-col items-center">
      <img src={props.image} className=" rounded-[100px] h-60 w-60" />
    </div>
  );
}
