document.addEventListener('DOMContentLoaded', function() {
    // Light Mode Setter 

    function setLightMode () {
        const links = document.querySelectorAll('a');
        const buttons = document.querySelectorAll('button');
        const inputs = document.querySelectorAll('input');
        console.log(links, 'these are my links');
        console.log(buttons, 'buttons');
        console.log(inputs, 'inputs');
    
        // Set all the expected elemtns to the light mode
    
        document.body.classList = ".light-mode";
        if (links.length != 0) {
            links.array.forEach(link => {
                link.classList = '.light-mode a';
            })
        }
    }

    const lightModeButton = document.querySelector('.dark');
    console.log(lightModeButton);
    lightModeButton.addEventListener('click',setLightMode);

    
})

