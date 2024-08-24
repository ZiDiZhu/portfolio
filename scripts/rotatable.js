const rotatables = document.querySelectorAll(".rotatable-img");

rotatables.forEach(rotatable => {
    let isDragging = false;
    let initialAngle = 0;
    let currentRotation = 0;
    let startX, startY;

    rotatable.addEventListener("dragstart", (e) => {
        e.preventDefault();
    });

    rotatable.addEventListener("mousedown", (e) => {
        isDragging = false;
        startX = e.clientX;
        startY = e.clientY;
        const rect = rotatable.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        initialAngle = Math.atan2(startY - centerY, startX - centerX) * (180 / Math.PI) - currentRotation;

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });

    function onMouseMove(e) {
        const rect = rotatable.getBoundingClientRect();
        const deltaX = Math.abs(e.clientX - startX);
        const deltaY = Math.abs(e.clientY - startY);

        if (deltaX > 5 || deltaY > 5) {
            isDragging = true;
        }

        if (isDragging) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const currentAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
            currentRotation = currentAngle - initialAngle;
            rotatable.style.transform = `rotate(${currentRotation}deg)`;
        }
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }

    rotatable.addEventListener("click", (e) => {
        if (!isDragging) {
            console.log("Preview pop-out triggered for:", rotatable);
            // Add your preview pop-out code here
        }
    });
});
