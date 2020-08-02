const sr = ScrollReveal({
    reset: false,
});

sr.reveal('.card',{
    duration: 700,
    delay: 50,
    interval: 100,
    scale: 0.9,
    origin: 'bottom',
    distance: '20px',
});

sr.reveal('p', {
    duration: 700,
    delay: 100,
    interval: 100,
});

sr.reveal('h1', {
    scale: 0.6,
    origin: 'bottom',
    distance: '60px',
    duration: 500,
});

sr.reveal('h3', {
    duration: 700,
    delay: 50,
});

sr.reveal('h2', {
    duration: 700,
    delay: 50,
});

sr.reveal('.container', {
    duration: 700,
    delay: 50,
});

sr.reveal('.img-responsive', {
    duration: 700,
    delay: 100,
    scale: 0.9,
    origin: 'bottom',
    distance: '20px',
    interval: 100,
});