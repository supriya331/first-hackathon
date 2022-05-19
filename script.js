let getData=async() => {
    try{
        let data=await fetch("https://www.anapioficeandfire.com/api/books");
        let books= await data.json()
        mainContainer.innerHTML="";
        books.forEach(book => {
            display(book)
        });
    }catch(error) {
        console.log(error)
    }
};
getData();