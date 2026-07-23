# Indian Unicorn Prediction System

## Overview

The Indian Unicorn Prediction System is a machine learning-powered web application that predicts whether a startup has the potential to become a unicorn company based on funding, industry, investor, and business-related factors.

The project combines data analysis, machine learning, model explainability, and a FastAPI backend to provide real-time startup predictions.

---

## Problem Statement

Investors and startup founders often struggle to identify startups with high unicorn potential.

This project uses historical startup funding and valuation data to predict whether a startup is likely to achieve unicorn status.

---

## Dataset

Dataset: Startup Valuation Dataset

Features include:

* Founded Year
* Country
* Region
* Industry
* Funding Round
* Lead Investor
* Funding Amount
* Employee Count
* Estimated Revenue
* Investor Count

Target Variable:

* Unicorn (1 = Unicorn, 0 = Not Unicorn)

---

## Project Pipeline

### 1. Exploratory Data Analysis (EDA)

* Missing value analysis
* Outlier detection
* Feature distribution analysis
* Correlation analysis
* Target distribution analysis

### 2. Data Preprocessing

* Missing value treatment
* Frequency encoding
* One-hot encoding
* Feature engineering
* Feature selection

### 3. Model Training

Models evaluated:

* Random Forest
* XGBoost

### 4. Hyperparameter Tuning

RandomizedSearchCV was used to optimize model performance.

### 5. Model Explainability

SHAP (SHapley Additive Explanations) was used to understand feature importance and prediction behavior.

---

## Model Performance

| Model                  | Accuracy | F1 Score | ROC AUC |
| ---------------------- | -------- | -------- | ------- |
| Random Forest Baseline | 0.9034   | 0.9389   | 0.9521  |
| Random Forest Tuned    | 0.9068   | 0.9409   | 0.9543  |
| XGBoost                | 0.8998   | 0.9367   | 0.9526  |

Selected Model:

* Tuned Random Forest

---

## Backend

Technology Stack:

* FastAPI
* Scikit-Learn
* Joblib
* Pandas
* Pydantic

API Endpoints:

### GET /

Returns API status.

### GET /health

Returns application health status.

### POST /predict

Predicts whether a startup can become a unicorn.

---

## Project Structure

```text
Unicorn_Predictor/

├── backend/
├── data/
├── frontend/
├── models/
├── notebooks/
└── README.md
```

---

## Future Improvements

* Interactive Dashboard
* Startup Success Score
* Investor Recommendation Engine
* Funding Prediction Module
* Cloud Deployment
* Real-Time Startup Analytics

---

## Author

Shashank Pai
