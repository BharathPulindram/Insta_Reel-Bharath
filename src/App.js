import React from "react";
import "./App.css";
import VideoCard from "./VideoCard";

function App() {
  return (
    <div className="app">
      <div className="app__top">
        {/* image and text */}
        <img
          className="app__logo"
          src="https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png"
          alt="logo"
        />
        <h1>Instagram Reels</h1>
      </div>
      <div className="app__videos">
        {/* container of videos */}
        <VideoCard
          channel="Bharath Pulindram"
          avatar="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          song="Beautiful Butterfly on a flower"
          url="https://player.vimeo.com/external/290685023.sd.mp4?s=ad22708f3d42b969971092656785834d1657bcad&profile_id=164&oauth2_token_id=57447761"
          likes={1299}
          shares={599}
        />
        <VideoCard
          channel="Bharath Pulindram"
          avatar="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          song="Swan in a Lake .."
          url="https://player.vimeo.com/external/210752817.sd.mp4?s=482f81517b5ba0e63923053ee738dd23424158c0&profile_id=164&oauth2_token_id=57447761"
          likes={799}
          shares={399}
        />
        <VideoCard
          channel="Bharath Pulindram"
          avatar="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          song="Time Lapse Video of Night Sky !!"
          url="https://player.vimeo.com/external/189545487.sd.mp4?s=8cd2af1ec08f7ce121a5a6a09c78c05237943524&profile_id=164&oauth2_token_id=57447761"
          likes={999}
          shares={499}
        />
        <VideoCard
          channel="Bharath Pulindram"
          avatar="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          song="Video of Earth"
          url="https://player.vimeo.com/external/216445731.sd.mp4?s=2d745c71f776279b4a9f169cbe507fabcec467c5&profile_id=164&oauth2_token_id=57447761"
          likes={2199}
          shares={1599}
        />
        <VideoCard
          channel="Bharath Pulindram"
          avatar="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          song="Waterfalls nature's beauty !!"
          url="https://player.vimeo.com/external/328428416.sd.mp4?s=39df9f60fdeaeff0f4e3fbf3c1213d395792fc43&profile_id=164&oauth2_token_id=57447761"
          likes={444}
          shares={233}
        />

        <VideoCard
          channel="Bharath Pulindram"
          avatar="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          song="Water Crashing over the rocks.."
          url="https://player.vimeo.com/external/269971860.sd.mp4?s=a3036bd1a9f15c1b31daedad98c06a3b24cdd747&profile_id=164&oauth2_token_id=57447761"
          likes={1999}
          shares={799}
        />
        <VideoCard
          channel="Bharath Pulindram"
          avatar="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          song="Red Leaves in Autumn .."
          url="https://player.vimeo.com/external/310391783.sd.mp4?s=025f42173408ce727dbd8878bdf5f5e0959b72a4&profile_id=164&oauth2_token_id=57447761"
          likes={699}
          shares={499}
        />

        <VideoCard
          channel="Bharath Pulindram"
          avatar="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          song="Fogs over the mountain"
          url="https://player.vimeo.com/external/337026530.sd.mp4?s=5e1bec41e7e0c227bd70d529f3e9f27d333d561e&profile_id=139&oauth2_token_id=57447761"
          likes={1999}
          shares={1499}
        />
        <VideoCard
          channel="Bharath Pulindram"
          avatar="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          song="Waterfalls Flowing"
          url="https://player.vimeo.com/external/308152799.sd.mp4?s=d2fc57e7e5c64a8508479779cfc11178d90859d1&profile_id=164&oauth2_token_id=57447761"
          likes={299}
          shares={199}
        />
        <VideoCard
          channel="Bharath Pulindram"
          avatar="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg"
          song="Sunset with Dramatic sky!"
          url="https://player.vimeo.com/external/330241014.sd.mp4?s=062c0b46884fc98d7468a1c448568785862cd826&profile_id=164&oauth2_token_id=57447761"
          likes={1299}
          shares={499}
        />
      </div>
    </div>
  );
}

export default App;
