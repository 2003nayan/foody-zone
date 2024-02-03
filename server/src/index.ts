import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boiled Egg",
      price: 10,
      text: "A perfectly boiled egg, with its creamy yolk and firm whites, is a simple yet delightful culinary marvel.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Japanese noodle soup with chewy noodles in savory broth and delightful toppings.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Grilled chicken, with its succulent and char-kissed perfection, embodies a savory delight that captivates the palate with every juicy bite.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "A sweet symphony of moist layers and luscious frosting, creating dessert bliss.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "A well-crafted burger, with its juicy patty nestled between soft buns and adorned with a symphony of toppings, is the epitome of comfort food indulgence.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "A stack of pancakes, golden and fluffy, drizzled with syrup, represents a comforting embrace of breakfast bliss.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
