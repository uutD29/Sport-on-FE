import React from "react";

type TCardWithHeaderProps = {
  title: string;
  children: React.ReactNode;
};

const CardWithHeader: React.FC<TCardWithHeaderProps> = ({ title, children }) => {
  return (
    <div className="bg-white">
      <div className="px-5 py-4 border-b border-gray-200">
        <h2 className="font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default CardWithHeader;
