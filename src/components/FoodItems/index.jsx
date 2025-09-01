import { createContext, useContext, useState } from "react";
import "./index.css";

const FoodItemsContext = createContext();

function MealsFilter({ children }) {
  const { filters, setFilters } = useContext(FoodItemsContext);
  return (
    <div className="meals-filter">
      <h2>Order FOR DELIVERY!</h2>
      <div className="meals-scroll-view">{children(filters, setFilters)}</div>
    </div>
  );
}

function FoodItem({ title, desc, img, prices }) {
  return (
    <div className="food-item">
      <h2>{title}</h2>
      <div className="food-item-content">
        <div className="flex-1 overflow-hidden">
          <p className="mb-2 line-clamp-2 text-gray-500">{desc}</p>
          <p className="font-semibold">${prices}</p>
        </div>
        <img className="aspect-square ml-2" src={img} alt={title} />
      </div>
    </div>
  );
}
function FoodItems({ children }) {
  const [filters, setFilters] = useState({
    meals: [],
  });
  return (
    <FoodItemsContext.Provider value={{ filters, setFilters }}>
      {children}
    </FoodItemsContext.Provider>
  );
}

export { FoodItem, FoodItems, MealsFilter };

