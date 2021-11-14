function println(text) {
document.write(text+"<br>");
}
// for(x = 1 ; x <= 5 ; x++) {
//     println (x);
// }
//  for (x = 10 ; x >= 0; x--) {
//      println(x);
//  }

// for(x = 0 ; x <= 10 ;x += 2 ) {
//     println(x);
// }

// for(x = 1 ; x <= 10 ;x += 2 ) {
//     println(x);
// }


// loop 
// for(x = 1 ; x <= 3 ; x++) {
//     println("X="+x);
//     for(y = 1 ; y <= 2; y++) {
//         println("&nbsp;X+" + x + " ; Y = " + y);
//         // &nbsp; ya3ni sib masafa fi html 9Bl tiba3T X
//     }
// }

// // while 
// var x = 1;
// while(x <= 3) {
//     println (x);
//     x++;
// }

// do while 
//  while tatah9 mn chart toma t9oum btnfid code 
//  do while tonfid a code toma tataha9a9 mn chjart ya3ni drori an tonfidha 
// 3ala l2a9l mara wahd 
// var x = 1;
// do {
//     println(x);
//     x++;
// }while(x <= 6);

// loop statement break 
//  hona loop statwa9f 3nda 6 ln tB3 7
//  for( x = 1 ; x <= 100 ; x++)  {
//      println(x);
//      if (x==10) {
//          break;
//      }
//  }
// loop statement continue 
//  hona loop statastamir  walan tatba3 10 WA 50 WA 80 3nda 79 satatwa9f
for( x = 1 ; x <= 100 ; x++)  {

    if (x==10 ||x==50||x >= 80) {
       continue;
    }
    println(x);
}

 