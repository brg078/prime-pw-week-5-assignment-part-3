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

function showCollection(myMusic) {
    console.log('in showCollection function');
    for (i=0; i<myMusic.length; i++) {
        console.log(myMusic[i].title.toUpperCase() + ' by ' + myMusic[i].artist.toUpperCase() + ' published in ' + myMusic[i].yearPublished.toUpperCase());
    }  
}

showCollection(collection);
//end task 4


function findByArtist(artistSearch){
    console.log('List of album matches found for', artistSearch,':')
    let albumList =[];
    for (i=0; i<collection.length; i++){
        if (collection[i].artist == artistSearch ){
            albumList.push(collection[i].title);
            console.log(albumList);        
        }

    }       
}

findByArtist('Black Sabbath');
findByArtist('Daft Punk');
//end task 5