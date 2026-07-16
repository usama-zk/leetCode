var largestRectangleArea = function(heights) {
    let maxArea=0;
    let stack=[];
    heights.push(0);
    let n=heights.length
    for(let i=0;i<n;i++)
    {
        while(stack.length>0 && heights[stack[stack.length-1]]>heights[i])
        {
            let index=stack.pop();
            let width=i-index;
            maxArea=Math.max(heights[index],width*heights[i],maxArea);
            stack.push(i);
        }
        stack.push(i)
    }
};
