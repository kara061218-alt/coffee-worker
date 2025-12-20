export default {
  async fetch(request, env, ctx) {
    // HTMLを一つの変数にまとめます
    const html = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>留学生の対話カフェ - あなたの居場所</title>
    <style>
        body {
            margin: 0;
            font-family: sans-serif;
            color: #4A3728;
            background-color: #FDFBF8;
            line-height: 1.6;
            text-align: center;
        }
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.9);
            padding: 15px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            font-weight: bold;
        }
        .hero {
            padding: 120px 20px 40px;
            background: linear-gradient(180deg, #EAD7BB 0%, #FDFBF8 100%);
        }
        .hero h1 { font-size: 2rem; color: #5D4037; }
        .concept-card {
            max-width: 500px;
            margin: 20px auto;
            background: white;
            padding: 25px;
            border-radius: 20px;
            border: 2px solid #D7CCC8;
        }
        .concept-card ul {
            text-align: left;
            display: inline-block;
            padding: 0;
            list-style: none;
        }
        .concept-card li { margin: 10px 0; font-size: 1.1rem; }
        .concept-card li::before { content: "✓ "; color: #A1887F; }
        .btn-main {
            display: inline-block;
            background-color: #6F4E37;
            color: #FFFFFF;
            padding: 20px 40px;
            font-size: 1.3rem;
            font-weight: bold;
            text-decoration: none;
            border-radius: 50px;
            margin-top: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .sub-text { font-size: 0.8rem; color: #8D6E63; margin-top: 15px; }
    </style>
</head>
<body>
    <header>留学生の対話カフェ</header>
    <section class="hero">
        <div style="background:#D4A373; color:white; display:inline-block; padding:2px 10px; border-radius:5px; font-size:0.8rem;">留学生限定・学割あり</div>
        <h1>安心して話せる場所</h1>
        <p>日本語が完璧じゃなくても大丈夫。<br>あなたの居場所がここにあります。</p>
    </section>
    <section style="padding: 0 20px;">
        <div class="concept-card">
            <ul>
                <li>店主がゆっくり話を聞きます</li>
                <li>無理に話さなくてもOK</li>
                <li>同じ境遇の仲間に出会える</li>
            </ul>
        </div>
    </section>
    <section style="padding-bottom: 60px;">
        <a href="/cafes" class="btn-main">提携カフェを見る</a>
        <p class="sub-text">※まずは近くのカフェを探すだけ</p>
    </section>
</body>
</html>
    `;

    // ブラウザに「これはHTMLですよ」と伝えて返信します
    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
