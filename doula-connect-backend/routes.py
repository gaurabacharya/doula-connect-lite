from fastapi import APIRouter
from models import Doula
from utils.csv_loader import load_doula_data

router = APIRouter()
doulas = load_doula_data()

@router.get("/doulas/")
def get_all_doulas():
    return doulas

@router.get("/doulas/{doula_id}")
def get_doula(doula_id: int):
    for doula in doulas:
        if doula.id == doula_id:
            return doula
    return {"error": "Doula not found"}
