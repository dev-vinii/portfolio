import GenericTemplate from "@/components/GenericTemplate/GenericTemplate";
import Map from "./Map/Map";

export default function Localization() {
  return (
    <div className="flex justify-center items-center min-w-full h-full">
      <GenericTemplate>
        <Map></Map>
      </GenericTemplate>
    </div>
  );
}
