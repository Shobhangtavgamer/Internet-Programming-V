# Here i am creating a weather app using flask and openweathermap api. I will be using the requests library to make API calls to the openweathermap api and get the weather data for a given city. I will then display the weather data on the home page of the app.
# use api key and replace with your own api key. You can get your own api key by signing up on openweathermap.org and creating an account. Once you have created an account, you can generate an api key from the api keys section of your account.
from flask import Flask, render_template, request
import requests

app = Flask(__name__)
API_KEY = "cdb4d7121bb91dccdda464eb24f7aa74"
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

@app.route("/", methods=["GET", "POST"])
def home():
    weather = None
    error = None
    if request.method == "POST":
        city = request.form.get("city")
        params = {
            "q": city,
            "appid": API_KEY,
            "units": "metric"
        }
        response = requests.get(BASE_URL, params=params)
        data = response.json()
        if data.get("cod") == 200:
            weather = {
                "city": data["name"],
                "country": data["sys"]["country"],
                "temperature": data["main"]["temp"],
                "feels_like": data["main"]["feels_like"],
                "humidity": data["main"]["humidity"],
                "pressure": data["main"]["pressure"],
                "wind": data["wind"]["speed"],
                "description": data["weather"][0]["description"].title(),
                "icon": data["weather"][0]["icon"]
            }
        else:
            error = "City not found. Please enter a valid city."
    return render_template(
        "index.html",
        weather=weather,
        error=error
    )
if __name__ == "__main__":
    app.run(debug=True)