// script.js

// ページがスクロールされたら、この中の処理を実行する
window.addEventListener('scroll', function() {
    // header要素を取得する
    const header = document.querySelector('header');
    
    // ページのてっぺんから10px以上スクロールされたら
    if (window.scrollY > 10) {
        // headerに 'scrolled' というクラスを追加する
        header.classList.add('scrolled');
    } else {
        // 10px未満なら 'scrolled' クラスを削除する
        header.classList.remove('scrolled');
    }
});


const targets = document.querySelectorAll('section');


const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
       
        if (entry.isIntersecting) {
           
            entry.target.classList.add('active');
           
            observer.unobserve(entry.target);
        }
    });
});


targets.forEach(function(target) {
    observer.observe(target);
});
