import { useState } from 'react';
// , useEffect
import './App.css';
// import Card from './Components/Card/Card';
// import Cart from './Components/Cart/Cart';
// import { getData } from "./db/db";

// const foods = getData();
// const tele = window.Telegram.WebApp

function App() {
  const [chatId, setChatId] = useState('-1002186733881');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleChatIdChange = (e) => setChatId(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/sendBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatId, name, date, time }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

 return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Book Your Product</h1>
        <img
          src="https://img.freepik.com/free-psd/shoes-sale-social-media-post-square-banner-template-design_505751-3737.jpg?ga=GA1.1.129263653.1720607347&semt=sph"
          alt="Product"
          className="w-full mb-4 rounded"
        />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="hidden"
              value={chatId}
              onChange={handleChatIdChange}
              placeholder="Enter your chat ID"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
           />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              onChange={handleNameChange}
              value={name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={handleTimeChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );




  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   tele.ready();
  // })

  // const onAdd = (food) => {
  //   const exist = cartItems.find((x) => x.id === food.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) => 
  //         x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...food, quantity: 1 }]);
  //   }
  // }

  // const onRemove = (food) => {
  //   const exist = cartItems.find((x) => x.id === food.id);
  //   if (exist.quantity === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== food.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
  //       )
  //     );
  //   }
  // }

  // const onCheckout = () => {
  //   tele.MainButton.text = "Pay :)";
  //   tele.MainButton.show();
  // }

  // return (
  //   <>
  //     <h1 className='heading'>Order Foods</h1>
  //     <Cart cartItems={cartItems} onCheckout={ onCheckout } />
  //     <div className='card__container'> 
  //         {foods.map((food) => {
  //           return <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove }/>;
  //         })}
  //     </div>
  //   </>
  // );
}

export default App;
