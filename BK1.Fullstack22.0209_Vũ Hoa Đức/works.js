var works = [ 
    { 
        "head":"Let's Learn Illustration", 
        "year": 2021, 
        "type": "Illustration", 
        "synop": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sinit. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"
        },
        { 
            "head":"Let's Learn Illustration", 
            "year": 2021, 
            "type": "Illustration", 
            "synop": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sinit. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"
            },
        { 
                "head":"Let's Learn Illustration", 
                "year": 2021, 
                "type": "Illustration", 
                "synop": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sinit. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"
                },
    ]

function viewWork()
{
    var work = document.getElementById("works");
    for(var ele of works)
    {
        work.append(CreateWork(ele));
        var newHr = document.createElement("hr");
        newHr.className = "w-full ";
        work.appendChild(newHr);
    }
}

function CreateWork(ele)
{
    var newBv = document.createElement("div");
    newBv.className = "flex flex-row items-center justify-start  w-full rounded-lg";
    

    var newImg = document.createElement("img");
    newImg.className = "rounded-xl h-36 w-72 mb-6 mt-4";   
    
        newImg.src = "hqdefault.jpg";
    

    var newDiv = document.createElement("div");
    newDiv.className = "w-full";

    var newHead = document.createElement("p");
    newHead.className = "text-2xl  pl-3 pt-3 mt-18 font-black";
    newHead.appendChild(document.createTextNode(ele.head));

    var newYear = document.createElement("span");
    newYear.className = "ml-4 pl-2 pr-2 bg-blue-800 text-white text-sm rounded-lg font-black";
    newYear.appendChild(document.createTextNode(ele.year));

    var newType = document.createElement("span");
    newType.className="pl-4 text-gray-400 text-sm font-bold"; 
    newType.appendChild(document.createTextNode(ele.type));

    var newSynop = document.createElement("p");
    newSynop.className = "text-sm mt-2 mb-12 w-full ml-4 font-bold";
    newSynop.appendChild(document.createTextNode(ele.synop))

    

    newDiv.appendChild(newHead);
    newDiv.appendChild(newYear);
    
    newDiv.appendChild(newType);

    newDiv.appendChild(document.createElement("br"));
    newDiv.appendChild(newSynop); 

    newBv.appendChild(newImg);
    newBv.appendChild(newDiv);

    return newBv;
}
