from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"status": "working"}

@app.get("/health")
def health_check():
    return {"message": "Backend is running"}