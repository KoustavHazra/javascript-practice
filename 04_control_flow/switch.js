// switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3;

switch (month) {
    case 1:
        console.log("janurary");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;

    default:
        break;
};

/*
The reason we are adding a break keyword here after every cases, is because 
in JavaScript, if let's say there is no break keywords used after any of the cases
and if case 3 is mathched with the value, then case 4 , case 5 ... all the other 
cases ( except default case ) will run. And we don't want that, we want only to run
the matched case. That's why we use break keyword here.

Also default will not run even if there is no break keyword. It will only run when there
is no cases matched.
*/
