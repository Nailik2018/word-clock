const Config = ClockConfig;

function init() {
    console.log('init');
    setup();
    run();
}

function setup() {
    document.documentElement.style.setProperty('--background', Config.primaryColor);
    document.documentElement.style.setProperty('--non-active-color', Config.nonActiveColor);
    document.documentElement.style.setProperty('--active-color', Config.activeColor);
    const LANGUAGE = Config.language;
    const LOCATION = Config.state;
    if(LANGUAGE === 'de' && LOCATION === 'switzerland') {
        document.querySelector('.language-de.switzerland').style.display = 'flex';
    }
}

function run() {
    console.log('run');
    setInterval(runner, 1000);
}

async function runner() {
    /*
    let width = window.innerWidth;
    let height = window.innerHeight;
    console.log(`width: ${width}`);
    console.log(`height: ${height}`);
    if (width > height) {
        width = height;
    } else if ( width < height) {
        height = width;
    }
    console.log(`width: ${width}`);
    console.log(`height: ${height}`);
    //window.resizeTo(height, width);
     */
    const now = new Date();
    const time = now.toLocaleTimeString();
    let hour = now.getHours();
    let minutes = roundMinutes(now.getMinutes());
    hour = hour % 12;
    hour = hour ? hour : 12;
    // hour = 2;
    // minutes = 59;
    if (minutes >= 23 && minutes <= 59) {
        hour++;
    }
    printHour(hour);
    printMinutes(minutes);
    console.log(`Stunden: ${hour}`);
    console.log(`Minuten: ${minutes}`);
    console.log(`Uhrzeit: ${time}`);
}

function roundMinutes(minutes) {
    if (minutes <= 2) return 0;
    else if (minutes <= 7) return 5;
    else if (minutes <= 12) return 10;
    else if (minutes <= 17) return 15;
    else if (minutes <= 22) return 20;
    else if (minutes <= 27) return 25;
    else if (minutes <= 32) return 30;
    else if (minutes <= 37) return 35;
    else if (minutes <= 42) return 40;
    else if (minutes <= 47) return 45;
    else if (minutes <= 52) return 50;
    else if (minutes <= 57) return 55;
    else return 0;
}

function printHour(hour) {
    elementOff(`.hour`);
    elementOn(`.hour-${hour}`);
}

function printMinutes(minutes) {
    elementOff(`.minutes`);
    elementOn(`.minutes-${minutes}`);
}

function elementOff(selector) {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.remove('on');
    });
}

function elementOn(selector) {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.add('on');
    });
}

function elementOnOff(selectorOn, selectorOff) {
    document.querySelectorAll(selectorOn).forEach(element => {
        element.classList.add('on');
    });
    document.querySelectorAll(selectorOff).forEach(element => {
        element.classList.remove('on');
    });
}

init();