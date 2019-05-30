var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function() {
                      for (let input in this.playlists) {
                      let insideP =  this.playlists[input]
                      console.log(`${insideP.id}: ${insideP.name} - ${insideP.tracks.length} tracks`);
                      }
                    },
  printTracks: function() {
                      for (let input in this.tracks) {
                      let insideP =  this.tracks[input]
                      console.log(`${insideP.id}: ${insideP.name} by ${insideP.artist} (${insideP.album})`);
                      }
                    },
  printPlaylist: function(playlistId) {
                      let route = this.playlists[playlistId];
                      console.log(`${route.id}: ${route.name} - ${route.tracks.length} tracks`) ;
                      // console.log(route.id + " : " route.name + " - " + route.tracks.length + " tracks") ???
                      for (let tracksLoop of route.tracks) {
                      var tracksRoute = this.tracks[tracksLoop];
                      console.log(`${tracksLoop}: ${tracksRoute.name} by ${tracksRoute.artist} (${tracksRoute.album})`);
                      }
                    },
  addTrackToPlaylist: function(trackId, playlistId) {
                      library.playlists[playlistId].tracks.push(trackId) ;
                      // if ((library.tracks).hasOwnProperty(trackId) && (library.playlists).hasOwnProperty(playlistId)) {
                      //          library.playlists[playlistId].tracks.push(trackId);
                      //          console.log(library.playlists[playlistId].tracks);
                      //        }

                      //        else if (!(library.tracks.hasOwnProperty(trackId))) {
                      //          console.log("TrackID Doesn't exist")
                      //        }

                      //        else if (!(library.playlists.hasOwnProperty(playlistId))){
                      //          console.log("PlaylistId Doesn't exist")
                      //        }

                      //        else {
                      //          console.log("PlaylistId & TrackID Doesn't exist")
                      //        }
                      console.log(this.playlists[playlistId].tracks)
                    },
  uid: function() {
                      return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                  },
  addTrack: function(name, artist, album) {
                      // the function[uid] automatically adds this to libary.tracks, and name: name is okay since the key can never be a variable, so basically the object name is the only one that calls the variable
                      this.tracks[this.uid()] = { id: this.uid(),
                                              name: name,
                                              artist: artist,
                                              album: album }
                        // library.tracks.t123456 = { pizza: 123, coffee: "strong" }
                      console.log(library.tracks)
                    },
  addPlaylist: function(name) {
                      // let newPlaylist = {}
                      let newPlaylist = { id: this.uid(),
                                        name: name,
                                        tracks: [] }
                      this.playlists[this.uid()] = newPlaylist
                      console.log(library.playlists)
                    }
}


// FUNCTIONS TO IMPLEMENT:
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
library.printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
library.printTracks(library) ;


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
library.printPlaylist("p01") ;


// adds an existing track to an existing playlist
library.addTrackToPlaylist("t01", "p02") ;


// generates a unique id
// (use this for addTrack and addPlaylist)


// adds a track to the library
library.addTrack("Symphony7", "Beethoven", "Classical");


// adds a playlist to the library
library.addPlaylist("Whatever Music")



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}