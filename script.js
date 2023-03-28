const navBtn1 = document.getElementById( 'navBtn1' );
const navBtn2 = document.getElementById( 'navBtn2' );
const navBtn3 = document.getElementById( 'navBtn3' );
const navBtn4 = document.getElementById('navBtn4');

const navBtn5 = document.getElementById('navBtn5')

const firstSlide = document.querySelector( '.first' );
const title = document.querySelector( '.title' );
const container = document.querySelector('.container');

const scaleBar = document.getElementById('myRange')


// change slide
navBtn1.addEventListener( 'click', () =>
{
    container.className = 'container neu';
    firstSlide.style.marginLeft = '0';
    title.innerText = 'Neumorphism';

} );

navBtn2.addEventListener( 'click', () =>
{
    container.className = 'container glass';
    firstSlide.style.marginLeft = "-20%";
    title.innerText = 'Glassmorphism';
} );

navBtn3.addEventListener( 'click', () =>
{
    firstSlide.style.marginLeft = "-40%";
    container.className = 'container retro';
    title.innerText = 'Retrospection';
} );

navBtn4.addEventListener( 'click', () =>
{
    firstSlide.style.marginLeft = "-60%";
    container.className = 'container minimal';
    title.innerText = 'Minimalism';
})

navBtn5.addEventListener('click', () => {
    firstSlide.style.marginLeft = '-80%'
    container.className = 'container comm'
    title.innerText = 'Modern'
})


// slide 3 range slider event 
scaleBar.addEventListener('input', (e) => {

    // show percentage 
    const percent = document.getElementById('rangeValue').innerText = `${e.target.value}%`

    const scaleFiller = document.querySelector('.scale-filler')

    scaleFiller.style.width = `${+e.target.value - +e.target.value * 0.1}%`

    const scaleFillerWidth = scaleFiller.style.width.replace('%', '').trim()



    if (+scaleFillerWidth > 30) {
        scaleFiller.style.width = `${+e.target.value - +e.target.value * 0.2}%`
    }

    
    if (+scaleFillerWidth < 19) {
        scaleFiller.style.width = `${e.target.value}%`
    }


    if (+scaleFillerWidth < 2) {
        scaleFiller.style.width = '0'
    }


})