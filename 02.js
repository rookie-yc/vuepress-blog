var searchRange = function(nums, target) {
    const findLeft =(nums, target) => {
        let left = 0, right = nums.length - 1
        while(left <= right) {
            let mid = Math.floor((right - left) / 2 ) + left
            if(nums[mid] > target) {
                right = mid - 1
            } else if (nums[mid] < target) {
                left = mid + 1
            } else if (nums[mid] === target) {
                right = mid - 1
            }
        }
        return left
    }
    let result = new Array(2);
    if(findLeft(nums, target) >= nums.length || nums[findLeft(nums,target) != target]) {
        result = [-1, -1]
    } else {
        result = [findLeft(nums,target), findLeft(nums,target + 1) -1]
    }
    return result
};