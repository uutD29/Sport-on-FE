import React from "react";
import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  return (
<CardWithHeader title="Order Information"><div className="p-5">
        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Type your full name" />
        </div>

        <div className="input-group">
          <label htmlFor="whatsappNumber">WhatsApp Number</label>
          <input
            type="tel"
            id="whatsappNumber"
            placeholder="Type your WhatsApp number"
          />
        </div>

        <div className="input-group">
          <label htmlFor="shippingAddress">Shipping Address</label>
          <textarea
            id="shippingAddress"
            placeholder="Example Street 18, West Jakarta, Indonesia, 66521"
            rows={7}
          />
        </div>
      </div></CardWithHeader>
  );
};

export default OrderInformation;
