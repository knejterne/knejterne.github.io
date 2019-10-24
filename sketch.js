var site="";
var buttonHtml="";
var areallist=[
    {
        name:"Rektangel",
        formulas: [
            {
                info: ["Længde", "Højde"],
                formula: "Længde*Højde"
            }
        ]
    },
    {
        name:"Cirkel",
        formulas: [
            {
                info: ["Radius"],
                formula: "pi*Radius*Radius"
            }
        ],
        formulas: [
            {
                info: ["Diameter"],
                formula: "pi*pow(Diameter/2,2)"
            }
        ]
    }
];
var rumfanglist=[

]
function setup() {
    noCanvas();
    
}
function draw() {

}
function loadShape(d, i) {
    document.getElementById("common").innerHTML="";
    if(d=="areal") {
        document.getElementById("common").innerHTML=areallist[i].name;
    }
}
function loadSite(loadedSite) {
    site=loadedSite;
    console.log(site);
    buttonHtml="<center>";
    if(site=="areal") {
        for(var i=0;i<areallist.length;i++) {
            buttonHtml+="<button class=\"shapebuttons\" onclick=\"loadShape(\'areal\',"+i+")\">"+areallist[i].name+"</button>";
        }
    }else{
        for(var i=0;i<rumfanglist.length;i++) {
            buttonHtml+="<button class=\"shapebuttons\" onclick=\"loadShape(\'rumfang\',"+i+")\">"+rumfanglist[i].name+"</button>";
        }
    }
    buttonHtml+="</center>";
    document.getElementById("common").innerHTML=buttonHtml;
}