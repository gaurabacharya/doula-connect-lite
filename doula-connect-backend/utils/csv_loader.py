import csv
from models import Doula

def load_doula_data():
    doulas = []
    with open("data/doulas.csv", newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            doulas.append(Doula(**{
                "id": int(row["id"]),
                "name": row["name"],
                "location": row["location"],
                "specialties": row["specialties"],
                "bio": row["bio"],
                "rating": float(row["rating"])
            }))
    return doulas
