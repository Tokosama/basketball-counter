let minutes = 1;
let seconds = 0;
let tenths = 0;
let isPaused = false;
let timer;
let qart = [document.getElementById("quart1"), document.getElementById("quart2"),
    document.getElementById("quart3"), document.getElementById("quart4")
]
let i = 0

let countone = Boolean
let Fulltime = ``

let count1 = 0
let count2 = 0

let scorea = count1
let scoreb = count2
let temp = [0]
let temp1 = [0]



function startTimer() {
    countone = true
    if (Fulltime === "Full Time") { // Vérifier si Fulltime est égal à "Full Time"
        return; // Si oui, ne rien faire


    }
    if (tenths == 0) {
        if (seconds == 0) {
            seconds = 20;
            minutes--;
        } else {
            seconds--;
        }
        tenths = 9;
    } else {
        tenths--;
    }



    // Mettre à jour l'affichage du minuteur
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    let displayTenths = tenths < 10 ? "0" + tenths : tenths;
    document.getElementById("timer").innerHTML = `${displayMinutes}:${displaySeconds}.
                                                <small><small><small><small>${displayTenths}</small></small></small></small>`;

    // Mettre à jour les secondes et les minutes



    // Vérifier si le minuteur a atteint 0
    if (minutes == 0 && seconds == 0) {
        clearInterval(timer);
        countone = false

        document.getElementById("play-pause-btn").innerHTML = "Start";
        isPaused = true

        function change() {
            i++

            let scorea = temp.reduce((acc, curr) => acc - curr, count1);
            let scoreb = temp1.reduce((acc, curr) => acc - curr, count2);
            let which = i
            which = Math.min(which, 3)
            let whichQuart = document.getElementById("which-quart")
            whichQuart.innerHTML = `Quarter : ${which+1} `

            qart[i - 1].innerHTML = `Quarter${which}:${scorea} vs ${scoreb}`

            temp.push(scorea)
            temp1.push(scoreb)

            /*
            if(i===1){
                let temp1=scorea
                qart[i - 1].innerHTML = "Quarter:" + scorea + " vs" + scoreb
            }else if (i===2){
                temp1
            }*/
            if (i === 4) {
                whichQuart.innerHTML = `Full Time`
                Fulltime = whichQuart.innerHTML
            }


        }
        change()

        Fulltime = Fulltime

        minutes = 1
        seconds = 0
        alert("Le minuteur est terminé !");


    }

}












function toggleTimer() {
    if (Fulltime === "Full Time") { // Vérifier si Fulltime est égal à "Full Time"
        return; // Si oui, ne rien faire


    }

    if (!isPaused) {
        // Démarrer le minuteur
        timer = setInterval(startTimer, 100);
        isPaused = true;
        document.getElementById("play-pause-btn").innerHTML = "Pause";
        countone = false

        return countone
    } else {
        // Mettre en pause le minuteur
        clearInterval(timer);
        isPaused = false;
        document.getElementById("play-pause-btn").innerHTML = "Start";
        countone = false
        return countone
    }
    return countone
}
// Attacher la fonction toggleTimer() au bouton qui démarre le minuteur
document.getElementById("play-pause-btn").addEventListener("click", toggleTimer);


//la je bosse sur les compteurs

if (Fulltime === `Full Time`) {
    countone = false
}

function addPoint(elementId, points) {
    if (Fulltime === "Full Time") { // Vérifier si Fulltime est égal à "Full Time"
        return; // Si oui, ne rien faire


    }
    if (countone === true) {
        let count
        if (elementId === "score1") {
            count = count1 += points
        } else {
            count = count2 += points
        }
        let result = document.getElementById(elementId)
        result.textContent = count
        return count
    }
}




let twopoint = [document.getElementById("c2"), document.getElementById("c2-")]
for (let i = 0; i < twopoint.length; i++) {
    twopoint[i].addEventListener("click", function() {
        if (this === twopoint[0]) {
            addPoint("score1", 2)
        } else {
            addPoint("score2", 2)
        }

    })
}
let threepoint = [document.getElementById("c3"), document.getElementById("c3-")]
for (let i = 0; i < threepoint.length; i++) {
    threepoint[i].addEventListener("click", function() {
        if (this === threepoint[0]) {
            addPoint("score1", 3)
        } else {
            addPoint("score2", 3)
        }
    })
}
let onepoint = [document.getElementById("c1"), document.getElementById("c1-")]
for (let i = 0; i < onepoint.length; i++) {
    onepoint[i].addEventListener("click", function() {
        if (this === onepoint[0]) {
            addPoint("score1", 1)
        } else {
            addPoint("score2", 1)
        }
    })
}




/*let qart1 = document.getElementById("quart1")
let intervalId = setInterval(function() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(intervalId);
        let scorea = count1
        let scoreb = count2

        qart1.innerHTML = "Quarter:" + scorea + " vs" + scoreb
    }
})*/