export default {
  async fetch(request) {
    return new Response(`
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>yurucafe | コーヒーと対話の実験室</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600&family=Zen+Kaku+Gothic+New:wght@400;500&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #fdfbf7;
            --text-color: #4a3b32;
            --accent-color: #a67b5b;
            --light-accent: #e8e4dc;
            --white: #ffffff;
            --font-heading: 'Shippori Mincho', serif;
            --font-body: 'Zen Kaku Gothic New', sans-serif;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: var(--font-body);
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.7;
            letter-spacing: 0.05em;
        }
        a { text-decoration: none; color: inherit; transition: opacity 0.3s; }
        a:hover { opacity: 0.7; }
        img { max-width: 100%; height: auto; display: block; }
        .container { max-width: 800px; margin: 0 auto; padding: 0 20px; }
        .text-center { text-align: center; }
        .section-padding { padding: 60px 0; }
        h1, h2, h3 { font-family: var(--font-heading); font-weight: 600; }
        .title-main { font-size: 2.2rem; line-height: 1.4; margin-bottom: 1rem; }
        .title-sub { font-size: 1.0rem; opacity: 0.8; margin-bottom: 2rem; }
        .section-title { font-size: 1.6rem; margin-bottom: 30px; position: relative; display: inline-block; }
        .section-title::after {
            content: ''; display: block; width: 40px; height: 1px; 
            background: var(--accent-color); margin: 10px auto 0;
        }
        header { padding: 20px 0; border-bottom: 1px solid var(--light-accent); }
        .nav-inner { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-family: var(--font-heading); font-size: 1.4rem; font-weight: bold; }
        .hero {
            height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(rgba(74, 59, 50, 0.4), rgba(74, 59, 50, 0.4)), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800');
            background-size: cover;
            background-position: center;
            color: var(--white);
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            margin-bottom: 40px;
        }
        .concept-text { max-width: 600px; margin: 0 auto; text-align: justify; }
        .concept-text p { margin-bottom: 24px; }
        .btn {
            display: inline-block;
            background-color: var(--accent-color);
            color: var(--white);
            padding: 12px 30px;
            border-radius: 4px;
            font-size: 1rem;
            margin-top: 20px;
            border: 1px solid var(--accent-color);
        }
        .btn:hover { background-color: transparent; color: var(--accent-color); }
        footer {
            background-color: var(--text-color);
            color: var(--white);
            padding: 40px 0;
            font-size: 0.8rem;
            margin-top: 60px;
        }
    </style>
</head>
<body>
    <header>
        <div class="container nav-inner">
            <a href="/" class="logo">yurucafe</a>
            <nav><a href="/cafes">カフェを探す</a></nav>
        </div>
    </header>
    <main>
        <section class="hero">
            <div class="container text-center">
                <h1 class="title-main">言葉の向こう側へ、<br>コーヒーと共に。</h1>
                <p class="title-sub">留学生と地域をつなぐ、静かで温かい対話の実験室</p>
            </div>
        </section>
        <section class="container section-padding">
            <div class="text-center"><h2 class="section-title">Concept</h2></div>
            <div class="concept-text">
                <p>異国の地で暮らすということ。それは新しい発見の連続であると同時に、言葉にできない孤独を抱えることでもあります。</p>
                <p>yurucafeは、そんな日々の隙間に「安心できる居場所」をつくるプロジェクトです。完璧な日本語を話す必要はありません。うまく伝えようとしなくても大丈夫です。</p>
                <p>一杯の温かいコーヒーが、張り詰めた心を少しだけほぐしてくれます。その「余白」の中で、あなたの故郷の話、私の日常の話をしませんか？</p>
            </div>
        </section>
        <section class="container section-padding text-center" style="background-color: var(--light-accent); border-radius: 8px;">
            <h2 class="section-title">あなたを待っている場所があります</h2>
            <p>大学の近く、路地裏の小さなカフェ。<br>店主と対話サポーターが、温かいコーヒーを用意しています。</p>
            <a href="/cafes" class="btn">提携カフェ一覧を見る</a>
        </section>
    </main>
    <footer class="text-center">
        <div class="container">
            <p>yurucafe Project</p>
        </div>
    </footer>
</body>
</html>
    `, {
      headers: { 
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600"
      }
    });
  }
};
