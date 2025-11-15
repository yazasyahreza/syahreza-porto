import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggle = () => {
    i18n.changeLanguage(isEnglish ? "id" : "en");
  };

  return (
    <button
      onClick={toggle}
      className="relative w-28 h-10 rounded-full bg-[#1e1e1e]
                 border border-white/20 flex items-center px-3"
    >
      {/* Teks tetap diam */}
      <span className="text-white text-xs font-semibold absolute left-3">
        EN
      </span>

      <span className="text-white text-xs font-semibold absolute right-3">
        ID
      </span>

      {/* Flag slider lebih dekat */}
      <motion.div
        animate={{ x: isEnglish ? 0 : 60 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute left-3 w-7 h-7 rounded-full shadow-lg"
      >
        <img
          src={isEnglish ? "/flags/en.svg" : "/flags/id.svg"}
          className="w-7 h-7 rounded-full"
        />
      </motion.div>
    </button>
  );
};
