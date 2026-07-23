import joblib
import pandas as pd

from config import (
    COUNTRY_FREQ_PATH,
    FEATURE_COLUMNS_PATH
)

country_freq = joblib.load(
    COUNTRY_FREQ_PATH
)

feature_columns = joblib.load(
    FEATURE_COLUMNS_PATH
)


def prepare_features(data):

    encoded = {}

    # Numerical Features

    encoded["founded_year"] = data["founded_year"]

    encoded["funding_amount_usd"] = data["funding_amount_usd"]

    encoded["employee_count"] = data["employee_count"]

    encoded["funding_year"] = data["funding_year"]

    encoded["funding_month"] = data["funding_month"]

    encoded["startup_age"] = (
        data["funding_year"]
        - data["founded_year"]
    )

    encoded["investor_count"] = data["investor_count"]

    # Country Frequency Encoding

    encoded["country_freq"] = country_freq.get(
        data["country"],
        0
    )

    # One Hot Columns

    for col in feature_columns:
        if col not in encoded:
            encoded[col] = 0

    # Region

    region_col = f"region_{data['region']}"

    if region_col in encoded:
        encoded[region_col] = 1

    # Industry

    industry_col = f"industry_{data['industry']}"

    if industry_col in encoded:
        encoded[industry_col] = 1

    # Funding Round

    funding_col = (
        f"funding_round_{data['funding_round']}"
    )

    if funding_col in encoded:
        encoded[funding_col] = 1

    # Investor

    investor_col = (
        f"lead_investor_{data['lead_investor']}"
    )

    if investor_col in encoded:
        encoded[investor_col] = 1

    df = pd.DataFrame([encoded])

    return df[feature_columns]