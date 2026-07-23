import joblib

from encoder import prepare_features

from config import (
    MODEL_PATH
)

model = joblib.load(
    MODEL_PATH
)


def predict_startup(data):

    X = prepare_features(data)

    prediction = model.predict(X)[0]

    probability = model.predict_proba(X)[0][1]

    confidence = "Low"

    if probability >= 0.85:
        confidence = "Very High"

    elif probability >= 0.70:
        confidence = "High"

    elif probability >= 0.50:
        confidence = "Medium"

    risk = "High"

    if probability >= 0.85:
        risk = "Low"

    elif probability >= 0.70:
        risk = "Medium"

    return {

        "prediction":
            "Unicorn"
            if prediction == 1
            else "Not Unicorn",

        "probability":
            round(float(probability * 100),2),

        "confidence":
            confidence,

        "risk_level":
            risk
    }