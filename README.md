# PetiteTete

## FR
* Name: PetiteTete
* Author: Zmx / Tian
* Type: Stega
* Difficulty: 2/5
* Hint
    * Hint 1
    * Hint 2
* Flag: <To_Be_Defined> 
* Provide to challenger: only the service url.

Une stéga pour les petites tetes :)


### Build

```
docker build -t ctf/petite-tete .
docker run -p8082:8082 -e "PT_FLAG=JESUISUNFLAG" ctf/petite-tete:latest
```

### Solution
cat solve.py
