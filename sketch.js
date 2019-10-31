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
                formula: "pi*pow(Radius,2)"
            },
            {
                info: ["Diameter"],
                formula: "pi*pow(Diameter/2,2)"
            }
        ]
    },
    {
        name:"Trapez",
        formulas: [
            {
                info: ["a", "c", "Højde"],
                formula: "1/2*(a+c)*Højde"
            }
        ]
    },
    {
        name:"Cirkeludsnit",
        formulas: [
            {
                info: ["Grader", "Radius"],
                formula: "1/2*pow(Radius,2)*(Grader/180*pi-sin(Grader/180*pi))"
            },{
                info: ["Radianer", "Radius"],
                formula: "1/2*pow(Radius,2)*(Radianer-sin(Radianer))"
            }
        ]
    },
    {
        name:"Regulær polygon",
        formulas: [
            {
                info: ["Sidelængde", "Sider"],
                formula: "1/4*Sider*pow(Sidelængde,2)*atan(pi/Sider)"
            }
        ]
    },
    {
        name:"Cirkelring",
        formulas: [
            {
                info: ["Indre radius", "Ydre radius"],
                formula: "pi*(pow(Ydre radius,2)-pow(Indre radius,2))"
            }
        ]
    },
    {
        name:"Parallelogram",
        formulas: [
            {
                info: ["b", "Højde"],
                formula: "b*Højde"
            },
            {
                info: ["a", "b", "Radianer"],
                formula: "a*b*sin(Radianer)"
            },
            {
                info: ["a", "b", "Grader"],
                formula: "a*b*sin(Grader/180*pi)"
            }
        ]
    },
    {
        name:"Rombe",
        formulas: [
            {
                info: ["Diagonal 1", "Diagonal 2"],
                formula: "1/2*Diagonal 1*Diagonal 2"
            },
            {
                info: ["a", "Radianer"],
                formula: "sin(Radianer)*pow(a,2)"
            },
            {
                info: ["a", "b", "Grader"],
                formula: "sin(Grader/180*pi)*pow(a,2)"
            }
        ]
    },
    {
        name:"Trekant",
        formulas: [
            {
                info: ["Højde", "Grundlinje"],
                formula: "Højde*Grundlinje/2"
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
    var print="";
    if(d=="areal") {
        print+="<h1 style=\"margin-left: 20px;\">"+areallist[i].name+"</h1>";
        print+="<div style=\"margin-left: 80px; width: 50vw;\"><hr>"
        for(var j=0;j<areallist[i].formulas.length;j++) {
            var shape=areallist[i].formulas[j];
            print+="<b>"+shape.formula+"<br><br></b>";
            for(var info=0;info<shape.info.length;info++) {
                print+="<div>"+shape.info[info]+"<br><input type=\"text\" id=\""+i+"areal"+j+"info"+info+"\"></div><br>";
            }
            print+="<span id=\""+i+"arealspan"+j+"\"></span>";
            print+="<button class=\"submitbutton\" onclick=\"calculate('areal',"+i+","+j+",'"+i+"areal"+j+"')\">Beregn</button>";
            print+="<br><hr><br>";
        }
        print+="</div>"
    }
    document.getElementById("common").innerHTML=print;
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
function calculate(type, i, j, id) {
    if(type="areal") {
        var formula=areallist[i].formulas[j];
        var newformula=formula.formula;
        newformula=newformula.replace(new RegExp('pi', 'g'), ""+Math.PI);
        for(var a=0;a<formula.info.length;a++) {
            var inf=document.getElementById(i+"areal"+j+"info"+a);
            inf=inf.value;
            newformula=newformula.replace(new RegExp(formula.info[a], 'g'),inf);
        }
        document.getElementById(i+"arealspan"+j).innerHTML=eval(newformula)+"<br>";
    }
}