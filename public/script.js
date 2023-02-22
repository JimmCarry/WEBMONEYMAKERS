const log = document.querySelectorAll('#logo path');

for (let i = 0; i < log.length; i++) {
  console.log(`Letter ${i} is ${log[i].getTotalLength()}`)
}



// script.js:4 Letter 0 is 673.7714233398438
// script.js:4 Letter 1 is 414.570068359375
// script.js:4 Letter 2 is 598.684326171875
// script.js:4 Letter 3 is 627.0812377929688
// script.js:4 Letter 4 is 912.9954833984375
// script.js:4 Letter 5 is 626.93359375
// script.js:4 Letter 6 is 445.0578308105469
// script.js:4 Letter 7 is 414.570556640625
// script.js:4 Letter 8 is 528.0419921875
// script.js:4 Letter 9 is 672.640869140625
// script.js:4 Letter 10 is 598.6846313476562
// script.js:4 Letter 11 is 414.5711669921875
// script.js:4 Letter 12 is 518.4306640625
// script.js:4 Letter 13 is 627.0830078125
// script.js:4 Letter 14 is 379.2784729003906
// script.js:4 Letter 15 is 579.819091796875
// script.js:4 Letter 16 is 627.0833129882812


gsap.registerPlugin(ScrollTrigger);

let scrollTween = gsap.utils.toArray('.panel').forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        //end: '+=300',
        end: () => "+=" + window.innerHeight,
        pin: true,
        //pinSpacing: false,
        markers: true,
        //onUpdate: self => console.log("progress:", self.progress),

    });
});

ScrollTrigger.create({
    snap: 1 / 5 // snap whole page to the closest 
});

gsap.utils.toArray('.title').forEach((panel, i) => {
   gsap.to(panel, {
    y: -130,
  duration: 2,
  ease: "elastic",
    scrollTrigger: {
        trigger: panel,
        containerAnimation: scrollTween,
        start: "center center",
        toggleActions: "play none none reset",
        id: "1",
        markers: true,
      }
    // scrollTrigger: panel,
    // x: 500,
    // duration: 1
   })
});