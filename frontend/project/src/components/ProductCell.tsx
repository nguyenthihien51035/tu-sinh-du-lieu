// ProductCell.tsx
import { FaRegSnowflake, FaStar } from "react-icons/fa";

interface ProductProps {
  title: string;
  image: string;
  weight: string;
  rating: number;
  price: number;
  tag?: string; // optional (e.g. "Best Sale")
  frozen?: boolean; // optional
}

function ProductCell({ title, image, weight, rating, price, tag, frozen }: ProductProps) {
  return (
    <div className="rounded-[12px] bg-gray-100 shadow relative">
      {/* Tag on top left */}
      {tag && (
        <div className="absolute font-medium text-xs sm:text-sm md:text-base text-white bg-red-900 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">
          {tag}
        </div>
      )}
      {/* Frozen tag top right */}
      {frozen && (
        <div className="absolute top-0 right-0 font-medium text-xs sm:text-sm md:text-base text-white bg-gradient-to-r from-yellow-300 to-orange-400 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1 flex items-center gap-2">
          <FaRegSnowflake /> Frozen
        </div>
      )}
      <div className="p-3 sm:p-4 flex flex-col gap-3">
        <div className="h-[250px] sm:h-[300px] flex items-center justify-center">
          <img src={image} alt={title} className="object-contain h-[200px] w-auto" />
        </div>
        <h1 className="font-bold text-green-900 text-lg sm:text-xl">{title}</h1>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm sm:text-base">
            <p className="text-gray-400 font-medium">{weight}</p>
            <p className="text-green-900 font-medium flex items-center gap-2">
              <FaStar size={16} className="text-orange-500" /> ({rating}/5)
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl sm:text-3xl text-green-900">${price.toFixed(2)}</h1>
            <button className="bg-green-900 font-medium rounded-full w-8 sm:w-10 h-8 sm:h-10 pb-2 text-2xl sm:text-3xl text-white">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCell;
