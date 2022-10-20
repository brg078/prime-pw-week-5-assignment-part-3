console.log('***** Music Collection *****');

let collection = [];
//end task 1

function addToCollection (title, artist, yearPublished){
    console.log('in add to collection');
    let newAlbum = {
        title,
        artist,
        yearPublished,
    };
    collection.push(newAlbum);
    console.log(newAlbum);
    return newAlbum;
}//end add to collection task 2

//task 3
addToCollection('Ride the Lightning', 'Metallica', '1984');
addToCollection('Green Onions', 'Booker T. and the MG\'s', '1962');
addToCollection('...And then there was X', 'DMX', '1999');
addToCollection('Dummy', 'Portishead', '1994');
addToCollection('Blue Album', 'Weezer', '1994');
addToCollection('Paranoid', 'Black Sabbath', '1970');

console.log(collection);
//end task 3



//
//
//
//


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