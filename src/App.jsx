import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import React, { useState, useEffect } from 'react';

function App() {
  const [video, setVideo] = useState();
  const [ready, setReady] = useState(false);
  const [gif, setGif] = useState();
  const ffmpeg = createFFmpeg({ log: true });
  useEffect(() => {
    load();
  }, []);

  async function load() {
    await ffmpeg.load();
    setReady(true);
  }
  async function convertToGif() {
    // ffmpeg.FS("writeFile","test.mp4",await)
    // fetchFile()
  }
  return ready ? (
    <div className="App">
      <h2>Convert video to gif</h2>
      <input
        type="file"
        onChange={({ target }) => setVideo(target.files.item(0))}
      />
      {video && (
        <div>
          <video src={URL.createObjectURL(video)} width={500}></video>
          <button onClick={convertToGif}>Convert</button>
        </div>
      )}
      {gif && <img src={gif} />}
    </div>
  ) : (
    <div>
      <h2>Cargando...</h2>
    </div>
  );
}

export default App;
