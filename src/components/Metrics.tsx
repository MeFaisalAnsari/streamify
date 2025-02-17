import { mockDashboardData } from "../data/mockData";
import Card from "./Card";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Metrics = () => {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {Object.values(mockDashboardData).map(({ icon, label, value }, index) => (
        <motion.div key={index} variants={childVariants}>
          <Card className="flex gap-4 items-center">
            <div className="flex-1">
              <h3 className="font-semibold opacity-60 mb-1">{label}</h3>
              <p className="text-xl font-bold">{value}</p>
            </div>
            <div className="w-12 h-12 flex justify-center overflow-hidden items-center rounded-xl bg-primary text-white">
              {icon}
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Metrics;
