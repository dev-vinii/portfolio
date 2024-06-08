import Generictemplate from "@/components/Generictemplate/GenericTemplate";
import Map from "./Map/Map";

export default function Localization() {
  return (
    <Generictemplate title="Localização" padding={false}>
      <Map></Map>
    </Generictemplate>
  );
}
