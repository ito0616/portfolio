// animation_test.js

// 必要な要素を取得するにゃ
const triggerButton = document.getElementById('animation-trigger');
const canvas = document.getElementById('animation-canvas');

// ボタンがクリックされたら、この中の処理を実行するにゃん
triggerButton.addEventListener('click', function() {
    // 古い星が残っていたら、一度お掃除するにゃ
    canvas.innerHTML = '';

    // ネコちゃんのパーツを作るにゃん！
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

    // パーツを顔に合体させて、キャンバスに表示するにゃ
    face.append(earLeft, earRight, eyeLeft, eyeRight);
    canvas.appendChild(face);
});