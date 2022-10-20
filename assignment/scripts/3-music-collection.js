console.log('***** Music Collection *****');

let collection = [];
//task 1

function addToCollection (title, artist, yearPublished){
    console.log('in add to collection');
    let newAlbum = {
        title,
        artist,
        yearPublished,
    };
    collection.push(newAlbum);
    return newAlbum;
}//end add to collection












let album1 = {
    title: 'xxx',
    artist: 'xxxartist',
    yearPublished: 2001,
}  //end album1

addToCollection(album1);



//function findByArtist(artist){
//    let artistList =[];
//    for (let album of collection){
//      if(album.Artist===artist){
//        artistList.push(album)
 //     }
 //   }return artistList;
 // }

 // function findByArtist(artist){
 //     artistAlbums = [];
 //     for (let i = 0; i < collection.length; i++){
 //         if (collection[i].artist.toUpperCase() === artist.toUpperCase()){
 //             //console.log("Found artist album!");
 //             foundAlbum = collection[i].title;
 //             artistAlbums.push(foundAlbum);
  //        } 
   //       else {
 //             //console.log(artist, ' is not found in this album');
   //       }
  //    }
   //   return(artistAlbums);
  //}