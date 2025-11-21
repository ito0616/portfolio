// animation_test.js

// 必要な要素を取得するにゃ
const triggerButton = document.getElementById('animation-trigger');
const canvas = document.getElementById('animation-canvas');

// ボタンがクリックされたら、この中の処理を実行するにゃん
triggerButton.addEventListener('click', function() {
    // 古い星が残っていたら、一度お掃除するにゃ
    canvas.innerHTML = '';

    // キラキラの星を15個作るにゃ
    for (let i = 0; i < 15; i++) {
        // 星の要素を作るにゃ
        const star = document.createElement('div');
        star.classList.add('star');

        // 星の位置をランダムに決めるにゃ
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;

        // アニメーションの開始時間を少しずつずらして、パラパラ見えるようにするにゃ
        star.style.animationDelay = `${Math.random() * 0.5}s`;

        // できた星をキャンバスに追加するにゃ
        canvas.appendChild(star);
    }
});