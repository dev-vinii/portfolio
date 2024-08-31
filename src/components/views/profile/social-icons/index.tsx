import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export function SocialIcons() {
	const urls = [
		"https://www.instagram.com/vinicin.ts",
		"https://www.linkedin.com/in/vinicius-luna-3a013222b/",
		"https://github.com/dev-vinii",
	];

	return (
		<div className="flex gap-7 flex-wrap">
			{urls.map((url, i) => (
				<motion.div key={i} whileHover={{ scale: 1.3 }}>
					<SocialIcon url={url} href={url} />
				</motion.div>
			))}
		</div>
	);
}
