const carousel = document.querySelector('#carousel > div');
    const slides = carousel.children.length;
    let current = 0;

    document.getElementById('prev').onclick = () => {
      current = (current - 1 + slides) % slides;
      carousel.style.transform = `translateX(-${current * 100}%)`;
    };
    document.getElementById('next').onclick = () => {
      current = (current + 1) % slides;
      carousel.style.transform = `translateX(-${current * 100}%)`;
    };