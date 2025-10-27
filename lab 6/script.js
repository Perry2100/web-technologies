const mainContainer = document.getElementById('mainContainer');
const leftBtn = document.getElementById('leftBtn');
const bothBtn = document.getElementById('bothBtn');
const rightBtn = document.getElementById('rightBtn');
const headerButtons = document.querySelectorAll('.header-btn');

/**
 * Removes all expansion classes and sets the 'both' state.
 */
function resetColumns() {
    mainContainer.classList.remove('expand-left', 'expand-right');
}

/**
 * Handles the column expansion logic when an image is clicked.
 * @param {string} side - 'left' or 'right' indicating which column to expand.
 */
function expandColumn(side) {
    if (side === 'left') {
        mainContainer.classList.remove('expand-right');
        mainContainer.classList.add('expand-left');
        setActiveButton(leftBtn);
    } else if (side === 'right') {
        mainContainer.classList.remove('expand-left');
        mainContainer.classList.add('expand-right');
        setActiveButton(rightBtn);
    }
}

/**
 * Sets the active state for the clicked header button.
 * @param {HTMLElement} activeBtn - The button to mark as active.
 */
function setActiveButton(activeBtn) {
    headerButtons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// --- Event Listeners for Header Buttons ---

leftBtn.addEventListener('click', () => {
    expandColumn('left');
});

rightBtn.addEventListener('click', () => {
    expandColumn('right');
});

bothBtn.addEventListener('click', () => {
    resetColumns();
    setActiveButton(bothBtn);
});

// Initialize the 'Both' button as active on load
setActiveButton(bothBtn);