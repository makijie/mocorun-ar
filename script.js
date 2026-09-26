// ==============================
// 公園ARキャラクターコレクション
// ==============================


// ==============================
// HTML要素
// ==============================
const globalTopButton =
    document.getElementById("globalTopButton");

const startButton =
    document.getElementById("startButton");

const collectionButton =
    document.getElementById("collectionButton");    

const openingScreen =
    document.getElementById("openingScreen");

const exploreButton =
    document.getElementById("exploreButton");

const exploreScreen =
    document.getElementById("exploreScreen");

const spotScreen =
    document.getElementById("spotScreen");

const spotButtons =
    document.querySelectorAll(".spot-button");

const searchButton =
    document.getElementById("searchButton");

const characterSpawnArea =
    document.getElementById("characterSpawnArea");

const collectionScreen =
    document.getElementById("collectionScreen");

const collectionList =
    document.getElementById("collectionList");

const collectionCount =
    document.getElementById("collectionCount");

const collectionTopButton =
    document.getElementById("collectionTopButton");

const closeCollectionButton =
    document.getElementById("closeCollectionButton");

const discoveryScreen =
    document.getElementById("discoveryScreen");

const discoveryImage =
    document.getElementById("discoveryImage");

const discoveryName =
    document.getElementById("discoveryName");

const discoveryRarity =
    document.getElementById("discoveryRarity");

const discoveryOkButton =
    document.getElementById("discoveryOkButton");  
    
const cameraVideo =
    document.getElementById("cameraVideo");

const parkArea =
    document.querySelector(".park-area"); 
    
const mocorunGuide =
    document.getElementById("mocorunGuide");

const mocorun3D =
    document.getElementById("mocorun3D");

const spotSelectButton =
    document.getElementById("spotSelectButton");

// ==============================
// 3Dモコルン読み込み完了
// ==============================
let isMocorunLoaded = false;

mocorun3D.addEventListener(
    "load",
    function () {

        isMocorunLoaded = true;

        mocorun3D.classList.add(
            "model-loaded"
        );

    }
);


// キャッシュですでに読み込み済みの場合
if (mocorun3D.loaded) {

    mocorun3D.classList.add(
        "model-loaded"
    );

}

const mocorunSpeech =
    document.getElementById("mocorunSpeech"); 
    
const discoveryMessage =
    document.getElementById("discoveryMessage");

const completeScreen =
    document.getElementById("completeScreen");

const completeContinueButton =
    document.getElementById(
        "completeContinueButton"
    );

const completeTopButton =
    document.getElementById(
        "completeTopButton"
    );    

// ==============================
// キャラクター情報
// ==============================

const characters = [

    // ==============================
    // 木・草エリア
    // ==============================

    {
        id: 1,
        name: "クサポン",
        image: "images/characters/kusapon.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "bounce",
        isGuide: false,

        type: "草むらモンスター",
        personality: "のんびり屋",
        habit: "草むらにまぎれて昼寝する"
    },

    {
        id: 2,
        name: "グリン",
        image: "images/characters/gurin.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "jump",
        isGuide: false,

        type: "どんぐり族",
        personality: "元気で好奇心旺盛",
        habit: "木の下を走り回り木の実を集める"
    },

    {
        id: 3,
        name: "ツタッチ",
        image: "images/characters/tsutacchi.png",
        rarity: "⭐⭐ レア",
        probability: 20,
        animation: "sway",
        isGuide: false,

        type: "蔦のふしぎ生物",
        personality: "いたずら好き",
        habit: "蔦を伸ばして物にからみつく"
    },

    {
        id: 4,
        name: "マンドレイク",
        image: "images/characters/mandrake.png",
        rarity: "⭐⭐⭐ スーパーレア",
        probability: 10,
        animation: "sprout",
        isGuide: false,

        type: "根っこの魔物",
        personality: "こわがり",
        habit: "土の中にかくれて過ごす"
    },


    // ==============================
    // 花エリア
    // ==============================

    {
        id: 5,
        name: "キノポン",
        image: "images/characters/kinopon.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "bounce",
        isGuide: false,

        type: "きのこ族",
        personality: "おっとり",
        habit: "木陰でのんびり過ごす"
    },

    {
        id: 6,
        name: "ポポロン",
        image: "images/characters/poporon.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "float",
        isGuide: false,

        type: "綿毛の妖精",
        personality: "自由気まま",
        habit: "風に乗ってふわふわ旅をする"
    },

    {
        id: 7,
        name: "ツツジー",
        image: "images/characters/tsutsuji.png",
        rarity: "⭐⭐ レア",
        probability: 20,
        animation: "sway",
        isGuide: false,

        type: "花の小人",
        personality: "ちょっとクール",
        habit: "花の間に隠れて人を観察する"
    },

    {
        id: 8,
        name: "アジチャイ",
        image: "images/characters/ajichai.png",
        rarity: "⭐⭐⭐ スーパーレア",
        probability: 10,
        animation: "float",
        isGuide: false,

        type: "アジサイの精霊",
        personality: "おだやか",
        habit: "雨の日になると元気になる"
    },


    // ==============================
    // 水辺エリア
    // ==============================

    {
        id: 9,
        name: "ポヨン",
        image: "images/characters/poyon.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "ghost",
        isGuide: false,

        type: "水のふしぎ生物",
        personality: "マイペース",
        habit: "水辺でぷるぷる跳ねて遊ぶ"
    },

    {
        id: 10,
        name: "チビタン",
        image: "images/characters/chibitan.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "walk",
        isGuide: false,

        type: "ちいさなカメのふしぎ生物",
        personality: "がんばり屋",
        habit: "ゆっくり歩きながら探検する"
    },

    {
        id: 11,
        name: "コケモン",
        image: "images/characters/kokemon.png",
        rarity: "⭐⭐ レア",
        probability: 20,
        animation: "sway",
        isGuide: false,

        type: "コケのモンスター",
        personality: "おとなしい",
        habit: "湿った場所でじっとしている"
    },

    {
        id: 12,
        name: "カッパチ",
        image: "images/characters/kappachi.png",
        rarity: "⭐⭐⭐ スーパーレア",
        probability: 10,
        animation: "jump",
        isGuide: false,

        type: "カッパの妖怪",
        personality: "やんちゃ",
        habit: "水遊びといたずらが大好き"
    },


    // ==============================
    // 広場・遊具エリア
    // ==============================

    {
        id: 13,
        name: "テントン",
        image: "images/characters/tenton.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "fly",
        isGuide: false,

        type: "てんとう虫の妖精",
        personality: "好奇心旺盛",
        habit: "あちこち飛び回って様子を見る"
    },

    {
        id: 14,
        name: "イシゴン",
        image: "images/characters/ishigon.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "bounce",
        isGuide: false,

        type: "石のモンスター",
        personality: "無口でマイペース",
        habit: "じっと動かず周りを見守る"
    },

    {
        id: 15,
        name: "カゼマル",
        image: "images/characters/kazemaru.png",
        rarity: "⭐⭐ レア",
        probability: 20,
        animation: "fly",
        isGuide: false,

        type: "風の精霊",
        personality: "せっかち",
        habit: "広い場所をすばやく駆け抜ける"
    },

    {
        id: 16,
        name: "カレッチ",
        image: "images/characters/karecchi.png",
        rarity: "⭐⭐⭐ スーパーレア",
        probability: 10,
        animation: "spin",
        isGuide: false,

        type: "落ち葉の妖精",
        personality: "陽気でお調子者",
        habit: "風が吹くとくるくる舞い上がる"
    },


    // ==============================
    // ふしぎスポット
    // ==============================

    {
        id: 17,
        name: "ふわふわおばけ",
        image: "images/characters/fuwafuwa_obake.png",
        rarity: "⭐ ノーマル",
        probability: 50,
        animation: "ghost",
        isGuide: false,

        type: "おばけ",
        personality: "人なつっこい",
        habit: "気になる人の後をふわふわついていく"
    },

    {
        id: 18,
        name: "一つ目小僧",
        image: "images/characters/hitotsume_kozo.png",
        rarity: "⭐⭐ レア",
        probability: 30,
        animation: "jump",
        isGuide: false,

        type: "妖怪",
        personality: "いたずら好き",
        habit: "物陰から突然顔を出して驚かせる"
    },

    {
        id: 19,
        name: "エルフ",
        image: "images/characters/elf.png",
        rarity: "⭐⭐⭐ スーパーレア",
        probability: 15,
        animation: "float",
        isGuide: false,

        type: "自然を見守るエルフ",
        personality: "やさしく慎重",
        habit: "人に気づかれず公園の草木を見守る"
    },

    {
        id: 20,
        name: "フェニックス",
        image: "images/characters/phoenix.png",
        rarity: "⭐⭐⭐⭐ 伝説級",
        probability: 5,
        animation: "fly",
        isGuide: false,

        type: "伝説の火の鳥",
        personality: "誇り高い",
        habit: "めったに姿を見せず空を舞う"
    }

];
// ==============================
// キャラクター画像を先読み
// ==============================

characters.forEach(function (character) {

    const img = new Image();

    img.src = character.image;

});
// ==============================
// 発見済みデータ
// 20体版なので保存データを新しくする
// ==============================

const STORAGE_KEY = "discoveredCharactersV2";

let discoveredCharacters =
    JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || [];


// ==============================
// 現在選んでいる探索スポット
// ==============================

let currentSpot = "";


// ==============================
// 探索中かどうか
// ==============================

let isSearching = false;


// ==============================
// GETできるキャラクター
// 全20体
// モコルンは案内役なのでここには含めない
// ==============================

const catchableCharacters = characters;

// ==============================
// スポットごとの出現確率
// ==============================

const spotProbabilities = {

    // 木・草エリア
    nature: {
        1: 35,   // クサポン
        2: 35,   // グリン
        3: 20,   // ツタッチ
        4: 10    // マンドレイク
    },

    // 花エリア
    rose: {
        5: 35,   // キノポン
        6: 35,   // ポポロン
        7: 20,   // ツツジー
        8: 10    // アジチャイ
    },

    // 水辺エリア
    water: {
        9: 35,   // ポヨン
        10: 35,  // チビタン
        11: 20,  // コケモン
        12: 10   // カッパチ
    },

    // 広場・遊具エリア
    sport: {
        13: 35,  // テントン
        14: 35,  // イシゴン
        15: 20,  // カゼマル
        16: 10   // カレッチ
    },

    // ふしぎスポット
    secret: {
        17: 50,  // ふわふわおばけ
        18: 30,  // 一つ目小僧
        19: 15,  // エルフ
        20: 5    // フェニックス
    }

};
// ==============================
// 「はじめる」
// ==============================

startButton.addEventListener("click", function () {

    openingScreen.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

    globalTopButton.style.display =
        "block";


    // 幻想スコープをいったん隠す
    const scopeMessage =
        document.querySelector(
            ".scope-message"
        );

    scopeMessage.classList.remove(
        "show"
    );


    // 少し待ってから獲得演出
    setTimeout(function () {

        scopeMessage.classList.add(
            "show"
        );

    }, 1200);

});

// ==============================
// 「探索をはじめる」
// ==============================

exploreButton.addEventListener("click", function () {

    openingScreen.style.display = "none";

    spotScreen.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
});


// ==============================
// 探索スポットを選ぶ
// ==============================

spotButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // 選んだスポットを記録
        currentSpot =
            button.dataset.spot;

        // スポット選択画面を閉じる
        spotScreen.style.display =
            "none";

        // 探索画面を表示
        exploreScreen.style.display =
            "flex";

        // カメラを開始    
        startCamera();

        // 3Dモコルンを表示
        showMocorunGuide();


        // 前回のキャラクターを消す
        characterSpawnArea.innerHTML =
            "";

        // 探索ボタンを初期状態に戻す
        searchButton.disabled =
            false;

        searchButton.textContent =
            "🔍 探索する";

    });

});

// ==============================
// エリア選択へ戻る
// ==============================

spotSelectButton.addEventListener(
    "click",
    function () {

        // 探索画面を閉じる
        exploreScreen.style.display =
            "none";

        // エリア選択画面を表示
        spotScreen.style.display =
            "flex";

        // 上から表示
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });

        // 出現中キャラクターを消す
        characterSpawnArea.innerHTML =
            "";

        // モコルンを隠す
        mocorunGuide.classList.remove(
            "show"
        );

        // 探索中クラスも解除
        mocorunGuide.classList.remove(
            "searching"
        );

        // カメラ停止
        if (cameraVideo.srcObject) {

            const tracks =
                cameraVideo.srcObject.getTracks();

            tracks.forEach(function (track) {

                track.stop();

            });

            cameraVideo.srcObject =
                null;

        }

        // カメラ用背景設定を解除
        parkArea.classList.remove(
            "camera-active"
        );

        // 探索ボタンを初期状態に戻す
        searchButton.disabled =
            false;

        searchButton.textContent =
            "🔍 探索する";

    }
);
// ==============================
// 「探索する」
// ==============================

searchButton.addEventListener("click", function () {

    isSearching = true;

    characterSpawnArea.innerHTML = "";

    searchButton.disabled = true;

    searchButton.textContent =
        "✨ 探索中...";


    // モコルンを探索中の位置へ
    mocorunGuide.classList.add(
        "searching"
    );


    // 背中を向けて先導
    mocorun3D.setAttribute(
        "camera-orbit",
        "180deg 75deg 105%"
    );


    // 最初の案内
    mocorunSpeech.textContent =
        "🔍 周りをゆっくり見渡してみよう！";


    // 音声
    playMocorunVoice(
        "miwatashite.mp3"
    );


    // 6〜10秒のランダム探索時間
    const searchTime =
        Math.floor(
            Math.random() * 4000
        ) + 6000;


    // 発見3.5秒前
    setTimeout(function () {

        mocorunSpeech.textContent =
            "✨ 何か気配がするよ…！";

        playMocorunVoice(
            "kehai.mp3"
        );

    }, searchTime - 3500);


    // キャラクター発見
    setTimeout(function () {

        spawnCharacter(function() {

    // モコルンを正面向きに戻す
    mocorun3D.setAttribute(
        "camera-orbit",
        "0deg 75deg 105%"
    );

    // 「見つけた！」の瞬間にジャンプ
    mocorun3D.classList.remove(
        "jump-guide"
    );

    void mocorun3D.offsetWidth;

    mocorun3D.classList.add(
        "jump-guide"
    );
    mocorunSpeech.textContent =
            "🌟 見つけた！";

    playMocorunVoice(
            "mitsuketa.mp3"
        );

if (mocorunAudio) {

    mocorunAudio.onended = function () {

        isSearching = false;

    };

}
// ジャンプ終了後にクラスを外す
    setTimeout(function () {

        mocorun3D.classList.remove(
            "jump-guide"
        );

    }, 1000);

        searchButton.disabled =
            false;

        searchButton.textContent =
            "🔍 もう一度探索する";
    });
}, searchTime);
});

// ==============================
// キャラクター出現
// ==============================

function spawnCharacter(onReady) {

    // 選んだスポットの確率を取得
    const selectedProbabilities =
        spotProbabilities[currentSpot];

    // スポットが選ばれていない場合は中止
    if (!selectedProbabilities) {

        console.log(
            "探索エリアが選択されていません。"
        );

        return;

    }


    // 0〜100の乱数
    const randomNumber =
        Math.random() * 100;

    let cumulativeProbability = 0;

    let randomCharacter = null;


    // ==============================
    // 選択したエリアの4体だけで抽選
    // ==============================

    for (const character of catchableCharacters) {

        // このエリアにいないキャラは無視
        if (
            selectedProbabilities[character.id]
            === undefined
        ) {

            continue;

        }


        const probability =
            selectedProbabilities[character.id];


        cumulativeProbability +=
            probability;


        if (
            randomNumber <
            cumulativeProbability
        ) {

            randomCharacter =
                character;

            break;

        }

    }


    // 念のためキャラが選ばれなかった場合
    if (!randomCharacter) {

        console.log(
            "キャラクター抽選に失敗しました。"
        );

        return;

    }


    // ==============================
    // キャラクター全体
    // ==============================

    const characterElement =
        document.createElement("div");

    characterElement.className =
        "spawn-character";


    // ==============================
    // キャラクター画像
    // ==============================

    const characterImage =
        document.createElement("img");

    characterImage.alt =
    randomCharacter.name;


// キャラクターごとの動き
characterImage.className =
    "character-image " +
    randomCharacter.animation;


// 画像を完全に読み込むまで隠す
characterImage.style.visibility =
    "hidden";


// 先にloadイベントを登録
characterImage.addEventListener(
    "load",
    function () {

        // キャラクター画像を表示
        characterImage.style.visibility =
            "visible";


        // ブラウザが実際に画面へ描画するのを待つ
        requestAnimationFrame(function () {

            requestAnimationFrame(function () {

                // キャラクターが見えてから
                // 少しだけ待って「見つけた！」へ
                setTimeout(function () {

                    if (onReady) {

                        onReady();

                    }

                }, 150);

            });

        });

    },
    { once: true }
);


// 最後に画像を読み込む
characterImage.src =
    randomCharacter.image;

    characterElement.appendChild(
        characterImage
    );


    // ==============================
    // ランダムな位置
    // ==============================

    const randomLeft =
        Math.random() * 40 + 30;

    const randomTop =
        Math.random() * 40 + 25;


    characterElement.style.left =
        randomLeft + "%";

    characterElement.style.top =
        randomTop + "%";


    // ==============================
    // 画面に追加
    // ==============================

    characterSpawnArea.appendChild(
        characterElement
    );


    // ==============================
    // クリックで発見
    // ==============================

    characterElement.addEventListener(
        "click",
        function () {

            // キャラクターの動きを止める
            characterImage.style.animation =
                "none";


            // 発見エフェクト
            characterElement.classList.add(
                "character-found"
            );


            // 少し待って発見画面へ
            setTimeout(function () {

                discoverCharacter(
                    randomCharacter
                );

            }, 700);

        }
    );

}
// ==============================
// キャラクター発見
// ==============================

function discoverCharacter(character) {

    // 初発見かどうかを確認
const isFirstDiscovery =
    !discoveredCharacters.includes(
        character.id
    );


// 初めて発見した場合
if (isFirstDiscovery) {

    discoveredCharacters.push(
        character.id
    );

    localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(discoveredCharacters)
   );

}


    // 発見したキャラクターの情報を設定

    

    discoveryName.textContent =
        character.name;

    discoveryRarity.textContent =
        character.rarity;

    discoveryImage.style.visibility =
        "hidden";

    discoveryImage.alt =
        character.name;

    // 先にloadイベントを登録
    discoveryImage.addEventListener(
        "load",
        function () {

        discoveryImage.style.visibility =
            "visible";

    },
    { once: true }
);    
// 最後に画像を読み込む
discoveryImage.src =
    character.image;
// ==============================
// 初発見・再発見でメッセージ変更
// ==============================

if (isFirstDiscovery) {

    discoveryMessage.textContent =
        "📖 図鑑に登録されました！";

} else {

    discoveryMessage.textContent =
        "✨ また会えたね！";

}
// ==============================
// 全キャラクター発見チェック
// ==============================

const isComplete =
    characters.every(function (character) {

        return discoveredCharacters.includes(
            character.id
        );

    });
    // 発見画面を表示

    discoveryScreen.style.display =
        "flex";
if (isComplete && isFirstDiscovery) {

    setTimeout(function () {

        discoveryScreen.style.display =
            "none";

        completeScreen.style.display =
            "flex";

    }, 1800);

}

    // 探索画面のキャラクターを消す

    characterSpawnArea.innerHTML = "";

}

// ==============================
// タイトル画面から図鑑を開く
// ==============================

collectionButton.addEventListener(
    "click",
    function () {

        showCollection();

        collectionScreen.style.display =
            "flex";

    }
);
// ==============================
// 図鑑を開く
// ==============================

collectionTopButton.addEventListener(
    "click",
    function () {

        showCollection();

        collectionScreen.style.display =
            "flex";

    }
);


// ==============================
// 図鑑を閉じる
// ==============================

closeCollectionButton.addEventListener(
    "click",
    function () {

        collectionScreen.style.display =
            "none";

    }
);


// ==============================
// 図鑑を表示
// ==============================

function showCollection() {

    collectionList.innerHTML = "";


    let discoveredCount = 0;


    characters.forEach(function (character) {

        const card =
            document.createElement("div");

        card.className =
            "collection-card";


        // 発見済みか？

        const isDiscovered =
            discoveredCharacters.includes(
                character.id
            );


        if (isDiscovered) {

            discoveredCount++;


            card.innerHTML = `

                <img
                    src="${character.image}"
                    alt="${character.name}"
                >

                <div class="collection-name">

                    No.${character.id}
                    ${character.name}

                </div>

                <div class="collection-rarity">

                    ${character.rarity}

                </div>

                <div class="collection-profile">

                    <p>
                        <span>分類</span>
                        ${character.type}
                    </p>

                    <p>
                        <span>性格</span>
                        ${character.personality}
                    </p>

                    <p>
                        <span>習性</span>
                        ${character.habit}
                    </p>

                </div>

            `;

        } else {

            card.classList.add("locked");


            card.innerHTML = `

                <div class="locked-character">

                    ❓

                </div>

                <div class="collection-unknown">

                    No.${character.id}

                    <br>

                    ？？？

                </div>

            `;

        }


        collectionList.appendChild(card);

    });


    collectionCount.textContent =
        "発見数：" +
        discoveredCount +
        " / " +
        characters.length;

}

// ==============================
// 冒険を続ける
// ==============================

discoveryOkButton.addEventListener(
    "click",
    function () {

        // 発見画面を閉じる
        discoveryScreen.style.display =
            "none";


        // モコルンを元の位置へ戻す
        mocorunGuide.classList.remove(
            "searching"
        );

        mocorun3D.setAttribute(
            "camera-orbit",
            "0deg 75deg 105%"
        );

        // 再びスポットのヒントを表示
        showSpotHint();

    }
);
// ==============================
// カメラを開始
// ==============================

async function startCamera() {

    try {

        const stream =
            await navigator.mediaDevices.getUserMedia({

                video: {

                    facingMode: {
                        ideal: "environment"
                    }

                },

                audio: false

            });


        cameraVideo.srcObject =
            stream;


        parkArea.classList.add(
            "camera-active"
        );


    } catch (error) {

        console.error(
            "カメラを起動できませんでした。",
            error
        );

        parkArea.classList.remove(
            "camera-active"
        );

    }

}

// ==============================
// モコルン専用ボイス
// ==============================

let mocorunAudio = null;


// ==============================
// モコルン音声を先読み
// ==============================

const mocorunVoiceFiles = [
    "tapshite.mp3",
    "miwatashite.mp3",
    "kehai.mp3",
    "mitsuketa.mp3",
    "kocchidayo.mp3"
];


const mocorunVoices = {};


mocorunVoiceFiles.forEach(
    function (fileName) {

        const audio =
            new Audio(
                "sounds/mocorun/" +
                fileName
            );

        // 先に読み込んでおく
        audio.preload = "auto";

        audio.load();

        mocorunVoices[fileName] =
            audio;

    }
);


// ==============================
// モコルン音声を再生
// ==============================

function playMocorunVoice(fileName) {

    // ==============================
    // 鳴っているモコルン音声を
    // 全部停止
    // ==============================

    Object.values(
        mocorunVoices
    ).forEach(function (audio) {

        audio.pause();

        try {

            audio.currentTime = 0;

        } catch (error) {

            // 読み込み前なら何もしない

        }

    });


    // ==============================
    // 指定された音声を取得
    // ==============================

    const audio =
        mocorunVoices[fileName];


    if (!audio) {

        console.error(
            "音声ファイルがありません:",
            fileName
        );

        return;

    }


    mocorunAudio = audio;

    mocorunAudio.volume = 1;

    mocorunAudio.currentTime = 0;


    // ==============================
    // 再生
    // ==============================

    const playPromise =
        mocorunAudio.play();


    if (playPromise !== undefined) {

        playPromise.catch(
            function (error) {

                console.log(
                    "モコルン音声を再生できませんでした:",
                    error
                );

            }
        );

    }

}
// ==============================
// 3Dモコルンを表示
// ==============================

function showMocorunGuide() {

    mocorunGuide.classList.add("show");

    // 最初は正面向き
    mocorun3D.setAttribute(
        "camera-orbit",
        "0deg 75deg 105%"
    );


    // ==============================
    // モコルン読み込み済み
    // ==============================

    if (mocorun3D.loaded) {

        mocorunSpeech.textContent =
            "👆 ぼくをタップしてみて！";

        playMocorunVoice(
            "tapshite.mp3"
        );

        return;

    }


    // ==============================
    // まだ読み込み中
    // ==============================

    mocorunSpeech.textContent =
        "✨ モコルンを呼んでいるよ…";


    // 読み込み完了後に案内
    mocorun3D.addEventListener(
        "load",
        function () {

            mocorunSpeech.textContent =
                "👆 ぼくをタップしてみて！";

            playMocorunVoice(
                "tapshite.mp3"
            );

        },
        { once: true }
    );

}
// ==============================
// スポット別のヒント
// ==============================

function showSpotHint() {

    if (currentSpot === "nature") {

        mocorunSpeech.textContent =
            "🌿 木陰や草むらをよく探してみよう！";

    } else if (currentSpot === "rose") {

        mocorunSpeech.textContent =
            "🌸 花や植え込みの近くに気配がするよ！";

    } else if (currentSpot === "water") {

        mocorunSpeech.textContent =
            "💧 池・小川・噴水の近くを探してみよう！";

    } else if (currentSpot === "sport") {

        mocorunSpeech.textContent =
            "🛝 広場や遊具の近くを見てみよう！";

    } else if (currentSpot === "secret") {

        mocorunSpeech.textContent =
            "✨ いつもと少し違う場所を探してみよう！";

    }

}
// ==============================
// モコルンをタップ
// ==============================

let mocorunAnimating = false;


mocorun3D.addEventListener(
    "click",
    function () {

        // 連打防止
        if (mocorunAnimating) {
            return;
        }

        mocorunAnimating = true;


        // ==============================
        // ジャンプ
        // 探索中でも必ず動く
        // ==============================

        mocorun3D.classList.remove(
            "jump-guide"
        );

        void mocorun3D.offsetWidth;

        mocorun3D.classList.add(
            "jump-guide"
        );


        // ==============================
        // 探索中でない時だけ
        // 「こっちだよ！」と言う
        // ==============================

        if (!isSearching) {

            mocorunSpeech.textContent =
                "✨ こっちだよ！";

            playMocorunVoice(
                "kocchidayo.mp3"
            );

        }


        // ==============================
        // 1秒後
        // ==============================

        setTimeout(function () {

            mocorun3D.classList.remove(
                "jump-guide"
            );


            // 探索中でない時だけ
            // スポットヒントへ戻す
            if (!isSearching) {

                showSpotHint();

            }


            mocorunAnimating = false;

        }, 1000);

    }
);
    
// ==============================
// TOPへ戻る
// ==============================

globalTopButton.addEventListener(
    "click",
    function () {

        // 各画面を閉じる
        openingScreen.style.display =
            "none";

        spotScreen.style.display =
            "none";

        exploreScreen.style.display =
            "none";

        collectionScreen.style.display =
            "none";

        discoveryScreen.style.display =
            "none";


        // 出現中キャラクターを消す
        characterSpawnArea.innerHTML =
            "";


        // 3Dモコルンを隠す
        mocorunGuide.classList.remove(
            "show"
        );


        // カメラを停止
        if (cameraVideo.srcObject) {

            const tracks =
                cameraVideo.srcObject.getTracks();

            tracks.forEach(function (track) {

                track.stop();

            });

            cameraVideo.srcObject =
                null;

        }


        // カメラ用背景設定を解除
        parkArea.classList.remove(
            "camera-active"
        );


        // 探索ボタンを初期化
        searchButton.disabled =
            false;

        searchButton.textContent =
            "🔍 探索する";


        // 選択スポットもリセット
        currentSpot = "";


        // TOPボタン自身を隠す
        globalTopButton.style.display =
            "none";

        // トップ画面を上から表示
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });    
    }
);
// ==============================
// コンプリート後も探索
// ==============================

completeContinueButton.addEventListener(
    "click",
    function () {

        completeScreen.style.display =
            "none";

        mocorunGuide.classList.remove(
            "searching"
        );

        showSpotHint();

    }
);


// ==============================
// コンプリート画面からTOPへ
// ==============================

completeTopButton.addEventListener(
    "click",
    function () {

        completeScreen.style.display =
            "none";

        globalTopButton.click();

    }
);
