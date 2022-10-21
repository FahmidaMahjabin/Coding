import requests
import json
response = requests.get("https://api.stackexchange.com/2.3/answers?order=desc&sort=activity&site=stackoverflow")
print(response)
# print(response.json())
x = requests.get('https://w3schools.com')
print(x.status_code)