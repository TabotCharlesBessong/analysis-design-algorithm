
class Solution:
  
  def maxp3(self,A):
    A = sorted(A)
    
    # picking the highest 3 element 
    hi3 = A[-1] * A[-2] * A[-3]
    
    # picking the 2 lowest and the highest 
    lo2hi1 = A[0] * A[1] * A[-1]
    
    return max(hi3 , lo2hi1)