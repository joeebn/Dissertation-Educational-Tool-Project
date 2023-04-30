
import firebase_admin

from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials.
cred = credentials.ApplicationDefault('cloud-a535b-firebase-adminsdk-3w5mx-f9aae5f574')

firebase_admin.initialize_app(cred)

db = firestore.client()

obj1 = {
    'Name' : "Joe",
    "Age" : 27
}

data =[obj1]
data