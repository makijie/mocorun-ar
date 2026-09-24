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

// ==============================
// 3Dモコルン読み込み完了
// ==============================

mocorun3D.addEventListener(
    "load",
    function () {

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
        isGuide: false
    },

    {
        id: 2,
        name: "グリン",
        image: "images/characters/gurin.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "jump",
        isGuide: false
    },

    {
        id: 3,
        name: "ツタッチ",
        image: "images/characters/tsutacchi.png",
        rarity: "⭐⭐ レア",
        probability: 20,
        animation: "sway",
        isGuide: false
    },

    {
        id: 4,
        name: "マンドレイク",
        image: "images/characters/mandrake.png",
        rarity: "⭐⭐⭐ スーパーレア",
        probability: 10,
        animation: "sprout",
        isGuide: false
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
        isGuide: false
    },

    {
        id: 6,
        name: "ポポロン",
        image: "images/characters/poporon.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "float",
        isGuide: false
    },

    {
        id: 7,
        name: "ツツジー",
        image: "images/characters/tsutsuji.png",
        rarity: "⭐⭐ レア",
        probability: 20,
        animation: "sway",
        isGuide: false
    },

    {
        id: 8,
        name: "アジチャイ",
        image: "images/characters/ajichai.png",
        rarity: "⭐⭐⭐ スーパーレア",
        probability: 10,
        animation: "float",
        isGuide: false
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
        isGuide: false
    },

    {
        id: 10,
        name: "チビタン",
        image: "images/characters/chibitan.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "walk",
        isGuide: false
    },

    {
        id: 11,
        name: "コケモン",
        image: "images/characters/kokemon.png",
        rarity: "⭐⭐ レア",
        probability: 20,
        animation: "sway",
        isGuide: false
    },

    {
        id: 12,
        name: "カッパチ",
        image: "images/characters/kappachi.png",
        rarity: "⭐⭐⭐ スーパーレア",
        probability: 10,
        animation: "jump",
        isGuide: false
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
        isGuide: false
    },

    {
        id: 14,
        name: "イシゴン",
        image: "images/characters/ishigon.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "bounce",
        isGuide: false
    },

    {
        id: 15,
        name: "カゼマル",
        image: "images/characters/kazemaru.png",
        rarity: "⭐⭐ レア",
        probability: 20,
        animation: "fly",
        isGuide: false
    },

    {
        id: 16,
        name: "カレッチ",
        image: "images/characters/karecchi.png",
        rarity: "⭐⭐⭐ スーパーレア",
        probability: 10,
        animation: "spin",
        isGuide: false
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
        isGuide: false
    },

    {
        id: 18,
        name: "一つ目小僧",
        image: "images/characters/hitotsume_kozo.png",
        rarity: "⭐⭐ レア",
        probability: 30,
        animation: "jump",
        isGuide: false
    },

    {
        id: 19,
        name: "エルフ",
        image: "images/characters/elf.png",
        rarity: "⭐⭐⭐ スーパーレア",
        probability: 15,
        animation: "float",
        isGuide: false
    },

    {
        id: 20,
        name: "フェニックス",
        image: "images/characters/phoenix.png",
        rarity: "⭐⭐⭐⭐ 伝説級",
        probability: 5,
        animation: "fly",
        isGuide: false
    }

];
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

    globalTopButton.style.display =
        "block";

});

// ==============================
// 「探索をはじめる」
// ==============================

exploreButton.addEventListener("click", function () {

    openingScreen.style.display = "none";

    spotScreen.style.display = "flex";

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

        spawnCharacter();

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

    }, searchTime);

});
// ==============================
// キャラクター出現
// ==============================

function spawnCharacter() {

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

    characterImage.src =
        randomCharacter.image;

    characterImage.alt =
        randomCharacter.name;


    // キャラクターごとの動き
    characterImage.className =
        "character-image " +
        randomCharacter.animation;

    // 画像を完全に読み込むまで隠す
    characterImage.style.visibility =
        "hidden";

    characterImage.addEventListener(
        "load",
        function () {

        characterImage.style.visibility =
            "visible";

    }
);    


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

    discoveryImage.src =
        character.image;

    discoveryImage.alt =
        character.name;

    discoveryImage.addEventListener(
        "load",
        function () {

        discoveryImage.style.visibility =
            "visible";

    },
    { once: true }
);    

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

                <div>

                    ${character.rarity}

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


function playMocorunVoice(fileName) {

    // 前の声が鳴っていたら停止
    if (mocorunAudio) {

        mocorunAudio.pause();
        mocorunAudio.currentTime = 0;

    }


    // 音声ファイルを読み込む
    mocorunAudio =
        new Audio(
            "sounds/mocorun/" + fileName
        );


    mocorunAudio.volume = 1;


    // 再生
    mocorunAudio.play().catch(function (error) {

        console.error(
            "モコルン音声再生エラー:",
            error
        );

    });

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

    mocorunSpeech.textContent =
        "👆 ぼくをタップしてみて！";

    playMocorunVoice(
        "tapshite.mp3"
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
