// playSound.js

// 播放聲音的函式
function playSound(soundUrl) {
    // 創建 Audio 物件並設置 src 為聲音檔案的外部連結
    var sound = new Audio(soundUrl);
    // 播放聲音
    sound.play();
  }
  
  // 綁定按鈕點擊事件
  document.getElementById('playButton1').addEventListener('click', function() {
    playSound('https://drive.usercontent.google.com/download?id=1e2Fub2IELSqY7TDLzn3eDXNFIduW1Kiy&export=download&authuser=5&confirm=t&uuid=f2f79cc1-a5b8-4f49-82af-dba9bd38d731&at=APZUnTXR8SjqwERKrs3nw7nY4zRV:1714028512891');
  });
  
  document.getElementById('playButton2').addEventListener('click', function() {
    playSound('https://github.com/icephy/travel_class/blob/main/audio/sound/T_002.mp3');
  });
  
  document.getElementById('playButton3').addEventListener('click', function() {
    playSound('https://github.com/icephy/travel_class/blob/main/audio/sound/T_003.mp3');
  });
  
  document.getElementById('playButton4').addEventListener('click', function() {
    playSound('https://example.com/path/to/your/sound/sound4.mp3');
  });
  
  document.getElementById('playButton5').addEventListener('click', function() {
    playSound('https://example.com/path/to/your/sound/sound5.mp3');
  });