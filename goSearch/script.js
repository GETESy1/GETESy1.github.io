document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() === '48447') {
        // 如果输入的是48447，则直接跳转到特殊URL
        window.location.href = "https://www.example.com/special";
    } else if (searchInput.trim() !== '') {
        // 如果输入的是其他任何文本，则跳转到指定的URL
        window.location.href = "https://www.example.com/other";
    }
});