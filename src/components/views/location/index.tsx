import { PageTemplate } from "@/components/widgets/organisms/pages-template";
import Map from "./map";

export default function Localization() {
	return (
		<PageTemplate title="Localização" padding={false}>
			<Map></Map>
		</PageTemplate>
	);
}
