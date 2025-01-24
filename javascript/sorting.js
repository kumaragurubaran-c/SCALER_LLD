const library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 32450}
]

function sort(library){
   return library.sort((a,b)=> a.title.localeCompare(b.title));
}
const sortedTitles = sort(library);
console.log(sortedTitles)