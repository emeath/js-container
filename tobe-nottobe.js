/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    
    const returnObj = {
        toBe: function(anotherVal) {
            if(val === anotherVal)
                return true
            else
                throw new Error("Not Equal")
        },

        notToBe: function(anotherVal) {
            if(val !== anotherVal)
                return true
            else
                throw new Error("Equal")
        }
    }
    
    return returnObj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */