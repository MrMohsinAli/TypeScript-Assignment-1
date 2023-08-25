function make_album(artist:string,title:string,tracks?:number): object 
{
  let album = 
  {
    artist: artist,
    title: title,
    tracks: tracks
  };
  return album;
}
  
  console.log(make_album("Billie Eilish","Lovely"));

  console.log(make_album("One Direction","÷(Night Changes)",20));

  console.log(make_album("Weeknd","Blinding Lights"));
  
  console.log(make_album("Imagine Dragons","Enemy",12));