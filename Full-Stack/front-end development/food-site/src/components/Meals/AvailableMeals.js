/* eslint-disable array-callback-return */
import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem.js";
const dummyMeals = [
  {
    id: 1,
    foodName: "Spaghetti Carbonara",
    description:
      "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
    price: 12.99,
    rating: 4.5,
  },
  {
    id: 2,
    foodName: "Chicken Tikka Masala",
    description:
      "Tender chicken cooked in a creamy tomato-based sauce with Indian spices.",
    price: 14.5,
    rating: 4.8,
  },
  {
    id: 3,
    foodName: "Caesar Salad",
    description:
      "Fresh romaine lettuce, parmesan cheese, croutons, and Caesar dressing.",
    price: 8.99,
    rating: 4.2,
  },
  {
    id: 4,
    foodName: "Beef Burger",
    description:
      "Juicy beef patty with lettuce, tomato, onion, and special sauce in a sesame seed bun.",
    price: 10.49,
    rating: 4.6,
  },
  {
    id: 5,
    foodName: "Vegetable Stir-Fry",
    description:
      "Assorted vegetables sautéed with soy sauce and garlic, served with steamed rice.",
    price: 9.99,
    rating: 4.0,
  },
  {
    id: 6,
    foodName: "Margherita Pizza",
    description:
      "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
    price: 11.5,
    rating: 4.7,
  },
  {
    id: 7,
    foodName: "Grilled Salmon",
    description:
      "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
    price: 16.75,
    rating: 4.9,
  },
  {
    id: 8,
    foodName: "Mushroom Risotto",
    description:
      "Creamy risotto cooked with mushrooms, onions, white wine, and parmesan cheese.",
    price: 13.25,
    rating: 4.4,
  },
  {
    id: 9,
    foodName: "Taco Platter",
    description:
      "Assorted tacos with choice of fillings, served with salsa and guacamole.",
    price: 12.99,
    rating: 4.3,
  },
  {
    id: 10,
    foodName: "Pasta Primavera",
    description:
      "Pasta tossed with seasonal vegetables in a light cream sauce.",
    price: 10.99,
    rating: 4.1,
  },
];

const AvailableMeals = () => {
  const MealList = dummyMeals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.foodName}
        description={meal.description}
        rating={meal.rating}
        price={meal.price}
      ></MealItem>
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
