var collections = {
    /**
     * Intersects arrA with arrB
     *
     * @param arrA
     *            Array
     * @param arrB
     *            Array
     * @returns Array
     *      the intersection result of arrA and arrB
     */
    intersect : function(arrA, arrB) {

        // Create a new array to hold the intersection result.
        var results = [];

        for ( var i = 0; i < arrA.length; i++) {

            // If arrA[i] exists in arrA
            if (arrA.hasOwnProperty(i)) {

                // and arrB also contains arrA[i],
                if (arrB.indexOf(arrA[i]) !== -1) {

                    // let's put arrA[i] into the results collection.
                    results.push(arrA[i]);
                }
            }
        }

        return results;
    }
};