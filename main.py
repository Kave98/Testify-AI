# main.py

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Define user data model
class User(BaseModel):
    username: str
    password: str

# In-memory user storage (for demo purposes)
users_db = {}

# Signup route (Create new user)
@app.post("/signup")
def signup(user: User):
    if user.username in users_db:
        return {"message": "Username already exists"}
    
    # Save user data in the database (in-memory)
    users_db[user.username] = user.password
    return {"message": f"User {user.username} created successfully!"}

# Login route (Authenticate user)
@app.post("/login")
def login(user: User):
    if user.username not in users_db:
        return {"message": "User does not exist"}
    
    if users_db[user.username] != user.password:
        return {"message": "Incorrect password"}
    
    return {"message": f"Welcome back, {user.username}!"}

