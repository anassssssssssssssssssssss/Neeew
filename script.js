// تبديل الصفحات

function showReasons() {

    document.querySelector('#letter-page').classList.remove('active');

    document.querySelector('#reasons-page').classList.add('active');

    window.scrollTo(0, 0);

    

    // بدء تأثير الكتابة

    typeEffect();

}

// تأثير الكتابة الآلية

function typeEffect() {

    const text = "أحبك جداً ❤️";

    const typedText = document.querySelector('.typed-text');

    const cursor = document.querySelector('.cursor');

    

    typedText.textContent = '';

    let i = 0;

    

    function typing() {

        if (i < text.length) {

            typedText.textContent += text.charAt(i);

            i++;

            setTimeout(typing, 150);

        } else {

            cursor.style.display = 'none';

        }

    }

    

    setTimeout(typing, 1000);

}

// تأثيرات إضافية للبطاقات

const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {

    card.addEventListener('click', function() {

        this.querySelector('.flip-card-inner').classList.toggle('flipped');

    });

});

// تأثيرات عند التمرير

window.addEventListener('scroll', function() {

    const greetingBox = document.querySelector('.greeting-box');

    const boxPosition = greetingBox.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 1.3;

    

    if (boxPosition < screenPosition) {

        greetingBox.style.opacity = '1';

        greetingBox.style.transform = 'translateY(0)';

    }

});

// تهيئة تأثيرات الصفحة

document.addEventListener('DOMContentLoaded', function() {

    const greetingBox = document.querySelector('.greeting-box');

    greetingBox.style.opacity = '0';

    greetingBox.style.transform = 'translateY(20px)';

    greetingBox.style.transition = 'all 0.8s ease';

});