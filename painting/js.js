window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('load', function (e) {
        function randomWidth() {
            return Math.floor(Math.random() * 20);
        }

        function randomHeight() {
            return Math.floor(Math.random() * 60);
        }

        function randomColor() {
            Math.random();

            Math.floor(Math.random() * 255);

            const r = Math.random() * 255;
            const g = Math.random() * 255;
            const b = Math.random() * 255;

            const colour = "rgb(" + r + "," + g + "," + b + ")";

            return colour;
        }

        function draw(x, y) {
            ctx.strokeStyle = randomColor();

            ctx.lineWidth= randomWidth();

            ctx.beginPath();

            const a = Math.floor(Math.random() * 2)
            if (a == 1){
                ctx.rect(x, y, randomHeight(), randomHeight());

            } else {
                ctx.arc(x, y, 50, 0, randomWidth(),Math.PI * 2, false);
            }

            ctx.stroke();
        }

        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        canvas.addEventListener('mousemove', function (e) {
            console.log(e.offsetX + ", " + e.offsetY);
            draw(e.offsetX, e.offsetY);
        })
    });
});
