export const countWeek = [1, 2, 3, 4, 5];
export const namesWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
export const weekends = ["Сб", "Вс"];

export default function capFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}