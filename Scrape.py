# Importing all the required libraries
from bs4 import BeautifulSoup
from splinter import Browser
from selenium import webdriver
import requests
import pandas as pd
import time

def init_browser():
#Provided a path for the chrome driver
    executable_path ={'executable_path':r'C:\Users\sunandan\Downloads\chromedriver_win32\chromedriver.exe'}
    # executable_path ={'executable_path':r'C:\Users\sunandan\Downloads\chromedriver_win32\chromedriver.exe'}
    options = webdriver.ChromeOptions()
    options.add_argument("--start-maximized")
    options.add_argument("--disable-notifications")
    return Browser('chrome',**executable_path,headless=False,options=options)
    time.sleep(1)

# Defining a scrape function which will perform all the actions from starting the browser to scraping all info needed.
def scrape_gas():
    browser = init_browser()
    browser.visit('https://www.eia.gov/petroleum/')
    Table = pd.read_html("https://www.eia.gov/petroleum/")
    Table_df = Table[0].fillna(0)
    Table = Table_df.to_html("Table.html")
    Table = Table_df.to_html(index=False).replace('\n','')
    Heading = browser.find_by_css('table[class="basic_table"]').find_by_tag('caption').text
    browser.visit("https://www.eia.gov/petroleum/gasdiesel/")

# Scraping all the tables on the page 
    Tables = pd.read_html("https://www.eia.gov/petroleum/gasdiesel/")
    Gasoline_Tables = Tables[0].fillna(0)
    Gasoline_Table = Gasoline_Tables.to_html("Gasoline_Table.html")
# Removing index from the table and replacing null values with 0.
    Gasoline_Table = Gasoline_Tables.to_html(index=False).replace('\n','')
    Gasoline_Heading =browser.find_by_css('div[class="table-wrapper"]').find_by_tag('caption').text

    Diesel_Tables = Tables[1].fillna(0)
    Diesel_Table = Diesel_Tables.to_html("Diesel_Table.html")
    Diesel_Table = Diesel_Tables.to_html(index=False).replace('\n','')
    Diesel_Heading = browser.find_by_xpath("/html/body/div[1]/div[2]/div/div[4]/div[1]/div/div[1]/table[2]/caption").text
    
    browser.visit("https://www.eia.gov/energyexplained/oil-and-petroleum-products/")

# Scraping with the help of XPath...............................................
    Crude_Heading =browser.find_by_xpath("/html/body/div[1]/div[2]/div/div[1]/div[2]/div[1]/h2[1]").text
    Crude_Paragraph =browser.find_by_xpath("/html/body/div[1]/div[2]/div/div[1]/div[2]/div[1]/p[1]").text
    Crude_Paragraph2= browser.find_by_xpath("/html/body/div[1]/div[2]/div/div[1]/div[2]/div[1]/p[2]").text
#Scraping with css................................................................
    find_image=browser.find_by_css('div[class="article-image-slide"] img')
    featured_image_url = [];
    for i in find_image:
        image_url =i["src"]
        featured_image_url.append(image_url)
        print(featured_image_url)
        Last_Heading = browser.find_by_xpath("/html/body/div[1]/div[2]/div/div[1]/div[2]/div[1]/h2[2]").text
        Second_Last_Paragraph = browser.find_by_xpath("/html/body/div[1]/div[2]/div/div[1]/div[2]/div[1]/p[3]").text
        Last_Paragraph =browser.find_by_xpath("/html/body/div[1]/div[2]/div/div[1]/div[2]/div[1]/p[4]").text

# Defining the dictionary that will have all the Scraping material
    Dict = {
        "Heading":Heading,
        "Table":Table,
        "Gasoline_Heading" : Gasoline_Heading,
        "Gasoline_Table" : Gasoline_Table,
        "Diesel_Heading" :Diesel_Heading,
        "Diesel_Table " : Diesel_Table,
        "Crude_Heading" :Crude_Heading,
        "Crude_Paragraph":Crude_Paragraph,
        "Crude_Image_1" : featured_image_url[0],
        "Crude_Image_2" :featured_image_url[1],
        "Crude_Paragraph2":Crude_Paragraph2,
        "Last_Heading":Last_Heading,
        "Crude_Image_3" :featured_image_url[2],
        "Second_Last_Paragraph":Second_Last_Paragraph,
        "Last_Paragraph":Last_Paragraph

    }
    return Dict