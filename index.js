        const auto = false;
        const intervalTime = 5000;
        let slideInterval;
 
        const nextSlide = () => {
            const current = document.querySelector('.current');
            current.classList.remove('current');
            if (current.nextElementSibling) {
                ${count = count + 1}
                current.nextElementSibling.classList.add('current');
                slides[count].style.background = 'url("${imageUrl[count]}") no-repeat center center/cover';
            } else {
                ${count = 0}
                slides[0].classList.add('current');
            }
            setTimeout(() => current.classList.remove('current'));
        };

        const prevSlide = () => {
            const current = document.querySelector('.current');
            current.classList.remove('current');
            if (current.previousElementSibling) {
                count = (count - 1 + slides.length) % slides.length;
                current.previousElementSibling.classList.add('current');
                slides[count].style.background = 'url("${imageUrl[count]}") no-repeat center center/cover';
            } else {
                count = slides.length - 1;
                slides[slides.length - 1].style.background = 'url("${imageUrl[count]}") no-repeat center center/cover';
                slides[slides.length - 1].classList.add('current');
            }
            setTimeout(() => current.classList.remove('current'));
        }

        next.addEventListener('click', () => {
            nextSlide();
            if (auto) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime)
            }
        }, false)

        prev.addEventListener('click', () => {
            prevSlide();
            if (auto) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime)
            }
        }, false)


        if (auto) {
            slideInterval = setInterval(nextSlide, intervalTime)
        }