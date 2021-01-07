DROP TABLE IF EXISTS hist_gas_prices;

CREATE TABLE hist_gas_prices(
	Date DATE PRIMARY KEY,
	Year INTEGER,
	Month VARCHAR(4),
	New_England_Prices FLOAT,
	Central_Atlantic_Prices FLOAT,
	Lower_Atlantic_Prices FLOAT,
	Midwest_Prices FLOAT,
	Gulf_Coast_Prices FLOAT,
	Rocky_Mountain_Prices FLOAT,
	West_Coast_Prices FLOAT,
	West_Coast_No_Cali_Prices FLOAT
);



-- CREATE TABLE gas08_prices(
-- 	date DATE NOT NULL,
-- 	New_England FLOAT,
-- 	Central_Atlantic FLOAT,
-- 	Lower_Atlantic FLOAT,
-- 	Midwest FLOAT,
-- 	Gulf_Coast FLOAT,
-- 	Rocky_Mountain FLOAT,
-- 	West_Coast FLOAT,
-- 	West_Coast_No_Cali FLOAT
-- );

-- CREATE TABLE gas15_prices(
-- 	date DATE NOT NULL,
-- 	New_England FLOAT,
-- 	Central_Atlantic FLOAT,
-- 	Lower_Atlantic FLOAT,
-- 	Midwest FLOAT,
-- 	Gulf_Coast FLOAT,
-- 	Rocky_Mountain FLOAT,
-- 	West_Coast FLOAT,
-- 	West_Coast_No_Cali FLOAT
-- );

-- CREATE TABLE gas16_prices(
-- 	date DATE NOT NULL,
-- 	New_England FLOAT,
-- 	Central_Atlantic FLOAT,
-- 	Lower_Atlantic FLOAT,
-- 	Midwest FLOAT,
-- 	Gulf_Coast FLOAT,
-- 	Rocky_Mountain FLOAT,
-- 	West_Coast FLOAT,
-- 	West_Coast_No_Cali FLOAT
-- );

-- CREATE TABLE gas17_prices(
-- 	date DATE NOT NULL,
-- 	New_England FLOAT,
-- 	Central_Atlantic FLOAT,
-- 	Lower_Atlantic FLOAT,
-- 	Midwest FLOAT,
-- 	Gulf_Coast FLOAT,
-- 	Rocky_Mountain FLOAT,
-- 	West_Coast FLOAT,
-- 	West_Coast_No_Cali FLOAT
-- );

-- CREATE TABLE gas18_prices(
-- 	date DATE NOT NULL,
-- 	New_England FLOAT,
-- 	Central_Atlantic FLOAT,
-- 	Lower_Atlantic FLOAT,
-- 	Midwest FLOAT,
-- 	Gulf_Coast FLOAT,
-- 	Rocky_Mountain FLOAT,
-- 	West_Coast FLOAT,
-- 	West_Coast_No_Cali FLOAT
-- );

-- CREATE TABLE gas19_prices(
-- 	date DATE NOT NULL,
-- 	New_England FLOAT,
-- 	Central_Atlantic FLOAT,
-- 	Lower_Atlantic FLOAT,
-- 	Midwest FLOAT,
-- 	Gulf_Coast FLOAT,
-- 	Rocky_Mountain FLOAT,
-- 	West_Coast FLOAT,
-- 	West_Coast_No_Cali FLOAT
-- );