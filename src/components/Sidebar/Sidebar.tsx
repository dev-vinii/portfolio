import profile from "@/assets/profile-image.jpeg";
import ProfileContent from "./ProfileContent/ProfileContent";
import MenuContent from "./MenuContent/MenuContent";
import routes from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function SideBar() {
  const navigate = useNavigate();

  const handleClickMenu = (path: string) => {
    navigate(path);
  };

  const windowSize = () => window.innerWidth > 1280;
  
  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(windowSize());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [showSidebar, setShowSidebar] = useState(windowSize);

  return (
    <>
      <div className="absolute left-0 top-0 cursor-pointer max-xl:z-20">
        {showSidebar || <IoIosMenu className="h-10 w-10" onClick={() => setShowSidebar(true)} />}
        {showSidebar && !windowSize() && <IoMdClose className="h-10 w-10" onClick={() => setShowSidebar(false)} />}
      </div>
      {showSidebar && (
        <div className="bg-sidebar min-h-screen min-w-72 max-w-60 max-xl:absolute max-xl:left-0 max-xl:top-0 max-xl:z-10">
          <ProfileContent image={profile} name="Vinicius Luna" />
          {routes.map(
            (route, i) =>
              route.name && (
                <MenuContent
                  path={route.path}
                  icon={<route.sidebarIcon className="mr-3" />}
                  label={String(route.name)}
                  key={i}
                  onClick={() => handleClickMenu(route.path)}
                />
              )
          )}
        </div>
      )}
    </>
  );
}
