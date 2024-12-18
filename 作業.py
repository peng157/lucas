from 迴文 import is_p
with open('20241215.txt' ,'r',encoding='utf-8') as f:
    f_content=f.readlines()
    n=len(f_content[:-1])
    for i in range(n):
        print(f'第{i+1}列:{f_content[i]}',end='')
        print(f'第{i+1}列:{is_p(f_content[i])}')