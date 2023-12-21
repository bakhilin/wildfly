const canvas = document.getElementById('canvas');
    const url = "http://localhost:8080/web-lab-2_war/controller";

    function canvasClick() {
        // let canvas = document.getElementById('canvas');
        canvas.addEventListener('click', event => {
            let r = $('input[type="radio"]:checked:first').val();
            if (!r) {
                alert("R is undefined");
            } else {
                getPoint(r);
            }
        });
    }

    function getCoordinatePosition() {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        // console.log("x: " + x + " y: " + y)
        return {x: x, y: y}
    }

    function getPoint(r) {
        canvas.addEventListener('mousedown', function (e) {
            let data = getCoordinatePosition(canvas, e)

            let pointX = Math.round(data.x);
            let pointY = Math.round(data.y);

            let ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.fillStyle = "red"
            ctx.arc(pointX, pointY, 5, 0, 2 * Math.PI);
            ctx.fill();
            checkPointValid(r, pointX,pointY);
            document.getElementById('x').value = checkPointValid(r, pointX,pointY).pointX;
            document.getElementById('y').value = checkPointValid(r, pointX,pointY).pointY;
            document.getElementById('btn').click();
        })
    }