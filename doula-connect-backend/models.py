from pydantic import BaseModel

class Doula(BaseModel):
    id: int
    name: str
    location: str
    specialties: str
    bio: str
    rating: float
