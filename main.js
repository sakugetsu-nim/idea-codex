// ==========================
// Idea Codex main.js (final)
// ==========================

// --------------------------
// Data
// ※ここはあなたの“増量版”に差し替えてOK（配列名は固定）
// --------------------------
const traits = [
  '怠惰','勇敢','孤独','陽気','冷静','臆病','無口','社交的','短気','気まぐれ',
  '誠実','腹黒','大雑把','潔癖','ひねくれ者','夢見がち','実利主義','計算高い','無頓着',
  '理想主義','現実主義','ネガティブ','ポジティブ','慎重','大胆','無表情','毒舌','好奇心旺盛','無関心',
  '陰気','明朗','涙もろい','怒りっぽい','嫉妬深い','親切','冷酷','強情','気弱','ドジ',
  '心優しい','野心的','嘘つき','正直者','楽観的','悲観的','利己的','利他的','責任感が強い','優柔不断',
  'ひたむき','衝動的','のんびり屋','真面目','ちゃっかり者','ぼんやり','抜け目ない','情熱的','堅物','直感型',
  'マイペース','自己犠牲的','空想癖がある','皮肉屋','献身的','合理主義','反抗的','恥ずかしがり屋','口達者',
  '小心者','無愛想','おせっかい','忘れっぽい','勤勉','執念深い','ミステリアス','開けっ広げ','批判的','従順',
  '表情豊か','自己中心的','協調性が高い','依存的','自立的','変わり者','感受性豊か','孤高','人懐こい','天然',
  '楽天家','頑固者','照れ屋','冷めている','熱血','几帳面','自己嫌悪しやすい','責任逃れしがち','信心深い','懐疑的'
];

const characters = [
  'コーギー','魔法使い','AI','少女','幽霊',
  '吸血鬼','妖精','錬金術師','騎士','猫',
  '少年','冒険者','ロボット','占い師','怪盗',
  '村人','忍者','ドラゴン','天使','悪魔',
  '宇宙飛行士','兵士','吟遊詩人','科学者','獣人',
  '人魚','サラリーマン','探偵','王子','王女',
  '修道士','傭兵','妖怪','店主','料理人',
  '博士','怪物','商人','踊り子','画家',
  '詩人','庭師','狩人','記憶喪失の人','夢見る少年',
  '影の存在','双子','召喚士','呪われた人','案内人',
  '時を渡る者','仮面の人物','死神','新聞記者','亡霊',
  '迷子','案山子','囚人','変身する人','海賊',
  '魔物','観測者','教師','子ども','老人',
  '人形','木こり','王','魔女','泥棒',
  '皇帝','村長','詩を喋る犬','記録者','鍵守',
  '神官','逃亡者','操り人形','巫女','夜歩く者',
  '旅人','宇宙人','貴族','道化師','料理下手な猫',
  '片目の少女','仮初の命を持つ者','失語症の青年','記憶のない女の子','転校生',
  '無口な配達人','口が達者な助手','毒舌家の博士','雲の中に住む人','楽器を奏でる魔物',
  '願いを叶える石','小さな神様','封印された勇者','夜しか現れない女の子','壁を抜ける猫'
];

const places = [
  '部屋','空中庭園','図書館','惑星','海辺',
  '深い森','廃墟','異世界','古城','地下室',
  '屋上','砂漠','氷の洞窟','塔の最上階','川辺',
  '村の広場','夢の中','機械都市','山頂','草原',
  '戦場跡','墓地','迷宮','神殿','市場',
  '港町','異空間','月面','森の中の小屋','研究所',
  '寺院','宇宙船の中','学校','遊園地','電車の中',
  '小さなカフェ','夜の公園','水底の都市','神の国','地底',
  '薄明の街','雪原','廃工場','秘密の庭','風の谷',
  '駅のホーム','橋の上','霧の街','魔法の書庫','教会',
  '天空の都市','焚き火のそば','古代の神殿','路地裏','酒場',
  '古い劇場','湖のほとり','洞窟','花畑','満月の下',
  '暗い森の奥','遺跡','時計塔','塔の中','丘の上',
  '木の上の家','鏡の中の世界','水晶の洞窟','閉ざされた村','無人島',
  '狭い路地','魔女の家','絵の中の世界','秘密の部屋','砂時計の中',
  '空飛ぶ船','雲の上','火山地帯','崩れかけた橋','時の狭間',
  '夢の図書館','星の神殿','静かなバス停','海中神殿','地下鉄の終点',
  '黒い湖','赤い月の夜','言葉のない町','無音の空間','光の回廊',
  '記憶の断片','夜明けの野原','旧校舎','異端者の村','追放された都市',
  '冬の山小屋','夏の終わりの浜辺','時計が止まった部屋','枯れた花園','影の国',
  '白い病室','誰もいない交番','閉店後のスーパー','水の匂いがする階段',
  '砂で埋まった駅','地図にない交差点','逆さの塔','雲が降る通り',
  '紙でできた海岸','音だけの路地','影が売られている市場','名前を失う受付',
  '雨が止まらないベランダ','時計の針が落ちている床','燃えない焚き火',
  '窓の外が同じ景色の家','出口のない改札','息が白い夏の街',
  '鍵穴の向こうの部屋','誰かの夢の控え室','古い水族館の裏側',
  '沈黙が積もる広場','文字が剥がれる掲示板','合図のない踏切',
  'ガラスの森','赤い糸が垂れる天井','記憶が乾く洗濯場',
  '夜だけ開く図書室','光が漏れない劇場','音のないエレベーター'
];

const purposes = [
  '祈る','逃げる','戦う','探す','眠る',
  '目覚める','召喚する','封印する','癒す','隠れる',
  '呪う','祝福する','見張る','導く','契約する',
  '修復する','旅に出る','試練を受ける','告白する',
  '記憶を取り戻す','別れを告げる','再会する','許しを請う','償う',
  '変身する','身代わりになる','鏡を見る','鍵を探す','歌う',
  '踊る','叫ぶ','笑う','泣く','手紙を書く',
  '読書する','魔法を学ぶ','秘密を守る','真実を暴く','星を見上げる',
  '月を仰ぐ','風に乗る','炎を灯す','水を操る','動物と話す',
  '絵を描く','料理をする','詩を読む','剣を振るう','愛を誓う',
  '忠誠を誓う','裏切る','儀式を行う','過去を振り返る','未来を視る',
  '夢を見る','音を聴く','光を浴びる','闇に潜る','星座をたどる',
  '遺跡を探る','名を捨てる','名を取り戻す','本を開く','扉を開ける',
  '願う','選ばれる','拒まれる','崇める','見捨てる',
  '命を救う','命を奪う','試す','受け入れる','見届ける',
  '案内する','手を取る','拒絶する','見つめ返す','口づけする',
  '踊り明かす','解き放つ','引き寄せる','離れる','訪ねる',
  '手放す','夢を託す','正体を明かす','存在を証明する','時間を戻す',
  '再び始める','終わらせる','降り立つ','登る','落ちる',
  '観察する','封筒を開く','水に流す','名前を呼ぶ','影を追う',
  '沈黙を選ぶ','沈黙を破る'
];

// --------------------------
// Config / State
// --------------------------
const PLACEHOLDER_TEXT = '結果がここに表示されます。 / Result will appear here.';
const siteURL = 'https://idea.codex.websupportbee.com/';

const FAVORITES_KEY = 'favorites';
const FAVORITES_MAX = 50;

const HISTORY_KEY = 'history';
const HISTORY_MAX = 10;

const state = {
  lastIdea: '',
  lastParts: { trait: '', character: '', place: '', purpose: '' },
};

// --------------------------
// Utils
// --------------------------
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

const buildSentence = (trait, character, place, purpose) => {
  const templates = [
    `『${trait}』な『${character}』は『${place}』で${purpose}。`,
    `『${place}』で、『${trait}』な『${character}』が${purpose}。`,
    `『${trait}』な『${character}』は『${place}』にたどり着き、${purpose}。`,
    `『${place}』には、『${trait}』な『${character}』がいて、${purpose}らしい。`,
  ];
  return rand(templates);
};

const getIdeaText = (outputEl) => {
  const idea = state.lastIdea || outputEl?.textContent || '';
  if (!idea || idea === PLACEHOLDER_TEXT) return '';
  return idea;
};

const flashButton = (btn, text, ms = 900) => {
  if (!btn) return;
  const prev = btn.textContent;
  btn.textContent = text;
  setTimeout(() => (btn.textContent = prev || ''), ms);
};

const legacyCopy = (text) => {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.top = '-9999px';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  ta.setSelectionRange(0, ta.value.length); // iOS対策

  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
};

// --------------------------
// Toast / Animation
// --------------------------
let toastTimer = null;

const showToast = (msg, ms = 1200) => {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), ms);
};

const animateOutput = async (outputEl, nextText) => {
  if (!outputEl) return;
  outputEl.classList.add('is-changing');
  await new Promise((r) => setTimeout(r, 120));
  outputEl.textContent = nextText;
  outputEl.classList.remove('is-changing');
};

// --------------------------
// History
// --------------------------
const readHistory = () => {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch {
    return [];
  }
};

const writeHistory = (items) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(items));
};

const addHistory = (idea) => {
  const items = readHistory();
  if (items[0] === idea) return; // 連続重複を防ぐ
  items.unshift(idea);
  if (items.length > HISTORY_MAX) items.pop();
  writeHistory(items);
};

const renderHistory = (listEl, { onUse } = {}) => {
  if (!listEl) return;

  const items = readHistory();
  listEl.innerHTML = '';

  if (items.length === 0) {
    const li = document.createElement('li');
    li.className = 'history-empty';
    li.textContent = '履歴はありません。 / No history yet.';
    listEl.appendChild(li);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = item;

    const use = document.createElement('button');
    use.type = 'button';
    use.textContent = '表示 / Use';
    use.addEventListener('click', () => onUse?.(item));

    li.appendChild(span);
    li.appendChild(use);
    listEl.appendChild(li);
  });
};

// --------------------------
// Favorites
// --------------------------
const readFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
  } catch {
    return [];
  }
};

const writeFavorites = (items) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(items));
};

const addFavorite = (idea) => {
  const items = readFavorites();
  if (items.includes(idea)) return false;

  items.unshift(idea);
  if (items.length > FAVORITES_MAX) items.pop();
  writeFavorites(items);
  return true;
};

const renderFavorites = (listEl) => {
  if (!listEl) return;

  const items = readFavorites();
  listEl.innerHTML = '';

  if (items.length === 0) {
    const li = document.createElement('li');
    li.className = 'favorite-empty'; // ←CSSが効くようにする
    li.textContent = 'まだお気に入りはありません。気に入ったお題を保存してね。 / No favorites yet.';
    listEl.appendChild(li);
    return;
  }

  items.forEach((item, index) => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = item;

    const del = document.createElement('button');
    del.type = 'button';
    del.textContent = '削除 / Delete';
    del.addEventListener('click', () => {
      const next = readFavorites();
      next.splice(index, 1);
      writeFavorites(next);
      renderFavorites(listEl);
    });

    li.appendChild(span);
    li.appendChild(del);
    listEl.appendChild(li);
  });
};

// --------------------------
// Share
// --------------------------
const shareOnX = (ideaText) => {
  const text = encodeURIComponent(`✩Today's story seed✩\n${ideaText}`);
  const url = encodeURIComponent(siteURL);
  const hashtags = 'writing,prompt,storyidea';
  window.open(
    `https://x.com/intent/post?text=${text}&url=${url}&hashtags=${hashtags}`,
    '_blank',
    'noopener,noreferrer'
  );
};

const shareOnBluesky = (ideaText) => {
  const text = `✩Today's story seed✩\n${ideaText}\n\n${siteURL}`;
  window.open(
    `https://bsky.app/intent/compose?text=${encodeURIComponent(text)}`,
    '_blank',
    'noopener,noreferrer'
  );
};

// --------------------------
// Core: Generate / Reroll
// 無料版：ロックは character/place のみ
// --------------------------
const pickWithLock = (locked, prev, list) => (locked && prev ? prev : rand(list));

const generateIdea = async ({ outputEl, locks }) => {
  const trait = rand(traits);
  const character = pickWithLock(locks.character?.checked, state.lastParts.character, characters);
  const place = pickWithLock(locks.place?.checked, state.lastParts.place, places);
  const purpose = rand(purposes);

  state.lastParts = { trait, character, place, purpose };

  const idea = buildSentence(trait, character, place, purpose);
  state.lastIdea = idea;

  await animateOutput(outputEl, idea);
  addHistory(idea);

  return idea;
};

const reroll = async (key, { outputEl }) => {
  const cur = state.lastParts;

  const next = {
    trait: cur.trait || rand(traits),
    character: cur.character || rand(characters),
    place: cur.place || rand(places),
    purpose: cur.purpose || rand(purposes),
  };

  // 指定だけ回す（ロック無視）
  if (key === 'character') next.character = rand(characters);
  if (key === 'place') next.place = rand(places);

  state.lastParts = next;

  const idea = buildSentence(next.trait, next.character, next.place, next.purpose);
  state.lastIdea = idea;

  await animateOutput(outputEl, idea);
  addHistory(idea);

  return idea;
};

// --------------------------
// Init
// --------------------------
document.addEventListener('DOMContentLoaded', async () => {
  const outputEl = document.getElementById('output');

  const btnGenerate = document.getElementById('btnGenerate');
  const btnRerollCharacter = document.getElementById('btnRerollCharacter');
  const btnRerollPlace = document.getElementById('btnRerollPlace');

  const saveBtn = document.getElementById('saveFavorite');
  const favListEl = document.getElementById('favoriteList');

  const historyListEl = document.getElementById('historyList');

  const copyBtn = document.getElementById('copyIdea');
  const shareXBtn = document.getElementById('shareX');
  const shareBskyBtn = document.getElementById('shareBluesky');

  const locks = {
    character: document.getElementById('lockCharacter'),
    place: document.getElementById('lockPlace'),
  };

  const refreshHistory = () => {
    renderHistory(historyListEl, {
      onUse: async (text) => {
        state.lastIdea = text;
        await animateOutput(outputEl, text);
        showToast('履歴から表示 / Loaded from history');
      },
    });
  };

  // 初期描画
  renderFavorites(favListEl);
  refreshHistory();
  await generateIdea({ outputEl, locks });
  refreshHistory();

  // 生成
  btnGenerate?.addEventListener('click', async () => {
    await generateIdea({ outputEl, locks });
    refreshHistory();
  });

  // リロール
  btnRerollCharacter?.addEventListener('click', async () => {
    await reroll('character', { outputEl });
    refreshHistory();
  });

  btnRerollPlace?.addEventListener('click', async () => {
    await reroll('place', { outputEl });
    refreshHistory();
  });

  // 保存
  saveBtn?.addEventListener('click', async () => {
    const idea = getIdeaText(outputEl);
    if (!idea) return;

    const saved = addFavorite(idea);
    if (!saved) {
      showToast('すでに保存済み / Already saved');
      return;
    }

    renderFavorites(favListEl);
    flashButton(saveBtn, '保存した / Saved', 900);
    showToast('保存しました / Saved');

    await generateIdea({ outputEl, locks });
    refreshHistory();
  });

  // コピー
  copyBtn?.addEventListener('click', async () => {
  const idea = getIdeaText(outputEl);
  if (!idea) return;

  // 1) modern clipboard
  try {
    await navigator.clipboard.writeText(idea);
    flashButton(copyBtn, 'コピーした', 900);
    showToast?.('コピーしました / Copied');
    return;
  } catch {}

  // 2) legacy execCommand (Safari/iOS向け)
  const ok = legacyCopy(idea);
  if (ok) {
    flashButton(copyBtn, 'コピーした', 900);
    showToast?.('コピーしました / Copied');
    return;
  }

  // 3) last resort
  window.prompt('コピーしてください:', idea);
});

  // シェア
  shareXBtn?.addEventListener('click', () => {
    const idea = getIdeaText(outputEl);
    if (idea) shareOnX(idea);
  });

  shareBskyBtn?.addEventListener('click', () => {
    const idea = getIdeaText(outputEl);
    if (idea) shareOnBluesky(idea);
  });

  console.log('[IdeaCodex] init done');
});