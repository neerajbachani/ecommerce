import React from "react";

const Notification = ({ notifications, readNotifications }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {notifications.map((notification) => {
        const isRead = readNotifications.includes(notification.id);

        return (
          <div
            key={notification.id}
            className={
              isRead
                ? "w-[90%] h-20 bg-opacity-50 bg-white flex items-center rounded-lg bg-gray "
                : "w-[90%] h-20 bg-light-grayish-blue-1 bg-opacity-50 flex  items-center rounded-lg"
            }
          >
            <div className=" flex gap-2" >

            {notification.images.map((imagePath, index) => (
  <img key={index} className="w-12 ml-3 mt-1" src={imagePath} alt={`Product ${index + 1}`} />
))}
</div>

            <div>
              <h1 className="ml-20 ">
                <span className="font-poppins text-3xl font-extrabold hover:bg-light-bg-color hover:cursor-pointer">
                  {notification.name}
                </span>{" "}
                <span className="font-poppins text-xl font-medium">
                {notification.content}
                </span>
                
              </h1>
              <p className="ml-20 mt-[-5px] font-poppins text-xl ">{notification.time}</p>
            </div>
            {!isRead && (
              <span className="block text-primarycolor text-[40px] md:mb-6 md:ml-2 max-md:mr-[150px]">
                &#8226;{" "}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Notification;



// import React from "react";
// import orders from "./ordernotification";
// import { useState } from "react";

// const Notification = ({ markAsRead }) => {
//   const [readNotifications, setReadNotifications] = useState([]);

//   const handleClick = (orderId) => {
//     // Mark notification as read
//     setReadNotifications(prevState => [...prevState, orderId]);
//     console.log("Clicked on order:", orderId);
//   };

//   return (
//     <div className="overflow-y-auto h-[75%] mt-5">
//       {orders.map((order) => (
//         <div
//           key={order.orderId}
//           className={`flex items-center p-4 ${readNotifications.includes(order.orderId) ? "bg-gray-200" : "bg-white"}`}
//           onClick={() => handleClick(order.orderId)}
//         >
//           {!readNotifications.includes(order.orderId) && <div className="w-2 h-2 bg-primarycolor rounded-full mr-4"></div>}
//           <img src={order.orderImage} alt={`Order ${order.orderId}`} className="w-16 h-16 mr-4" />
//           <div>
//             <p className="font-jakarta font-bold text-lg">{order.personName} placed an order.</p>
//             <p className="font-jakarta text-sm">{order.orderDetails}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Notification;

