import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? "id" : "en");
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="relative w-20 h-8 rounded-full flex items-center justify-between px-2
                 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 backdrop-blur-md
                 border border-white/20 shadow-[0_0_10px_rgba(147,51,234,0.4)]
                 text-white text-xs font-medium transition-all duration-300"
    >
      {/* Label bahasa */}
      <span
        className={`${
          isEnglish ? "opacity-100" : "opacity-60"
        } transition-opacity`}
      >
        EN
      </span>
      <span
        className={`${
          isEnglish ? "opacity-60" : "opacity-100"
        } transition-opacity`}
      >
        ID
      </span>

      {/* Tombol bulat yang bergerak */}
      <motion.div
        animate={{ x: isEnglish ? 0 : 48 }} // Geser halus 48px
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute top-1 left-1 w-6 h-6 rounded-full 
                   bg-gradient-to-r from-purple-400 to-indigo-400 
                   shadow-[0_0_10px_rgba(147,51,234,0.6)]"
      />
    </motion.button>
  );
};
