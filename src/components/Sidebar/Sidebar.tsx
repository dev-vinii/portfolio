import profile from "@/assets/profile-image.jpeg";
import ProfileContent from "./ProfileContent/ProfileContent";
import MenuContent from "./MenuContent/MenuContent";
import routes from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { motion } from "framer-motion";

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

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [showSidebar, setShowSidebar] = useState(windowSize);

  return (
    <>
      <div className="min-w-screen flex justify-end text-sidebar xl:hidden cursor-pointer">
        <IoIosMenu
          className="h-10 w-10"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>
      {showSidebar && (
        <motion.div
          initial={{ position: "absolute", left: -400 }}
          animate={{
            position: "absolute",
            left: 0,
            transitionEnd: { position: "unset" },
          }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-sidebar min-h-screen w-80 max-xl:absolute max-xl:left-0 max-xl:top-0">
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
        </motion.div>
      )}
    </>
  );
}
