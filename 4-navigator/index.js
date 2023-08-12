const positionLat = parseInt(prompt("Укажите координаты начальной точки по оси Х (широта)"));
const positionLong = parseInt(prompt("Укажите координаты начальной точки по оси Y (долгота)"));
const addressLat = parseInt(prompt("Укажите координаты конечной точки по оси Х (широта)"));
const addressLong = parseInt(prompt("Укажите координаты конечной точки по оси Y (долгота)"));
const distance = ((addressLong-positionLong) ** 2 + (addressLat-positionLat) ** 2);
alert(`Расстояние между точками составляет ${Math.sqrt(distance)} см.`);

