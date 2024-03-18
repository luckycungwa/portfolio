// import React from "react";
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Image,
// } from "@nextui-org/react";

// export const CardList = () => {
//   const list = [
//     {
//       title: "WEB DEV.",
//       img: "/images/web.jpg",
//       //   rating: 4,
//     },
//     {
//       title: "MOBILE DEV.",
//       img: "/images/mobile.jpg",
//       //   rating: 4,
//     },
//     {
//       title: "UI/UX",
//       img: "/images/ui.jpeg",
//       //   rating: 4,
//     },
//     {
//       title: "GRAPHIC DESIGN",
//       img: "/images/design.jpeg",
//       //   rating: 4,
//     },
//   ];

//   return (
//     <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
//       {list.map((item, index) => (
//         <Card
//           shadow="sm"
//           key={index}
//           isPressable
//           onPress={() => console.log("item pressed")}
//         >
//           <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//             <p className="text-default uppercase font-bold"><b>{item.title}</b></p>
            
//           </CardHeader>
//           <CardBody className="overflow-visible p-0">
//             <Image
//               shadow="sm"
//               radius="lg"
//               width="100%"
//               alt={item.title}
//               className="object-cover h-[140px]"
//               src={item.img}
//             />
//           </CardBody>
//           {/* <CardFooter className="text-small justify-between">
//             <b>{item.title}</b>
//             <p className="text-default-500">{item.rating}</p>
//           </CardFooter> */}
//         </Card>
//       ))}
//     </div>
//   );
// };
