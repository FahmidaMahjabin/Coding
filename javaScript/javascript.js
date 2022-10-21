var decimalNumber = 34;
var binary = decimalNumber.toString(8);
console.log(binary)
// Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
// 1.triangle hote hole 3 ta number nite hobe jar duitar summation always 1 ta number er valur cheye boro hobe
// 2. 3 ta bahu thakbe length1, length2 , length3 
// input = list of numbers 
// output = number of triangles 
// step1 : initialize noOfTriangles = 0
// step2: initialize korbo length1 list er first element 
// step3:length2 = length1 er porer elemnt 
// step4: summation of length1 and length2 ber korbo 
// step4:ei summation er sathe length2 er por theke list er last element porjonto compare korbo j summation >= length3 kina 
//     step4.1: true hole count korbo else porer element e chole jabo 
// step5:length3 element shesh hoye gele length2 increase kore porer element e jabo and  go to step4
// step6:length2 element shesh hoye gele length1 elemenet increase korbo and to step3

function findNumberOfTriangles(listOflengths){
    var noOfTriangles = 0;
    for(var index = 0; index < listOflengths.length; index++ ){
        var length1 = listOflengths[index];
        length2 = listOflengths[index+1];
        
        for(var j = listOflengths.indexOf(length2)+1; j <= listOflengths.length; j++){
            var summationOfTwoLengths = length1 + length2;
            length3 = listOflengths[j];
            if(summationOfTwoLengths >= length3){
                noOfTriangles += 1; 
            }
            length2 = listOflengths[index+2]
            
            // step 5 
        }

    }
    return noOfTriangles
}


// list1 = [4, 2, 3, 4]
// loop1:
// step1:length1 = 4
//     step1.1:length2 = 2 
//         step1.1.1.1: length3 = 3
//         step1.1.2:if length1 + length2 >= length3
//         step1.1.2:if 4 + 2 >= 3
//         step1.1.2:if 6 >= 3
//         step 1.1.2:if true:
//             countTriangles = 1
        
 
// function  = getmaxLength
// input = two lengths 
// step1: compare the two values 
//     step1.1:if length1 > length2 then maxLength = length1 
//     step2:else maxLength  = length2 

function getMaxLength(length1, length2){
    if (length1 >= length2){
        return length1;
    }else{
        return length2;
    }
    
}
// input = listOflengths 
// output = number of triangles 
// step1: list theke ekta kore element nibo length1 hishebe
//     step1.1:next element theke ekta kore element nibo length2 hishebe 
//         step1.l.1:next element nibo length3 hishebe 
//         step1.1.2:find max length 
//          step1.1.3: if dui bahur length er summation maximum er cheye boro hoy then countTriangle += 1
// step2: return countTriangles

function findNoOfTriangles(listOflengths){
    var noOfTriangles = 0;
    var summationOfTwoLengths = 0;
    for(var index = 0; index < listOflengths.length; index++){
        var length1 = listOflengths[index];
        for(var j = index+1 ; j < listOflengths.length; j++){
            var length2 = listOflengths[j];
            for(var k = j+1; k < listOflengths.length; k++){
                var length3 = listOflengths[k];
                var maxLength = getMaxLength(length1, length2);
                maxLength = getMaxLength(maxLength, length3);
                if(leng1 + length2 + length3 - maxLength > maxLength){
                    noOfTriangles += 1
                }
            }
        }

    }
    return noOfTriangles
}


list1 = [2, 2, 3, 4]
console.log(findNoOfTriangles(list1))

