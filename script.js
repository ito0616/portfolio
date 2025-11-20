// script.js

// ページがスクロールされたら、この中の処理を実行するにゃん
window.addEventListener('scroll', function() {
    // header要素を取得するにゃ
    const header = document.querySelector('header');
    
    // ページのてっぺんから10px以上スクロールされたら
    if (window.scrollY > 10) {
        // headerに 'scrolled' というクラスを追加するにゃ
        header.classList.add('scrolled');
    } else {
        // 10px未満なら 'scrolled' クラスを削除するにゃ
        header.classList.remove('scrolled');
    }
});
