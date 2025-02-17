interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`py-4 px-5 rounded-xl bg-white dark:bg-[#1F2733] shadow-[0_3.5px_5.5px_rgba(0,0,0,0.02)] overflow-x-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
