document.addEventListener('DOMContentLoaded', function() {

    const link = document.querySelectorAll('a');
    const button = document.querySelectorAll('button');
    const input = document.querySelectorAll('input');

    console.log(link, 'these are my links');
    console.log(button, 'buttons');
    console.log(input, 'inputs');
s
    const elements = [link,button,input];

    // Light Mode Setter 

    function setLightMode () {
        console.log('Light mode has been executed !');
    
        // Set all the expected elemtns to the light mode
        elements.forEach((element) => {
            if (element.length != 0)
                document.body.classList = ".light-mode";
                element.array.forEach(item => {
                    item.classList = `.light-mode ${element}`;//
                })
        })
    }

    const lightModeButton = document.querySelector('.dark');
    console.log(lightModeButton);
    lightModeButton.addEventListener('click',setLightMode);

    // Dark Mode Setter

    function setDarkMode () {

        // Set all the expected elemtns to the light mode
        elements.forEach((element) => {
            if (element.length != 0)
                document.body.classList = ".dark-mode";
                element.array.forEach(item => {
                    item.classList = `.dark-mode ${element}`;//
                })
        })
    }

    // Listen for messages from the background script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === 'executeSpecificFunction') {
        setDarkMode(); // Call the specific function
        sendResponse({ status: 'Dark Mode was executed' }); // Send a response back
        }
    });

})

