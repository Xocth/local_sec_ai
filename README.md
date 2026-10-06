# local_sec_ai
A containerized security analyst using the AI model Qwen

## Architecture

* **The Wrapper (`fastapi`)**: A Python FastAPI application that handles HTTP requests, applies prompt engineering.
* **The Brain (`ollama`)**: A local LLM service running the `qwen2.5:7b` model, utilizing NVIDIA GPU passthrough.

## Tech Stack
* **Languages & Frameworks**: Python, FastAPI, 
* **AI & LLM**: Ollama, Qwen 2.5 (7B)
* **Infrastructure**: Docker, NVIDIA Container Toolkit


## My current setup
* **Dev Env**: VSCode -> WSL -> Debian + Docker 
* **Project**: Qwen <- FastAPI -> Web Page