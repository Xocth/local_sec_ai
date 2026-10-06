from fastapi import FastAPI

app = FastAPI()

# Register the root endpoint.
@app.get("/") #HTTP GET method for the root endpoint
def read_root():

    return ("Hello World")
    return {"Hello": "World"}