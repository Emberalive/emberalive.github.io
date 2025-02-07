window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('load', function (e) {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        const outline = document.getElementById('outline');
        const fill = document.getElementById('fill');
        const rancolour = document.getElementById('rancolour');

        const clear = document.getElementById('clear');
        clear.addEventListener('click', function (e) {
            ctx.fillStyle = 'lightgray';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            console.log("canvas was cleared");
        })

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

            return "rgb(" + r + "," + g + "," + b + ")";
        }

        function drawCircle(x, y) {
            ctx.beginPath();
            ctx.arc(x, y, randomHeight(), 0, Math.PI * 2, false);
            ctx.stroke()
        }

        function drawSquare(x, y) {
            ctx.beginPath();
            ctx.rect(x, y, randomHeight(), randomHeight());
            ctx.stroke();
        }

        const circle = document.getElementById('circle');
        circle.addEventListener('click', function (e) {
            console.log(circle.checked ? "Circle mode ON" : "Circle mode Off");
        });

        const square = document.getElementById('square');
        square.addEventListener('click', function (e) {
            drawSquares = true;
            console.log(square.checked ? "Square mode ON" : "Square mode Off");
        });

        canvas.addEventListener('mousemove', function (e) {
            if (circle.checked) {
                if (fill.checked) {
                    if (rancolour.checked) {
                        ctx.fillStyle = randomColor();
                    }
                    ctx.fill();
                } else if (outline.checked){
                    if (rancolour.checked) {
                        ctx.strokeStyle = randomColor();
                    }
                    ctx.lineWidth = randomWidth();
                    }
                drawCircle(e.offsetX, e.offsetY);
            }
            if (square.checked) {
                if (fill.checked) {
                    if (rancolour.checked) {
                        ctx.fillStyle = randomColor();
                    }
                    ctx.fill();
                } else if (outline.checked) {
                    if (rancolour.checked) {
                        ctx.strokeStyle = randomColor();
                    }
                    ctx.lineWidth = randomWidth();
                }
                drawSquare(e.offsetX, e.offsetY);
            }
        })
    });
});
