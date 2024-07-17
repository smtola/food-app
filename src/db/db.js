import imgBurger from '../images/burger.png';
import imgCoca from '../images/coca.png';
import imgIcecream from '../images/icecream.png';
import imgKebab from '../images/kebab.png';
import imgPizza from '../images/pizza.png';
import imgSalad from '../images/salad.png';
import imgWater from '../images/water.png';

export function getData() {
    return [
      { title: "Pizza", price: 17.99, Image: imgPizza, id: 1 },
      { title: "Burger", price: 15, Image: imgBurger, id: 2 },
      { title: "Coca", price: 3.5, Image: imgCoca, id: 3 },
      { title: "Ice-cream", price: 2.99, Image: imgIcecream, id: 4 },
      { title: "Kebab", price: 13.99, Image: imgKebab, id: 5 },
      { title: "Salad", price: 17.99, Image: imgSalad, id: 6 },
      { title: "Bottle of water", price: 0.99, Image: imgWater, id: 7 }
    ];
}