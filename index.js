export default {
  async fetch() {
    return new Response(`<!DOCTYPE html>
<html>
<head>
<title>yurucafe</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600&family=Zen+Kaku+Gothic+New:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{--bg:#fdfbf7;--text:#4a3b32;--accent:#a67b5b;--light:#e8e4dc;--white:#fff;}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Zen Kaku Gothic New',sans-serif;background:var(--bg);color:var(--text);line-height:1.7;overflow-x:hidden;}
.container{max-width:1200px;margin:auto;padding:0 20px;}
header{position:fixed;top:0;width:100%;background:rgba(255,255,255,0.95);backdrop-filter:blur(10px);padding:1rem 0;z-index:100;box-shadow:0 2px 20px rgba(0,0,0,0.1);}
.nav{display:flex;justify-content:space-between;align-items:center;}
.logo{font-family:'Shippori Mincho',serif;font-size:1.5rem;font-weight:600;color:var(--text);}
.btn{background:var(--accent);color:var(--white);padding:1rem 2rem;border-radius:50px;font-weight:500;text-decoration:none;box-shadow:0 8px 25px rgba(166,123,91,0.4);transition:all .3s;}
.btn:hover{transform:translateY(-2px);box-shadow:0 12px 35px rgba(166,123,91,0.6);}
.hero{height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;background:linear-gradient(rgba(74,59,50,0.6),rgba(74,59,50,0.6)),url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80');background-size:cover;background-position:center;color:var(--white);}
.hero-content{max-width:800px;}
.hero h1{font-family:'Shippori Mincho',serif;font-size:clamp(2.5rem,6vw,5rem);font-weight:700;margin-bottom:1.5rem;text-shadow:0 4px 20px rgba(0,0,0,0.5);}
.hero p{font-size:clamp(1.1rem,3vw,1.5rem);margin-bottom:2rem;opacity:0.95;}
.section{padding:120px 0;background:var(--bg);}
.section h2{font-family:'Shippori Mincho',serif;font-size:clamp(2rem,5vw,3.5rem);text-align:center;margin-bottom:3rem;}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;max-width:1000px;margin:0 auto;}
.card{background:var(--white);padding:2.5rem;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,0.1);transition:all .4s;text-align:center;}
.card:hover{transform:translateY(-10px);box-shadow:0 25px 60px rgba(0,0,0,0.15);}
.card-icon{width:60px;height:60px;background:var(--accent);border-radius:50%;margin:0 auto 1.5rem;display:flex;align-items:center;justify-content:center;color:var(--white);font-size:1.5rem;}
.card h3{font-family:'Shippori Mincho',serif;font-size:1.5rem;margin-bottom:1rem;color:var(--text);}
.cta{background:var(--accent);color:var(--white);padding:4rem;text-align:center;border-radius:20px;margin:4rem auto;max-width:600px;box-shadow:0 20px 60px rgba(166,123,91,0.3);}
.cta h2{font-family:'Shippori Mincho',serif;font-size:clamp(2rem,5vw,3rem);}
.cta-btn{background:var(--white);color:var(--accent);padding:1.2rem 3rem;border-radius:50px;font-size:1.1rem;font-weight:600;display:inline-flex;align-items:center;gap:1rem;box-shadow:0 10px 30px rgba(255,255,255,0.3);}
.cta-btn:hover{background:#f8f5f0;transform:translateY(-3px);}
.footer{text-align:center;padding:4rem 0;color:#888;font-size:.9rem;}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.scroll-indicator{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);color:var(--white);text-align:center;animation:float 2s infinite;}
.scroll-indicator span{font-size:.7rem;letter-spacing:2px;text-transform:uppercase;}
.scroll-indicator div{width:2px;height:2rem;background:var(--white);margin:1rem auto 0;opacity:.7;}
</style>
</head>
<body>
<header><div class="container nav"><a href="/" class="logo">yurucafe</a><a href="#cafes" class="btn">カフェを探す</a></div></header>
<section class="hero"><div class="container hero-content"><h1>コーヒーを片手に、<br>世界と語る。</h1><p>言葉の壁を越えて、心がほどける瞬間を。<br>yurucafeは、留学生のための「ゆるやかな対話の場」です。</p><div style="display:flex;flex-direction:column;gap:1rem;align-items:center;max-width:400px;margin:2rem auto;"><a href="#cafes" class="btn" style="background:var(--accent);">カフェを探す</a><a href="#about" class="btn" style="background:transparent;border:2px solid var(--white);">yurucafeとは？</a></div></div></section>
<div class="scroll-indicator"><span>Scroll</span><div></div></div>
<section id="about" class="section"><div class="container"><h2>忙しい毎日に、<br>深呼吸できる一杯を。</h2><div class="grid"><div class="card"><div class="card-icon">💖</div><h3>安心できる居場所</h3><p>否定されない、評価されない。ありのままの自分でいられる心理的安全性のある空間をつくります。</p></div><div class="card"><div class="card-icon">💬</div><h3>個性の表現</h3><p>「自分の個性を表現してもいい場所がある」という安心感を。会話の中で、互いの背景にある物語に耳を傾けます。</p></div><div class="card"><div class="card-icon">☕</div><h3>コーヒーの再発見</h3><p>一杯のコーヒーが持つ奥深さと、それが作り出す豊かな時間。カフェという空間の本質的な魅力を伝えます。</p></div></div></div></section>
<section class="cta" id="cafes"><div class="container"><h2>あなたの「居場所」を<br>見つけに行こう</h2><p>yurucafeが提携するカフェは、どれも店主のこだわりと温かさが詰まった場所。静かに本を読みたい時も、誰かと語らいたい時も。</p><a href="/cafes.html" class="cta-btn">提携カフェ一覧を見る →</a></div></section>
<section class="section"><div class="container"><div style="text-align:center;max-width:600px;margin:auto;"><div style="font-size:4rem;margin-bottom:2rem;">☕</div><h2>今日は、どんな話をしましょうか？</h2><p style="font-size:1.1rem;color:#666;">留学生のみなさん、そして日常に少し疲れているみなさん。yurucafeはいつでも、あなたを歓迎します。美味しいコーヒーを淹れて、お待ちしています。</p></div></div></section>
<footer class="footer">© 2024 yurucafe Project<br>Designed for connection, not for profit.</footer>
</body>
</html>`, {headers:{"Content-Type":"text/html;charset=utf-8"}});
  }
};
