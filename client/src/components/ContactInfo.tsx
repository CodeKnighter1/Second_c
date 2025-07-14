import { useEffect, useState } from "react";
import { getContactForm } from "@/api/contactInfo";
import type { ContactForm } from "@/types/all";
import { motion } from "framer-motion";
import { FaTelegramPlane, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function ContactInfo() {
  const [contact, setContact] = useState<ContactForm | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const branchNames = [
    "Toshkent filiali",
    "Buxoro filiali",
    "Samarqand filiali",
    "Farg‘ona filiali",
  ];

  useEffect(() => {
    getContactForm()
      .then((data) => {
        setContact(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 py-10">
        Yuklanmoqda...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-lg text-red-600 dark:text-red-400 py-10">
        Xatolik: {error}
      </p>
    );
  if (!contact) return null;

  const locations = [contact.map1, contact.map2, contact.map3, contact.map4];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-white dark:bg-gradient-to-br dark:from-[#001F3F] dark:via-[#2563eb] dark:to-[#1e3a8a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-10 lg:space-y-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 dark:from-green-400 dark:to-blue-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Biz bilan bog‘laning
        </motion.h2>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: <FaMapMarkerAlt className="text-white text-xl" />,
              title: "Manzil",
              desc: contact.address,
            },
            {
              icon: <FaPhoneAlt className="text-white text-xl" />,
              title: "Telefon",
              desc: contact.phone,
            },
            {
              icon: <FaTelegramPlane className="text-white text-xl" />,
              title: "Telegram",
              desc: (
                <a
                  href={contact.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-green-400 hover:underline cursor-pointer"
                >
                  Telegram kanalimiz
                </a>
              ),
            },
            {
              icon: <FaInstagram className="text-white text-xl" />,
              title: "Instagram",
              desc: (
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-green-400 hover:underline cursor-pointer"
                >
                  Instagram sahifamiz
                </a>
              ),
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-4 sm:p-6 bg-white dark:bg-[#1E3A8A] rounded-lg shadow-lg border border-blue-100 dark:border-green-800 transition-all duration-300 hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500 dark:from-green-400 dark:to-blue-400 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mt-3">
                {item.title}
              </h3>
              <div className="text-base text-gray-600 dark:text-gray-300">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map grid */}
        {locations.length === branchNames.length && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {locations.map((location, idx) => (
              <motion.div
                key={idx}
                className="relative rounded-xl overflow-hidden shadow-lg group aspect-video border border-blue-100 dark:border-green-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Tooltip with branch name */}
                <motion.div
                  className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ y: -10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {branchNames[idx]}
                </motion.div>

                <iframe
                  src={location}
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-full border-0"
                  title={branchNames[idx]}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ContactInfo;
