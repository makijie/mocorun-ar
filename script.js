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

    {
        id: 1,
        name: "モコルン",
        image: "images/characters/mocorun.png",
        rarity: "🌟 案内役",
        probability: 0,
        animation: "jump",
        isGuide: true
    },

    {
        id: 2,
        name: "キノポン",
        image: "images/characters/kinopon.png",
        rarity: "⭐ ノーマル",
        probability: 35,
        animation: "bounce",
        isGuide: false
    },

    {
        id: 3,
        name: "ポヨン",
        image: "images/characters/poyon.png",
        rarity: "⭐⭐ レア",
        probability: 30,
        animation: "ghost",
        isGuide: false
    },

    {
        id: 4,
        name: "コモリン",
        image: "images/characters/komorin.png",
        rarity: "⭐⭐⭐ スーパーレア",
        probability: 20,
        animation: "fly",
        isGuide: false
    },

    {
        id: 5,
        name: "マンドレイク",
        image: "images/characters/mandrake.png",
        rarity: "⭐⭐⭐ スーパーレア",
        probability: 15,
        animation: "sprout",
        isGuide: false
    }

];

// ==============================
// 発見済みデータ
// ==============================

let discoveredCharacters =
    JSON.parse(
        localStorage.getItem("discoveredCharacters")
    ) || [];
// ==============================
// 現在選んでいる探索スポット
// ==============================

let currentSpot = "";

// ==============================
// モコルンは案内役なので最初から図鑑登録
// ==============================

if (!discoveredCharacters.includes(1)) {

    discoveredCharacters.push(1);

    localStorage.setItem(
        "discoveredCharacters",
        JSON.stringify(discoveredCharacters)
    );

}


// ==============================
// GETできるキャラクター
// モコルン以外の4体
// ==============================

const catchableCharacters =
    characters.filter(function (character) {

        return character.isGuide === false;

    });

    // ==============================
// スポットごとの出現確率
// ==============================

const spotProbabilities = {

    // 自然エリア
    nature: {
        2: 45,   // キノポン
        3: 15,   // ポヨン
        4: 15,   // コモリン
        5: 25    // マンドレイク
    },

    // 花のある場所
    rose: {
        2: 25,
        3: 20,
        4: 15,
        5: 40
    },

    // 水辺
    water: {
        2: 10,
        3: 60,
        4: 20,
        5: 10
    },

    // 遊び・運動エリア
    sport: {
        2: 35,
        3: 25,
        4: 25,
        5: 15
    },

    // 秘密スポット
    secret: {
        2: 10,
        3: 20,
        4: 35,
        5: 35
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

    characterSpawnArea.innerHTML = "";

    searchButton.disabled = true;

    searchButton.textContent =
        "✨ 探索中...";


    // モコルンを邪魔にならない位置へ移動
    mocorunGuide.classList.add(
        "searching"
    );

    // 探索開始後は背中を向けて先導
    mocorun3D.setAttribute(
        "camera-orbit",
        "180deg 75deg 105%"
    );

    mocorunSpeech.textContent =
        "🔍 ついてきて！";


    // 6〜10秒のランダム探索時間
    const searchTime =
    Math.floor(Math.random() * 4000) + 6000;


    // 探索中の案内
    mocorunSpeech.textContent =
    "🔍 周りをゆっくり見渡してみよう！";


    setTimeout(function () {

    mocorunSpeech.textContent =
        "✨ 何か気配がするよ…！";

    }, searchTime - 2000);


    setTimeout(function () {

    spawnCharacter();

    mocorunSpeech.textContent =
        "🌟 見つけた！";

    searchButton.disabled = false;

    searchButton.textContent =
        "🔍 もう一度探索する";

    }, searchTime);
});


// ==============================
// キャラクター出現
// ==============================

function spawnCharacter() {

    // ランダムにキャラクターを選ぶ

    const randomNumber =
        Math.random() * 100;

    let cumulativeProbability = 0;

    let randomCharacter =
    catchableCharacters[0];


// 選んだスポットの確率を取得
const selectedProbabilities =
    spotProbabilities[currentSpot];


// スポットごとの確率で抽選
for (const character of catchableCharacters) {

    let probability =
        character.probability;


    // スポット別の設定がある場合
    if (
        selectedProbabilities &&
        selectedProbabilities[character.id] !== undefined
    ) {

        probability =
            selectedProbabilities[character.id];

    }


    cumulativeProbability +=
        probability;


    if (randomNumber < cumulativeProbability) {

        randomCharacter =
            character;

        break;

    }

}

    // キャラクター全体

    const characterElement =
        document.createElement("div");

    characterElement.className =
        "spawn-character";


    // キャラクター画像

    const characterImage =
        document.createElement("img");

    characterImage.src =
        randomCharacter.image;

    characterImage.alt =
        randomCharacter.name;

    // ★ キャラクターごとの動きを追加

    characterImage.className =
        "character-image " +
        randomCharacter.animation;
  

    // キャラクター画像を追加

    characterElement.appendChild(
        characterImage
    );


    // ランダムな位置

    const randomLeft =
        Math.random() * 40 + 30;

    const randomTop =
        Math.random() * 40 + 25;


    characterElement.style.left =
        randomLeft + "%";

    characterElement.style.top =
        randomTop + "%";


    // 画面に追加

    characterSpawnArea.appendChild(
        characterElement
    );


    // クリックで発見

    characterElement.addEventListener(
    "click",
    function () {

        // クリックされたキャラクターを一時的に動かなくする
        characterImage.style.animation =
            "none";


        // 発見エフェクトを追加
        characterElement.classList.add(
            "character-found"
        );


        // 少し待ってから発見画面へ
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
        "discoveredCharacters",
        JSON.stringify(
            discoveredCharacters
        )
    );

}


    // 発見したキャラクターの情報を設定

    discoveryImage.src =
        character.image;

    discoveryImage.alt =
        character.name;

    discoveryName.textContent =
        character.name;

    discoveryRarity.textContent =
        character.rarity;

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


        // ジャンプを最初から再生
        mocorun3D.classList.remove(
            "jump-guide"
        );

        void mocorun3D.offsetWidth;

        mocorun3D.classList.add(
            "jump-guide"
        );


        // セリフ変更
        mocorunSpeech.textContent =
            "✨ こっちだよ！";


        // ジャンプ後にヒントを表示
        setTimeout(function () {

            mocorun3D.classList.remove(
                "jump-guide"
            );

            showSpotHint();

            mocorunAnimating = false;

        }, 1000);

    }
);
    // 選んだスポットによって案内を変更

    if (currentSpot === "nature") {

        mocorunSpeech.textContent =
            "🌿 木や草の近くを探してみよう！";

    } else if (currentSpot === "rose") {

        mocorunSpeech.textContent =
            "🌸 花の近くに気配がするよ！";

    } else if (currentSpot === "water") {

        mocorunSpeech.textContent =
            "💧 水辺をよく見てみよう！";

    } else if (currentSpot === "sport") {

        mocorunSpeech.textContent =
            "🌟 広い場所を探してみよう！";

    } else if (currentSpot === "secret") {

        mocorunSpeech.textContent =
            "✨ 何か特別な気配がするよ！";

    }
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
