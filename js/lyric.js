function getdata(){

    const heading = document.getElementById("txthere");
    
    const artist = document.getElementById("artist").value;
    const title = document.getElementById("title").value;
fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`).then((lyricdata) =>{
    console.log(lyricdata);
    const readlyric =  lyricdata.json();
    console.log(readlyric);
    return readlyric;
}).then((readdata) =>{
    const mylyric = readdata.lyrics.replace(/\n/g, '<br />');
    console.log(mylyric);
    heading.innerHTML = `<div class="text-center">Here is ${title} lyrics : </div> <br> ${mylyric}`;
    // document.write(mylyric);
}).catch((error) => {
    heading.innerHTML = "Sorry Couldn't Find This Song";
}) 

}
