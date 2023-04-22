// var animationDelay = 2500,
//   barAnimationDelay = 3800,
//   barWaiting = barAnimationDelay - 3e3,
//   lettersDelay = 50,
//   typeLettersDelay = 15e3,
//   selectionDuration = 500,
//   typeAnimationDelay = selectionDuration + 800,
//   revealDuration = 600,
//   revealAnimationDelay = 3e3;
// function initHeadline() {
//   singleLetters($(".shift.letters").find("b")),
//     animateHeadline($(".word-shift"));
// }
// function singleLetters(e) {
//   e.each(function () {
//     var e = $(this),
//       t = e.text().split(""),
//       n = e.hasClass("is-visible");
//     for (i in t)
//       0 < e.parents(".rotate-2").length && (t[i] = "<em>" + t[i] + "</em>"),
//         (t[i] = n ? '<i class="in">' + t[i] + "</i>" : "<i>" + t[i] + "</i>");
//     var o = t.join("");
//     e.html(o).css("opacity", 1);
//   });
// }
// function animateHeadline(e) {
//   var r = animationDelay;
//   e.each(function () {
//     var e = $(this);
//     if (e.hasClass("loading-bar"))
//       (r = barAnimationDelay),
//         setTimeout(function () {
//           e.find(".word-shift").addClass("is-loading");
//         }, barWaiting);
//     else if (e.hasClass("clip")) {
//       var t = e.find(".word-shift"),
//         i = t.width() + 10;
//       t.css("width", i);
//     } else if (!e.hasClass("type")) {
//       var n = e.find(".word-shift b"),
//         o = 0;
//       n.each(function () {
//         var e = $(this).width();
//         o < e && (o = e);
//       }),
//         e.find(".word-shift").css("width", o);
//     }
//     setTimeout(function () {
//       hideWord(e.find(".is-visible").eq(0));
//     }, r);
//   });
// }
// function hideWord(e) {
//   var t = takeNext(e);
//   if (e.parents(".shift").hasClass("type")) {
//     var i = e.parent(".word-shift");
//     i.addClass("selected").removeClass("waiting"),
//       setTimeout(function () {
//         i.removeClass("selected"),
//           e
//             .removeClass("is-visible")
//             .addClass("is-hidden")
//             .children("i")
//             .removeClass("in")
//             .addClass("out");
//       }, selectionDuration),
//       setTimeout(function () {
//         showWord(t, typeLettersDelay);
//       }, typeAnimationDelay);
//   } else if (e.parents(".shift").hasClass("letters")) {
//     var n = e.children("i").length >= t.children("i").length;
//     hideLetter(e.find("i").eq(0), e, n, lettersDelay),
//       showLetter(t.find("i").eq(0), t, n, lettersDelay);
//   } else
//     e.parents(".shift").hasClass("clip")
//       ? e
//           .parents(".word-shift")
//           .animate({ width: "2px" }, revealDuration, function () {
//             switchWord(e, t), showWord(t);
//           })
//       : e.parents(".shift").hasClass("loading-bar")
//       ? (e.parents(".word-shift").removeClass("is-loading"),
//         switchWord(e, t),
//         setTimeout(function () {
//           hideWord(t);
//         }, barAnimationDelay),
//         setTimeout(function () {
//           e.parents(".word-shift").addClass("is-loading");
//         }, barWaiting))
//       : (switchWord(e, t),
//         setTimeout(function () {
//           hideWord(t);
//         }, animationDelay));
// }
// function showWord(e, t) {
//   e.parents(".shift").hasClass("type")
//     ? (showLetter(e.find("i").eq(0), e, !1, t),
//       e.addClass("is-visible").removeClass("is-hidden"))
//     : e.parents(".shift").hasClass("clip") &&
//       e
//         .parents(".word-shift")
//         .animate({ width: e.width() + 10 }, revealDuration, function () {
//           setTimeout(function () {
//             hideWord(e);
//           }, revealAnimationDelay);
//         });
// }
// function takeNext(e) {
//   return e.is(":last-child") ? e.parent().children().eq(0) : e.next();
// }
// function takePrev(e) {
//   return e.is(":first-child") ? e.parent().children().last() : e.prev();
// }
// function switchWord(e, t) {
//   e.removeClass("is-visible").addClass("is-hidden"),
//     t.removeClass("is-hidden").addClass("is-visible");
// }


// import React from "react";
// import Typewriter from 'typewriter-effect';
  
// export default function TypingEffect() {
//   return (
//     <div>
//       <h3>GeeksforGeeks Typing Animation</h3>
//       <Typewriter
//         onInit={(typewriter) => {
//           typewriter.typeString('Hello World!')
//             .callFunction(() => {
//               console.log('String typed out!');
//             })
//             .pauseFor(2500)
//             .deleteAll()
//             .callFunction(() => {
//               console.log('All strings were deleted');
//             })
//             .start();
//         }}
//       />
//     </div>
//   );
// }