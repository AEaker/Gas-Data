#Importing all the required libraries,files in the main file.
import http.client
from flask import Flask, render_template,redirect,request
import sqlite3
import json
from sqlalchemy import create_engine, extract
from sqlalchemy.orm import Session
from init_db import HistGasPrices
import choropleth
import Scrape
import requests
import pymongo

# create instance of Flask app
app = Flask(__name__)
# Initialize PyMongo to work with MongoDBs
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Define database and collection
db = client.Gas_Data
collection = db.State_Data

# create route that renders index.html template
@app.route("/", methods=["GET","POST"])
def index():
    if request.method == "GET":
        zipcode = "31402"
        zipapi = "5kF2PxrgxTE9vrkZuSAchlb4SVaKrJgW5ewTfqiucVyZfcyaqLfN9JmRt98YNuol"
        zipurl = f"https://www.zipcodeapi.com/rest/{zipapi}/info.json/{zipcode}/degrees"
        response = requests.get(zipurl).json()
        
        conn = http.client.HTTPSConnection("api.collectapi.com")
        
        headers = {
        'content-type': "application/json",
        'authorization': "apikey 60NpjP2khNX0u5YCngWVa8:3q7xw9Ij4XoszUMayKd6lk"
        }

        collecturl = f"/gasPrice/fromCoordinates?lng={response['lng']}&lat={response['lat']}"
        conn.request("GET",collecturl,headers=headers)
        res = conn.getresponse()
        data = res.read()
        Gdata = json.loads(data)
        Gdata = Gdata['result']
        return render_template("index.html", Gasoline_data=Gdata) 
    
    else:
        zipcode = request.form['zipcode']
        zipapi = "ZVp42kUmPdgG4Na8hYyYEPlhx6cwKcmVZcrDu69nRtPLxcRO92qZFTrkipqJD8dy"
        zipurl = f"https://www.zipcodeapi.com/rest/{zipapi}/info.json/{zipcode}/degrees"
        response = requests.get(zipurl).json()
        
        conn = http.client.HTTPSConnection("api.collectapi.com")
        
        headers = {
        'content-type': "application/json",
        'authorization': "apikey 60NpjP2khNX0u5YCngWVa8:3q7xw9Ij4XoszUMayKd6lk"
        }

        collecturl = f"/gasPrice/fromCoordinates?lng={response['lng']}&lat={response['lat']}"
        conn.request("GET",collecturl,headers=headers)
        res = conn.getresponse()
        data = res.read()
        Gdata = json.loads(data)
        Gdata = Gdata['result']
        
        return render_template("index.html", Gasoline_data=Gdata)



 

@app.route("/charts.html")
def chart():
    return render_template('charts.html')

# The route that will scrape all the data and render it to News.html
@app.route("/News.html")
def addNews():
    Data = Scrape.scrape_gas() 
    # collection.insert_one(Data)
    # Scrape_Data = Data.find_one()
    collection.replace_one({},Data,upsert=True)
    return render_template('News.html', Gas_info=Data)

# This route will have all the historical data and the chart for it.
@app.route("/Years", methods=["GET","POST"])
def Years():
    engine = create_engine('sqlite:///gasdatabase.db')
    session = Session(engine)
    histgasprices = session.query(HistGasPrices)
    if request.method == "GET":
        currentyearprices = "2020"
        Query = histgasprices.filter(HistGasPrices.Year == currentyearprices)   
        for r in Query:
            Years = [r.Year for r in Query]
            Dates = [r.Date for r in Query]
            Months = [r.Month for r in Query]
            NEPrices = [r.New_England_Prices for r in Query]
            CAPrices = [r.Central_Atlantic_Prices for r in Query]
            LAPrices = [r.Lower_Atlantic_Prices for r in Query]
            MWPrices = [r.Midwest_Prices for r in Query]
            GFPrices = [r.Gulf_Coast_Prices for r in Query]
            RMPrices = [r.Rocky_Mountain_Prices for r in Query]
            WCPrices = [r.West_Coast_Prices for r in Query]
            NoCAPrices = [r.West_Coast_No_Cali_Prices for r in Query]
            
        HistoricalData = {"Dates":Dates,"Months":Months , "NEPrices":NEPrices, "CAPrices":CAPrices, "LAPrices":LAPrices,"MWPrices":MWPrices, "GFPrices":GFPrices, "RMPrices":RMPrices, "WCPrices":WCPrices, "NoCAPrices":NoCAPrices }
        return render_template('Years.html', HistoricalData=HistoricalData)
    
    else: 
        
        useryear = request.form['useryear']
        Query = histgasprices.filter(HistGasPrices.Year == useryear)
        for r in Query:
            Years = [r.Year for r in Query]
            Dates = [r.Date for r in Query]
            Months = [r.Month for r in Query]
            NEPrices = [r.New_England_Prices for r in Query]
            CAPrices = [r.Central_Atlantic_Prices for r in Query]
            LAPrices = [r.Lower_Atlantic_Prices for r in Query]
            MWPrices = [r.Midwest_Prices for r in Query]
            GFPrices = [r.Gulf_Coast_Prices for r in Query]
            RMPrices = [r.Rocky_Mountain_Prices for r in Query]
            WCPrices = [r.West_Coast_Prices for r in Query]
            NoCAPrices = [r.West_Coast_No_Cali_Prices for r in Query]
            
        HistoricalData = {"Dates":Dates, "Months":Months,"NEPrices":NEPrices, "CAPrices":CAPrices, "LAPrices":LAPrices,"MWPrices":MWPrices, "GFPrices":GFPrices, "RMPrices":RMPrices, "WCPrices":WCPrices, "NoCAPrices":NoCAPrices }
        
        return render_template('Years.html', HistoricalData=HistoricalData)

# This route will have the US Map with all the prices updated on a daily basis for each state......
@app.route("/Map.html")
def map():
    return render_template('Map.html')


if __name__ == "__main__":
    app.run(debug=True)








