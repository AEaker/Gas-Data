# Gas-Data


Pulled CSV Historical [Regular] Gas Price Data off eia.gov

Cleaned Data in Pandas

Created SQLSchema and uploaded new data in SQLITE database.

Created Flask App that:

1. Connected to 2 APIs, 1st to get location, 2nd to retrieve gas prices dependent on user-input location [that data was returned to user in cute lil graph on webpage, courtesy of teammates.]

2. Connected to the SQLite Gas Database and returned data [SQLAlchemy] to the webpage to create some JavaScript graphs based on user input year. Data could be split into regions.


Teammates did html/css so I could retain sanity. Also a page for webscraping. 



-A.E. 
