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
            // Reset default style
            ctx.fillStyle = 'rgba(0, 0, 0, 0)';  // Default transparent fill
            ctx.strokeStyle = 'black'; // Default black stroke
            ctx.lineWidth = 1; // Default line width

            // Apply styles if the checkboxes are checked
            if (circle.checked || square.checked) {  // Check if either shape is selected
                if (circle.checked) {
                    // Handle fill style if fill is checked
                    if (fill.checked) {
                        if (rancolour.checked) {
                            ctx.fillStyle = randomColor(); // Random fill color
                        } else {
                            ctx.fillStyle = 'rgba(0, 0, 0, 0)'; // Transparent fill (when unchecked)
                        }
                    }

                    // Handle outline style if outline is checked
                    if (outline.checked) {
                        if (rancolour.checked) {
                            ctx.strokeStyle = randomColor(); // Random stroke color
                        } else {
                            ctx.strokeStyle = 'black'; // Default black stroke
                        }
                        ctx.lineWidth = randomWidth(); // Random line width
                    }

                    // Draw the circle
                    drawCircle(e.offsetX, e.offsetY);

                    if (fill.checked) {
                        ctx.fill(); // Apply fill after drawing the circle
                    }
                    if (outline.checked) {
                        ctx.stroke(); // Apply outline after drawing the circle
                    }
                }

                if (square.checked) {
                    // Handle fill style if fill is checked
                    if (fill.checked) {
                        if (rancolour.checked) {
                            ctx.fillStyle = randomColor(); // Random fill color
                        } else {
                            ctx.fillStyle = 'rgba(0, 0, 0, 0)'; // Transparent fill (when unchecked)
                        }
                    }

                    // Handle outline style if outline is checked
                    if (outline.checked) {
                        if (rancolour.checked) {
                            ctx.strokeStyle = randomColor(); // Random stroke color
                        } else {
                            ctx.strokeStyle = 'black'; // Default black stroke
                        }
                        ctx.lineWidth = randomWidth(); // Random line width
                    }

                    // Draw the square
                    drawSquare(e.offsetX, e.offsetY);

                    if (fill.checked) {
                        ctx.fill(); // Apply fill after drawing the square
                    }
                    if (outline.checked) {
                        ctx.stroke(); // Apply outline after drawing the square
                    }
                }
            }
        });

    });
});
