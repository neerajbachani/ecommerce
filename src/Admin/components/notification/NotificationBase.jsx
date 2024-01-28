// import React from "react";
// import { useState } from "react";
// import Notification from "./Notification";

// const NotificationBase = () => {
//   const [markAsRead, setMarkAsRead] = useState();
//   const [notifications, setNotifications] = useState(3);
//   const handleRead = () => {
//     setMarkAsRead(true);
//     console.log(markAsRead);

//     setNotifications(0);
//   };

//   return (
//     <div className=" w-full h-[100vh] bg-very-light-grayish-blue flex justify-center items-center ">
//       <div className="bg-white    h-[85%] max-md:h-full rounded-lg">
//         <div className="flex justify-between">
//           <div className="flex w-[50%] justify-start items-center">
//             <h1 className=" pt-5 pl-5 font-jakarta font-extrabold text-[22px]">
//               Notifications{" "}
//             </h1>
//             <h2 className="w-5 h-6 ml-2 mt-5 text-center font-jakarta font-bold  bg-blue text-white">
//               {notifications}
//             </h2>
//           </div>
//           <div>
//             <button
//               onClick={handleRead}
//               className="mt-6 mr-5 font-jakarta text-[16px] hover:text-light-grayish-blue-1"
//             >
//               Mark all as read
//             </button>
//           </div>
//         </div>
//         <Notification markAsRead={markAsRead}  />
//       </div>
//     </div>
//   );
// };

// export default NotificationBase;

import React, { useState } from "react";
import Notification from "./Notification";
import { NotificationSource } from "../../NotificationSource"; // Importing the data

const NotificationBase = () => {
  const [readNotifications, setReadNotifications] = useState([]);

  const handleRead = () => {
    // Mark all notifications as read
    setReadNotifications(NotificationSource.map(notification => notification.id));
  };

  return (
    <div className=" max-w-[100rem] mx-auto h-[100vh] bg-very-light-grayish-blue flex items-center">
      <div className="bg-white w-[85rem] h-[85%] max-md:h-full rounded-lg">
        <div className="flex justify-between">
          <div className="flex w-[50%] justify-start items-center">
            <h1 className="pt-5 pl-5 font-jakarta font-extrabold text-[22px]">
              Notifications
            </h1>
            <h2 className="w-5 h-6 ml-2 mt-5 text-center font-jakarta font-bold bg-blue text-white">
              {NotificationSource.length - readNotifications.length}
            </h2>
          </div>
          <div>
            <button
              onClick={handleRead}
              className="mt-6 mr-5 font-jakarta text-[16px] hover:text-light-grayish-blue-1"
            >
              Mark all as read
            </button>
          </div>
        </div>
        <Notification notifications={NotificationSource} readNotifications={readNotifications} />
      </div>
    </div>
  );
};

export default NotificationBase;
