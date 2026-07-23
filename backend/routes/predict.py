from fastapi import APIRouter

from schemas import StartupInput
from predictor import predict_startup

router = APIRouter()


@router.post("/predict")
def predict(data: StartupInput):

    result = predict_startup(
        data.dict()
    )

    return result