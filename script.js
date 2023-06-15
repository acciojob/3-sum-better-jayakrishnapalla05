function threeSum(arr, target) {
// write your code here
	arr.sort((a,b) => a-b);
	let res=Number.MAX_VALUE;
	for(let i=0; i<arr.length-2; i++)
		{
			let j=i+1;
			let k=arr.length-1;
			while(j<k)
				{
					let sum=arr[i]+arr[j]+arr[k];
					if(Math.abs(target-sum) < Math.abs(target-res))
					{
						res=sum;
					}
					if(sum>target)
					{
						k--;
					}
					else
					{
						j++;
					}
				}
		}
	return res;
	
  
}

module.exports = threeSum;
