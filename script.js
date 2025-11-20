// script.js

// --- ローディング画面の魔法 ---
// ページが読み込まれたら、この中の処理を実行するにゃ
window.addEventListener('load', function() {
    // 必要な要素を取得するにゃ
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.querySelector('.progress-bar');
    const body = document.querySelector('body');

    // まずは背景がスクロールしないようにするクラスを追加
    body.classList.add('loading-active');

    // プログレスバーを100%に伸ばすにゃ（CSSで設定したtransitionでアニメーションする）
    progressBar.style.width = '100%';

    // わざと少しだけ時間を待つ魔法 (2500ミリ秒 = 2.5秒)
    setTimeout(function() {
        // ローディング画面に 'loaded' クラスを追加して、ふわっと消す
        loadingScreen.classList.add('loaded');
        // 背景のスクロール禁止を解除する
        body.classList.remove('loading-active');
    }, 2500); 
});


// --- ここから下は元々あった魔法ですにゃ ---




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

// ふわっと表示させるための魔法ですにゃん
const targets = document.querySelectorAll('section');

// 要素を監視する監視員さんを作るにゃ
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
       
        if (entry.isIntersecting) {
           
            // 'active'クラスを追加して表示させるにゃ
            entry.target.classList.add('active');
           
            // 一度表示したら、もう監視はしないにゃ
            observer.unobserve(entry.target);
        }
    });
});

// すべての監視対象を、監視員さんに見てもらうようにお願いするにゃ
targets.forEach(function(target) {
    observer.observe(target);
});
