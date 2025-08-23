from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello World"}

@app.get("/api/health")
def health():
    return {"status": "ok"}
