<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>留学生の対話カフェ - あなたの居場所</title>
    <style>
        /* 基本設定：安心感のあるフォントと色 */
        body {
            margin: 0;
            font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif;
            color: #4A3728;
            background-color: #FDFBF8;
            line-height: 1.6;
        }

        /* 固定ヘッダー：いつでも戻れる安心感 */
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.9);
            padding: 10px 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            z-index: 1000;
            text-align: center;
        }

        header a {
            text-decoration: none;
            color: #6F4E37;
            font-weight: bold;
            font-size: 0.9rem;
        }

        /* メインビジュアル：感情喚起 */
        .hero {
            padding: 120px 20px 60px;
            text-align: center;
            background: linear-gradient(180deg, #EAD7BB 0%, #FDFBF8 100%);
        }

        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #5D4037;
        }

        .hero p {
            font-size: 1.2rem;
            font-weight: bold;
            color: #8D6E63;
        }

        /* コンセプト：不安の解消 */
        .concept {
            max-width: 600px;
            margin: 40px auto;
            padding: 0 20px;
            text-align: center;
        }

        .concept-card {
            background: #FFFFFF;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border: 2px solid #D7CCC8;
        }

        .concept h2 {
            font-size: 1.5rem;
            color: #6F4E37;
            margin-bottom: 15px;
        }

        .concept ul {
            list-style: none;
            padding: 0;
            text-align: left;
            display: inline-block;
        }

        .concept li {
            margin: 10px 0;
            font-size: 1.1rem;
        }

        .concept li::before {
            content: "✓";
            color: #A1887F;
            margin-right: 10px;
            font-weight: bold;
        }

        /* CTA：行動誘導 */
        .cta-section {
            padding: 60px 20px;
            text-align: center;
        }

        .btn-main {
            display: inline-block;
            background-color: #6F4E37;
            color: #FFFFFF;
            padding: 25px 50px;
            font-size: 1.5rem;
            font-weight: bold;
            text-decoration: none;
            border-radius: 50px; /* 丸みで親しみやすさ */
            box-shadow: 0 8px 20px rgba(111, 78, 55, 0.3);
            transition: transform 0.2s;
        }

        .btn-main:active {
            transform: scale(0.98);
        }

        .sub-text {
            margin-top: 15px;
            font-size: 0.9rem;
            color: #8D6E63;
        }

        /* 学割の強調 */
        .discount-badge {
            background-color: #D4A373;
            color: white;
            padding: 5px 15px;
            border-radius: 5px;
            font-size: 0.8rem;
            display: inline-block;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

<header>
    <a href="/">留学生の対話カフェ HOME</a>
</header>

<main>
    <section class="hero">
        <div class="discount-badge">留学生限定・学割あり</div>
        <h1>留学生の対話カフェ</h1>
        <p>「ひとりじゃない」と思える場所が、ここにあります。</p>
    </section>

    <section class="concept">
        <div class="concept-card">
            <h2>安心して話せる理由</h2>
            <ul>
                <li>日本語が完璧じゃなくてもOK</li>
                <li>店主があなたの話をゆっくり聞きます</li>
                <li>「ただいま」と言える居場所です</li>
            </ul>
        </div>
    </section>

    <section class="cta-section">
        <a href="cafes.html" class="btn-main">
            提携カフェを見る
        </a>
        <p class="sub-text">※まずは近くのカフェを見つけるだけ。予約は後でOK。</p>
    </section>
</main>

</body>
</html>
