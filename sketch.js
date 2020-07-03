var site="";
var buttonHtml="";
var areallist=[
    {
        name:"Rektangel",
        formulas: [
            {
                info: ["Længde", "Højde"],
                formula: "'Længde'*'Højde'",
                niceformula: "'Længde' \\cdot 'Højde'"
            }
        ]
    },
    {
        name:"Cirkel",
        formulas: [
            {
                info: ["Radius"],
                formula: "'pi'*pow('Radius',2)",
                niceformula: "\\pi \\cdot 'Radius'^2"
            },
            {
                info: ["Diameter"],
                formula: "'pi'*pow('Diameter'/2,2)",
                niceformula: "\\pi \\cdot \\frac{'Diameter'}{2}^2"
            }
        ]
    },
    {
        name:"Trapez",
        formulas: [
            {
                info: ["a", "c", "Højde"],
                formula: "1/2*('a'+'c')*'Højde'",
                niceformula: "\\frac{1}{2} \\cdot ('a'+'c') \\cdot 'Højde'"
            }
        ]
    },
    {
        name:"Cirkeludsnit",
        formulas: [
            {
                info: ["Grader", "Radius"],
                formula: "1/2*pow('Radius',2)*('Grader'/180*'pi'-sin('Grader'/180*'pi'))",
                niceformula: "\\frac{1}{2} \\cdot 'Radius'^2 \\cdot (\\frac{'Grader'}{180} \\cdot \\pi - \\sin(\\frac{'Grader'}{180} \\cdot \\pi))"
            },{
                info: ["Radianer", "Radius"],
                formula: "1/2*pow('Radius',2)*('Radianer'-sin('Radianer'))",
                niceformula: "\\frac{1}{2} \\cdot 'Radius'^2 \\cdot ('Radianer' - \\sin('Radianer'))"
            }
        ]
    },
    {
        name:"Regulær polygon",
        formulas: [
            {
                info: ["Sidelængde", "Sider"],
                formula: "1/4*'Sider'*pow('Sidelængde',2)*atan('pi'/'Sider')",
                niceformula: "\\frac{1}{4} \\cdot 'Sider' \\cdot 'Sidelængde'^2 \\cdot \\tan^{-1}(\\frac{\\pi}{'Sider'})"
            }
        ]
    },
    {
        name:"Cirkelring",
        formulas: [
            {
                info: ["Indre Radius", "Ydre Radius"],
                formula: "'pi'*(pow('Ydre Radius',2)-pow('Indre Radius',2))",
                niceformula: "\\pi \\cdot ('Ydre Radius'^2 - 'Indre Radius'^2)"
            }
        ]
    },
    {
        name:"Parallelogram",
        formulas: [
            {
                info: ["b", "Højde"],
                formula: "'b'*'Højde'",
                niceformula: "'b' \\cdot 'Højde'"
            },
            {
                info: ["a", "b", "Radianer"],
                formula: "'a'*'b'*sin('Radianer')",
                niceformula: "'a' \\cdot 'b' \\cdot \\sin('Radianer')"
            },
            {
                info: ["a", "b", "Grader"],
                formula: "'a'*'b'*sin('Grader'/180*'pi')",
                niceformula: "'a' \\cdot 'b' \\cdot \\sin(\\frac{'Grader'}{180} \\cdot \\pi)"
            }
        ]
    },
    {
        name:"Rombe",
        formulas: [
            {
                info: ["Diagonal 1", "Diagonal 2"],
                formula: "1/2*'Diagonal 1'*'Diagonal 2'",
                niceformula: "\\frac{1}{2} \\cdot 'Diagonal 1' \\cdot 'Diagonal 2'"
            },
            {
                info: ["a", "Radianer"],
                formula: "sin('Radianer')*pow('a',2)",
                niceformula: "\\sin('Radianer') \\cdot 'a'^2"
            },
            {
                info: ["a", "Grader"],
                formula: "sin('Grader'/180*'pi')*pow('a',2)",
                niceformula: "\\sin(\\frac{'Grader'}{180} \\cdot \\pi) \\cdot 'a'^2"
            }
        ]
    },
    {
        name:"Trekant",
        formulas: [
            {
                info: ["Højde", "Grundlinje"],
                formula: "'Højde'*'Grundlinje'/2",
                niceformula: "\\frac{'Højde' \\cdot 'Grundlinje'}{2}"
            }
        ]
    }
];
var rumfanglist=[
    {
        name:"Kasse",
        formulas: [
            {
                info: ["Længde", "Højde","Bredde"],
                formula: "'Længde'*'Højde'*'Bredde'",
                niceformula: "'Længde' \\cdot 'Højde' \\cdot 'Bredde'"
            }
        ]
    },
    {
        name:"Cylinder",
        formulas: [
            {
                info: ["Radius","Højde"],
                formula: "'pi'*pow('Radius',2)*'Højde'",
                niceformula: "\\pi \\cdot 'Radius'^2 \\cdot 'Højde'"
            },
            {
                info: ["Diameter","Højde"],
                formula: "'pi'*pow('Diameter'/2,2)*'Højde'",
                niceformula: "\\pi \\cdot \\frac{'Diameter'}{2}^2 \\cdot 'Højde'"
            }
        ]
    },
    {
        name:"Regulær prisme",
        formulas: [
            {
                info: ["Sidelængde", "Sider","Højde"],
                formula: "1/4*'Sider'*pow('Sidelængde',2)*atan('pi'/'Sider')*'Højde'",
                niceformula: "\\frac{1}{4} \\cdot 'Sider' \\cdot 'Sidelængde'^2 \\cdot \\tan^{-1}(\\frac{\\pi}{'Sider'}) \\cdot 'Højde'"
            }
        ]
    },
    {
        name:"Prisme",
        formulas: [
            {
                info: ["Højde", "Grundlinje","Prisme højde"],
                formula: "'Højde'*'Grundlinje'/2*'Prisme højde'",
                niceformula: "\\frac{'Højde' \\cdot 'Grundlinje'}{2} \\cdot 'Prisme højde'"
            }
        ]
    },
    {
        name:"Pyramide",
        formulas: [
            {
                info: ["Højde", "Grundflade"],
                formula: "1/3*'Højde'*'Grundflade'",
                niceformula: "\\frac{1}{3} \\cdot 'Højde' \\cdot 'Grundflade'"
            },
            {
                info: ["Højde","Sider","Sidelængde" ],
                formula: "1/3*'Højde'*1/4*'Sider'*pow('Sidelængde',2)*atan('pi'/'Sider')",
                niceformula: "\\frac{1}{3} \\cdot 'Højde' \\cdot \\frac{1}{4} \\cdot 'Sider' \\cdot 'Sidelængde'^2 \\cdot \\tan^{-1}(\\frac{\\pi}{'Sider'})"
            }
        ]
    },
    {
        name:"Kegle",
        formulas: [
            {
                info: ["Højde", "Grundflade"],
                formula: "1/3*'Højde'*'Grundflade'",
                niceformula: "\\frac{1}{3} \\cdot 'Højde' \\cdot 'Grundflade'"
            },
            {
                info: ["Højde","Radius"],
                formula: "1/3*'pi'*pow('Radius',2)*'Højde'",
                niceformula: "\\frac{1}{3} \\cdot \\pi \\cdot 'Radius'^2 \\cdot 'Højde'"
            },
            {
                info: ["Højde","Diameter"],
                formula: "1/3*'pi'*pow('Diameter'/2,2)*'Højde'",
                niceformula: "\\frac{1}{3} \\cdot \\pi \\cdot \\frac{'Diameter'}{2}^2 \\cdot 'Højde'"
            }
        ]
    }
];
var enhedliste = [
    {
        name: "Længde",
        list: [
            {
                name: "mm",
                value: "0.001"
            },
            {
                name: "cm",
                value: "0.01"
            },
            {
                name: "dm",
                value: "0.1"
            },
            {
                name: "m",
                value: "1"
            },
            {
                name: "dam",
                value: "10"
            },
            {
                name: "hm",
                value: "100"
            },
            {
                name: "km",
                value: "1000"
            }
        ]
    },
    {
        name: "Areal"
    },
    {
        name: "Rumfang"
    },
    {
        name: "Temperatur"
    },
    {
        name: "Radianer - Grader"
    },
    {
        name: "Tid"
    },
    {
        name: "Vægt"
    },
    {
        name: "Talsystemer"
    }
]
var functions = [
    areallist,
    rumfanglist,
    enhedliste
];
function setup() {
    noCanvas();
    noLoop();
}
function loadShape(loadedSite, i) {
    document.getElementById("common").innerHTML="";
    var print="";
    var ids=[];
    var l = functions[loadedSite];
    print+="<h1 style=\"margin-left: 20px;\">"+l[i].name+"</h1>";
    print+="<div style=\"margin-left: 80px; width: 50vw;\"><hr>"
    if(loadedSite!=2) {
        for(var j=0;j<l[i].formulas.length;j++) {
            var shape=l[i].formulas[j];
            var niceformula=l[i].formulas[j].niceformula;
            for(var info=0;info<l[i].formulas[j].info.length;info++) {
                niceformula=niceformula.replace(new RegExp("'"+l[i].formulas[j].info[info]+"'", "g"),l[i].formulas[j].info[info]);
            }
            print+="<div id=\"mathjax"+i+"-"+loadedSite+"-"+j+"\" class=\"mathdiv\">\\("+niceformula+"\\)</div><br>";
            ids[ids.length]="mathjax"+i+"-"+loadedSite+"-"+j;
            for(var info=0;info<shape.info.length;info++) {
                print+="<div>"+shape.info[info]+"<br><input type=\"text\" id=\""+i+"-"+loadedSite+"-"+j+"info"+info+"\"></div><br>";
            }
            print+="<span id=\""+i+"-"+loadedSite+"span"+j+"\"></span>";
            print+="<button class=\"submitbutton\" onclick=\"calculate("+loadedSite+","+i+","+j+",'"+i+"-"+loadedSite+"-"+j+"')\">Beregn</button>";
            print+="<br><hr><br>";
        }
    }else{
        print+="<select name=\"1\" id=\"select1\">"
        for(var a=0;a<l[i].list.length;a++) {
            print+="<option value=\""+l[i].list[a].name+"\">"+l[i].list[a].name+"</option>";
        }
        print+="</select>&nbsp;&nbsp;&nbsp;";
        print+="<input type=\"text\" id=\"input\"><br><br>"
        print+="<select name=\"2\" id=\"select2\">"
        for(var b=0;b<l[i].list.length;b++) {
            print+="<option value=\""+l[i].list[b].name+"\">"+l[i].list[b].name+"</option>";
        }
        print+="</select>&nbsp;&nbsp;&nbsp;<span id=\"calculate"+i+"-"+2+"-"+0+"\"></span><br><br>";
        print+="<button class=\"submitbutton\" onclick=\"calculate("+loadedSite+","+i+",0,1)\">Beregn</button>";
        print+="<br><hr><br>";
    }
    print+="</div>"
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
    var l = functions[loadedSite];
    for(var i=0;i<l.length;i++) {
        buttonHtml+="<button class=\"shapebuttons\" onclick=\"loadShape("+loadedSite+","+i+")\">"+l[i].name+"</button>";
    }
    buttonHtml+="</center>";
    document.getElementById("common").innerHTML=buttonHtml;
}
function calculate(type, i, j, id) {
    var l = functions[type];
    if(type!=2) {
        var formula=l[i].formulas[j];
        var newformula=formula.formula;
        newformula=newformula.replace(new RegExp('pi', 'g'), ""+Math.PI);
        var niceformula=l[i].formulas[j].niceformula;
        for(var a=0;a<formula.info.length;a++) {
            var inf=document.getElementById(i+"-"+type+"-"+j+"info"+a);
            inf=inf.value;
            newformula=newformula.replace(new RegExp("'"+formula.info[a]+"'", 'g'),inf);
            niceformula=niceformula.replace(new RegExp("'"+formula.info[a]+"'", "g"), inf);
        }
        document.getElementById(i+"-"+type+"span"+j).innerHTML="<div id=\"calculate"+i+"-"+type+"-"+j+"\">\\("+niceformula+" = "+eval(newformula)+"\\)</div><br>"+"<br>";
    }else{
        var v = parseFloat(document.getElementById("input").value);
        var output = v * enhedliste[i].list[document.getElementById("select1").selectedIndex].value / enhedliste[i].list[document.getElementById("select2").selectedIndex].value;
        document.getElementById("calculate"+i+"-"+2+"-"+j).innerText = "\\("+v+" \\cdot "+(enhedliste[i].list[document.getElementById("select1").selectedIndex].value / enhedliste[i].list[document.getElementById("select2").selectedIndex].value)+"="+output+"\\)";
        console.log(output);
    }
    MathJax.typesetClear();
    MathJax.typeset([document.getElementById("calculate"+i+"-"+type+"-"+j)]);
        /*else if(type=="rumfang") {
        var formula=rumfanglist[i].formulas[j];
        var newformula=formula.formula;
        newformula=newformula.replace(new RegExp('pi', 'g'), ""+Math.PI);
        for(var a=0;a<formula.info.length;a++) {
            var inf=document.getElementById(i+"areal"+j+"info"+a);
            inf=inf.value;
            newformula=newformula.replace(new RegExp(formula.info[a], 'g'),inf);
        }
        document.getElementById(i+"arealspan"+j).innerHTML=eval(newformula)+"<br>";
    }*/
}
function homepage() {
    $("#common").load("home.html");
}