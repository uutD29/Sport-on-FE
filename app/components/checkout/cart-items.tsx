"use client";

import priceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { cartlist } from "../ui/cart-popup";
import Image from "next/image";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import Cardwithheader from "../ui/card-with-header";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const { push } = useRouter();

  const totalPrice = cartlist.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  return (
    <Cardwithheader title="Cart Items">
      <div className="overflow-auto max-h-[360px]">
        {cartlist.map((item, index) => (
          <div className="border-b border-gray-200 p-4 flex gap-3">
            <div className="bg-primary-light aspect-square w-16 justify-center items-center">
              <Image
                src={`/images/products/${item.imgUrl}`}
                alt={item.name}
                width={63}
                height={63}
                className="w-full h-full object-contain aspect-square"
              />
            </div>
            <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 text-xs font-medium">
                <div>{item.qty}x </div>
                <div className="text-primary ">
                  {priceFormatter(item.price)}
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              className="h-7 w-7 self-center ml-auto p-0! "
            >
              <FiTrash2 />
            </Button>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>
      </div>
      <Button
        variant="dark"
        className="w-full mt-4"
        onClick={() => push("/payment")}
      >
        <FiCreditCard />
        Proceed to Payment
      </Button>
    </Cardwithheader>
  );
};

export default CartItems;
