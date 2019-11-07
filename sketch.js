var site="";
var buttonHtml="";
var areallist=[
    {
        name:"Rektangel",
        formulas: [
            {
                info: ["Længde", "Højde"],
                formula: "Længde*Højde",
                niceformula: "\\(Længde \\cdot Højde\\)"
            }
        ]
    },
    {
        name:"Cirkel",
        formulas: [
            {
                info: ["Radius"],
                formula: "pi*pow(Radius,2)",
                niceformula: "\\(\\pi \\cdot Radius^2\\)"
            },
            {
                info: ["Diameter"],
                formula: "pi*pow(Diameter/2,2)",
                niceformula: "\\(\\pi \\cdot \\frac{Diameter}{2}^2\\)"
            }
        ]
    },
    {
        name:"Trapez",
        formulas: [
            {
                info: ["a", "c", "Højde"],
                formula: "1/2*(a+c)*Højde",
                niceformula: "\\(\\frac{1}{2} \\cdot (a+c) \\cdot Højde\\)"
            }
        ]
    },
    {
        name:"Cirkeludsnit",
        formulas: [
            {
                info: ["Grader", "Radius"],
                formula: "1/2*pow(Radius,2)*(Grader/180*pi-sin(Grader/180*pi))",
                niceformula: "\\(\\frac{1}{2} \\cdot Radius^2 \\cdot (\\frac{Grader}{180} \\cdot \\pi - \\sin(\\frac{Grader}{180} \\cdot \\pi))\\)"
            },{
                info: ["Radianer", "Radius"],
                formula: "1/2*pow(Radius,2)*(Radianer-sin(Radianer))",
                niceformula: "\\(\\frac{1}{2} \\cdot Radius^2 \\cdot (Radianer - \\sin(Radianer))\\)"
            }
        ]
    },
    {
        name:"Regulær polygon",
        formulas: [
            {
                info: ["Sidelængde", "Sider"],
                formula: "1/4*Sider*pow(Sidelængde,2)*atan(pi/Sider)",
                niceformula: "\\(\\frac{1}{4} \\cdot Sider \\cdot Sidelængde^2 \\cdot \\tan^{-1}(\\frac{\\pi}{Sider})\\)"
            }
        ]
    },
    {
        name:"Cirkelring",
        formulas: [
            {
                info: ["Indre Radius", "Ydre Radius"],
                formula: "pi*(pow(Ydre Radius,2)-pow(Indre Radius,2))",
                niceformula: "\\(\\pi \\cdot (Ydre\\text{ }Radius^2 - Indre\\text{ }Radius^2)\\)"
            }
        ]
    },
    {
        name:"Parallelogram",
        formulas: [
            {
                info: ["b", "Højde"],
                formula: "b*Højde",
                niceformula: "\\(b \\cdot Højde\\)"
            },
            {
                info: ["a", "b", "Radianer"],
                formula: "a*b*sin(Radianer)",
                niceformula: "\\(a \\cdot b \\cdot \\sin(Radianer)\\)"
            },
            {
                info: ["a", "b", "Grader"],
                formula: "a*b*sin(Grader/180*pi)",
                niceformula: "\\(a \\cdot b \\cdot \\sin(\\frac{Grader}{180} \\cdot \\pi)\\)"
            }
        ]
    },
    {
        name:"Rombe",
        formulas: [
            {
                info: ["Diagonal 1", "Diagonal 2"],
                formula: "1/2*Diagonal 1*Diagonal 2",
                niceformula: "\\(\\frac{1}{2} \\cdot Diagonal \\text{ } 1 \\cdot Diagonal \\text{ } 2\\)"
            },
            {
                info: ["a", "Radianer"],
                formula: "sin(Radianer)*pow(a,2)",
                niceformula: "\\(\\sin(Radianer) \\cdot a^2\\)"
            },
            {
                info: ["a", "Grader"],
                formula: "sin(Grader/180*pi)*pow(a,2)",
                niceformula: "\\(\\sin(\\frac{Grader}{180} \\cdot \\pi) \\cdot a^2\\)"
            }
        ]
    },
    {
        name:"Trekant",
        formulas: [
            {
                info: ["Højde", "Grundlinje"],
                formula: "Højde*Grundlinje/2",
                niceformula: "\\(\\frac{Højde \\cdot Grundlinje}{2}\\)"
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
    var ids=[];
    if(d=="areal") {
        print+="<h1 style=\"margin-left: 20px;\">"+areallist[i].name+"</h1>";
        print+="<div style=\"margin-left: 80px; width: 50vw;\"><hr>"
        for(var j=0;j<areallist[i].formulas.length;j++) {
            var shape=areallist[i].formulas[j];
            print+="<div id=\"mathjax"+i+"areal"+j+"\" class=\"mathdiv\">"+areallist[i].formulas[j].niceformula+"</div><br>";
            ids[ids.length]="mathjax"+i+"areal"+j;
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
    for(var i=0;i<ids.length;i++) {
        MathJax.typesetClear();
        MathJax.typeset([document.getElementById(ids[i])]);
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