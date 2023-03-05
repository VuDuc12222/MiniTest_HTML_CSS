var blogs = [ 
{ 
    "head":"Making a design system from scratch",
    "year": "12 Feb 2020",
    "type": "Design, Pattern", 
    "synop": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sinit. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet "
} ,
{ 
    "head":"Making a design system from scratch",
    "year": "12 Feb 2020",
    "type": "Design, Pattern", 
    "synop": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sinit. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet "
} ,
{ 
    "head":"Making a design system from scratch",
    "year": "12 Feb 2020",
    "type": "Design, Pattern", 
    "synop": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sinit. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet "
} ,
{ 
    "head":"Making a design system from scratch",
    "year": "12 Feb 2020",
    "type": "Design, Pattern", 
    "synop": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sinit. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet "
} ,
]


function viewBlog()
{
    
    var blog = document.getElementById("blogs-main");
    for(var ele of blogs)
    {
            var newDiv = document.createElement("div");
            newDiv.className = "flex flex-row justify-evenly self-end w-full h-auto";

        newDiv.append(CreateBlog(ele));
       
         var newBv = document.createElement("div");
            newBv.className = "w-full pl-4";
            newDiv.appendChild(newBv);
    
        blog.appendChild(newDiv);
    }
}

function CreateBlog(ele)
{
    var newBv = document.createElement("div");
    newBv.className = "bg-white h-auto w-[210%] rounded-md mt-4 justify-end  ";
   

    var newHead = document.createElement("p");
    newHead.className = "pl-2 text-2xl text-left font-normal mt-2";
    newHead.appendChild(document.createTextNode(ele.head));

    var newYear = document.createElement("span");
    newYear.className = "pl-2 text-black rounded-lg ";
    newYear.appendChild(document.createTextNode(ele.year));

    var newType = document.createElement("span");
    newType.appendChild(document.createTextNode(ele.type));

    var newSynop = document.createElement("p");
    newSynop.className = " pl-2 pb-2  text-sm mt-4 mb-2 text-left";
    newSynop.appendChild(document.createTextNode(ele.synop));

    newBv.appendChild(newHead);
    newBv.appendChild(newYear);
    newBv.appendChild(document.createTextNode("  |  "));
    newBv.appendChild(newType);
    newBv.appendChild(document.createElement("br"));
    newBv.appendChild(newSynop);  

    return newBv;
}