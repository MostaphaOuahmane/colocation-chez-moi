// var prenom = new Array(6);
// prenom [0] = "ahmed";
// prenom [1] = "ali";
// prenom [2] = 55;
// prenom [3] = "mostapah";
// prenom [4] = 0;
// prenom [5] = 1234;

// var prenom = new Array ("amr","ali","tamer")
//     prenom [3] = "omer";
//     prenom [4] = 456;


// var prenom =["fqs","fdv","vv","se","erg",22,222222,333333333333,3333333];

// for (x = 0; x <prenom.length; x++) {
//   document.write(prenom [x] + "<br>");
// }

// Arrays ثنائية الابعاد

var num1 = [12,12,30,34,50,23];
var num2 = [10,20,40,50,60,70];
var num3 = [1,2,3,4,5,6,7,8,9,0];
var all = [num1,num2,num3];

for(row = 0 ; row < all.length ; row++) {
    for(col=0 ;col  <(all[row].length);col++) {
        document.write(all[row][col]+ " ; ")

    }
    document.write("<br>");
}

