import { FoodItem, FoodItems, MealsFilter } from "components/FoodItems";
import f2 from "images/f2.jpg";
import f3 from "images/f3.jpg";
import f4 from "images/f4.jpg";
import f5 from "images/f5.jpg";
import "./Home.css";
const mealsItems = ["Lunch", "Mains", "Desserts", "A La Carte", "Specials"];

const foodItems = [
  {
    title: "Greek Salad",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    prices: 12.99,
    img: f2,
  },
  {
    title: "Brushetta",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta. ",
    prices: 7.99,
    img: f3,
  },
  {
    title: "Grilled Fish",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    prices: 20.0,
    img: f4,
  },
  {
    title: "Pasta",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare. ",
    prices: 18.99,
    img: f5,
  },
  {
    title: "Lemon Dessert",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
    prices: 6.99,
    img: f2,
  },
];
function Home() {
  const handleFilter = (item, data, setData) => {
    const { meals } = data;
    const index = meals.indexOf(item);
    if (index >= 0) {
      meals.splice(index, 1);
    } else {
      meals.push(item);
    }
    setData({ ...data, meals });
  };
  return (
    <FoodItems>
      <MealsFilter>
        {(data, setData) =>
          mealsItems.map((item) => (
            <button
              className={`meals-item ${
                data.meals.includes(item) ? "active" : ""
              }`}
              type="button"
              aria-label={item}
              key={item}
              onClick={() => handleFilter(item, data, setData)}
            >
              {item}
            </button>
          ))
        }
      </MealsFilter>
      <section className="food-items">
        {foodItems.map((item, index) => (
          <FoodItem {...item} key={index} />
        ))}
      </section>
    </FoodItems>
  );
}

export default Home;
