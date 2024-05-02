import sys
input = lambda: sys.stdin.readline()
#function

# 같은 최상위 parent인지
def sameParent(v1,v2):
    return getParent(v1) == getParent(v2)

# 최상위 parent 구하기     
def getParent(v):
    if v == parents[v]:
        return v
    return getParent(parents[v])

# 두 정점 parent로 이어주기
def unionParent(v1,v2):
    p1 = getParent(v1)
    p2 = getParent(v2)

    if p1 > p2 :
        parents[p1] = p2
    else:
        parents[p2] = p1


# main

V, E = map(int, input().split())

result = 0
edges =[]
parents = []

# 부모 초기화
for i in range(V):
    parents.append(i)

# 간선 입력, 오름차 sort   
for i in range(E):
    v1, v2 , w = map(int, input().split())
    edges.append([v1-1,v2-1,w])  
edges.sort(key =lambda x:x[2])

maxW =  -1
for e in edges:
    v1, v2, w = e[0], e[1], e[2]
    # 같은 최상위 부모가 아니라면 
    # 부모를 통해 하나의 그룹 판별 
    if not sameParent(v1, v2):
        unionParent(v1, v2)
        maxW= max(maxW, w)
        result += w
print(result - maxW)