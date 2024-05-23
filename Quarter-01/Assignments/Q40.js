// Define a function named make_album that takes three parameters: artist_name (a string), album_title (a string), and an optional tracks (a number)
// The function returns an object that adheres to the Album interface
function make_album(artist_name, album_title, tracks) {
    // Create an object named album with the properties artist and title
    var album = {
        artist: artist_name,
        title: album_title
    };
    // If the tracks parameter is defined, add the tracks property to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    // Return the album object
    return album;
}
// Call the make_album function to create an album object for "The Beatles" and "Abbey Road"
var album1 = make_album("The Beatles", "Abbey Road");
// Call the make_album function to create an album object for "Pink Floyd" and "The Dark Side of the Moon"
var album2 = make_album("Pink Floyd", "The Dark Side of the Moon");
// Call the make_album function to create an album object for "Nirvana" and "Nevermind"
var album3 = make_album("Nirvana", "Nevermind");
// Print the album objects to the console
console.log(album1);
console.log(album2);
console.log(album3);
// Call the make_album function to create an album object for "Heramandi", "IV" with 5 tracks
var album4 = make_album("Heramandi", "IV", 5);
// Print the album object with tracks to the console
console.log(album4);
