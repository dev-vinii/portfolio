import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function SocialIcons() {
  const urls = [
    "https://www.instagram.com/vinicindev",
    "https://www.linkedin.com/in/vinicius-luna-3a013222b/",
    "https://x.com/vnicinnn",
    "https://github.com/dev-vinii",
  ];

  return (
    <div className="flex gap-7">
      {urls.map((url, i) => (
        <motion.div key={i}  whileHover={{ scale: 1.6 }}>
          <SocialIcon url={url} href={url}/>
        </motion.div>
      ))}
    </div>
  );
}