import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const Pharmacy = () => {
  const [pills, setPills] = useState([]);

  useEffect(() => {
    fetch('./pill.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setPills(data);
        console.log(data); 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div className="mt-10">
      <div className="mb-4">
    <h1 className="text-3xl font-bold text-center">Welcome to Our 24/7 E-Pharmacy</h1>
    <p className=" text-base text-center pt-3"> Our online pharmacy has been helping people beat insomnia one night at a time since 2013, and we are widely regarded as the best sleeping pills supplier in the industry; stocking a complete range of safe and effective licensed medications for the treatment of insomnia. We also supply a variety of medications for the treatment of anxiety and pain relief. Our customers can buy sleeping pills online 24/7 without a doctor's prescription and at the lowest possible prices.</p>
    <p className=" text-base text-center pt-3">
    Our website provides extensive information regarding each and every medication we sell, including usage instructions, to ensure that customers can choose medications best suited to their needs and are able to use them in a safe and effective manner. We understand the importance of an efficient customer support team and prompt delivery service and endeavour to dispatch all orders within 24 hours.</p>
    <p className=" text-base text-center pt-3"> If you already know which product you need, you can simply select the quantity you desire from the menu below and add it to your shopping cart!</p>
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {pills.length > 0 ? (
          pills.map((pill, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden border-[1px] flex flex-col h-full">
              <img src={pill.image} alt={pill.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold">{pill.name}</h2>
                <p className="text-gray-600 flex-grow">{pill.description}</p>
                <div className="mt-4">
                  <p className="text-lg font-bold">{pill.dosage_options.join(" / ")}</p>
                  <p className="text-lg font-semibold">{pill.price.amount} {pill.price.currency} for {pill.price.quantity}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-4 mt-auto">
                <button className="bg-[#08233B] text-xl font-bold text-white uppercase px-3 py-2 rounded-lg">
                  View Info
                </button>
                <button className="bg-[#08233B] text-xl font-bold text-white uppercase px-3 py-2 rounded-lg flex items-center gap-2">
                  <FaCartPlus /> Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading pills...</p>
        )}
      </div>
    </div>
  );
};

export default Pharmacy;
