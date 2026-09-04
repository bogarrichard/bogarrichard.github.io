/* ==========================================================================
   Translations

   English is not listed here: it lives in the markup, so the page still reads
   correctly with JavaScript switched off. Each key matches a data-i18n
   attribute in index.html, and the value replaces that element's innerHTML —
   so inline markup (<em>, <strong>, <a>) is expected and must stay balanced.

   Adding a language means: a pack below, a button in the controls bar, and
   the code in the boot script's language list in index.html.
   ========================================================================== */

const TRANSLATIONS = {
  /* ------------------------------------------------------------------------
     Hungarian
     ------------------------------------------------------------------------ */
  hu: {
    "role": "Doktorandusz · Budapesti Műszaki és Gazdaságtudományi Egyetem",

    "about.h": "Bemutatkozás",
    "about.p1": "A Budapesti Műszaki és Gazdaságtudományi Egyetem (BME) doktorandusza vagyok az informatikai tudományok doktori iskolájában, ahol <em>autonóm járművek modern számítógépes látórendszereivel</em> foglalkozom. A munkám ott van, ahol a mélytanulás és a geometria találkozik: vizuális SLAM és odometria, szemantikus szegmentálás, reprezentáció-előtanítás. Legutóbb strukturálatlan környezetek járhatósági térképezésén dolgoztam útvonaltervezéshez, ezzel egy évig a japán Shizuoka Egyetem kutatójaként.",
    "about.p2": "A doktori képzés előtt villamosmérnöki MSc és BSc diplomát szereztem a BME-n. A dolgozataim mélytanuláson alapuló SLAM-ról és GPU-gyorsított optikai áramlásról szóltak.",

    "research.h": "Kutatási területek",
    "tag.slam": "Vizuális SLAM",
    "tag.vo": "Vizuális odometria",
    "tag.seg": "Szemantikus szegmentálás",
    "tag.pre": "Reprezentáció-előtanítás",
    "tag.trav": "Járhatósági térképezés",
    "tag.ad": "Autonóm vezetés",

    "pub.h": "Publikációk",
    "pub.journal": "Folyóiratcikkek",
    "pub.conf": "Konferenciakiadványok",
    "pub.student": "Tudományos diákköri dolgozat",
    "pub.tdk.t": "Mélységbecslő és szemantikus szegmentáló mély neurális hálók fejlesztése és alkalmazása",
    "pub.tdk.s": "Tudományos Diákköri Konferencia (TDK), Képfeldolgozás szekció — <strong>3. helyezés</strong>.",

    "exp.h": "Szakmai tapasztalat",
    "exp.1.t": "Kutató — Shizuoka Egyetem",
    "exp.1.s": "Kobayashi–Hayakawa Laboratórium, Suzuki Fellowship Program. Kutatási téma: <em>strukturálatlan környezetek mélytanulással támogatott járhatósági térképezése útvonaltervezéshez</em>.",
    "exp.2.t": "Tudományos segédmunkatárs — Budapesti Műszaki és Gazdaságtudományi Egyetem",
    "exp.2.s": "Irányítástechnika és Informatika Tanszék.",
    "exp.3.t": "Villamosmérnök — COEL Kft.",
    "exp.4.t": "Szoftvertesztelő gyakornok — evosoft Hungary Kft.",

    "edu.h": "Tanulmányok",
    "edu.1.t": "PhD, mérnökinformatika — Budapesti Műszaki és Gazdaságtudományi Egyetem",
    "edu.1.s": "Kutatási téma: <em>autonóm járművek modern számítógépes látórendszerei</em>.",
    "edu.2.t": "MSc, villamosmérnök — Budapesti Műszaki és Gazdaságtudományi Egyetem",
    "edu.2.s": "Diplomaterv: <em>mélytanuláson alapuló SLAM-algoritmus fejlesztése</em>.",
    "edu.3.t": "BSc, villamosmérnök — Budapesti Műszaki és Gazdaságtudományi Egyetem",
    "edu.3.s": "Szakdolgozat: <em>optikai áramlási képek előállítása párhuzamos architektúrájú feldolgozóegységgel</em>.",

    "teach.h": "Oktatás és témavezetés",
    "teach.1": "Képfeldolgozás gyakorlatok BSc hallgatóknak",
    "teach.2": "Számítógépes látás laborok MSc hallgatóknak",
    "teach.3": "BSc és MSc szakdolgozatok témavezetése mecanum-kerekű mobilrobot digitális ikerpárjáról, Nvidia Isaac Sim és Isaac Lab használatával",
    "teach.4": "A <a href=\"https://github.com/VisionLab-IIT/research-project-example\">research-project-example</a> egyedüli szerzője — oktatóanyag a kutatási projektek felépítéséről",

    "skills.h": "Szakmai készségek",
    "skills.1.l": "Programozás",
    "skills.2.l": "Gépi tanulás",
    "skills.3.l": "Robotika",
    "skills.4.l": "Egyéb",
    "skills.5.l": "Nyelvek",
    "skills.5.v": "Angol (B2), német (B2), japán (alapfok)",

    "projects.h": "Projektek",
    "projects.p": "Apróbb eszközök és forkok, amelyeket a kutatómunkán kívül gondozok.",
    "projects.mathcode": "MathCode — a kódban lévő operátorokat és indexelt változóneveket csinos matematikai szimbólumokként jeleníti meg, a fájl tartalmának módosítása nélkül",
    "projects.da3": "Depth Anything 3 (fork) — egyszerűsítés, apróbb hibajavítások és dokumentáció",

    "notes.h": "Interaktív jegyzetek",
    "notes.p": "Vizuális magyarázók, amelyeket gondolkodás közben készítek — WebGL-lel, élőben a böngészőben. Asztali gépen, egérrel és billentyűzettel a legjobb.",
    "notes.atlas": "Manifold Atlas: a lapos gradiensektől a Lie-csoportokig és a SLAM-ig",

    "contact.h": "Kapcsolat"
  },

  /* ------------------------------------------------------------------------
     Japanese
     ------------------------------------------------------------------------ */
  ja: {
    "role": "博士課程学生 · ブダペスト工科経済大学",

    "about.h": "自己紹介",
    "about.p1": "ブダペスト工科経済大学（BME）の情報工学博士課程に在籍し、<em>自動運転車のための最新のコンピュータビジョンシステム</em>を研究しています。扱っているのは深層学習と幾何学が交わる領域——ビジュアルSLAMとオドメトリ、セマンティックセグメンテーションと表現事前学習、そして最近では経路計画のための非整備環境の走行可能性マッピングで、最後のテーマには静岡大学の研究員として一年間取り組みました。",
    "about.p2": "博士課程の前は、BMEで電気工学の修士号と学士号を取得し、深層学習ベースのSLAMとGPUによる高速化オプティカルフローについて論文を執筆しました。",

    "research.h": "研究テーマ",
    "tag.slam": "ビジュアルSLAM",
    "tag.vo": "ビジュアルオドメトリ",
    "tag.seg": "セマンティックセグメンテーション",
    "tag.pre": "表現事前学習",
    "tag.trav": "走行可能性マッピング",
    "tag.ad": "自動運転",

    "pub.h": "論文",
    "pub.journal": "学術雑誌論文",
    "pub.conf": "国際会議論文",
    "pub.student": "学生研究発表会",
    "pub.tdk.t": "深度推定およびセマンティックセグメンテーション深層ニューラルネットワークの開発と応用",
    "pub.tdk.s": "学生科学研究会議（TDK）画像処理部門 — <strong>第3位</strong>",

    "exp.h": "職歴",
    "exp.1.t": "研究員 — 静岡大学",
    "exp.1.s": "小林・早川研究室、鈴木フェローシップ・プログラム。研究テーマ：<em>経路計画のための深層学習を用いた非整備環境の走行可能性マッピング</em>。",
    "exp.2.t": "研究助手 — ブダペスト工科経済大学",
    "exp.2.s": "制御工学・情報技術学科",
    "exp.3.t": "電気技術者 — COEL Kft.",
    "exp.4.t": "ソフトウェアテスター（インターン） — evosoft Hungary Kft.",

    "edu.h": "学歴",
    "edu.1.t": "博士課程（情報工学） — ブダペスト工科経済大学",
    "edu.1.s": "研究テーマ：<em>自動運転車のための最新のコンピュータビジョンシステム</em>",
    "edu.2.t": "修士（電気工学） — ブダペスト工科経済大学",
    "edu.2.s": "修士論文：<em>深層学習ベースのSLAMアルゴリズムの開発</em>",
    "edu.3.t": "学士（電気工学） — ブダペスト工科経済大学",
    "edu.3.s": "卒業論文：<em>並列アーキテクチャ処理装置を用いたオプティカルフロー画像の生成</em>",

    "teach.h": "教育・指導",
    "teach.1": "画像処理演習（学部生向け）",
    "teach.2": "コンピュータビジョン実験（修士課程向け）",
    "teach.3": "Nvidia Isaac SimおよびIsaac Labを用いた、メカナムホイール移動ロボットのデジタルツインに関する学士・修士論文の指導",
    "teach.4": "研究プロジェクトの構成に関するチュートリアルリポジトリ <a href=\"https://github.com/VisionLab-IIT/research-project-example\">research-project-example</a> の単独著者",

    "skills.h": "技術スキル",
    "skills.1.l": "プログラミング",
    "skills.2.l": "機械学習",
    "skills.3.l": "ロボティクス",
    "skills.4.l": "その他",
    "skills.5.l": "語学",
    "skills.5.v": "英語（B2）、ドイツ語（B2）、日本語（初級）",

    "projects.h": "プロジェクト",
    "projects.p": "研究活動とは別に維持している、小さなツールとフォークです。",
    "projects.mathcode": "MathCode — コード中の演算子と添字付き変数名を、ファイルの内容を変更することなく、美しい数式記号として表示します",
    "projects.da3": "Depth Anything 3（フォーク）— 簡略化、細かなバグ修正、ドキュメント整備",

    "notes.h": "インタラクティブ・ノート",
    "notes.p": "考えを整理しながら作っている視覚的な解説です。WebGLでブラウザ上に描画されます。マウスとキーボードのあるデスクトップ環境での閲覧を推奨します。",
    "notes.atlas": "Manifold Atlas — 平坦な勾配からリー群とSLAMへ",

    "contact.h": "連絡先"
  }
};
