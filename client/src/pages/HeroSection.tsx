import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PencilLine } from "lucide-react";
import ApplicationT from "@/components/Application";
import buxoro_m from "@/images/Artboard 1 copy.png";

const HeroSection = () => {
  return (
    <div>


      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 h-full max-h-[600px] transition-colors duration-300 bg-cover bg-center"
        style={{ backgroundImage: `url(${buxoro_m})` }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:gap-10 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-center leading-tight text-gray-900 dark:text-gray-100">
              Buxoro <span className="text-blue-500 dark:text-green-400">maktabi xalq</span> <br /> tanlovi
            </h1>
            <p className="text-base sm:text-lg lg:text-2 text-center text-[#c5c523] dark:text-[#c5c523]">
              Maktabimizda zamonaviy ta’lim, tajribali o‘qituvchilar va <br /> bilimga chanqoqlik uyg‘onadi.
            </p>

            {/* Dialog Trigger */}
            <div className="flex justify-center mt-1">
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 dark:from-[#c5c523] dark:to-[#c5c523] hover:from-blue-600 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-green-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PencilLine className="w-5 h-5" />
                    Ariza qoldirish
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

        </div>
      </section>
    </div>
  );
};

export default HeroSection;