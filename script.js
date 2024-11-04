document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

        function getRandomColor() {
            const colors = ["#cd84f1","#FEA47F","#25CCF7","#6D214F","#f1c40f","#78e08f"];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        
    changeColorBtn.addEventListener("click", () => {
        colorBox.style.backgroundColor = getRandomColor();
    });
});
