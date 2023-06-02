// const testimonialData = [
//   {
//     author: "Luffy",
//     quote: "Keren!🔥🔥🔥",
//     image:
//       "assets/images/png/profile1.png",
//     rating: 3,
//   },
//   {
//     author: "Sanji",
//     quote: "Mantap!🔥🔥🔥",
//     image:
//       "assets/images/png/profile2.png",
//     rating: 5,
//   },
//   {
//     author: "Zoro",
//     quote: "Gokil!🔥🔥🔥",
//     image:
//       "assets/images/png/profile3.png",
//     rating: 3,
//   },
//   {
//     author: "X Drake",
//     quote: "Gila!🔥🔥🔥",
//     image:
//       "assets/images/png/profile7.png",
//     rating: 5,
//   },
//   {
//     author: "Ace",
//     quote: "Cool!🔥🔥🔥",
//     image:
//       "assets/images/png/profile5.png",
//     rating: 5 ,
//   },
//   {
//     author: "Trafalgar Law",
//     quote: "Nice!",
//     image:
//       "assets/images/png/profile6.png",
//     rating: 2,
//   },
//   {
//     author: "Ben Beckman",
//     quote: "Amazing!🔥🔥🔥",
//     image:
//       "assets/images/png/profile4.png",
//     rating: 4,
//   },
//   {
//     author: "Yasop",
//     quote: "Kerja Bagus!",
//     image:
//       "assets/images/png/profile8.png",
//     rating: 1,
//   },
//   {
//     author: "Lucky Roo",
//     quote: "Great!🔥🔥🔥",
//     image:
//       "assets/images/png/profile9.png",
//     rating: 4,
//   },


// ];

// function allTestimonials() {
//   let testimonialHTML = "";

//   testimonialData.forEach(function (item) {
//     testimonialHTML += `<div class="testimonial">
//                             <img
//                                 src="${item.image}"
//                                 class="profile-testimonial"
//                             />
//                             <p class="quote">${item.quote}</p>
//                             <p class="author">- ${item.author}</p>
//                             <p class="author">${item.rating} <i class="fa-solid fa-star fa-2xs" style="color: #e1ce00; "></i></p>
//                         </div>
//         `;
//   });

//   document.getElementById("testimonials").innerHTML = testimonialHTML;
// }

// allTestimonials();

// function filterTestimonials(rating) {
//   let testimonialHTML = "";

//   const testimonialFiltered = testimonialData.filter(function (item) {
//     return item.rating === rating;
//   });

//   //   console.log(testimonialFiltered);

//   if (testimonialFiltered.length === 0) {
//     testimonialHTML += `<h1>Data not found!</h1>`;
//   } else {
//     testimonialFiltered.forEach(function (item) {
//       testimonialHTML += `<div class="testimonial">
//                                 <img
//                                     src="${item.image}"
//                                     class="profile-testimonial"
//                                 />
//                                 <p class="quote">${item.quote}</p>
//                                 <p class="author">- ${item.author}</p>
//                                 <p class="author">${item.rating} <i class="fa-solid fa-star fa-2xs" style="color: #ffea00;"></i></p>
//                             </div>
//                         `;
//     });
//   }

//   document.getElementById("testimonials").innerHTML = testimonialHTML;
// }


