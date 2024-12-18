def is_p(s: str) -> str: #isalnum() 過濾非字母數字字符（例如標點符號或空格）。
    left= 0
    right=len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1    
        if s[left].lower() != s[right].lower():
            return '不是迴文'
        else:
            left += 1
            right -= 1
            return '是迴文'     
        
if __name__=='__main__':
    print()