document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() === '48447') {
        // 如果输入的是48447，则直接跳转到特殊URL
        window.location.href = "https://www.bilibili.com/video/BV1PK4y1S7Hd/?share_source=copy_web&vd_source=a779509a896f159489ea3da274c51b20";
    } else if (searchInput.trim() !== '') {
        // 如果输入的是其他任何文本，则跳转到指定的URL
        window.location.href = "getesy1.gethub.io/goSearch/go404/404.html";
    }
});