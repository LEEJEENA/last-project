// import styled from "styled-components";
// import { flexColumn, flexRow } from "../styles/Flex";
// import { Swiper, SwiperSlide} from "swiper/react";
// import SwiperCore, { Autoplay, Navigation, Pagination} from "swiper";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css"
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import guide01 from "../../assets/images/banner/guide/guide_01.jpg"
// import guide02 from "../../assets/images/banner/guide/guide_02.jpg"
// import guide03 from "../../assets/images/banner/guide/guide_03.jpg"
// import guide04 from "../../assets/images/banner/guide/guide_04.jpg"
// import { useState } from "react";

// SwiperCore.use([Pagination, Autoplay, Navigation]);

// const GuideModal = () => {

//     const [guideOn, setGuideOn] = useState(false);

//     const guides = [guide01, guide02, guide03, guide04 ];

//     return (
//         <GuideModalWrap>

//         {guideOn && (
//             <Dim onClick = {() => {
//                 setGuideOn(!guideOn);
//             }}>

//             <StyleGuide 
//             onClick={(e) => e.stopPropagation()} 
//             >
//                 <StyledSwiper
//                     className = "swipe"
//                     spaceBetween={0}
//                     slidesPerView={1}
//                     scrollbar={{draggable:true}}
//                     navigation
//                     pagination={{ clickable: true }}
//                     autoplay={{ delay: 15000, disableOnInteraction: false }}
//                     loop={true}
//                     centeredSlides={true}
//                     style={{ backgroundColor: "pink" }}
//                   >
//                     {guides?.map((guide, i) => {
//                         return (
//                             <SwiperSlide key={i}>
//                                 <ItemDetailImg src={guide} />
//                             </SwiperSlide>
//                         );
//                     })}
//                 </StyledSwiper>
//                 {/* StyledSwiper */}

//                 <button
//                     onClick={() => {
//                         setGuideOn(!guideOn);
//                     }}
//                 >
//                 닫기
//                 </button>
//             </StyleGuide>
//             </Dim>
//         )}
//         </GuideModalWrap>
//         // GuideModalWrap
//     );

// };

// export default GuideModal;


// const GuideModalWrap = styled.div`
//     /* ${flexColumn}
//     @media screen and (max-width: 425px)  {
//         padding: 1em 2em;
//     } */
//     width: 300px;
//     height: 300px;
// `

// export const StyledSwiper = styled(Swiper)`
//     background: red;
//     ${flexRow}
//     justify-content: center;
//     width: 100vw;
//     /* @media screen and (max-width: 425px)  {
//         width: 100%;
//         border-radius: 20px;
//     } */
// `;

// const StyleGuide = styled.div`
//   ${flexRow}
//   justify-content: center;
//   width: 300px;
//   height: 300px;
//   .swipe {
//     width: 300px;
//     height: 300px;
//   }
// `;

// const Dim = styled.div`
//   ${flexRow}
//   z-index: 99;
//   box-sizing: border-box;
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-color: rgba(0, 0, 0, 0.6);
//   button {
//     z-index: 100;
//     display: flex;
//     position: fixed;
//     right: 13.2%;
//     top: 3.6%;
//     width: 120px;
//     height: 30px;
//     justify-content: center;
//     background-color: aliceblue;
//     border: 1px solid lightgray;
//     :hover {
//       cursor: pointer;
//       background-color: beige;
//     }
//     /* @media screen and (max-width: 425px) {
//       width: 80px;
//       right: 11%;
//       top: 30%;
//     } */
//   }
// `;

// export const ItemDetailImg = styled.img`
//   width: 100%;
//   height: 90%;
// `;