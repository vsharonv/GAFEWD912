const mario = document.getElementById('mario');
const cloudOne= document.getElementById('cloud-one');
const cloudTwo = document.getElementById('cloud-two');
const cloudThree = document.getElementById('cloud-three');
const cloudFour = document.getElementById('cloud-four');
const cloudFive = document.getElementById('cloud-five');
const javascript = document.getElementById('javascript');
const react = document.getElementById('react');
const htmlcss = document.getElementById('htmlcss');
const marioYFromBottom = 5;
const cloudOneYFromBottom = 40;
const cloudOneYMarginLeft = 60;
const cloudTwoYFromBottom = 80;
const cloudTwoYMarginLeft = 60;
const cloudThreeYFromBottom = 60;
const cloudThreeYMarginRight = 70;
const cloudFourYFromBottom = 70;
const cloudFourYMarginRight = 30;
const cloudFiveYFromBottom = 60;
const cloudFiveYMarginLeft = 30;
const javascriptMarginRight = 55;
const reactMarginRight = 43;
const htmlcssMarginRight = 31;

mario.style.bottom = marioYFromBottom + '%';

cloudOne.style.bottom = cloudOneYFromBottom + '%';
cloudOne.style.marginLeft = cloudOneYMarginLeft + '%';
cloudTwo.style.bottom = cloudTwoYFromBottom + '%';
cloudTwo.style.marginLeft = cloudTwoYMarginLeft + '%';
cloudThree.style.bottom = cloudThreeYFromBottom + '%';
cloudThree.style.marginRight = cloudThreeYMarginRight + '%';
cloudFour.style.bottom = cloudFourYFromBottom + '%';
cloudFour.style.marginRight = cloudFourYMarginRight + '%';
cloudFive.style.bottom = cloudFiveYFromBottom + '%';
cloudFive.style.marginLeft = cloudFiveYMarginLeft + '%';

javascript.style.marginRight = javascriptMarginRight + '%';
react.style.marginRight = reactMarginRight + '%';
htmlcss.style.marginRight = htmlcssMarginRight + '%';


function move() {
    const incrementer = window.scrollY;
    console.log(incrementer);

    mario.style.bottom = marioYFromBottom + incrementer * 0.1 + "%";

    cloudOne.style.bottom = cloudOneYFromBottom + incrementer * 0.12 + "%";
    cloudOne.style.marginLeft = cloudOneYMarginLeft + incrementer * 0.1 + "%";
    cloudTwo.style.bottom = cloudTwoYFromBottom + incrementer * 0.14 + "%";
    cloudTwo.style.marginLeft = cloudTwoYMarginLeft + incrementer * 0.15 + "%";
    cloudThree.style.bottom = cloudThreeYFromBottom  + incrementer * 0.1 + "%";
    cloudThree.style.marginRight = cloudThreeYMarginRight + incrementer * 0.12 + "%";
    cloudFour.style.bottom = cloudFourYFromBottom  + incrementer * 0.16 + "%";
    cloudFour.style.marginRight = cloudFourYMarginRight + incrementer * 0.15 + "%";
    cloudFive.style.bottom = cloudFiveYFromBottom + incrementer * 0.2 + "%";
    cloudFive.style.marginLeft = cloudFiveYMarginLeft + incrementer * 0.16 + "%";

    javascript.style.marginRight = javascriptMarginRight + incrementer * 2.2 + "%";
    react.style.marginRight = reactMarginRight + incrementer * 1.5 + "%";
    htmlcss.style.marginRight = htmlcssMarginRight + incrementer * 1 + "%";
}

window.addEventListener('scroll', move);