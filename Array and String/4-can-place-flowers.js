let flowerbed = [1, 0, 0, 0, 1];
let n = 1;
let count = 0;

function canPlaceFlowers(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            let leftEmpty = (i === 0 || flowerbed[i - 1] === 0);
            let rightEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);

            if (leftEmpty && rightEmpty) {
                flowerbed[i] = 1; // Plant a flower
                count++; // Increase count
                if (count >= n) {
                    return true; // Early exit if enough flowers are placed
                }
                i++; // Skip next position to avoid adjacent planting
            }
        }
    }

    return count >= n; // If not enough flowers were placed
}

console.log(canPlaceFlowers(flowerbed, n));