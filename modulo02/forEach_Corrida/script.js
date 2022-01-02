const cars = [
    {   model: "Popular" ,
        minSpeed:[110,130],
        maxSpeed: [180,200],
        drift: [3,4]
    },
    {
        model: "Sport" ,
        minSpeed:[125,145],
        maxSpeed: [195,215],
        drift: [2,3]
    },
    {   model: "Super Sport" ,
        minSpeed:[140,160],
        maxSpeed: [210,230],
        drift: [1,1.75]
    }
]

const players = [
    {   name: "Edina",
        car: {
            rarity : "Padrão",
            minSpeed: 180,
            maxSpeed: 220,
            drift: 1,
        },
        count: 0,
        score: 0,
        level: 0,
    },
    {   name: "Juca",
        car: {
            rarity : "Padrão",
            minSpeed: 120,
            maxSpeed: 260,
            drift: 5,
        },
        count: 0,
        score: 0,
        level: 0,
    },
    {   name: "Pedro",
        car: {
            rarity : "Padrão",
            minSpeed: 150,
            maxSpeed:230,
            drift:3 ,
        },
        count: 0,
        score: 0,
        level: 0,
    },    
]

function makeCar(type) {
    return {
        rarity :  cars[type].model,
        minSpeed: Number(range(cars[type].minSpeed[0],cars[type].minSpeed[1])),
        maxSpeed: Number(range(cars[type].maxSpeed[0],cars[type].maxSpeed[1])),
        drift:    Number(range(cars[type].drift[0],cars[type].drift[1])),
    }
}

function range(min,max) {
    return parseFloat(Math.random()*(max-min)+min).toFixed(2)
}

function getRarity() {
    let rarity;
    let luckyNumber = range(0,100)
    
    if (luckyNumber <=60) {
        rarity = "0"; //Popular
    }
    else if (luckyNumber <= 95) {
        rarity = 1 //Sport
    }
    else {
        rarity = 2 //Super sport
    }
    return rarity
}

function gerarCar(element,i,array) {
    array[i].car = makeCar(getRarity())
    return true
}

function showCars() {
    let name = document.querySelectorAll('.name');
    let rarity = document.querySelectorAll('.rarity');
    let minSpeed = document.querySelectorAll('.minSpeed');
    let maxSpeed = document.querySelectorAll('.maxSpeed');
    let drift = document.querySelectorAll('.drift');

    players.forEach(function(element,i,array) {
        name[i].innerHTML = array[i].name;
        rarity[i].innerHTML = array[i].car.rarity;
        minSpeed[i].innerHTML = array[i].car.minSpeed;
        maxSpeed[i].innerHTML = array[i].car.maxSpeed;
        drift[i].innerHTML = array[i].car.drift;
    })
    return true
}

function lap(element,i,array) {
    array[i].finalSpeed = range(array[i].car.minSpeed,array[i].car.maxSpeed)*(1-array[i].car.drift*0.01);
    return true
}

function lapWin() {
    let bigger = 0;
    let index;
    players.forEach(function(element,i,array) {
        if(bigger<array[i].finalSpeed) {
            bigger = array[i].finalSpeed;
            index = i;
        }
    })
    return players[index].count++    
}

function raceWinner() {
    let less;
    players.forEach(function(element,i,array){
        for (let j=i;j<array.length;j++) {
            if(array[i].count < array[j].count) {
                less = array[i]
                array[i] = array[j]
                array[j] = less
            }
        }
    })
    return true
}

function createrCar() {
    players.forEach(gerarCar);
    showCars();
    return true
}

function race(n) {
    for(let i=0;i<n;i++) {
        players.forEach(lap);
        lapWin()
    }
    console.log(players);
    raceWinner()
    console.log(players);
    scorePlayers(n);
    players.forEach(levelUp);
    showPlayers();
    players.forEach(resetCount);
    
    
    return true
}

function scorePlayers(n) {
    if (n === 10) {
        for (let i=0; i < 3;i++) {
            players[i].score += 200 - 85*i + 5*i**2;
        }
    } else if (n === 70) {
        for (let i=0; i < 3;i++) {
            players[i].score += 220 - 107.5*i + 17.5*i**2;
        }
    } else {
        for (let i=0; i < 3;i++) {
            players[i].score += 250*(0.6)**i;
        }
    }
    return true
}

function levelUp(element,i,array) {
    if (array[i].score >= 450 && array[i].level < 10) {
            array[i].score -= 450;
            array[i].level++
        updateCar(i)
    }
    return true
}

function updateCar(i) {
    players[i].car.minSpeed = players[i].car.minSpeed*(1.01);
    players[i].car.maxSpeed = players[i].car.maxSpeed*(1.01);
    return true
}

function resetCount(element,i,array) {
    array[i].count = 0;
    return true
}

function showPlayers() {
    let lap = document.querySelectorAll(".lap");
    let player = document.querySelectorAll(".player");
    let level = document.querySelectorAll('.level')
    let score = document.querySelectorAll('.score')

    players.forEach(function(element,i,array) {
        player[i].innerHTML = array[i].name
        lap[i].innerHTML = `Ganhou ${array[i].count}`
        level[i].innerHTML = `Nível: ${array[i].level}`
        score[i].innerHTML = `Pontuação: ${array[i].score}`
    })
    return true
}
