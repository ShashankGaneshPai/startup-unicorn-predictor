import os

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

MODELS_DIR = os.path.join(
    BASE_DIR,
    "models"
)

MODEL_PATH = os.path.join(
    MODELS_DIR,
    "unicorn_predictor.pkl"
)

FEATURE_COLUMNS_PATH = os.path.join(
    MODELS_DIR,
    "feature_columns.pkl"
)

COUNTRY_FREQ_PATH = os.path.join(
    MODELS_DIR,
    "country_freq.pkl"
)

REGION_PATH = os.path.join(
    MODELS_DIR,
    "region_categories.pkl"
)

INDUSTRY_PATH = os.path.join(
    MODELS_DIR,
    "industry_categories.pkl"
)

FUNDING_PATH = os.path.join(
    MODELS_DIR,
    "funding_round_categories.pkl"
)

INVESTOR_PATH = os.path.join(
    MODELS_DIR,
    "lead_investor_categories.pkl"
)