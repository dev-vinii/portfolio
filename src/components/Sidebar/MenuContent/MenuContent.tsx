import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function MenuContent(props: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  path: string;
}) {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  
  const handleActiveClass = () => {
    location.pathname !=  props.path && setIsActive(false);
    location.pathname == props.path && setIsActive(true);
  }
  
  useEffect(() => {
    handleActiveClass();
  }, [location.pathname])
  
  return (
    <div
      className={`h-10 font-oleo cursor-pointer flex justify-start pl-10 
      items-center w-full rounded-lg bg-sidebar transition-all delay-100 hover:bg-sidebarColor hover:font-bold
      tracking-wider ${isActive ? 'bg-sidebarColor font-bold' : ''} `}
      onClick={props.onClick}
    >
      {props.icon}
      <span className="decoration-white">{props.label}</span>
    </div>
  );
}
