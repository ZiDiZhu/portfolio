const rotatables = document.querySelectorAll(".rotatable-img");

rotatables.forEach(rotatable => {
    let isDragging = false;
    let initialAngle = 0;
    let currentRotation = 0;
    let startX, startY;

    const startRotation = (clientX, clientY) => {
        const rect = rotatable.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        initialAngle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI) - currentRotation;

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("touchmove", onTouchMove);
        document.addEventListener("touchend", onMouseUp);
    };

    const onMouseMove = (e) => {
        rotate(e.clientX, e.clientY);
    };

    const onTouchMove = (e) => {
        if (e.touches.length === 1) {
            rotate(e.touches[0].clientX, e.touches[0].clientY);
        }
    };

    const rotate = (clientX, clientY) => {
        const rect = rotatable.getBoundingClientRect();
        const deltaX = Math.abs(clientX - startX);
        const deltaY = Math.abs(clientY - startY);

        if (deltaX > 5 || deltaY > 5) {
            isDragging = true;
        }

        if (isDragging) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const currentAngle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
            currentRotation = currentAngle - initialAngle;
            rotatable.style.transform = `rotate(${currentRotation}deg)`;
        }
    };

    const onMouseUp = () => {
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onMouseUp);
    };

    rotatable.addEventListener("mousedown", (e) => {
        isDragging = false;
        startX = e.clientX;
        startY = e.clientY;
        startRotation(e.clientX, e.clientY);
    });

    rotatable.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
            isDragging = false;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startRotation(e.touches[0].clientX, e.touches[0].clientY);
        }
    });

    rotatable.addEventListener("click", (e) => {
        if (!isDragging) {
            console.log("Preview pop-out triggered for:", rotatable);
            // Add your preview pop-out code here
        }
    });
});
