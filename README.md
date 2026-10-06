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

AI Usage: Mostly comments and assistance with new things

## Run with Docker Compose

The Compose stack runs the FastAPI wrapper and Ollama together. It expects Docker
with the NVIDIA Container Toolkit because the Ollama service is configured to
use all available NVIDIA GPUs.

```bash
docker compose up --build
```

The web application is available at <http://localhost:8000>. The first startup
downloads the configured model, which is stored in the persistent
`ollama-data` volume.

Configuration can be overridden with environment variables:

```bash
APP_PORT=8080 OLLAMA_MODEL=qwen2.5:7b docker compose up --build
```

Stop the services with:

```bash
docker compose down
```

To also remove the downloaded model, use `docker compose down -v`.