// animation_test.js

// すべてのアニメーションボタンを取得するにゃ
const triggerButtons = document.querySelectorAll('.animation-trigger');

// それぞれのボタンに、クリックされたときの処理を設定していくにゃ
triggerButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        // クリックされたボタンの種類（data-animation-type）を取得するにゃ
        const animationType = event.target.dataset.animationType;
        // クリックされたボタンのすぐ下にあるキャンバスを取得するにゃ
        const canvas = event.target.nextElementSibling;

        // まずはキャンバスを空っぽにするにゃ
        canvas.innerHTML = '';

        // ボタンの種類によって、実行する魔法を変えるにゃ
        if (animationType === 'draw-cat') {
            drawCat(canvas);
        } else if (animationType === 'sparkle-stars') {
            sparkleStars(canvas);
        }
    });
});

// ネコちゃんを描く魔法ですにゃ
function drawCat(canvas) {
    const face = document.createElement('div');
    face.className = 'cat-face';
    const earLeft = document.createElement('div');
    earLeft.className = 'cat-ear left';
    const earRight = document.createElement('div');
    earRight.className = 'cat-ear right';
    const eyeLeft = document.createElement('div');
    eyeLeft.className = 'cat-eye left';
    const eyeRight = document.createElement('div');
    eyeRight.className = 'cat-eye right';

    face.append(earLeft, earRight, eyeLeft, eyeRight);
    canvas.appendChild(face);
}

// キラキラ星を降らせる魔法ですにゃ
function sparkleStars(canvas) {
    // キラキラの星を15個作るにゃ
    for (let i = 0; i < 15; i++) {
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
}