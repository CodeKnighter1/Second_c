import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PencilLine } from "lucide-react";
import ApplicationT from "@/components/Application";
import buxoro_logo from "@/images/bm_logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#1E3A8A]/90 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={buxoro_logo} alt="Buxoro Maktabi Logo" className="w-20 h-10 sm:w-30 sm:h-12" />
        </div>


        {/* Desktop Right Side: Auth buttons + Dark Mode Toggle */}
        <div className="hidden md:flex items-center gap-2 sm:gap-4">
          <ModeToggle />
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-green-500 shadow-md hover:shadow-lg transition-all duration-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-green-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PencilLine className="w-4 h-4 mr-1 inline" />
                Ariza Topshirish
              </motion.button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 border-none bg-transparent shadow-2xl">
              <DialogHeader>
                <DialogTitle className="sr-only">Ariza</DialogTitle>
              </DialogHeader>
              <ApplicationT />
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 dark:text-gray-200 p-1" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white/90 dark:bg-[#1E3A8A]/90 backdrop-blur-md px-4 sm:px-6 pb-4 flex flex-col gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3">
            <div className="flex justify-start">
              <ModeToggle />
            </div>
            <motion.button
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-100 hover:text-blue-500 dark:hover:text-green-400 transition-all duration-200 text-left"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kirish
            </motion.button>
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-green-500 dark:bg-gradient-to-l dark:from-[#c5c523] dark:to-[#d1d120] shadow-md hover:shadow-lg transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PencilLine className="w-4 h-4 mr-1 inline" />
                  Ariza Topshirish
                </motion.button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 border-none bg-transparent shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="sr-only">Ariza</DialogTitle>
                </DialogHeader>
                <ApplicationT />
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;