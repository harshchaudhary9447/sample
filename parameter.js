//Parameter = *Default parameter
        //    *Rest parameter
        
        //parameter destructing
        const obj = {
                Name :"Harsh Chaudhary",
                Class : "Int B.tech-M.tech"
        };

        
    function details({name, classs})
    {
        console.log(obj.Name);
        console.log(obj.Class);
    }
    
    
    details(obj);