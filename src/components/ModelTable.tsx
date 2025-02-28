import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TableColumn {
  header: string;
  key: string;
}

interface TableRow {
  [key: string]: string | number | boolean;
}

interface ModelTableProps {
  columns: TableColumn[];
  rows: TableRow[];
}

const ModelTable: React.FC<ModelTableProps> = ({ columns, rows }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tableVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0 },
    visible: (index: number) => ({
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3 + (index * 0.1),
      }
    })
  };

  const cellVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={tableVariants}
      className="w-full overflow-x-auto"
    >
      <table className="w-full rounded-lg overflow-hidden bg-mediumGray">
        <thead>
          <motion.tr variants={headerVariants}>
            {columns.map((column) => (
              <th 
                key={column.key} 
                className="px-6 py-4 text-left text-foreground font-semibold bg-darkGray bg-opacity-50"
              >
                {column.header}
              </th>
            ))}
          </motion.tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              custom={rowIndex}
              variants={rowVariants}
              className={rowIndex % 2 === 0 ? "bg-opacity-50" : "bg-opacity-30"}
            >
              {columns.map((column) => (
                <motion.td
                  key={`${rowIndex}-${column.key}`}
                  variants={cellVariants}
                  className="px-6 py-4 border-t border-darkGray"
                >
                  {typeof row[column.key] === 'boolean' 
                    ? (row[column.key] ? "დიახ" : "არა") 
                    : row[column.key]}
                </motion.td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default ModelTable;
