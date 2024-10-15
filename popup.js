document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#app').innerHTML = `
    <h1>Change Color Page</h1>
            
    <div class="palette-section">
        <h2>Select a Color Palette</h2>
        <button id="light-mode" class="palette-button light">Light Mode</button>
        <button id="dark-mode" class="palette-button dark">Dark Mode</button>
        <button id="sepia-mode" class="palette-button sepia">Sepia</button>
    </div>

    <div class="custom-section">
        <h2>Custom Color Scheme</h2>
        <label for="bg-color">Background Color:</label>
        <input type="color" id="bg-color" value="#ffffff">

        <label for="text-color">Text Color:</label>
        <input type="color" id="text-color" value="#000000">

        <label for="link-color">Link Color:</label>
        <input type="color" id="link-color" value="#0000ff">

        <label for="button-color">Button Color:</label>
        <input type="color" id="button-color" value="#008cba">
    </div>

    <div class="controls">
        <button id="apply-colors">Apply Colors</button>
        <button id="reset-colors">Reset to Default</button>
    </div>

    <div class="footer">
        <p>© 2024 Change Color Page Extension</p>
    </div>
    `
        // Sending meassage to background script in order to inect popup.js

    document.querySelector('.dark').addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: 'executeSpecificFunction' });
    });
        

})



  

