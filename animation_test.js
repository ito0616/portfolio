// animation_test.js

// すべてのアニメーションボタンを取得する
const triggerButtons = document.querySelectorAll(".animation-trigger");

// それぞれのボタンに、クリックされたときの処理を設定していく
triggerButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    // クリックされたボタンの種類（data-animation-type）を取得する
    const animationType = event.target.dataset.animationType;
    // クリックされたボタンのすぐ下にあるキャンバスを取得する
    const canvas = event.target.nextElementSibling;

    // まずはキャンバスを空っぽにする
    canvas.innerHTML = "";

    // ボタンの種類によって、実行する魔法を変える
    if (animationType === "draw-cat") {
      drawCat(canvas);
    } else if (animationType === "sparkle-stars") {
      sparkleStars(canvas);
    } else if (animationType === "progress-bar") {
      runProgressBar(canvas);
    }
  });
});

// ネコちゃんを描く魔法
function drawCat(canvas) {
  const face = document.createElement("div");
  face.className = "cat-face";
  const earLeft = document.createElement("div");
  earLeft.className = "cat-ear left";
  const earRight = document.createElement("div");
  earRight.className = "cat-ear right";
  const eyeLeft = document.createElement("div");
  eyeLeft.className = "cat-eye left";
  const eyeRight = document.createElement("div");
  eyeRight.className = "cat-eye right";

  face.append(earLeft, earRight, eyeLeft, eyeRight);
  canvas.appendChild(face);
}

// キラキラ星を降らせる魔法
function sparkleStars(canvas) {
  // キラキラの星を15個作る
  for (let i = 0; i < 15; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // 星の位置をランダムに決める
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    // アニメーションの開始時間を少しずつずらして、パラパラ見えるようにする
    star.style.animationDelay = `${Math.random() * 0.5}s`;

    // できた星をキャンバスに追加する
    canvas.appendChild(star);
  }
}

// プログレスバーを動かす魔法
function runProgressBar(canvas) {
  const progressBar = canvas.querySelector(".progress-bar");
  // 一度リセットするために、幅を0に戻す
  progressBar.style.transition = "none"; // 一瞬だけアニメーションをオフ
  progressBar.style.width = "0%";
  // 少しだけ待ってからアニメーションを再開する
  setTimeout(function () {
    progressBar.style.transition = "width 2s ease-out"; // アニメーションをオン
    progressBar.style.width = "100%";
  }, 50);
}

// --- このページにいるスキルのお星様を光らせる魔法 ---
const skillRatings = document.querySelectorAll(
  ".animation-playground .skill-rating"
);

skillRatings.forEach(function (rating) {
  const ratingValue = parseInt(rating.dataset.rating, 10);
  const ratingWidth = ratingValue * 18.6;

  // 計算した幅を、CSSの変数（--rating-width）として設定する
  rating.style.setProperty("--rating-width", `${ratingWidth}px`);
});
