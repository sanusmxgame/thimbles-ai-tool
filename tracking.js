function getCupCoordinates(frameData) {
    return frameData.cups.map((cup, index) => ({
        index,
        x: cup.x,
        y: cup.y,
        status: cup.containsBall ? "ball" : "empty"
    }));
}
function highlightCorrectCup(index) {
    const canvas = document.getElementById('gameCanvas');
    const marker = document.createElement('div');
    marker.className = 'cup-highlight';
    marker.style.left = (index * 200 + 100) + 'px';
    marker.style.top = '200px';
    document.body.appendChild(marker);
}