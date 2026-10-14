// Get the controls used by the prompt form.
const promptInput = document.querySelector("#prompt-input");
const sendButton = document.querySelector("#send-button");
const output = document.querySelector("#generated-output");


const apiBaseUrl = window.location.port === "8000"
    ? window.location.origin
    : "http://localhost:8000";

async function generateResponse() {
    
    const prompt = promptInput.value.trim();

    
    if (!prompt) {
        output.value = "Enter a prompt before sending.";
        promptInput.focus();
        return;
    }

    // Prevent duplicate submissions while the API is working.
    sendButton.disabled = true;
    output.value = "Generating response...";

    try {
        
        const response = await fetch(`${apiBaseUrl}/generate?${new URLSearchParams({ prompt })}`, {
            method: "POST",
        });

        
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}.`);
        }

        // Display the response returned by FastAPI.
        const data = await response.json();
        output.value = data.response;
    } catch (error) {
        output.value = `Unable to generate a response: ${error.message}`;
    } finally {
        // Allow another prompt after the request finishes.
        sendButton.disabled = false;
    }
}


sendButton.addEventListener("click", generateResponse);

// Ctrl+Enter on Windows/Linux or Cmd+Enter on macOS also submits.
promptInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        generateResponse();
    }
});
