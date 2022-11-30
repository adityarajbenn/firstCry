async function fetchData(){
    try{
        let res = await fetch('https://mock-data-server.onrender.com/data');
        return await res.json();
    }catch(e){
        console.log(e);
    }
}
  
export default fetchData;