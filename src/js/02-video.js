import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const IFRAME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (event) {
  localStorage.setItem(IFRAME_KEY, event.seconds);
};

player.on('timeupdate', throttle (onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(IFRAME_KEY)) || 0);

