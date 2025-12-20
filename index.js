export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname === '/' ? '/index.html' : url.pathname;

    if (path === '/index.html') return htmlResponse(indexHTML);
    if (path === '/cafes.html') return htmlResponse(cafesHTML);
    if (path === '/cafe.html') return htmlResponse(cafeHTML);
    if (path === '/booking.html') return htmlResponse(bookingHTML);
    
    return htmlResponse(indexHTML);
  }
};

function htmlResponse(html) {
  return new Response(html, {
    headers: { 
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

// 共通スタイル（変数）
const sharedStyles = `
:root {
  --bg: #F9F5F0;
  --text: #4A3B32;
  --accent: #A67B5B;
  --light: #E8Ddd4;
  --white: #fff;
  --black: #000000;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Zen Kaku Gothic New', sans-serif; background: var(--bg); color: var(--text); line-height: 1.8; }
h1, h2, h3 { font-family: 'Zen Old Mincho', serif; font-weight: 600; }
a { text-decoration: none; color: inherit; transition: .3s; }
.container { max-width: 900px; margin: 0 auto; padding: 0 20px; }
header { padding: 20px 0; border-bottom: 1px solid var(--light); background: var(--white); }
.nav-inner { display: flex; justify-content: space-between; align-items: center; }
.logo { font-family: 'Zen Old Mincho', serif; font-size: 1.5rem; letter-spacing: .05em; color: var(--text); }
footer { text-align: center; padding: 40px 0; font-size: .8rem; border-top: 1px solid var(--light); color: #888; }
`;

// ページ1: メインページ
const indexHTML = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>yurucafe | ホーム</title>
    <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500&family=Zen+Old+Mincho:wght@400;600&display=swap" rel="stylesheet">
    <style>
        ${sharedStyles}
        .hero { height: 80vh; display: flex; align-items: center; justify-content: center; text-align: center; background: linear-gradient(rgba(74,59,50,.4),rgba(74,59,50,.4)), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200'); background-size: cover; background-position: center; color: var(--white); margin-bottom: 40px; }
        .hero-title { font-size: 2.2rem; margin-bottom: 20px; line-height: 1.4; text-shadow: 0 2px 8px rgba(0,0,0,.4); }
        .section-title { text-align: center; font-size: 1.6rem; margin-bottom: 30px; position: relative; color: var(--text); }
        .section-title::after { content: ""; display: block; width: 40px; height: 1px; background: var(--accent); margin: 15px auto 0; }
        .btn { display: inline-block; background: var(--accent); color: var(--white); padding: 14px 40px; border-radius: 4px; font-size: 1rem; margin-top: 20px; box-shadow: 0 4px 15px rgba(166,123,91,0.3); }
        .btn:hover { background: var(--text); transform: translateY(-2px); }
    </style>
</head>
<body>
    <header>
        <div class="container nav-inner">
            <a href="/" class="logo">yurucafe</a>
            <nav><a href="/cafes.html" style="font-weight: 500;">カフェを探す</a></nav>
        </div>
    </header>
    <div class="hero">
        <div class="container">
            <h1 class="hero-title">一杯のコーヒーが、<br>心の国境を溶かす。</h1>
            <p style="font-size: 1.1rem; opacity: .9;">留学生と地域をつなぐ、ゆるやかな対話の場</p>
        </div>
    </div>
    <section class="container" style="padding: 60px 0;">
        <h2 class="section-title">Concept</h2>
        <div style="text-align: center; max-width: 650px; margin: 0 auto;">
            <p style="margin-bottom: 20px;">異国の地で学ぶということ。<br>それは、新しい発見の連続であると同時に、<br>言葉にできない孤独を抱えることでもあります。</p>
            <p style="margin-bottom: 20px;">yurucafeは、そんな日常に「余白」をつくるプロジェクトです。<br>ここは、完璧な言語を話す必要がない場所。</p>
            <p>コーヒーの香りに包まれながら、<br>あなたの故郷の話、私の日常の話をしませんか？</p>
        </div>
    </section>
    <section class="container" style="text-align: center; padding-bottom: 80px;">
        <h2 class="section-title">Join Us</h2>
        <p>静かな対話と、温かな一杯を用意して<br>あなたを待っているカフェがあります。</p>
        <a href="/cafes.html" class="btn">提携カフェを見る</a>
    </section>
    <footer>
        <p>&copy; 2024 yurucafe Project.<br>Designed for connection.</p>
    </footer>
</body>
</html>`;

// ページ2: カフェ一覧
const cafesHTML = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>カフェ一覧 | yurucafe</title>
    <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500&family=Zen+Old+Mincho:wght@400;600&display=swap" rel="stylesheet">
    <style>
        ${sharedStyles}
        h2.title-black { color: var(--black); text-align: center; margin: 60px 0 10px 0; font-size: 1.8rem; }
        .subtitle { text-align: center; margin-bottom: 40px; color: #666; font-size: 0.9rem; }
        .cafe-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-bottom: 60px; }
        .cafe-card { background: var(--white); border: 1px solid var(--light); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,.05); transition: transform .3s, box-shadow .3s; display: flex; flex-direction: column; }
        .cafe-card:hover { transform: translateY(-8px); box-shadow: 0 12px 30px rgba(0,0,0,.1); }
        .card-img { height: 180px; width: 100%; background-size: cover; background-position: center; border-bottom: 1px solid #eee; }
        .card-content { padding: 20px; flex-grow: 1; }
        .cafe-name { font-size: 1.3rem; margin-bottom: 10px; color: var(--black); }
        .cafe-desc { font-size: 0.9rem; color: #555; height: 4.5em; overflow: hidden; }
        .tag-box { display: flex; gap: 8px; margin-top: 15px; flex-wrap: wrap; }
        .tag { background: #F0F0F0; padding: 3px 10px; border-radius: 4px; font-size: .75rem; color: #666; }
        .btn-home { display: block; background: var(--accent); color: var(--white); padding: 12px 30px; border-radius: 4px; text-align: center; max-width: 200px; margin: 0 auto 80px; }
    </style>
</head>
<body>
    <header>
        <div class="container nav-inner">
            <a href="/" class="logo">yurucafe</a>
            <nav><a href="/" style="font-size: .9rem;">トップへ</a></nav>
        </div>
    </header>
    <div class="container">
        <h2 class="title-black">提携カフェ一覧</h2>
        <p class="subtitle">対話サポーターが待っている、6つの個性的な空間</p>
        
        <div class="cafe-grid">
            <!-- 1 -->
            <a href="/cafe.html" class="cafe-card">
                <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=400')"></div>
                <div class="card-content">
                    <h3 class="cafe-name">珈琲・木漏れ日</h3>
                    <p class="cafe-desc">店主Kenさんの丁寧なハンドドリップ。バックパッカー時代の話を聞かせてくれます。</p>
                    <div class="tag-box"><span class="tag">#英語OK</span><span class="tag">#旅の話</span></div>
                </div>
            </a>
            <!-- 2 -->
            <a href="/cafe.html" class="cafe-card">
                <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400')"></div>
                <div class="card-content">
                    <h3 class="cafe-name">青い鳥文庫カフェ</h3>
                    <p class="cafe-desc">壁一面の本棚。静かに読書を楽しみたい方や、母国の本を紹介したい留学生に人気。</p>
                    <div class="tag-box"><span class="tag">#読書</span><span class="tag">#多言語本</span></div>
                </div>
            </a>
            <!-- 3 -->
            <a href="/cafe.html" class="cafe-card">
                <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1559925393-8be0ec41b50d?auto=format&fit=crop&q=80&w=400')"></div>
                <div class="card-content">
                    <h3 class="cafe-name">ハーブガーデン・テラス</h3>
                    <p class="cafe-desc">自家製ハーブティーが自慢。開放的なテラス席で、リラックスした会話が弾みます。</p>
                    <div class="tag-box"><span class="tag">#テラス</span><span class="tag">#ハーブ</span></div>
                </div>
            </a>
            <!-- 4 -->
            <a href="/cafe.html" class="cafe-card">
                <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=400')"></div>
                <div class="card-content">
                    <h3 class="cafe-name">アトリエ・カフェ 創</h3>
                    <p class="cafe-desc">地元のアーティストが通う。絵を描いたりモノづくりをしながらの交流が得意です。</p>
                    <div class="tag-box"><span class="tag">#アート</span><span class="tag">#体験型</span></div>
                </div>
            </a>
            <!-- 5 -->
            <a href="/cafe.html" class="cafe-card">
                <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=400')"></div>
                <div class="card-content">
                    <h3 class="cafe-name">お茶の間カフェ「和」</h3>
                    <p class="cafe-desc">靴を脱いで上がる畳の空間。近所のおばあちゃんと話すような安心感があります。</p>
                    <div class="tag-box"><span class="tag">#和室</span><span class="tag">#日本文化</span></div>
                </div>
            </a>
            <!-- 6 -->
            <a href="/cafe.html" class="cafe-card">
                <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=400')"></div>
                <div class="card-content">
                    <h3 class="cafe-name">Music Box 奏</h3>
                    <p class="cafe-desc">レコードが流れるレトロな空間。音楽という共通言語で、言葉の壁を越えられます。</p>
                    <div class="tag-box"><span class="tag">#レコード</span><span class="tag">#音楽好き</span></div>
                </div>
            </a>
        </div>
        
        <a href="/" class="btn-home">トップに戻る</a>
    </div>
    <footer><p>&copy; 2024 yurucafe</p></footer>
</body>
</html>`;

// ページ3: カフェ詳細
const cafeHTML = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>詳細 | yurucafe</title>
    <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500&family=Zen+Old+Mincho:wght@400;600&display=swap" rel="stylesheet">
    <style>
        ${sharedStyles}
        .cafe-title { font-size: 2.2rem; text-align: center; margin: 40px 0 10px; color: var(--black); }
        .owner { font-size: .95rem; color: #666; text-align: center; font-style: italic; margin-bottom: 40px; }
        .video-box { height: 350px; background: #333; color: #fff; display: flex; align-items: center; justify-content: center; margin-bottom: 40px; border-radius: 12px; font-size: 1.2rem; background-image: url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800'); background-size: cover; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .story { padding: 40px; background: var(--white); border-radius: 12px; margin-bottom: 40px; border-left: 6px solid var(--accent); box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
        .btn-booking { display: inline-block; background: var(--accent); color: var(--white); padding: 18px 50px; border-radius: 4px; font-size: 1.1rem; margin: 30px auto 0; display: block; text-align: center; max-width: 350px; font-weight: bold; }
        .btn-booking:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(166,123,91,0.4); }
    </style>
</head>
<body>
    <header>
        <div class="container nav-inner">
            <a href="/" class="logo">yurucafe</a>
            <nav><a href="/cafes.html">一覧へ戻る</a></nav>
        </div>
    </header>
    <div class="container">
        <h1 class="cafe-title">珈琲・木漏れ日</h1>
        <p class="owner">店主：Ken（ケンと呼んでください）</p>
        <div class="video-box">▶ Cafe Ambience (1:30)</div>
        <div class="story">
            <h3 style="padding-bottom: 15px; margin-bottom: 20px; border-bottom: 1px solid #eee;">「沈黙も会話の一部です」</h3>
            <p style="margin-bottom: 15px;">言葉が通じない国で過ごした経験から、この店を始めました。<br>無理に話さなくてもいい。コーヒーの香りに包まれながら、あなたのペースで過ごしてください。</p>
            <p>こだわりの深煎りマンデリンは、苦味の奥に確かな甘みがあります。<br>お会いできるのを、楽しみにしています。</p>
        </div>
        <div style="background: var(--white); padding: 50px; text-align: center; border: 1px solid var(--light); border-radius: 12px; margin-bottom: 80px;">
            <h3 style="color: var(--black);">対話を予約する</h3>
            <p style="font-size: .95rem; margin-top: 15px; color: #666;">※「yurucafeを見ました」と言えば学生割引が適用されます</p>
            <a href="/booking.html" class="btn-booking">予約カレンダーを見る</a>
        </div>
    </div>
    <footer><p>&copy; 2024 yurucafe</p></footer>
</body>
</html>`;

// ページ4: 予約
const bookingHTML = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>予約 | yurucafe</title>
    <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500&family=Zen+Old+Mincho:wght@400;600&display=swap" rel="stylesheet">
    <style>
        ${sharedStyles}
        .booking-card { background: var(--white); padding: 40px; border-radius: 12px; border: 1px solid var(--light); margin: 60px 0; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.03); }
        .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; margin-top: 30px; }
        .day-name { font-size: .85rem; color: #888; font-weight: bold; padding-bottom: 10px; }
        .date-btn { background: none; border: 1px solid #eee; padding: 12px; cursor: pointer; border-radius: 8px; font-size: .95rem; transition: .2s; }
        .date-btn:hover { background: var(--light); border-color: var(--accent); }
        .date-btn.selected { background: var(--accent); color: var(--white); border-color: var(--accent); font-weight: bold; }
        .btn-confirm { background: var(--accent); color: var(--white); padding: 18px 60px; border: none; border-radius: 4px; font-size: 1.1rem; cursor: pointer; margin-top: 30px; opacity: .4; pointer-events: none; transition: .3s; font-weight: bold; }
        .btn-confirm.active { opacity: 1; pointer-events: auto; }
        .success-box { display: none; background: #F0F9F1; color: #2E5A35; padding: 30px; border-radius: 8px; margin-top: 30px; line-height: 1.6; border: 1px solid #C8E6C9; }
    </style>
</head>
<body>
    <header>
        <div class="container nav-inner">
            <a href="/" class="logo">yurucafe</a>
            <nav><a href="/cafe.html">戻る</a></nav>
        </div>
    </header>
    <div class="container">
        <div class="booking-card">
            <h2 style="color: var(--black);">珈琲・木漏れ日 予約</h2>
            <p style="margin-top: 10px; color: #666;">対話サポーター(Ken)の空き時間を確認できます</p>
            
            <div class="calendar-grid" id="grid">
                <div class="day-name">日</div><div class="day-name">月</div><div class="day-name">火</div>
                <div class="day-name">水</div><div class="day-name">木</div><div class="day-name">金</div><div class="day-name">土</div>
            </div>
            
            <button id="confirm" class="btn-confirm">予約をリクエストする</button>
            
            <div id="success" class="success-box">
                <strong>予約リクエストを受け付けました。</strong><br>
                店主Kenより、後ほどメールにて詳細をご連絡します。<br>お会いできるのを心待ちにしています。
            </div>
        </div>
    </div>
    <script>
        const grid = document.getElementById('grid'),
              confirmBtn = document.getElementById('confirm'),
              successBox = document.getElementById('success');
        
        // 14日分のダミーボタン生成
        for(let i=1; i<=14; i++){
            const btn = document.createElement('button');
            btn.className = 'date-btn';
            btn.textContent = i;
            btn.onclick = () => {
                document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                confirmBtn.classList.add('active');
                confirmBtn.onclick = () => {
                    confirmBtn.style.display = 'none';
                    successBox.style.display = 'block';
                };
            };
            grid.appendChild(btn);
        }
    </script>
</body>
</html>`;
