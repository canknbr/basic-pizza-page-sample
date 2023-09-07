import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzaLength = pizzaData.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {pizzaLength > 0 ? (
        <div className="pizzas">
          {pizzaData.map((pizza) => {
            return <Pizza key={pizza.name} pizza={pizza} />;
          })}
        </div>
      ) : (
        <p>Sorry, we're out of pizza</p>
      )}
    </div>
  );
}
const Pizza = ({ pizza }) => {
  return (
    <div className={`pizza ${pizza.soldOut && "sold-out"}`}>
      <img src={pizza.photoName} alt="pizza spinaci" />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "Sold Out" : pizza.price}</span>
      </div>
    </div>
  );
};
function Footer() {
  const open = 12;
  const close = 24;
  const now = new Date().getHours();
  const isOpen = now > open && now < close;
  return (
    <footer className="footer">
      <p>{isOpen ? "We're open!" : "We're closed"}</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
