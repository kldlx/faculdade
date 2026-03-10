import time # Importando uma biblioteca pra utilizar o time.sleep
print ('Thread1') # Mostrando Thread1
for i in range(1, 11): # Utilizando o FOR pra imprimir os números que estiverem entre 1 e 11 sem contar o último
    print(i) # Imprimindo I
    time.sleep(0.5) # Tempo de intervalo para imprimir os números

print('\nThread2') # Mostrando Thread1
for i in range(50, 61): # Utilizando o FOR pra imprimir os números que estiverem entre 50 e 61 sem contar o último
    print(i) # Imprimindo I
    time.sleep(0.5) # Tempo de intervalo para imprimir os números
