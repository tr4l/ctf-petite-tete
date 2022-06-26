import requests 

debug = 0;
URL = "http://127.0.0.1:8082/thumb?id="
thumb = 0
flag ="";
finish = False;

while (finish == False) :
  r = requests.get(url = URL + str(thumb))

  count = 0;
  binary = "";
  for key in r.headers.keys():
      if (count >= debug and count < (8 + debug)):
        binary += "1" if key.split("-")[1][0].isupper() else "0"
      count = count + 1;
  print (binary);
  as_integer = int(binary, 2)
  as_char = chr(as_integer)
  flag = flag + as_char
  thumb = thumb + 1
  if (binary == "00000000"):
    finish = True
print (flag)
