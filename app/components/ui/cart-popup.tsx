import priceFormatter from "@/app/utils/price-formatter";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const cartlist = [
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    qty: 1,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 990000,
    qty: 1,
    imgUrl: "product-2.png",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    qty: 1,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    qty: 1,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 990000,
    qty: 1,
    imgUrl: "product-2.png",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    qty: 1,
    imgUrl: "product-3.png",
  },
];

const CartPopup = () => {
    const { push } = useRouter();
    const handleCheckout = () => {
        push("/checkout")
    }

  const totalPrice = cartlist.reduce(
  (total, item) => total + item.price * item.qty,
  0
)
    
  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-50">
      <div className="p-4 border border-b border-gray-200 font-bold text-center ">
        Shopping Cart
      </div>
      {cartlist.map((item, index) => (
        <div className="border-b border-gray-200 p-4 flex gap-3">
            <div className="bg-primary-light aspect-square w-16 justify-center items-center">
              <Image src={`/images/products/${item.imgUrl}`} alt={item.name} width={63} height={63} className="w-full h-full object-contain aspect-square" />
            </div>
            <div className="self-center">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="flex gap-3 text-xs font-medium">
                    <div>{item.qty}x </div>
                    <div className="text-primary ">{priceFormatter(item.price)}</div>
                </div>
            </div>
            <Button variant="ghost" className="h-7 w-7 self-center ml-auto p-0! "> <FiTrash2/> </Button>
        </div>
      ))}
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
            <div className="text-sm">Total</div>
            <div className="text-primary text-xs">{priceFormatter(totalPrice)}</div>
        </div>
      </div>
      <Button size="small" variant="dark" className="w-full mt-4" onClick={handleCheckout}>Checkout Now 
        <FiArrowRight/>
      </Button>
    </div>
  );
};

export default CartPopup;
