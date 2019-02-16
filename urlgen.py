#This is the same thing, it generates a mix between Numbers and letters.
import uuid

def py_url_gen(string_length=10):
    random = str(uuid.uuid4()) 
    random = random.replace("-","") #We dont want "-" in our code, so we replace it with null
    return random[0:string_length] 


print(my_random_string(6)) 
