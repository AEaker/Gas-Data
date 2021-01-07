import sqlite3
import pandas as pd
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Float, Date, Integer, String


conn = sqlite3.connect('gasdatabase.db')
cur = conn.cursor()
Base = declarative_base()

with open('SQLSchema.sql') as schfile:
    conn.executescript(schfile.read())
                             


df = pd.read_csv('Aarons Stuff/CleanHistGasPrices.csv')
df.to_sql('hist_gas_prices', conn, if_exists='append', index=False)

conn.commit()

class HistGasPrices(Base):
    __tablename__ = 'hist_gas_prices'
    Date = Column(Integer, primary_key=True)
    Month = Column(String)
    Year = Column(Integer)
    New_England_Prices = Column(Float)
    Central_Atlantic_Prices = Column(Float)
    Lower_Atlantic_Prices = Column(Float)
    Midwest_Prices = Column(Float)
    Gulf_Coast_Prices = Column(Float)
    Rocky_Mountain_Prices = Column(Float)
    West_Coast_Prices = Column(Float)
    West_Coast_No_Cali_Prices = Column(Float)
    

conn.commit()
conn.close()