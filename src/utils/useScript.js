
const useScript =  url =>  {
    return new Promise((resolve, reject) =>{
        const script = document.createElement("script");

        script.src = url;
        script.async = false;
    
        document.body.appendChild(script);
        resolve();
    } )
   
};

export default useScript;