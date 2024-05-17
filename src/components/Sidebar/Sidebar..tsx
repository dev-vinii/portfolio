import profile from "@/assets/profile-image.jpeg";
import ProfileContent from "./ProfileContent/ProfileContent";
import MenuContent from "./MenuContent/MenuContent";
import { useEffect } from "react";
import AppRoutes from "@/routes/AppRoutes";

export default function SideBar() {
   useEffect(() => {
   }, []) 
    
  return (
    <>
      <div className="bg-sidebar min-h-screen absolute left-0 top-0 min-w-60 max-w-60">
        <ProfileContent image={profile} name="Vinicius Luna" />
        <MenuContent label="Profile"/>
      </div>
    </>
  );
}
