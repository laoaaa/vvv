// script.js
const tickSound = document.getElementById("tick-sound");
let lastElapsed = 0; // 用于记录上次的 elapsed 时间
const swingDuration = 60000; // 动画的总时长为60秒

function checkPendulumPosition(timestamp) {
    // 获取当前动画时间比例 (0 - 1)
    const elapsed = (timestamp % swingDuration) / swingDuration;

    // 检查是否在 0% 或 50% 时播放声音
    if ((elapsed < 0.01 && lastElapsed >= 0.5) || (elapsed >= 0.5 && lastElapsed < 0.5)) {
        tickSound.play(); // 播放声音
    }

    lastElapsed = elapsed; // 更新上一次的 elapsed

    requestAnimationFrame(checkPendulumPosition); // 继续监控动画
}

// 点击页面后启动节拍器
window.addEventListener("click", () => {
    requestAnimationFrame(checkPendulumPosition); // 开始监控动画位置
});
