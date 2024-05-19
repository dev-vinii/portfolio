export default function MenuContent(props: {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="h-10 font-nunito cursor-pointer flex justify-center 
      items-center w-full mt-16 rounded-lg bg-sidebar transition-all delay-100 hover:bg-sidebarColor hover:font-bold
      tracking-wider"
      onClick={props.onClick}
    >
      {props.icon}
      <span>{props.label}</span>
    </div>
  );
}
