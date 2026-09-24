/* INK REALM // CUSTOM SELECT CONTROLLER */

document.addEventListener("DOMContentLoaded", function() {
    initCustomSelect();
});

function initCustomSelect() {
    const originalSelect = document.getElementById("model-select");
    const container = document.querySelector(".custom-select-container");
    
    if (!originalSelect || !container) return;

    // Prevent duplicate dropdown instances if called multiple times
    const existingSelected = container.querySelector(".select-selected");
    const existingItems = container.querySelector(".select-items");
    if (existingSelected) existingSelected.remove();
    if (existingItems) existingItems.remove();

    // 1. Create the Display Button
    const selectedDisplay = document.createElement("div");
    selectedDisplay.className = "select-selected";
    selectedDisplay.innerHTML = originalSelect.options[originalSelect.selectedIndex].innerHTML;
    container.appendChild(selectedDisplay);

    // 2. Create the Options List container
    const optionsList = document.createElement("div");
    optionsList.className = "select-items select-hide";

    // 3. Build options from the real select
    for (let i = 0; i < originalSelect.length; i++) {
        const optionDiv = document.createElement("div");
        optionDiv.innerHTML = originalSelect.options[i].innerHTML;
        
        optionDiv.addEventListener("click", function(e) {
            e.stopPropagation();
            selectedDisplay.innerHTML = this.innerHTML;
            originalSelect.selectedIndex = i;
            
            // Dispatch standard change event with bubbling so WebLLM listener catches it
            const event = new Event('change', { bubbles: true });
            originalSelect.dispatchEvent(event);
            
            // Explicitly close the menu
            closeAllSelect();
        });
        
        optionsList.appendChild(optionDiv);
    }
    container.appendChild(optionsList);

    // 4. Toggle Open/Close
    selectedDisplay.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        optionsList.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });

    // 5. Click Outside to Close
    document.addEventListener("click", () => closeAllSelect());
    
    function closeAllSelect(elmnt) {
        const items = document.getElementsByClassName("select-items");
        const selecteds = document.getElementsByClassName("select-selected");
        const arrNo = [];
        
        for (let i = 0; i < selecteds.length; i++) {
            if (elmnt === selecteds[i]) {
                arrNo.push(i);
            } else {
                selecteds[i].classList.remove("select-arrow-active");
            }
        }
        for (let i = 0; i < items.length; i++) {
            if (arrNo.indexOf(i) === -1) {
                items[i].classList.add("select-hide");
            }
        }
    }
}
