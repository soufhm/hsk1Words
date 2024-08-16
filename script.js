const words = [
  { chinese: "上", pinyin: "shàng", arabic: "فوق", image: "shang.jfif", audio: "audio/shang.mp3" },
  { chinese: "不", pinyin: "bù", arabic: "لا", image: "bu.jpg", audio: "audio/bu.mp3" },
  { chinese: "个", pinyin: "gè", arabic: "(عداد للأشياء)", image: "ge.jpg", audio: "audio/ge.mp3" },
  { chinese: "书", pinyin: "shū", arabic: "كتاب", image: "shu.jpg", audio: "audio/shu.mp3" },
  { chinese: "买", pinyin: "mǎi", arabic: "يشتري", image: "mai.jpg", audio: "audio/mai.mp3" },
  { chinese: "了", pinyin: "le", arabic: "(علامة الماضي)", image: "le.jpg", audio: "audio/le.mp3" },
  { chinese: "些", pinyin: "xiē", arabic: "بعض", image: "xie.jpg", audio: "audio/xie.mp3" },
  { chinese: "⼈", pinyin: "rén", arabic: "شخص", image: "ren.jpg", audio: "audio/ren.mp3" },
  { chinese: "他", pinyin: "tā", arabic: "هو", image: "ta.jpg", audio: "audio/ta.mp3" },
  { chinese: "会", pinyin: "huì", arabic: "يستطيع", image: "hui.jpg", audio: "audio/hui.mp3" },
  { chinese: "住", pinyin: "zhù", arabic: "يسكن", image: "zhu.jpg", audio: "audio/zhu.mp3" },
  { chinese: "你", pinyin: "nǐ", arabic: "أنت", image: "ni.jpg", audio: "audio/ni.mp3" },
  { chinese: "做", pinyin: "zuò", arabic: "يفعل/يصنع", image: "zuo.jpg", audio: "audio/zuo.mp3" },
  { chinese: "写", pinyin: "xiě", arabic: "يكتب", image: "xie.jpg", audio: "audio/xie^.mp3" }, 
  { chinese: "冷", pinyin: "lěng", arabic: "بارد", image: "leng.jpg", audio: "audio/leng.mp3" },
  { chinese: "⼏", pinyin: "jǐ", arabic: "كم (لعدد قليل)", image: "ji.jpg", audio: "audio/ji.mp3" },
  { chinese: "去", pinyin: "qù", arabic: "يذهب", image: "qu.jpg", audio: "audio/qu.mp3" },
  { chinese: "叫", pinyin: "jiào", arabic: "ينادي/يُسمى", image: "jiao.jpg", audio: "audio/jiao.mp3" },
  { chinese: "号", pinyin: "hào", arabic: "رقم", image: "hao.jpg", audio: "audio/hao.mp3" },
  { chinese: "吃", pinyin: "chī", arabic: "يأكل", image: "chi.jpg", audio: "audio/chi.mp3" },
  { chinese: "吗", pinyin: "ma", arabic: "؟ (للسؤال)", image: "ma.jpg", audio: "audio/ma.mp3" },
  { chinese: "听", pinyin: "tīng", arabic: "يسمع", image: "ting.jpg", audio: "audio/ting.mp3" },
  { chinese: "呢", pinyin: "ne", arabic: "؟ (للسؤال عن شيء مذكور)", image: "ne.jpg", audio: "audio/ne.mp3" },
  { chinese: "和", pinyin: "hé", arabic: "و", image: "he.jpg", audio: "audio/he.mp3" },
  { chinese: "哪", pinyin: "nǎ", arabic: "أي", image: "na.jpg", audio: "audio/na.mp3" },
  { chinese: "喂", pinyin: "wèi", arabic: "مرحباً (عند الرد على الهاتف)", image: "wei.jpg", audio: "audio/wei.mp3" },
  { chinese: "喝", pinyin: "hē", arabic: "يشرب", image: "he.jpg", audio: "audio/he-.mp3" },
  { chinese: "回", pinyin: "huí", arabic: "يعود/يجيب", image: "hui2.jpg", audio: "audio/hui2.mp3" },
  { chinese: "在", pinyin: "zài", arabic: "في/على/عند", image: "zai.jpg", audio: "audio/zai.mp3" },
  { chinese: "坐", pinyin: "zuò", arabic: "يجلس", image: "zuo2.jpg", audio: "audio/zuo2.mp3" },
  { chinese: "块", pinyin: "kuài", arabic: "قطعة/عملة (للعملة الصينية)", image: "kuai.jpg", audio: "audio/kuai.mp3" },
  { chinese: "多", pinyin: "duō", arabic: "كثير/ جدًا", image: "duo.jpg", audio: "audio/duo.mp3" },
  { chinese: "⼤", pinyin: "dà", arabic: "كبير", image: "da.jpg", audio: "audio/da.mp3" },
  { chinese: "太", pinyin: "tài", arabic: "جداً", image: "tai.jpg", audio: "audio/tai.mp3" },
  { chinese: "她", pinyin: "tā", arabic: "هي", image: "ta2.jpg", audio: "audio/ta2.mp3" },
  { chinese: "好", pinyin: "hǎo", arabic: "جيد/نعم", image: "hao2.jpg", audio: "audio/hao2.mp3" },
  { chinese: "字", pinyin: "zì", arabic: "حرف", image: "zi.jpg", audio: "audio/zi.mp3" },
  { chinese: "家", pinyin: "jiā", arabic: "منزل/عائلة", image: "jia.jpg", audio: "audio/jia.mp3" },
  { chinese: "⼩", pinyin: "xiǎo", arabic: "صغير", image: "xiao.jpg", audio: "audio/xiao.mp3" },
  { chinese: "少", pinyin: "shǎo", arabic: "قليل", image: "shao.jpg", audio: "audio/shao.mp3" },
  { chinese: "岁", pinyin: "suì", arabic: "سنة (لعمر شخص)", image: "sui.jpg", audio: "audio/sui.mp3" },
  { chinese: "年", pinyin: "nián", arabic: "سنة", image: "nian.jpg", audio: "audio/nian.mp3" },
  { chinese: "开", pinyin: "kāi", arabic: "يفتح/ يبدأ", image: "kai.jpg", audio: "audio/kai.mp3" },
  { chinese: "很", pinyin: "hěn", arabic: "جدًا", image: "hen.jpg", audio: "audio/hen.mp3" },
  { chinese: "想", pinyin: "xiǎng", arabic: "يفكر/يريد", image: "xiang.jpg", audio: "audio/xiang.mp3" },
  { chinese: "我", pinyin: "wǒ", arabic: "أنا", image: "wo.jpg", audio: "audio/wo.mp3" },
  { chinese: "是", pinyin: "shì", arabic: "هو/يكون/نعم", image: "shi.jpg", audio: "audio/shi.mp3" },
  { chinese: "⽉", pinyin: "yuè", arabic: "شهر", image: "yue.jpg", audio: "audio/yue.mp3" },
  { chinese: "有", pinyin: "yǒu", arabic: "يوجد/لديه", image: "you.jpg", audio: "audio/you.mp3" },
  { chinese: "本", pinyin: "běn", arabic: "(عداد للكتب)", image: "ben.jpg", audio: "audio/ben.mp3" },
  { chinese: "来", pinyin: "lái", arabic: "يأتي", image: "lai.jpg", audio: "audio/lai.mp3" },
  { chinese: "⽔", pinyin: "shuǐ", arabic: "ماء", image: "shui.jpg", audio: "audio/shui.mp3" },
  { chinese: "点", pinyin: "diǎn", arabic: "نقطة/ قليل (من شيء)", image: "dian.jpg", audio: "audio/dian.mp3" },
  { chinese: "热", pinyin: "rè", arabic: "ساخن", image: "re.jpg", audio: "audio/re.mp3" },
  { chinese: "爱", pinyin: "ài", arabic: "يحب", image: "ai.jpg", audio: "audio/ai.mp3" },
  { chinese: "狗", pinyin: "gǒu", arabic: "كلب", image: "gou.jpg", audio: "audio/gou.mp3" },
  { chinese: "猫", pinyin: "māo", arabic: "قطة", image: "mao.jpg", audio: "audio/mao.mp3" },
  { chinese: "的", pinyin: "de", arabic: "(ضمير الملكية)", image: "de.jpg", audio: "audio/de.mp3" },
  { chinese: "看", pinyin: "kàn", arabic: "ينظر", image: "kan.jpg", audio: "audio/kan.mp3" },
  { chinese: "能", pinyin: "néng", arabic: "يستطيع", image: "neng.jpg", audio: "audio/neng.mp3" },
  { chinese: "茶", pinyin: "chá", arabic: "شاي", image: "cha.jpg", audio: "audio/cha.mp3" },
  { chinese: "菜", pinyin: "cài", arabic: "طبق (طعام)", image: "cai.jpg", audio: "audio/cai.mp3" },
  { chinese: "说", pinyin: "shuō", arabic: "يقول/يتحدث", image: "shuo.jpg", audio: "audio/shuo.mp3" },
  { chinese: "请", pinyin: "qǐng", arabic: "من فضلك", image: "qing.jpg", audio: "audio/qing.mp3" },
  { chinese: "读", pinyin: "dú", arabic: "يقرأ", image: "du.jpg", audio: "audio/du.mp3" },
  { chinese: "谁", pinyin: "shéi", arabic: "من", image: "shei.jpg", audio: "audio/shei.mp3" },
  { chinese: "这", pinyin: "zhè", arabic: "هذا (القريب)", image: "zhe.jpg", audio: "audio/zhe.mp3" },
  { chinese: "那", pinyin: "nà", arabic: "ذلك (البعيد)", image: "na2.jpg", audio: "audio/na2.mp3" },
  { chinese: "都", pinyin: "dōu", arabic: "جميعًا", image: "dou.jpg", audio: "audio/dou.mp3" },
  { chinese: "⾥", pinyin: "lǐ", arabic: "داخل", image: "li.jpg", audio: "audio/li.mp3" },
  { chinese: "钱", pinyin: "qián", arabic: "مال", image: "qian.jpg", audio: "audio/qian.mp3" },
  { chinese: "⼀", pinyin: "yī", arabic: "واحد", image: "yi.jpg", audio: "audio/yi.mp3" },
  { chinese: "七", pinyin: "qī", arabic: "سبعة", image: "qi.jpg", audio: "audio/qi.mp3" },
  { chinese: "三", pinyin: "sān", arabic: "ثلاثة", image: "san.jpg", audio: "audio/san.mp3" },
  { chinese: "下", pinyin: "xià", arabic: "تحت/ الأسفل", image: "xia.jpg", audio: "audio/xia.mp3" },
  { chinese: "九", pinyin: "jiǔ", arabic: "تسعة", image: "jiu.jpg", audio: "audio/jiu.mp3" },
  { chinese: "⼆", pinyin: "èr", arabic: "اثنان", image: "er2.jpg", audio: "audio/er2.mp3" },
  { chinese: "五", pinyin: "wǔ", arabic: "خمسة", image: "wu.jpg", audio: "audio/wu.mp3" },
  { chinese: "⼋", pinyin: "bā", arabic: "ثمانية", image: "ba.jpg", audio: "audio/ba.mp3" },
  { chinese: "六", pinyin: "liù", arabic: "ستة", image: "liu.jpg", audio: "audio/liu.mp3" },
  { chinese: "⼗", pinyin: "shí", arabic: "عشرة", image: "shi2.jpg", audio: "audio/shi2.mp3" },
  { chinese: "四", pinyin: "sì", arabic: "أربعة", image: "si.jpg", audio: "audio/si.mp3" },
  { chinese: "上午", pinyin: "shàngwǔ", arabic: "صباحًا", image: "shangwu.jpg", audio: "audio/shangwu.mp3" },
  { chinese: "下午", pinyin: "xiàwǔ", arabic: "بعد الظهر", image: "xiawu.jpg", audio: "audio/xiawu.mp3" },
  { chinese: "下⾬", pinyin: "xiàyǔ", arabic: "تمطر", image: "xiayu.jpg", audio: "audio/xiayu.mp3" },
  { chinese: "东⻄", pinyin: "dōngxi", arabic: "أشياء/شيء", image: "dongxi.jpg", audio: "audio/dongxi.mp3" },
  { chinese: "中午", pinyin: "zhōngwǔ", arabic: "ظهرًا", image: "zhongwu.jpg", audio: "audio/zhongwu.mp3" },
  { chinese: "中国", pinyin: "zhōngguó", arabic: "الصين", image: "zhongguo.jpg", audio: "audio/zhongguo.mp3" },
  { chinese: "什么", pinyin: "shénme", arabic: "ماذا", image: "shenme.jpg", audio: "audio/shenme.mp3" },
  { chinese: "今天", pinyin: "jīntiān", arabic: "اليوم", image: "jintian.jpg", audio: "audio/jintian.mp3" },
  { chinese: "⼉⼦", pinyin: "érzi", arabic: "طفل", image: "haizi.jpg", audio: "audio/erzi.mp3" },
  { chinese: "先⽣", pinyin: "xiānsheng", arabic: "سيد", image: "xiansheng.jpg", audio: "audio/xiansheng.mp3" },
  { chinese: "再见", pinyin: "zàijiàn", arabic: "إلى اللقاء", image: "zaijian.jpg", audio: "audio/zaijian.mp3" },
  { chinese: "分钟", pinyin: "fēnzhōng", arabic: "دقيقة", image: "fenzhong.jpg", audio: "audio/fenzhong.mp3" },
  { chinese: "前⾯", pinyin: "qiánmiàn", arabic: "أمام", image: "qianmian.jpg", audio: "audio/qianmian.mp3" },
  { chinese: "北京", pinyin: "běijīng", arabic: "بكين", image: "beijing.jpg", audio: "audio/beijing.mp3" },
  { chinese: "医⽣", pinyin: "yīshēng", arabic: "طبيب", image: "yisheng.jpg", audio: "audio/yisheng.mp3" },
  { chinese: "医院", pinyin: "yīyuàn", arabic: "مستشفى", image: "yiyuan.jpg", audio: "audio/yiyuan.mp3" },
  { chinese: "同学", pinyin: "tóngxué", arabic: "زميل الدراسة", image: "tongxue.jpg", audio: "audio/tongxue.mp3" },
  { chinese: "名字", pinyin: "míngzi", arabic: "اسم", image: "mingzi.jpg", audio: "audio/mingzi.mp3" },
  { chinese: "后⾯", pinyin: "hòumiàn", arabic: "خلف", image: "houmian.jpg", audio: "audio/houmian.mp3" },
  { chinese: "哪⼉", pinyin: "nǎr", arabic: "أين", image: "nar.jpg", audio: "audio/nar.mp3" },
  { chinese: "商店", pinyin: "shāngdiàn", arabic: "متجر", image: "shangdian.jpg", audio: "audio/shangdian.mp3" },
  { chinese: "喜欢", pinyin: "xǐhuan", arabic: "يحب/يفضل", image: "xihuan.jpg", audio: "audio/xihuan.mp3" },
  { chinese: "多少", pinyin: "duōshao", arabic: "كم (للكمية)", image: "duoshao.jpg", audio: "audio/duoshao.mp3" },
  { chinese: "天⽓", pinyin: "tiānqì", arabic: "طقس", image: "tianqi.jpg", audio: "audio/tianqi.mp3" },
  { chinese: "⼥⼉", pinyin: "nǚ'ér", arabic: "فتاة/ابنة", image: "nuer.jpg", audio: "audio/nuer.mp3" },
  { chinese: "妈妈", pinyin: "māma", arabic: "أمي", image: "mama.jpg", audio: "audio/mama.mp3" },
  { chinese: "学习", pinyin: "xuéxí", arabic: "يدرس", image: "xuexi.jpg", audio: "audio/xuexi.mp3" },
  { chinese: "学校", pinyin: "xuéxiào", arabic: "مدرسة", image: "xuexiao.jpg", audio: "audio/xuexiao.mp3" },
  { chinese: "学⽣", pinyin: "xuésheng", arabic: "طالب", image: "xuesheng.jpg", audio: "audio/xuesheng.mp3" },
  { chinese: "⼩姐", pinyin: "xiǎojiě", arabic: "آنسة", image: "xiaojie.jpg", audio: "audio/xiaojie.mp3" },
  { chinese: "⼯作", pinyin: "gōngzuò", arabic: "عمل/يعمل", image: "gongzuo.jpg", audio: "audio/gongzuo.mp3" },
  { chinese: "怎么", pinyin: "zěnme", arabic: "كيف", image: "zenme.jpg", audio: "audio/zenme.mp3" },
  { chinese: "我们", pinyin: "wǒmen", arabic: "نحن", image: "women.jpg", audio: "audio/women.mp3" },
  { chinese: "时候", pinyin: "shíhòu", arabic: "وقت", image: "shihou.jpg", audio: "audio/shihou.mp3" },
  { chinese: "明天", pinyin: "míngtiān", arabic: "غدًا", image: "mingtian.jpg", audio: "audio/mingtian.mp3" },
  { chinese: "星期", pinyin: "xīngqī", arabic: "أسبوع", image: "xingqi.jpg", audio: "audio/xingqi.mp3" },
  { chinese: "昨天", pinyin: "zuótiān", arabic: "أمس", image: "zuotian.jpg", audio: "audio/zuotian.mp3" },
  { chinese: "朋友", pinyin: "péngyou", arabic: "صديق", image: "pengyou.jpg", audio: "audio/pengyou.mp3" },
  { chinese: "杯⼦", pinyin: "bēizi", arabic: "كوب", image: "beizi.jpg", audio: "audio/beizi.mp3" },
  { chinese: "桌⼦", pinyin: "zhuōzi", arabic: "طاولة", image: "zhuozi.jpg", audio: "audio/zhuozi.mp3" },
  { chinese: "椅⼦", pinyin: "yǐzi", arabic: "كرسي", image: "yizi.jpg", audio: "audio/yizi.mp3" },
  { chinese: "⽔果", pinyin: "shuǐguǒ", arabic: "فاكهة", image: "shuiguo.jpg", audio: "audio/shuiguo.mp3" },
  { chinese: "汉语", pinyin: "hànyǔ", arabic: "اللغة الصينية", image: "hanyu.jpg", audio: "audio/hanyu.mp3" },
  { chinese: "没有", pinyin: "méiyǒu", arabic: "لا يوجد", image: "meiyou.jpg", audio: "audio/meiyou.mp3" },
  { chinese: "漂亮", pinyin: "piàoliang", arabic: "جميل", image: "piaoliang.jpg", audio: "audio/piaoliang.mp3" },
  { chinese: "爸爸", pinyin: "bàba", arabic: "أبي", image: "baba.jpg", audio: "audio/baba.mp3" },
  { chinese: "现在", pinyin: "xiànzài", arabic: "الآن", image: "xianzai.jpg", audio: "audio/xianzai.mp3" },
  { chinese: "电影", pinyin: "diànyǐng", arabic: "فيلم", image: "dianying.jpg", audio: "audio/dianying.mp3" },
  { chinese: "电视", pinyin: "diànshì", arabic: "تلفزيون", image: "dianshi.jpg", audio: "audio/dianshi.mp3" },
  { chinese: "电脑", pinyin: "diànnǎo", arabic: "كمبيوتر", image: "diannao.jpg", audio: "audio/diannao.mp3" },
  { chinese: "看⻅", pinyin: "kànjiàn", arabic: "يرى", image: "kanjian.jpg", audio: "audio/kanjian.mp3" },
  { chinese: "睡觉", pinyin: "shuìjiào", arabic: "ينام", image: "shuijiao.jpg", audio: "audio/shuijiao.mp3" },
  { chinese: "⽶饭", pinyin: "mǐfàn", arabic: "أرز", image: "mifan.jpg", audio: "audio/mifan.mp3" },
  { chinese: "⽼师", pinyin: "lǎoshī", arabic: "مدرس", image: "laoshi.jpg", audio: "audio/laoshi.mp3" },
  { chinese: "苹果", pinyin: "píngguǒ", arabic: "تفاحة", image: "pingguo.jpg", audio: "audio/pingguo.mp3" },
  { chinese: "⾐服", pinyin: "yīfu", arabic: "ملابس", image: "yifu.jpg", audio: "audio/yifu.mp3" },
  { chinese: "认识", pinyin: "rènshi", arabic: "يعرف", image: "renshi.jpg", audio: "audio/renshi.mp3" },
  { chinese: "谢谢", pinyin: "xièxie", arabic: "شكرًا", image: "xiexie.jpg", audio: "audio/xiexie.mp3" },
  { chinese: "⻜机", pinyin: "fēijī", arabic: "طائرة", image: "feiji.jpg", audio: "audio/feiji.mp3" },
  { chinese: "饭店", pinyin: "fàndiàn", arabic: "مطعم", image: "fandian.jpg", audio: "audio/fandian.mp3" },
  { chinese: "⾼兴", pinyin: "gāoxìng", arabic: "سعيد", image: "gaoxing.jpg", audio: "audio/gaoxing.mp3" },
  { chinese: "⼀点", pinyin: "yīdiǎn", arabic: "قليل", image: "yidian.jpg", audio: "audio/yidian.mp3" },
  { chinese: "⼉", pinyin: "er", arabic: "(لاحقة تصغير)", image: "er.jpg", audio: "audio/er.mp3" },
  { chinese: "不客⽓", pinyin: "bùkèqi", arabic: "على الرحب والسعة", image: "bukeqi.jpg", audio: "audio/bukeqi.mp3" },
  { chinese: "出租⻋", pinyin: "chūzūchē", arabic: "سيارة أجرة", image: "chuzuche.jpg", audio: "audio/chuzuche.mp3" },
  { chinese: "对不起", pinyin: "duìbuqǐ", arabic: "آسف", image: "duibuqi.jpg", audio: "audio/duibuqi.mp3" },
  { chinese: "怎么样", pinyin: "zěnmeyàng", arabic: "كيف/ماذا عن", image: "zenmeyang.jpg", audio: "audio/zenmeyang.mp3" },
  { chinese: "打电话", pinyin: "dǎ diànhuà", arabic: "يتصل (على الهاتف)", image: "dadianhua.jpg", audio: "audio/dadianhua.mp3" },
  { chinese: "没关系", pinyin: "méiguānxi", arabic: "لا بأس", image: "meiguanxi.jpg", audio: "audio/meiguanxi.mp3" }
];

const wordList = document.getElementById("word-list");

words.forEach((word, index) => { 
  const listItem = document.createElement("li");
  //  إضافة عنصر  <audio>   لتشغيل الصوت  
  listItem.innerHTML = `
    <span class="word-number">${index + 1}. </span> <span class="chinese">${word.chinese}</span>
    <span class="pinyin">${word.pinyin}</span>
    <audio src="${word.audio}"></audio> 
  `;

  listItem.addEventListener('click', () => {
    const pinyinSpan = listItem.querySelector('.pinyin');
    pinyinSpan.classList.toggle('show');

    // تشغيل الصوت عند النقر على الكلمة
    const audio = listItem.querySelector('audio');
    audio.currentTime = 0; // إعادة تشغيل الصوت من البداية
    audio.play(); 
  });

  wordList.appendChild(listItem);
});

// كود إخفاء البينيين بعد الظهور

const wordElements = document.querySelectorAll('#word-list li');

wordElements.forEach(word => {
  word.addEventListener('click', () => {
    const pinyin = word.querySelector('.pinyin');
    pinyin.classList.add('show');

    setTimeout(() => {
      pinyin.classList.remove('show');
    }, 1000); // نخفي البينيين بعد ثانية واحدة (1000 ميلي ثانية)
  });
});


// ... أكواد JavaScript  السابقة ...





const timerElement = document.getElementById('timer');
const minutesInput = document.getElementById('minutes');
const startButton = document.getElementById('startTimer');
const timeoutSound = document.getElementById('timeoutSound');

let startTime; // لتخزين الوقت المتبقي
let timerInterval; // لتخزين معرّف فترة زمنية لتشغيل المؤقت

function startTimer() {
  const minutes = parseInt(minutesInput.value);
  if (isNaN(minutes) || minutes < 1 || minutes > 10) {
    alert('Please enter a number between 1 and 10.');
    return;
  }

  startTime = minutes * 60; 
  timerElement.innerText = `${minutes.toString().padStart(2, '0')}:00`;

  timerInterval = setInterval(updateTimer, 1000); 
}

function updateTimer() {
  if (startTime > 0) {
    const minutes = Math.floor(startTime / 60);
    const seconds = startTime % 60;
    timerElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    startTime--;
  } else {
    clearInterval(timerInterval);
    timerElement.innerText = "Stop, time is up!"; 
    timeoutSound.play(); 
  }
}

startButton.addEventListener('click', startTimer);

const showPinyinButton = document.getElementById('showPinyin');

// دالة لإظهار/إخفاء البينيين وتغيير نص الزر 
function togglePinyin() {
  const pinyinElements = document.querySelectorAll('.pinyin');
  pinyinElements.forEach(pinyin => {
    pinyin.classList.toggle('show');
  });

  //  تغيير نص الزر 
  if (showPinyinButton.innerText === 'Show Pinyin') {
    showPinyinButton.innerText = 'Hide Pinyin';
  } else {
    showPinyinButton.innerText = 'Show Pinyin';
  }
}

// أضف حدث النقر للزر
showPinyinButton.addEventListener('click', togglePinyin);
