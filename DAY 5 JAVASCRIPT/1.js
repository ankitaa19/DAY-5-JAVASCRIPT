function reg3()
        {
            //Enter a string in text box and convert the entire text in uppercase only if it contain the word Mumbai
            alert("Regular Expression3");
            var x = t1.value;
            var patt = /Mumbai/i
            if(patt.test(x))
            document.getElementById("s1").innerHTML=x.toUpperCase();
            else
            document.getElementById("s1").innerHTML=x;
            
        }