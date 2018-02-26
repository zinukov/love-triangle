/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let trianglesCount, s1, s2, s3;
    trianglesCount = 0;
    for( let i=0; i<preferences.length; i++){
        s1 = preferences[i]-1;
        s2 = preferences[s1]-1;
        s3 = preferences[s2]-1;
        if ((s3 == i) && (s1 != s2) && (s2 != s3) && (s1 != s3)){
            trianglesCount++;
        }
    }
    if (trianglesCount > 0) {
        trianglesCount = trianglesCount / 3;
    }
    return trianglesCount;
};
