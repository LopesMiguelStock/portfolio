n = 20 
L1 = []
L2 = []

for k in range(1, int(n**0.5)+1):
    if n%k==0:
        L1.insert(k)
        L2.insert(n//k)

L= L1+L2
print(L)