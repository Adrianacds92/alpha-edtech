class Hero {
    constructor(name, type, universe, st, agi, int, _src, _hero, _music, _gif, _alt, _typeFight) {
        this.name = name
        this.type = type
        this.universe = universe
        this.st = st //hero strength
        this.agi = agi //hero agility
        this.int = int //hero's intelligence
        this.hp = this.st * 5 //health points
        this.hpMax = this.hp
        this.mp = this.int * 5 //mana (points for skill execution)
        this.def = this.agi * 2 //Defesa 
        this.atkPower = 50 //base attack
        this.src = _src
        this.hero = _hero
        this.alt = _alt
        this.typeFight = _typeFight
//         this.dmgUp()
        this.bar = 100
        this.music = _music
        this.gif = _gif
    }

    //  Método que ajusta os pontos de ataque do personagem com base no seu tipo

    /* dmgUp() {

        switch (this.typeFight) {

            case "Agility":
                this.atkPower += this.agi
                break;

            case "Strength":
                this.atkPower += this.st
                break;

            case "Intelligence":
                this.atkPower += this.int
                break;

        }
    } */
    getAttack() {
        return this.atkPower
    }

    set setHp(damage) {
        return this.hp = this.hp - damage
    }

    set setBar(damage) {
        return this.bar = (100 * damage) / this.hpMax
    }

    get getResetHp() {
        this.hp = this.hpMax;
        return this.bar = 100;
    }

}


const hero = [
    new Hero("Batman", " Inteligência", "DC", 38, 30, 56, "webp/batman-head.webp", "webp/batman.webp", "audio/m-batman.mp3", "gifs/batman.gif"),
    new Hero("Asa Noturna", " Inteligência", "DC", 26, 28, 54, "webp/nightwing-head.webp", "webp/nightwing.webp", "audio/m-asa.mp3", "gifs/nightwing.gif"),
    new Hero("Ravena", " Agilidade", "DC", 44, 52, 36, "webp/ravena-head.webp", "webp/ravena.webp", "audio/m-ravena.mp3", "gifs/ravena.gif"),
    new Hero("Arqueiro Verde", " Agilidade", "DC", 44, 30, 52, "webp/green-arrow-head.webp", "webp/green-arrow.webp", "audio/m-arqueiro.mp3", "gifs/green-arrow.gif"),
    new Hero("Flash", " Agilidade", "DC", 36, 60, 44, "webp/flash-head.webp", "webp/flash.webp", "audio/m-flash.mp3", "gifs/flash.gif"),
    new Hero("Cyborg", " Inteligência", "DC", 50, 36, 44, "webp/cyborg-head.webp", "webp/cyborg.webp", "audio/m-cyborg.mp3", "gifs/cyborg.gif"),
    new Hero("Mulher Maravilha", " Força", "DC", 52, 36, 30, "webp/wonder-woman-head.webp", "webp/wonder-woman.webp", "audio/m-maravilha.mp3", "gifs/wonder-woman.gif"),
    new Hero("Superman", " Força", "DC", 56, 40, 30, "webp/superman-head.webp", "webp/superman.webp", "audio/m-superman.mp3", "gifs/superman.gif"),
    new Hero("Shazam", " Força", "DC", 54, 40, 24, "webp/shazam-head.webp", "webp/shazam.webp", "audio/m-shazam.mp3", "gifs/shazam.gif"),
    new Hero("Lanterna Verde", " Agilidade", "DC", 40, 44, 36, "webp/green-lantern-head.webp", "webp/green-lantern.webp", "audio/m-lanterna.mp3", "gifs/green-lantern.gif"),

    new Hero("Homem de Ferro", " Inteligência", "Marvel", 40, 38, 54, "webp/ironman-head.webp", "webp/ironman.webp", "audio/m-ferro.mp3", "gifs/ironman.gif"),
    new Hero("Hulk", " Força", "Marvel", 58, 38, 14, "webp/hulk-head.webp", "webp/hulk.webp", "audio/m-hulk.mp3", "gifs/hulk.gif"),
    new Hero("Homem Aranha", " Agilidade", "Marvel", 44, 34, 52, "webp/spiderman-head.webp", "webp/spiderman.webp", "audio/m-aranha.mp3", "gifs/spiderman.gif"),
    new Hero("Doutor Estranho", " Agilidade", "Marvel", 32, 56, 50, "webp/doctor-strange-head.webp", "webp/doctor-strange.webp", "audio/m-estranho.mp3", "gifs/doctor-strange.gif"),
    new Hero("Pantera Negra", " Agilidade", "Marvel", 36, 50, 40, "webp/black-panther-head.webp", "webp/black-panther.webp", "audio/m-pantera.mp3", "gifs/black-panther.gif"),
    new Hero("DeadPool", " Agilidade", "Marvel", 40, 52, 34, "webp/deadpool-head.webp", "webp/deadpool.webp", "audio/m-deadpool.mp3", "gifs/deadpool.gif"),
    new Hero("Capita Marvel", " Força", "Marvel", 60, 46, 40, "webp/captain-marvel-head.webp", "webp/captain-marvel.webp", "audio/m-capita.mp3", "gifs/captain-marvel.gif"),
    new Hero("Thor", " Força", "Marvel", 56, 42, 34, "webp/thor-head.webp", "webp/thor.webp", "audio/m-thor.mp3", "gifs/thor.gif"),
    new Hero("Capitao America", " Inteligência", "Marvel", 40, 42, 50, "webp/captain-america-head.webp", "webp/captain-america.webp", "audio/m-america.mp3", "gifs/captain-america.gif"),
    new Hero("Feiticeira Escarlate", " Agilidade", "Marvel", 34, 44, 50, "webp/scarlet-witch-head.webp", "webp/scarlet-witch.webp", "audio/m-escarlate.mp3", "gifs/scarlet-witch.gif"),
]


//------------------------------AUDIO------------------------------//

const aOpenGamer = new Audio('audio/abertura.mp3');
aOpenGamer.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);


const aArenaSelection = new Audio('audio/arena.mp3');
aArenaSelection.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);


const aFight = new Audio('audio/batalha.mp3');
aFight.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);

const aSelecHero = new Audio('audio/selec-hero.mp3');
const aAttack = new Audio('audio/ataque.mp3');

//------------------------------VOLUME------------------------------//

aOpenGamer.volume = 0.05;
aArenaSelection.volume = 0.05;
aSelecHero.volume = 0.05;
aFight.volume = 0.1;
aAttack.volume = 0.5;

//------------------------------variables------------------------------//

const playerDC = [];
const playerMarvel = [];
const typeHero = ["st", "agi", "int"];
let arena = "city/gotham";

//------------------------------variables------------------------------//

function squareHero() {
    $('#hero-marvel').html('');
    $('#hero-dc').html('');

    hero.forEach((hero, index) => {
        let htmlToAppend = `<img class="hero-${(hero.universe).toLowerCase()}" src=${hero.src} hero = ${hero.hero} alt=${hero.name} />`;
        if (hero.universe === "Marvel") {

            $('#hero-marvel').append(htmlToAppend);
        } else {
            $('#hero-dc').append(htmlToAppend);
        }
    })
    return true
}

squareHero()

//------------------------------hero square creation------------------------------//
//------------------------------hero square marvel------------------------------//
$(document).ready(function () {
    $('.hero-marvel').on({
        mouseenter: function () {
            if (playerMarvel.length === 0) {
                const atrib = $(this).attr('hero');
                $('#player-2').attr('src', atrib);
                const info = filterHero(hero, atrib);
                statusShow(info);
            }
        },
        dblclick: function () {
            playerMarvel.pop();
            $(this).css('filter', 'grayscale(0%)');
            statusPlayers()
        },
        click: function () {

            if (playerMarvel.length === 0) {
                aSelecHero.play();
                playerMarvel.push(filterHero(hero, $(this).attr('hero')))

                $(this).css('filter', 'grayscale(75%)');
                statusPlayers()
            }

        }
    })
})

//------------------------------hero square DC------------------------------//

$(document).ready(function () {
    $('.hero-dc').on({
        mouseenter: function () {
            if (playerDC.length === 0) {
                const atrib = $(this).attr('hero');
                $('#player-1').attr('src', atrib);
                const info = filterHero(hero, atrib);
                statusShow(info);
            }
        },
        dblclick: function () {
            playerDC.pop();
            $(this).css('filter', 'grayscale(0%)');
            statusPlayers()
        },
        click: function () {

            if (playerDC.length === 0) {
                aSelecHero.play();

                playerDC.push(filterHero(hero, $(this).attr('hero')))

                $(this).css('filter', 'grayscale(75%)');
                statusPlayers()
            }


        }
    })
})

//-------------function that checks if there are two players and shows the next button---------------//

function statusPlayers() {

    if (playerMarvel.length !== 0 && playerDC.length !== 0) {
        $('#btn-fight').css('visibility', 'visible')

    } else {
        $('#btn-fight').css('visibility', 'hidden');
    }

    return true
}

//------------------------function that dynamically builds hero information---------------------------//

function statusShow(_obj) {
    const obj = _obj;
    $(`#title-namem-${obj.universe.toLowerCase()}`).html(`${obj.name}`);
    $(`#p-content-${obj.universe.toLowerCase()}`).html(`Melhor Atributo:${obj.type}<br>
    Força: ${obj.st}<br>
    Agilidade: ${obj.agi}<br>
    Inteligência: ${obj.int}<br>
    Pontos HP: ${obj.hp} </br>`)
    
    return true
}

//------------------------function that filters which is hero in the object array---------------------------//

function filterHero(_arr, _atr) {
    const arr = _arr;
    const atr = _atr;
    const hero = arr.filter(value => {
        return value.hero === atr;
    })
    return hero[0]
}

//----------------------------------------screen switch buttons------------------------------------------//

$("#btn-start").on({
    click: function () {
        $('#home-screen').css('display', 'none')
        $('#arena-selection').css('display', 'none')
        $('#open-gamer').css('display', 'flex')
        $('#battle-selection').css('display', 'none')
        aOpenGamer.play();
    }
})

//-----------------------special button that builds the characters on the fight screen.-------------------------//

$("#btn-fight").on({
    click: function () {
        $('#open-gamer').css('display', 'none')
        $('#battle').css('display', 'none')
        $('#arena-selection').css('display', 'flex')
        aOpenGamer.pause();
        aOpenGamer.currentTime = 0;
        aArenaSelection.play();
        contructorHeroHtml(playerMarvel[0], "fight")
        contructorHeroHtml(playerDC[0], "fight");
    }
})

$('#btn-back').on({
    click: function () {
        $('#arena-selection').css('display', 'none')
        $('#open-gamer').css('display', 'flex')

        aArenaSelection.pause();
        aArenaSelection.currentTime = 0;
        aOpenGamer.play();
        $('.fight-marvel').html("");
        $('.fight-dc').html("");
    }
})

$('#btn-end').on({
    click: function () {
        $('#home-screen').css('display', 'flex');
        $('#win').css('display', 'none');
        playerMarvel.pop();
        playerDC.pop();
        arena = "city/gotham";
        $('.fight-marvel').html("");
        $('.fight-dc').html("");
        $('#btn-fight').css('visibility', 'hidden')
    }
})

//----------------------special button that switches screen and builds hp bar and attack button--------------------------//

$('#btn-continue').on({
    click: function () {
        $('#fight').css('display', `flex`);
        $('#fight').css('background-image', `url(${arena}.webp`)
        $('#arena-selection').css('display', 'none');
        aFight.play();
        aArenaSelection.pause();
        aArenaSelection.currentTime = 0;

        //----------------------attack button--------------------------//

        $('.btn-atack-marvel').on({
            click: function () {
               
                aAttack.play()
                playerDC[0].setHp = attackHero(playerMarvel[0], playerDC[0]);
                let pointHp = playerDC[0].hp;
                if (pointHp <= 0) {
                    pointHp = 0;
                    winHero(playerMarvel[0])

                } else {
                    playerDC[0].setBar = playerDC[0].hp;
                }

                playerDC[0].setBar = playerDC[0].hp;
                document.querySelector('.progress-bar-dc').style.setProperty('--progress', playerDC[0].bar);
                $('.bar-dc').html(`0/${pointHp}`);
                $('.btn-atack-dc').prop('disabled', false);
                $('.btn-atack-dc').css('filter', 'grayscale(0%)');
                $(this).prop('disabled', true);
                $(this).css('filter', 'grayscale(100%)');
            }

        })
        
        //----------------------attack button--------------------------//

        $('.btn-atack-dc').on({
            click: function () {

                aAttack.play()
                playerMarvel[0].setHp = attackHero(playerDC[0], playerMarvel[0]);
                let pointHp = playerMarvel[0].hp
                if (pointHp <= 0) {
                    pointHp = 0;
                    winHero(playerDC[0])
                } else {
                    playerMarvel[0].setBar = pointHp;
                }
                console.log(pointHp)
                document.querySelector('.progress-bar-marvel').style.setProperty('--progress', playerMarvel[0].bar)
                const testBar = $('.bar-marvel').html(`0/${pointHp}`);
                $('.btn-atack-marvel').prop('disabled', false);
                $('.btn-atack-marvel').css('filter', 'grayscale(0%)');
                $(this).prop('disabled', true)
                $(this).css('filter', 'grayscale(100%)')
            }

        })

        whoStarts();
    }
})

//----------------------function that determines who starts the match--------------------------//

function whoStarts() {
    const num = randomRange(1, 100)
    if (num <= 50) {
        $('.btn-atack-dc').prop('disabled', true)
        $('.btn-atack-dc').css('filter', 'grayscale(100%)')
    }
    else {
        $('.btn-atack-marvel').prop('disabled', true)
        $('.btn-atack-marvel').css('filter', 'grayscale(100%)')
    }
    return true
}

//----------------------controls the background of the selection screen--------------------------//


$('.arena').on({
    mouseenter: function () {
        arena = $(this).attr('arena')
        $('#arena-selection').css('background-image', `url(${arena}.webp`)
    }
})


//----------------function that shows the winner's screen and dynamically control the gif-----------------//

function winHero(_heroWin) {

    const heroWin = _heroWin;
    const musicWin = new Audio(`${heroWin.music}`);
    const gifWin = heroWin.gif;

    musicWin.play();
    $('#hero-gif').attr('src', gifWin);
    $('#winner').text(heroWin.name);
    $('.btn-atack-marvel').prop('disabled', true);
    $('.btn-atack-dc').prop('disabled', true);
    aFight.pause();

    setTimeout(function () {
        playerMarvel[0].setBar = playerMarvel[0].hpMax;
        playerDC[0].setBar = playerDC[0].hpMax;
        playerDC[0].getResetHp;
        playerMarvel[0].getResetHp;
        $('#fight').css('display', 'none')
        $('#win').css('display', 'flex')
    }, 800)
}

//------------------------function that generates an integer in a ranger-------------------------//

function randomRange(_min, _max) {
    return Number((Math.random() * (_max - _min) + _min).toFixed(0));
}

//----------------------------function that builds character in html------------------------------//

function contructorHeroHtml(_obj, _class) {
    const obj = _obj;
    let htmlToAppend = `<img class="player-${(obj.universe).toLowerCase()}" src=${obj.hero} alt=${obj.name} />`;
    htmlToAppend += `<div class="progress-bar-${(obj.universe).toLowerCase()}"></div>`;
    htmlToAppend += `<div class="bar-${(obj.universe).toLowerCase()}">0/${obj.hp}</div>`;
    htmlToAppend += `<input type="button" class="btn-atack-${(obj.universe).toLowerCase()}" value="Ataque" />`

    if (obj.universe === "Marvel") {
        $('.fight-marvel').append(htmlToAppend);
    } else {
        $('.fight-dc').append(htmlToAppend);
    }

    $(`.progress-bar-${(obj.universe).toLowerCase()}`).css('--progress', obj.bar)
    const test = $(`.progress-bar-${(obj.universe).toLowerCase()}`)

}

//----------------function that controls what type of attack: normal, critical or no damage-------------------------//

function attackHero(_playerAttck, _playerDefender) {
    let damage = 0;
    const playerAttck = _playerAttck;
    const playerDefender = _playerDefender;
    const typeAttack = typeHero[randomRange(0, 2)];

    if (randomRange(40, 320) < playerDefender.def) {
        console.log("defesa", damage)
        return damage;
    }
    if (randomRange(60, 1260) < playerAttck.mp) {
        console.log("dano critico", playerAttck[typeAttack] * 2)
        return dange = playerAttck[typeAttack] * 2
    }
    console.log(typeAttack,"normal", playerAttck[typeAttack])
    return damage = playerAttck[typeAttack];
}

