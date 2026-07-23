from pydantic import BaseModel, Field


class StartupInput(BaseModel):

    founded_year: int = Field(
        ge=1980,
        le=2030
    )

    funding_amount_usd: float = Field(
        gt=0
    )

    employee_count: int = Field(
        gt=0
    )

    funding_year: int = Field(
        ge=1980,
        le=2030
    )

    funding_month: int = Field(
        ge=1,
        le=12
    )

    investor_count: int = Field(
        ge=1
    )

    country: str

    region: str

    industry: str

    funding_round: str

    lead_investor: str