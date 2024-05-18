import profile from "@/assets/profile-image.jpeg";
import ProfileContent from "./ProfileContent/ProfileContent";
import MenuContent from "./MenuContent/MenuContent";
import { useEffect } from "react";
import routes from "@/routes/routes";
// import { Navigate } from "react-router-dom";

export default function SideBar() {
   useEffect(() => {
   }, []) 
    
  //  function handleClickMenu(path: string) {
  //    console.log(<Navigate to={`${path}`} />);
  //    return <Navigate to={`${path}`} />;
  //  }
  
  return (
    <>
      <div className="bg-sidebar min-h-screen absolute left-0 top-0 min-w-72 max-w-60">
        <ProfileContent image={profile} name="Vinicius Luna" />
        {routes.map((route, i) => (
          route.name && <MenuContent label={String(route.name)} key={i} onClick={function (): void {
            throw new Error("Function not implemented.");
          } } />
        ))}
      </div>
    </>
  );
}
