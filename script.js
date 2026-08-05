
const CONFIG = {
  START_DATE: new Date('2020-08-20T00:00:00'),
  PLAYLIST: [
    { src: 'Yiruma.mp3', name: 'Yiruma' },
    { src: 'song2.mp3', name: 'Song Two' },
    { src: 'song3.mp3', name: 'Song Three' },
  ],
};

const GALLERY_PHOTOS = [
  { src: 'photo1.jpg', alt: 'Memory 1' },
  { src: 'photo2.jpg', alt: 'Memory 2' },
  { src: 'photo3.jpg', alt: 'Memory 3' },
  { src: 'photo4.jpg', alt: 'Memory 4' },
  { src: 'photo5.jpg', alt: 'Memory 5' },
  { src: 'photo6.jpg', alt: 'Memory 6' },
  { src: 'photo7.jpg', alt: 'Memory 7' },
  { src: 'photo8.jpg', alt: 'Memory 8' },
  { src: 'photo9.jpg', alt: 'Memory 9' },
  { src: 'photo10.jpg', alt: 'Memory 10' },
  { src: 'photo11.jpg', alt: 'Memory 11' },
  { src: 'photo12.jpg', alt: 'Memory 12' },
  { src: 'photo13.jpg', alt: 'Memory 13' },
];

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const COLORS = ['#F8BBD0', '#FFFFFF', '#FFD700', '#E91E63'];
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];


const PAGES = [
  { eyebrow: 'Chapter One', title: 'Анхний Уулзалт', subtitle: 'Анхны харцаар.',
    words: ['Хөөрхөн','Хувь тавилан','анхны харц','Холбоо','Мөрөөдөл','Аз жаргал','Үлгэрийн юм шиг','Азтай','Дулаахан','Эхлэл','Бидний түүх','Төсөөлөлшгүй'] },
  { eyebrow: 'Chapter Two', title: 'Хайр дурлалдаа шатахдаа', subtitle: 'Аз жаргалын хаана нэгтээ миний.',
    words: ['Зүрх','Хайр','Үүрд','Үргэлж','Чи','Төгс','Мөрөөдөл','Гэр','My Бүх юм','Амар амгалан','Аз жаргал','Минийх'] },
  { eyebrow: 'Chapter Three', title: 'Чиний хөөрхөн инээд', subtitle: 'Зүрх зогсоох шахана',
    words: ['Инээмсэглэл','Хөөрхөн','Үзэсгэлэнтэй','Хөөрхөн','Баяр баясгалантай','Дулаахан','Хайр татам','Хайртай шүү','Амттай','Angel','Төгс','Гайхалтай',] },
  { eyebrow: 'Chapter Four', title: 'Бидний аз жаргал', subtitle: 'Every road led back to us.',
    words: ['Адал явдал','Хамтдаа','Инээх','Аялах','Хөтлөх','Хүүгээ харах','Дурсамж','Гэр бүл','Хайр','Үнсэлт','Үргэлж','Хамтдаа','Үнсэлт','Тэврэлт'] },
  { eyebrow: 'Chapter Five', title: 'Миний биширдэг зүйлс', subtitle: 'Юу ч хийсэн асуудалгүй',
    words: ['Зөөлөн','Тэвчээртэй','Хөөрхөн','Мундаг ээж','Аймар лаг','Дэгжин','Ухаантай','Дэмжигч','Асрагч',] },
  { eyebrow: 'Chapter Six', title: 'Баярлалаа', subtitle: 'Намайг сонгосонд',
    words: ['Баярлалаа','Талархалаа','Өршөөж хайрлаа','Тайвширж хайрлаа','Уурлахгүй хайраа','Амгалан хайраа','Хамтдаа шүү хайраа','Үнсий','Нөгөө тал нь хаана байна','Энд байнаа'] },
  { eyebrow: 'Chapter Seven', title: 'Зүгээр л байсан зүрх сэтгэлийг', subtitle: 'Яаж чи ингэж өөрчилж чадваа',
    words: ['Өөрчлөлт','Хүсэл','Мөрөөдөл','Зорилго','Өсөлт','Мотивац','Ивээлт','Амьдрал','Ирээдүй','Амьдрал','Хайр'] },
  { eyebrow: 'Chapter Eight', title: 'Бидний хөөрхөн гэр бүл', subtitle: 'Бидний бүтээсэн гэр',
    words: ['Хүүхэд','Ивээлт','Аз Жаргал','Сайн нөхөр','Сайн эхнэр','Аз жаргал','Ирээдүй','Дулаахан','Жаахан л тэсчвэл','Болнодоо','Тайван','Тайван бус','Бидний хүүхдүүд','Бидний дэлхий','Инээд хөөр'] },
  { eyebrow: 'Chapter Nine', title: 'Миний амлалт', subtitle: 'байнашдээ',
    words: ['Дэмжигч','Хүндлэгч','Итгэл даасан','Хамгаалагч бурхан тэнгэр чинь','Нөмөр нөөлөг','Үргэлж хажууд чинь','Үхчихгүй 86','Хайрласаар л','Үргэлж хамт','Love','Тэнэг чинь байнаа'] },
  { eyebrow: 'Chapter Ten', title: 'Бидний мөрөөдөл', subtitle: 'Ирээдүйгээ бүтээсээр л байнадаа',
    words: ['Ирээдүй','Аялал','Гэр','Байшин','Аз жаргал','Хүүхдүүд','Хөгширтлөө хамт','Амар амгалан','Үргэлж','Хамт','Бүх зүйл','Эрүүл энх','Аз жаргал'] },
  { eyebrow: 'Chapter Eleven', title: 'Миний № 1 сонголт', subtitle: 'өдөр болгон, орой болгон',
    words: ['Мийний хөөрхөн','Мийний Гүнж','Мийний хатан','Мийний ааш муут','Мийний №1 сонголт','Мийний Soulmate','Мийний Хайр','Мийний Зүрх','Мийний Сонголт','Мийний аз жаргал','Мийний бүх зүйл'] },
  { eyebrow: 'Chapter Twelve', title: 'Үргэлж бас үргэлж', subtitle: 'Амьдрал яг л эхэлж байна дээ тэ',
    words: ['Үргэлж','Байнга','Хязгааргүй','Мөнхийн','Хайр дурлал','Surprise','Нэг л амьдарна шдээ гэхдээ','Endless Love','Үргэлж чи','Бүх зүйл','❤'] },
];

const LOVE_PHRASES = [
  'Хайртай шүү','Миний хөөрхөн эхнэр','Үргэлж минийх','Үргэлж чинийх','Миний хөөрхөн гүнж',
  'Чиний зөвөө','Баярлалаа','Миний зүрх үргэлж чиний төлөө',
  'Чи л байхад тээ','Үргэлж чамайг сонгоно','Үргэлж хамтдаа',
  'Миний зөвөө','Миний аз жаргал',
];

const SURPRISE_MESSAGES = [
  '❤ Хайртай шүү ❤','Чиний зөв','Миний хөөрхөн гүнж',
  'Амьдарлын минь аз жаргал','Минийн хөөрхөн хайр','Би чамайг үргэлж сонгоно','Үүрдийн хайраа','Гэхдээ бас миний зөв'
];

const FINAL_LINES = ['❤','I Love You','Хайртай шүү','My Beautiful Wife','Миний аз жаргал','Миний гэр','Миний бүх юм','Миний хайр','Үргэлж чинийх','❤'];


const app = document.getElementById('app');
const heartSVG = (cls='') => `<svg class="${cls}" viewBox="0 0 32 29" aria-hidden="true"><path d="M16 29 2.6 16.2C-2.6 11.2 1 2 8.4 2c3 0 5.8 1.7 7.6 4.4C17.8 3.7 20.6 2 23.6 2 31 2 34.6 11.2 29.4 16.2L16 29Z" fill="currentColor"/></svg>`;

function buildHero(){
  const s = document.createElement('section');
  s.className = 'page hero';
  s.id = 'page-hero';
  s.style.setProperty('--wash', 'radial-gradient(120% 100% at 50% 15%, rgba(233,30,99,.28), transparent 60%)');
  s.innerHTML = `
    <div class="word-layer" data-words='${JSON.stringify(LOVE_PHRASES)}'></div>
    <div class="page-copy">
      <div class="hero-heart-glyph">❤</div>
      <h1 class="hero-title">Хөөрхөн Хайрдаа хайртай шүү</h1>
      <p class="hero-sub">Миний бүх зүйл чиний төлөө</p>
      <button class="hero-cta" id="open-heart-btn">Open My Heart</button>
    </div>
    <div class="hero-scroll-hint">Үг болгоныг нь олж уншаарай</div>
  `;
  return s;
}

function buildPage(cfg, i){
  const s = document.createElement('section');
  s.className = 'page';
  s.id = 'page-' + (i + 1);
  const hue = 330 - i * 4;
  s.style.setProperty('--wash', `radial-gradient(120% 100% at 50% ${10 + (i%3)*15}%, hsla(${hue},70%,45%,.22), transparent 60%)`);
  s.innerHTML = `
    <div class="word-layer" data-words='${JSON.stringify(cfg.words)}'></div>
    <div class="page-copy">
      <p class="page-eyebrow">${cfg.eyebrow}</p>
      <h2 class="page-title">${cfg.title}</h2>
      <p class="page-subtitle">${cfg.subtitle}</p>
    </div>
  `;
  return s;
}

function buildGallery(){
  const s = document.createElement('section');
  s.className = 'page';
  s.id = 'page-gallery';
  s.style.setProperty('--wash', 'radial-gradient(120% 100% at 50% 10%, rgba(255,215,0,.16), transparent 60%)');
  const slots = GALLERY_PHOTOS.map((photo, idx) => `
    <div class="heart-frame" data-idx="${idx}" tabindex="0" role="button" aria-label="Open memory ${idx+1}">
      <img src="${photo.src}" alt="${photo.alt || ('Memory ' + (idx + 1))}" loading="lazy">
    </div>`).join('');
  s.innerHTML = `
    <div class="page-copy" style="max-width:900px;">
      <p class="page-eyebrow">A Few Frames</p>
      <h2 class="page-title">Бидний бүтээсэн дурсамж</h2>
      <p class="page-subtitle">Хурданч юмдаа</p>
    </div>
    <div class="gallery-grid">${slots}</div>
  `;
  return s;
}

function buildFinal(){
  const s = document.createElement('section');
  s.className = 'page final-page';
  s.id = 'page-final';
  s.innerHTML = `
    <div class="final-heart">
      <svg viewBox="0 0 32 29" aria-hidden="true">
        <defs>
          <radialGradient id="finalGrad" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#FFD700"/>
            <stop offset="45%" stop-color="#E91E63"/>
            <stop offset="100%" stop-color="#6A1B3F"/>
          </radialGradient>
        </defs>
        <path d="M16 29 2.6 16.2C-2.6 11.2 1 2 8.4 2c3 0 5.8 1.7 7.6 4.4C17.8 3.7 20.6 2 23.6 2 31 2 34.6 11.2 29.4 16.2L16 29Z" fill="url(#finalGrad)"/>
      </svg>
    </div>
    <div class="typing-line" id="final-typing" aria-live="polite"><span class="typing-cursor">&nbsp;</span></div>
    <div class="final-tagline" id="final-tagline">❤ FOREVER AND ALWAYS ❤</div>
  `;
  return s;
}

app.appendChild(buildHero());
PAGES.forEach((cfg, i) => app.appendChild(buildPage(cfg, i)));
app.appendChild(buildGallery());
app.appendChild(buildFinal());

document.getElementById('open-heart-btn').addEventListener('click', (e) => {
  spawnBurst(e.clientX, e.clientY, 26);
  document.getElementById('page-1').scrollIntoView({ behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
});


const allSections = Array.from(document.querySelectorAll('.page'));
const dotsNav = document.getElementById('page-dots');
allSections.forEach((sec, i) => {
  const b = document.createElement('button');
  b.setAttribute('aria-label', 'Go to section ' + (i + 1));
  b.addEventListener('click', () => sec.scrollIntoView({ behavior: REDUCED_MOTION ? 'auto' : 'smooth' }));
  dotsNav.appendChild(b);
});
const dotButtons = Array.from(dotsNav.children);


let activeSection = allSections[0];
const wordTimers = new WeakMap();

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const idx = allSections.indexOf(entry.target);
    if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
      activeSection = entry.target;
      dotButtons.forEach((d, i) => d.classList.toggle('active', i === idx));
      startWordLoop(entry.target);
      if (entry.target.id === 'page-final') runFinalSequence();
    } else {
      stopWordLoop(entry.target);
    }
  });
}, { threshold: [0, 0.55, 1] });
allSections.forEach((s) => io.observe(s));


function startWordLoop(section){
  if (wordTimers.has(section)) return;
  if (section.id === 'page-gallery' || section.id === 'page-final') return;
  const layer = section.querySelector('.word-layer');
  if (!layer) return;
  const words = JSON.parse(layer.dataset.words || '[]');
  const tick = () => {
    spawnWord(layer, words);
    const t = setTimeout(tick, rand(200, 600));
    wordTimers.set(section, t);
  };
  tick();
}
function stopWordLoop(section){
  const t = wordTimers.get(section);
  if (t) { clearTimeout(t); wordTimers.delete(section); }
}

function spawnWord(layer, words){
  if (document.querySelectorAll('.floating-word').length > 40) return; // perf guard
  const useLovePhrase = Math.random() < 0.22;
  const text = useLovePhrase ? pick(LOVE_PHRASES) : pick(words);
  const el = document.createElement('span');
  el.className = 'floating-word';
  el.textContent = text;

  const size = rand(1, 2.4);
  const color = pick(COLORS);
  const left = rand(6, 90);
  const top = rand(12, 82);
  const dur = rand(3000, 5000);
  const rot0 = rand(-14, 14);
  const rot1 = rand(-6, 6);
  const opacity = rand(.55, .95);

  el.style.left = left + '%';
  el.style.top = top + '%';
  el.style.fontSize = size + 'rem';
  el.style.color = color;
  el.style.setProperty('--rot0', rot0 + 'deg');
  el.style.setProperty('--rot1', rot1 + 'deg');
  el.style.setProperty('--op', opacity);
  el.style.animationName = 'wordRise';
  el.style.animationDuration = dur + 'ms';

  el.addEventListener('click', (e) => {
    e.stopPropagation();
    const r = el.getBoundingClientRect();
    spawnBurst(r.left + r.width / 2, r.top + r.height / 2, 14);
    el.remove();
  });

  layer.appendChild(el);


  const willBurst = Math.random() < 0.14;
  const life = willBurst ? rand(800, dur * 0.6) : dur;
  setTimeout(() => {
    if (!el.isConnected) return;
    if (willBurst) {
      const r = el.getBoundingClientRect();
      spawnBurst(r.left + r.width / 2, r.top + r.height / 2, 20);
    }
    el.remove();
  }, life);
}


const fxLayer = document.getElementById('fx-layer');
function spawnBurst(x, y, count = 16){
  if (REDUCED_MOTION) count = Math.min(count, 6);
  for (let i = 0; i < count; i++) {
    const h = document.createElement('span');
    h.className = 'burst-heart';
    h.textContent = Math.random() < 0.5 ? '❤' : '✦';
    const angle = rand(0, Math.PI * 2);
    const dist = rand(40, 140);
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;
    h.style.left = x + 'px';
    h.style.top = y + 'px';
    h.style.color = pick(COLORS);
    h.style.fontSize = rand(10, 20) + 'px';
    h.style.setProperty('--dx', dx + 'px');
    h.style.setProperty('--dy', dy + 'px');
    h.style.setProperty('--rot', rand(-180, 180) + 'deg');
    h.style.setProperty('--dur', rand(600, 1000) + 'ms');
    fxLayer.appendChild(h);
    h.addEventListener('animationend', () => h.remove());
  }
}
document.addEventListener('click', (e) => {
  if (e.target.closest('.floating-word, .field-heart, .heart-frame, button, a, input')) return;
  spawnBurst(e.clientX, e.clientY, 10);
});


const cursorLayer = document.getElementById('cursor-layer');
let lastTrail = 0;
if (!REDUCED_MOTION && matchMedia('(pointer:fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    const now = performance.now();
    if (now - lastTrail < 70) return;
    lastTrail = now;
    const h = document.createElement('span');
    h.className = 'trail-heart';
    h.textContent = '❤';
    h.style.left = e.clientX + 'px';
    h.style.top = e.clientY + 'px';
    h.style.color = pick(COLORS);
    cursorLayer.appendChild(h);
    h.addEventListener('animationend', () => h.remove());
  });
}


let heartClickCount = 0;
function spawnFieldHearts(n = 12){
  for (let i = 0; i < n; i++) {
    const b = document.createElement('button');
    b.className = 'field-heart';
    b.innerHTML = '❤';
    b.setAttribute('aria-label', 'A little floating heart');
    b.style.left = rand(4, 94) + 'vw';
    b.style.top = rand(20, 92) + 'vh';
    b.style.setProperty('--fs', rand(14, 30) + 'px');
    b.style.setProperty('--fdur', rand(10, 18) + 's');
    b.style.setProperty('--fdelay', rand(0, 8) + 's');
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      spawnBurst(e.clientX, e.clientY, 12);
      heartClickCount++;
      if (heartClickCount >= 10) {
        heartClickCount = 0;
        showHiddenMessage();
      }
    });
    document.body.appendChild(b);
  }
}
spawnFieldHearts(REDUCED_MOTION ? 6 : 12);

function showHiddenMessage(){
  document.getElementById('hidden-message-overlay').classList.add('show');
}
document.getElementById('close-hidden').addEventListener('click', () => {
  document.getElementById('hidden-message-overlay').classList.remove('show');
});


const surpriseOverlay = document.getElementById('surprise-overlay');
const surpriseText = document.getElementById('surprise-text');
function scheduleSurprise(){
  setTimeout(() => {
    surpriseText.textContent = pick(SURPRISE_MESSAGES);
    surpriseOverlay.classList.remove('show');
    void surpriseOverlay.offsetWidth; // restart animation
    surpriseOverlay.classList.add('show');
    scheduleSurprise();
  }, rand(20000, 30000));
}
scheduleSurprise();


function pad(n){ return String(n).padStart(2, '0'); }
function updateCounter(){
  const now = new Date();
  let start = CONFIG.START_DATE;
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let mins = now.getMinutes() - start.getMinutes();
  let secs = now.getSeconds() - start.getSeconds();
  if (secs < 0) { secs += 60; mins--; }
  if (mins < 0) { mins += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) { months += 12; years--; }
  document.getElementById('c-years').textContent = years;
  document.getElementById('c-months').textContent = months;
  document.getElementById('c-days').textContent = days;
  document.getElementById('c-hours').textContent = pad(hours);
  document.getElementById('c-mins').textContent = pad(mins);
  document.getElementById('c-secs').textContent = pad(secs);
}
updateCounter();
setInterval(updateCounter, 1000);


const audio = document.getElementById('bg-audio');
const musicToggle = document.getElementById('music-toggle');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const muteToggle = document.getElementById('mute-toggle');
const iconVol = document.getElementById('icon-vol');
const iconMute = document.getElementById('icon-mute');
const volumeSlider = document.getElementById('volume');
audio.volume = 0.5;

function setPlayingIcon(isPlaying){
  iconPlay.hidden = isPlaying;
  iconPause.hidden = !isPlaying;
  musicToggle.setAttribute('aria-label', isPlaying ? 'Pause music' : 'Play music');
}
musicToggle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().then(() => setPlayingIcon(true)).catch(() => setPlayingIcon(false));
  } else {
    audio.pause();
    setPlayingIcon(false);
  }
});
muteToggle.addEventListener('click', () => {
  audio.muted = !audio.muted;
  iconVol.hidden = audio.muted;
  iconMute.hidden = !audio.muted;
});
volumeSlider.addEventListener('input', () => { audio.volume = parseFloat(volumeSlider.value); });


window.addEventListener('load', () => {
  audio.muted = true;
  audio.play().then(() => {
    setPlayingIcon(true);
    iconVol.hidden = true; iconMute.hidden = false;
  }).catch(() => setPlayingIcon(false));
});

function unmuteOnce(){
  if (audio.muted) {
    audio.muted = false;
    iconVol.hidden = false; iconMute.hidden = true;
  }
  window.removeEventListener('click', unmuteOnce);
  window.removeEventListener('keydown', unmuteOnce);
}
window.addEventListener('click', unmuteOnce);
window.addEventListener('keydown', unmuteOnce);

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.heart-frame').forEach((frame) => {
  frame.addEventListener('click', () => {
    const img = frame.querySelector('img');
    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('show');
    }
  });
  frame.addEventListener('keydown', (e) => { if (e.key === 'Enter') frame.click(); });
});
document.getElementById('lightbox-close').addEventListener('click', () => lightbox.classList.remove('show'));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('show'); });


let finalPlayed = false;
function runFinalSequence(){
  if (finalPlayed) return;
  finalPlayed = true;
  const finalSection = document.getElementById('page-final');
  const typingEl = document.getElementById('final-typing');
  const tagline = document.getElementById('final-tagline');

  let confettiInterval = setInterval(() => spawnConfettiHeart(finalSection), 140);
  setTimeout(() => clearInterval(confettiInterval), 6000);

  let fwCount = 0;
  const fwInterval = setInterval(() => {
    spawnFirework(finalSection);
    if (++fwCount >= 6) clearInterval(fwInterval);
  }, 700);

  typeLines(FINAL_LINES, typingEl, () => {
    tagline.classList.add('show');
    setInterval(() => spawnRisingHeart(finalSection), 260);
  });
}

function typeLines(lines, el, onDone){
  let li = 0;
  const cursor = '<span class="typing-cursor">&nbsp;</span>';
  const next = () => {
    if (li >= lines.length) { el.innerHTML = lines[lines.length - 1] + cursor; onDone(); return; }
    const line = lines[li];
    let ci = 0;
    el.innerHTML = cursor;
    const typeChar = () => {
      if (ci <= line.length) {
        el.innerHTML = line.slice(0, ci) + cursor;
        ci++;
        setTimeout(typeChar, REDUCED_MOTION ? 0 : 70);
      } else {
        li++;
        setTimeout(next, 550);
      }
    };
    typeChar();
  };
  next();
}

function spawnConfettiHeart(container){
  const h = document.createElement('span');
  h.className = 'confetti-heart';
  h.innerHTML = '❤';
  h.style.left = rand(0, 100) + '%';
  h.style.fontSize = rand(12, 26) + 'px';
  h.style.color = pick(COLORS);
  h.style.animationDuration = rand(3500, 6500) + 'ms';
  container.appendChild(h);
  setTimeout(() => h.remove(), 7000);
}
function spawnRisingHeart(container){
  const h = document.createElement('span');
  h.className = 'rising-heart';
  h.innerHTML = '❤';
  h.style.left = rand(2, 98) + '%';
  h.style.fontSize = rand(14, 30) + 'px';
  h.style.color = pick(COLORS);
  h.style.animationDuration = rand(6000, 11000) + 'ms';
  container.appendChild(h);
  setTimeout(() => h.remove(), 11500);
}
function spawnFirework(container){
  const fw = document.createElement('div');
  fw.className = 'firework';
  const cx = rand(15, 85), cy = rand(15, 60);
  fw.style.left = cx + '%';
  fw.style.top = cy + '%';
  const n = 18;
  for (let i = 0; i < n; i++) {
    const p = document.createElement('span');
    const angle = (Math.PI * 2 * i) / n;
    const dist = rand(50, 110);
    p.style.setProperty('--fx', Math.cos(angle) * dist + 'px');
    p.style.setProperty('--fy', Math.sin(angle) * dist + 'px');
    p.style.background = pick(COLORS);
    fw.appendChild(p);
  }
  container.appendChild(fw);
  setTimeout(() => fw.remove(), 1200);
}

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H, DPR;
function resize(){
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth; H = window.innerHeight;
  canvas.width = W * DPR; canvas.height = H * DPR;
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}
resize();
window.addEventListener('resize', resize);

const isSmall = window.innerWidth < 700;
const COUNTS = isSmall
  ? { stars: 60, hearts: 16, petals: 10, sparkles: 10 }
  : { stars: 130, hearts: 30, petals: 18, sparkles: 18 };

function heartPath(size){
  const p = new Path2D();
  p.moveTo(0, size * 0.3);
  p.bezierCurveTo(-size * 0.5, -size * 0.3, -size, size * 0.15, 0, size);
  p.bezierCurveTo(size, size * 0.15, size * 0.5, -size * 0.3, 0, size * 0.3);
  return p;
}

class Star {
  constructor(){ this.reset(); }
  reset(){ this.x = rand(0, W); this.y = rand(0, H); this.r = rand(0.5, 1.8); this.phase = rand(0, Math.PI * 2); this.speed = rand(0.02, 0.06); }
  update(t){ this.o = 0.35 + 0.65 * Math.abs(Math.sin(t * this.speed + this.phase)); }
  draw(){ ctx.globalAlpha = this.o; ctx.fillStyle = '#FFFFFF'; ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, 7); ctx.fill(); }
}
class FloatHeart {
  constructor(){ this.reset(true); }
  reset(initial){
    this.x = rand(0, W); this.y = initial ? rand(0, H) : H + 20;
    this.size = rand(4, 13); this.speed = rand(0.15, 0.5);
    this.sway = rand(0.3, 1.1); this.swaySeed = rand(0, Math.PI * 2);
    this.rot = rand(0, Math.PI * 2); this.rotSpeed = rand(-0.004, 0.004);
    this.o = rand(0.15, 0.55); this.color = pick(['#F8BBD0', '#E91E63', '#FFD700']);
  }
  update(t){
    this.y -= this.speed; this.x += Math.sin(t * 0.001 + this.swaySeed) * this.sway * 0.06;
    this.rot += this.rotSpeed;
    if (this.y < -20) this.reset(false);
  }
  draw(){
    ctx.save(); ctx.globalAlpha = this.o; ctx.translate(this.x, this.y); ctx.rotate(this.rot);
    ctx.fillStyle = this.color; ctx.fill(heartPath(this.size)); ctx.restore();
  }
}
class Petal {
  constructor(){ this.reset(true); }
  reset(initial){
    this.x = rand(0, W); this.y = initial ? rand(0, H) : -20;
    this.size = rand(4, 9); this.speed = rand(0.2, 0.6);
    this.drift = rand(-0.4, 0.4); this.rot = rand(0, Math.PI * 2); this.rotSpeed = rand(-0.01, 0.01);
    this.o = rand(0.25, 0.6);
  }
  update(){ this.y += this.speed; this.x += this.drift; this.rot += this.rotSpeed; if (this.y > H + 20) this.reset(false); }
  draw(){
    ctx.save(); ctx.globalAlpha = this.o; ctx.translate(this.x, this.y); ctx.rotate(this.rot);
    ctx.fillStyle = '#E91E63'; ctx.beginPath(); ctx.ellipse(0, 0, this.size, this.size * 0.55, 0, 0, 7); ctx.fill(); ctx.restore();
  }
}
class Sparkle {
  constructor(){ this.reset(); }
  reset(){ this.x = rand(0, W); this.y = rand(0, H); this.life = 0; this.maxLife = rand(60, 140); this.size = rand(1.5, 3.5); }
  update(){ this.life++; if (this.life > this.maxLife) this.reset(); }
  draw(){
    const p = this.life / this.maxLife; const o = Math.sin(p * Math.PI);
    ctx.globalAlpha = o; ctx.fillStyle = '#FFD700';
    ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, 7); ctx.fill();
  }
}
class Butterfly {
  constructor(){ this.reset(); }
  reset(){
    this.x = -30; this.y = rand(H * 0.15, H * 0.75); this.speed = rand(0.6, 1.1);
    this.amp = rand(15, 40); this.freq = rand(0.02, 0.05); this.seed = rand(0, 999);
    this.color = pick(['#F8BBD0', '#FFD700']); this.active = false;
    this.delay = rand(4000, 14000);
    setTimeout(() => { this.active = true; }, this.delay);
  }
  update(t){
    if (!this.active) return;
    this.x += this.speed; this.y += Math.sin((this.x + this.seed) * this.freq) * 0.6;
    if (this.x > W + 30) this.reset();
  }
  draw(t){
    if (!this.active) return;
    const flap = Math.sin(t * 0.02) * 0.5 + 0.5;
    ctx.save(); ctx.translate(this.x, this.y); ctx.globalAlpha = 0.75; ctx.fillStyle = this.color;
    ctx.beginPath(); ctx.ellipse(-4, 0, 5, 3 + flap * 3, 0.4, 0, 7); ctx.fill();
    ctx.beginPath(); ctx.ellipse(4, 0, 5, 3 + flap * 3, -0.4, 0, 7); ctx.fill();
    ctx.restore();
  }
}

const stars = Array.from({ length: COUNTS.stars }, () => new Star());
const hearts = Array.from({ length: COUNTS.hearts }, () => new FloatHeart());
const petals = Array.from({ length: COUNTS.petals }, () => new Petal());
const sparkles = Array.from({ length: COUNTS.sparkles }, () => new Sparkle());
const butterflies = Array.from({ length: 2 }, () => new Butterfly());

function drawLightRays(t){
  ctx.save();
  ctx.globalAlpha = 0.06 + 0.03 * Math.sin(t * 0.0003);
  const grad = ctx.createLinearGradient(W * 0.2, 0, W * 0.8, H);
  grad.addColorStop(0, '#FFD700'); grad.addColorStop(1, 'transparent');
  ctx.fillStyle = grad;
  ctx.translate(W * (0.3 + 0.1 * Math.sin(t * 0.00015)), 0);
  ctx.beginPath();
  ctx.moveTo(0, 0); ctx.lineTo(W * 0.25, 0); ctx.lineTo(W * 0.05, H); ctx.lineTo(-W * 0.15, H);
  ctx.closePath(); ctx.fill();
  ctx.restore();
}

let running = true;
document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) requestAnimationFrame(loop); });

function loop(t){
  if (!running) return;
  ctx.clearRect(0, 0, W, H);
  drawLightRays(t);
  stars.forEach((s) => { s.update(t * 0.06); s.draw(); });
  petals.forEach((p) => { p.update(); p.draw(); });
  hearts.forEach((h) => { h.update(t); h.draw(); });
  sparkles.forEach((s) => { s.update(); s.draw(); });
  butterflies.forEach((b) => { b.update(t); b.draw(t); });
  ctx.globalAlpha = 1;
  if (!REDUCED_MOTION) requestAnimationFrame(loop);
}
if (REDUCED_MOTION) {
 
  ctx.clearRect(0, 0, W, H);
  stars.forEach((s) => { s.update(0); s.draw(); });
  petals.forEach((p) => p.draw());
} else {
  requestAnimationFrame(loop);
}
