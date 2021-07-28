qTeams = {aaiec: 400, 
        aaiwc: 60, 
        qai: 200, 
        poc: 100,
        gtm: 50,
        hr: 10
        };
/*
Object.keys returns an array and sort() is a stable sorting method that I have used to sort in descending order
*/
let keysSorted = Object.keys(qTeams).sort(function(a,b){return qTeams[b]-qTeams[a]});

let i;
for(i=0;i<keysSorted.length;i++){
        console.log(keysSorted[i]);
}

/*
OUTPUT:
aaiec
qai
poc
aaiwc
gtm
hr
*/