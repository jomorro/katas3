const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
const anotherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 
const kata1 = document.createElement("h2");
kata1.textContent = "1. Display the numbers 1 to 20";
document.body.appendChild(kata1);
for (let i = 1; i <= 20; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div);
}
const kata2 = document.createElement("h2");
kata2.textContent = "2. Display the even numbers from 1 to 20";
document.body.appendChild(kata2);
for (let i = 2; i <= 20; i += 2) {
    const div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div);
}
const kata3 = document.createElement("h2");
kata3.textContent = "3. Display the odd numbers from 1 to 20";
document.body.appendChild(kata3);
for (i = 1; i < 20; i += 2) {
    const div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div);
}
const kata4 = document.createElement("h2");
kata4.textContent = "4. Display the multiples of 5 up to 100";
document.body.appendChild(kata4);
for (let i = 5; i <= 100; i += 5) {
    const div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div);
}
const kata5 = document.createElement("h2");
kata5.textContent = "5. Display the square numbers up to 100";
document.body.appendChild(kata5);
for (i = 1; i < 11; i++) {
    const div = document.createElement("div");
    div.textContent = i * i;
    document.body.appendChild(div);
}
const kata6 = document.createElement("h2");
kata6.textContent = "6. Display the numbers counting backwards from 20 to 1";
document.body.appendChild(kata6);
for (let i = 20; i > 0; i--) {
    const div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div);
}
const kata7 = document.createElement("h2");
kata7.textContent = "7. Display the even numbers counting backwards from 20";
document.body.appendChild(kata7);
for (let i = 20; i > 0; i -= 2) {
    const div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div);
}
const kata8 = document.createElement("h2");
kata8.textContent = "8. Display the odd numbers from 20 to 1, counting backwards";
document.body.appendChild(kata8);
for (let i = 19; i > 0; i -= 2) {
    const div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div);
}
const kata9 = document.createElement("h2");
kata9.textContent = "9. Display the multiples of 5, counting down from 100";
document.body.appendChild(kata9);
for (let i = 100; i > 0; i -= 5) {
    const div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div);
}
const kata10 = document.createElement("h2");
kata10.textContent = "10. Display the square numbers, counting down from 100";
document.body.appendChild(kata10);
for (let i = 10; i > 0; i--) {
    const div = document.createElement("div");
    div.textContent = i * i;
    document.body.appendChild(div);
}
const kata11 = document.createElement("h2");
kata11.textContent = "11. Display the 20 elements of sampleArray";
document.body.appendChild(kata11);
for (let i = 0; i < sampleArray.length; i++) {
    const div = document.createElement("div");
    div.textContent = sampleArray[i];
    document.body.appendChild(div);
}
const kata12 = document.createElement("h2");
kata12.textContent = "12. Display all the even numbers contained in sampleArray";
document.body.appendChild(kata12);
for (let i = 0; i < sampleArray.length; i++) {
    const div = document.createElement("div");
    div.textContent = sampleArray[i];
    (sampleArray[i] % 2 === 0) ? document.body.appendChild(div): null;
}
const kata13 = document.createElement("h2");
kata13.textContent = "13. Display all the odd numbers contained in sampleArray";
document.body.appendChild(kata13);
for (let i = 0; i < sampleArray.length; i++) {
    const div = document.createElement("div");
    div.textContent = sampleArray[i];
    (sampleArray[i] % 2 !== 0) ? document.body.appendChild(div): null;
}
const kata14 = document.createElement("h2");
kata14.textContent = "14. Display the square of each element in sampleArray";
document.body.appendChild(kata14);
let squareArray = sampleArray.map((a) => a * a);
for (let i = 0; i < squareArray.length; i++) {
    const div = document.createElement("div");
    div.textContent = squareArray[i];
    document.body.appendChild(div);
}
const kata15 = document.createElement("h2");
kata15.textContent = "15. Display the sum all the numbers from 1 to 20";
document.body.appendChild(kata15);
{
    const div = document.createElement("div");
    div.textContent = anotherArray.reduce((a, b) => a + b);
    document.body.appendChild(div);
}
const kata16 = document.createElement("h2");
kata16.textContent = "16. Display the sum of all the elements in sampleArray";
document.body.appendChild(kata16);
{
    const div = document.createElement("div");
    div.textContent = sampleArray.reduce((a, b) => a + b);
    document.body.appendChild(div);
}
const kata17 = document.createElement("h2");
kata17.textContent = "17. Display the smallest element in sampleArray";
document.body.appendChild(kata17);
{
    const div = document.createElement("div");
    div.textContent = Math.min(...sampleArray);
    document.body.appendChild(div);
}
const kata18 = document.createElement("h2");
kata18.textContent = "18. Display the largest element in sampleArray";
document.body.appendChild(kata18);
{
    const div = document.createElement("div")
    div.textContent = Math.max(...sampleArray);
    document.body.appendChild(div);
}
const kata19 = document.createElement("h2");
kata19.textContent = "19. Display 20 solid gray rectangles, each 20px high and 100px wide"
document.body.appendChild(kata19);
for (let i = 1; i <= 20; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "width:100px");
    div.classList = "rectangles";
    document.body.appendChild(div);
}
const kata20 = document.createElement("h2");
kata20.textContent = "20. Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px"
document.body.appendChild(kata20);
for (let i = 0; i <= 100; i += 5) {
    const div = document.createElement("div");
    div.setAttribute("style", "width:" + (100 + i) + "px;");
    div.classList = "rectangles";
    document.body.appendChild(div);
}
const kata21 = document.createElement("h2");
kata21.textContent = "21. Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray."
document.body.appendChild(kata21);
for (let i = 0; i <= sampleArray.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "width:" + sampleArray[i] + "px;");
    div.classList = "rectangles";
    document.body.appendChild(div);
}
const kata22 = document.createElement("h2");
kata22.textContent = "22. As in #21, but alternate colors so that every other rectangle is red."
document.body.appendChild(kata22);
for (let i = 0; i <= sampleArray.length; i++) {
    const div = document.createElement("div");
    (i % 2 === 0) ? div.setAttribute("style", "width:" + sampleArray[i] + "px;" + "background: red;") : div.setAttribute("style", "width:" + sampleArray[i] + "px;");
    div.classList = "rectangles";
    document.body.appendChild(div);
}
const kata23 = document.createElement("h2");
kata23.textContent = "23. As in #21, but color the rectangles with even widths red."
document.body.appendChild(kata23);
for (let i = 0; i <= sampleArray.length; i++) {
    const div = document.createElement("div");
    (sampleArray[i] % 2 === 0) ? div.setAttribute("style", "width:" + sampleArray[i] + "px;" + "background: red;") : div.setAttribute("style", "width:" + sampleArray[i] + "px;");
    div.classList = "rectangles";
    document.body.appendChild(div);
}