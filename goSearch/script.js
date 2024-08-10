document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() !== '') {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
    }
});