export default function MenuContent(props: { label: string, onClick: () => void }) {
  return (
    <div className="h-10 cursor-pointer flex justify-center items-center w-full mt-16 rounded-lg bg-sidebar transition-all delay-100 hover:bg-sidebarColor"
    onClick={props.onClick}>
      <span>{props.label}</span>
    </div>
  );
}
