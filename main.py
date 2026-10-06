from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from requests import Request
import ollama

app = FastAPI() # Entry point for the FastAPI application.


STATIC_DIR = Path(__file__).resolve().parent / "static"
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static") # Web files are served from the "static" directory.

@app.get("/", include_in_schema=False) # Outputs webfiles stored in the "static" directory when the root endpoint is accessed.
async def index():
    return FileResponse(STATIC_DIR / "index.html")

# Register the root endpoint.
@app.get("/") #HTTP GET method for the root endpoint
def read_root():

    return ("Hello World")
    return {"Hello": "World"}

@app.post("/generate") #HTTP POST method for the /generate endpoint
def generate(prompt: str):
    response = ollama.chat(model="qwen2.5:7b", messages=[{"role": "user", "content": prompt}])
    return {"response": response["message"]["content"]}

