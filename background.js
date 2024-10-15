document.addEventListener('DOMContentLoaded', function( ){

  let shouldInject = false;

  // Listen for messages from the popup to toggle injection
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'injectScript') {
      shouldInject = true;
  
      // Get all active tabs
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
          ensureContentScriptIsReady(tab.id, () => {
            console.log(`Content script is ready on tab ${tab.id}`);
          });
        });
      });
    } else if (message.action === 'executeSpecificFunction') {
      // Execute specific function in all tabs
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
          ensureContentScriptIsReady(tab.id, () => {
            chrome.tabs.sendMessage(tab.id, { action: 'executeSpecificFunction' });
          });
        });
      });
    }
  });
  
  // Function to inject content script if not already injected
  function injectContentScript(tabId) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    }, () => {
      console.log(`Content script injected on tab ${tabId}`);
    });
  }
  
  // Function to ensure content script is ready
  function ensureContentScriptIsReady(tabId, callback, retries = 5) {
    // Try sending a ping message to content.js
    chrome.tabs.sendMessage(tabId, { action: 'executeSpecificFunction' }, (response) => {
      if (chrome.runtime.lastError || !response || response.status !== 'pong') {
        if (retries > 0) {
          console.log(`Content script not ready on tab ${tabId}, retrying... (${retries})`);
          setTimeout(() => ensureContentScriptIsReady(tabId, callback, retries - 1), 500); // Retry after 500ms
        } else {
          console.log(`Content script not responding on tab ${tabId}, injecting script.`);
          injectContentScript(tabId);
          callback();
        }
      } else {
        console.log(`Content script is ready on tab ${tabId}`);
        callback(); // Call the callback when content script is ready
      }
    });
  }
  
  // Listen for new tab creation and ensure the content script is ready
  chrome.tabs.onCreated.addListener((tab) => {
    if (shouldInject) {
      ensureContentScriptIsReady(tab.id, () => {
        console.log(`Content script is ready on new tab ${tab.id}`);
      });
    }
  });



})



