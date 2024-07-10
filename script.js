document.addEventListener('DOMContentLoaded', () => {
    const nameDate = document.getElementById("first-content");
    const secondContent = document.getElementById("second-content");
    const cardFooter = document.getElementById("card-footer");
    const firstButton = document.getElementById("first-button");
    const hidden = document.getElementById("hidden");
    const mediaQuery = window.matchMedia('(max-width: 900px)');

    let secondButton;

    const mobileOtherClick = () => {
        nameDate.style.display = "";
        hidden.style.display = "";
        cardFooter.style.backgroundColor = "";
    }

    const desktopOtherClick = () => {
        nameDate.style.display = "";
        hidden.style.display = "";
        cardFooter.style.backgroundColor = "";
    }

    const mobileInitialClick = () => {
        nameDate.style.display = "none";
        hidden.style.display = "block";
        secondButton = document.getElementById("second-button");
        secondButton.addEventListener("click", mobileOtherClick);
    }

    const desktopInitialClick = () => {
        if (hidden.style.display === "block") {
            hidden.style.display = "none";
        } else {
            hidden.style.display = "block";
        }
    }

    const cleanUpListeners = () => {
        // clean up events to prevent repetition
        if (secondButton) {
            secondButton.removeEventListener("click", mobileOtherClick);
            secondButton.removeEventListener("click", desktopOtherClick);
        }
        firstButton.removeEventListener("click", mobileInitialClick);
        firstButton.removeEventListener("click", desktopInitialClick);
    }

    const resetView = () => {
        // Reset the elements to their default state
        nameDate.style.display = "";
        hidden.style.display = "";
        cardFooter.style.backgroundColor = "";
    }

    const handleMediaQueryChange = (event) => {
        cleanUpListeners();
        resetView();
        
        if (event.matches) {
            // Mobile view
            firstButton.addEventListener("click", mobileInitialClick);
        } else {
            // Desktop view
            firstButton.addEventListener("click", desktopInitialClick);
        }
    }

    // Initial check
    handleMediaQueryChange(mediaQuery);
    // Listen for changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);
});
