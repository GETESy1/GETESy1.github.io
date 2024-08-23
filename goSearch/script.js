document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() === '48447') {
        // 如果输入的是48447，则直接跳转到特殊URL
        window.location.href = "https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4?authorization=bce-auth-v1/40f207e648424f47b2e3dfbb1014b1a5/2021-07-12T02:14:24Z/-1/host/530146520a1c89fb727fbbdb8a0e0c98ec69955459aed4b1c8e00839187536c9";
    } else if (searchInput.trim() !== '') {
        // 如果输入的是其他任何文本，则跳转到指定的URL
        window.location.href = "404";
    }
});