"use client";

import OrderConfirmed from "@/app/components/order-status/order-confirmed";
import OrderSubmitted from "@/app/components/order-status/order-submitted";
import React from "react";

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-10"> Order Status</h1>
        {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />}
      </div>
    </main>
  );
};

export default OrderStatus;
