// SMALL CURSOR ANIMATION
let crsr = document.querySelector("#floating-mini-cursor"); //SMALL CRSR CATCHED IN THE VARIABLE
document.addEventListener("mousemove", function(details) {
    // FOR THE SMALL CRSR MOVEMENT WHILE USER'S CRSR MOVING.
    crsr.style.left = details.x + "px",
    crsr.style.top = details.y + "px"
})

// BIG-SLOW-BLURY-CURSOR ANIMATION
let big_blury_slow_crsr = document.querySelector("#big-slow-blury-flaoting-cursor"); //BIG-SLOW-BLURY-CRSR CATCHED IN THE VARIABLE
document.addEventListener("mousemove", function(details) {
    // FOR THE BIG-SLOW-BLURY-CURSOR MOVEMENT WHILE USER'S CRSR MOVING.
    big_blury_slow_crsr.style.left = details.x - 100 + "px",
    big_blury_slow_crsr.style.top = details.y - 100 + "px"
})