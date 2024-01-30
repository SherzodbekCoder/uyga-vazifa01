//1-misol
// function element(arg1) {
//     let num = arg1[0];
  
//     for (let i = 1; i < arg1.length; i++) {
//       if (arg1[i] < num) {
//         num = arg1[i];
//       }
//     }
  
//     return num;
//   }
  

//   let sonlar = [5, 3, 9, 2, 7];
//   let num = element(sonlar);
//   console.log("Eng kichik son:", num);



//2-misol
// function tekIntoqIndekslarYigndisi(arg1) {
//     let son = 0;
  
//     for (let i = 1; i < arg1.length; i += 2) {
//       son += arg1[i];
//     }
  
//     return son;
//   }
  
//   let raqam = [5, 2, 9, 1, 7, 5];
//   let toqIndekslarYigndisi = tekIntoqIndekslarYigndisi(raqam);
//   console.log("Tek indislerin toplamı:", toqIndekslarYigndisi);


//-3misol
// function element(arg1) {
//     let num = [];
//     for (let i = 0; i < arg1.length; i++) {
//       let son = true;
//       if (arg1[i] < 2) {
//         son = false;
//       }
//       for (let j = 2; j < arg1[i]; j++) {
//         if (arg1[i] % j === 0) {
//           son = false;
//           break;
//         }
//       }
//       if (son) {
//         num.push(arg1[i]);
//       }
//     }
//     return num;
//   }




//4-misol
// function son(arg1) {
//     let counter = 0;
//     for (let i = 0; i < arg1.length; i++) {
//       if (arg1[i] % 3 === 0) {
//         counter++;
//       }
//     }
//     return counter;
//   }
