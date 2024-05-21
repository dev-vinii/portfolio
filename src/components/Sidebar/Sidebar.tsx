import profile from "@/assets/profile-image.jpeg";
import ProfileContent from "./ProfileContent/ProfileContent";
import MenuContent from "./MenuContent/MenuContent";
import routes from "@/routes/routes";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  
  const handleClickMenu = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className="bg-sidebar min-h-screen min-w-72 max-w-60">
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
    </>
  );
}