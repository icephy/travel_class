// 播放聲音的函式
function PlaySound(soundName) {
  // 根據聲音名稱播放對應的聲音
  switch(soundName) {
    case 'hotelLessonOneAConv_001':
      var sound1 = new Audio('https://icephy.github.io/travel_class/audio/sound/hotel_001/A/conversation/hotelLessonOneAConv_001.mp3');
      sound1.play();
      break;
    case 'sound2':
      var sound2 = new Audio('https://icephy.github.io/travel_class/audio/sound/T_002.mp3');
      sound2.play();
      break;
    case 'sound3':
      var sound3 = new Audio('https://icephy.github.io/travel_class/audio/sound/T_003.mp3');
      sound3.play();
      break;
    // 其他聲音的處理
    default:
      // 聲音未定義的情況
      break;
  }
}