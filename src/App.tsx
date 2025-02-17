import Metrics from "./components/Metrics";
import Charts from "./components/Charts";
import DataTable from "./components/DataTable";
import ThemeToggle from "./components/ThemeToggle";
import { motion } from "framer-motion";
import { AudioLines } from "lucide-react";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-6 sm:p-8"
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold flex gap-2 items-center">
          <AudioLines className="text-primary" /> Streamify
        </h1>
        <ThemeToggle />
      </div>
      <div className="space-y-8">
        <Metrics />
        <Charts />
        <DataTable />
      </div>
    </motion.div>
  );
};

export default App;
