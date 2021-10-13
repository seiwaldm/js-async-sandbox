// SET TIMEOUT & INTERVAL

// setTimeout(function () {
//     console.log("Hello World!");
// }, 1000);

// setInterval(function () {
//     document.body.innerText += "💕";
// }, 1000);

// OUR LITTLE FARM

let farm = [
"🐔", "🐷", "🐮"
];

function showFarm() {
    setTimeout(() => console.log(farm), 1000);
}

function addAnimal(animal) {
    setTimeout(function() {
        farm.push(animal);
    }, 2000);
}

// showFarm();
// addAnimal("🐴");
// showFarm();


// WELCOME TO COUNTDOWN CALLBACK HELL

function countDown() {
    setTimeout(
        () => {
            console.log(3);
            setTimeout(
                () => {
                    console.log(2);
                    setTimeout(
                        () => {
                            console.log(1);
                            setTimeout(() => {
                                console.log(0);
                                },
                                1000
                            );
                        },
                        1000
                    );
                },
                1000
            );
        }, 1000
    );
}
// countDown();


// PROMISES

const counter = function(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(number));
        }, 1000);
    });
};


// use return, or the next then won't wait....
// counter(3).then(() => {
//         return counter(2);
//     }).then(() => {
//         return counter(1);
//     }).then(() => {
//         return counter(0);
//     });

// PROMISE ALL !!!

// Promise.all([counter(5), counter(4), counter(3), counter(2), counter(1), counter(0)]).then(() => {
//     console.log("hooray!");
// });

// ASYNC / AWAIT

// async function counting(){
//     await counter(5);
//     await counter(4);
//     await counter(3);
//     await counter(2);
//     await counter(1);
//     await counter(0);
// }
// counting();


// TO ROUND UP:

// function recursiveCountdown(number) {
//     if (number >= 0) {
//         setTimeout(() => {
//             console.log(number);
//             recursiveCountdown(number - 1);
//         },
//         1000);
//     }
// }

// recursiveCountdown(6);