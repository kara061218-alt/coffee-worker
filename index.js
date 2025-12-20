export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);

    // --- 6つの提携カフェデータ（テーマ・店主・メッセージを個別に設定） ---
    const cafes = [
      { 
        id: "komorebi", 
        name: "こもれびカフェ", 
        owner: "Sato", 
        theme: "静かな対話", 
        message: "ゆっくりした日本語で話しましょう。沈黙も大切にしています。",
        color: "#6F4E37", 
        img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80" 
      },
      { 
        id: "hidamari", 
        name: "陽だまりテラス", 
        owner: "Ken", 
        theme: "文化の交差点", 
        message: "海外生活の経験があります。孤独な気持ち、よくわかりますよ。",
        color: "#8D6E63", 
        img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80" 
      },
      { 
        id: "library", 
        name: "街角ライブラリー", 
        owner: "Maki", 
        theme: "言葉を紡ぐ", 
        message: "本に囲まれてお茶を。言葉が見つからない時は本を眺めてもOK。",
        color: "#5D4037", 
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" 
      },
      { 
        id: "kitchen", 
        name: "ひまわりキッチン", 
        owner: "Yoshie", 
        theme: "家庭の温もり", 
        message: "「お腹すいてない？」お母さんのような温かいごはんも出せますよ。",
        color: "#D4A373", 
        img: "https://images.unsplash.com/photo-1559925393-8be0ec41b5ec?auto=format&fit=crop&w=800&q=80" 
      },
      { 
        id: "green", 
        name: "Green Share", 
        owner: "Taka", 
        theme: "自然と呼吸", 
        message: "植物がたくさん。言葉の壁を気にせず、リラックスして過ごせます。",
        color: "#A1887F", 
        img: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80" 
      },
      { 
        id: "tsukiari", 
        name: "月灯りカフェ", 
        owner: "Jun", 
        theme: "夜の安らぎ", 
        message: "夜の寂しい時間に。少しだけ勇気を出して扉を開けてみて。",
        color: "#3E2723", 
        img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80" 
      }
    ];

    // --- 共通HEAD（CSSを含む） ---
    const head = `
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>yurucafe | ゆるやかな対話の場</title>
        <style>
          :root { --main-brown: #6F4E37; --bg-beige: #FDFBF8; --text-dark: #4A3728; }
          body { margin: 0; font-family: "Hiragino Mincho ProN", "serif"; background: var(--bg-beige); color: var(--text-dark); line-height: 1.6; }
          header { position: fixed; top: 0; width: 100%; padding: 15px 20px; z-index: 100; background: rgba(253, 251, 248, 0.95); display: flex; justify-content: space-between; align-items: center; box-shadow: 0 1px 10px rgba(0,0,0,0.05); box-sizing: border-box; }
          .logo { font-size: 1.4rem; font-weight: bold; color: var(--main-brown); text-decoration: none; letter-spacing: 0.1rem; }
          .hero { height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1447933630913-bb79bd6511d6?auto=format&fit=crop&w=1600&q=80'); background-size: cover; background-position: center; color: white; padding: 20px; }
          .hero h1 { font-size: 2.5rem; margin: 0; font-weight: normal; }
          .section { padding: 60px 20px; max-width: 900px; margin: 0 auto; }
          .cafe-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 40px; }
          .cafe-card { background: white; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #eee; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
          .cafe-card:hover { transform: translateY(-8px); box-shadow: 0 12px 30px rgba(0,0,0,0.1); }
          .cafe-card img { width: 100%; height: 220px; object-fit: cover; }
          .cafe-card-content { padding: 20px; }
          .btn { display: inline-block; background: var(--main-brown); color: white; padding: 16px 45px; border-radius: 50px; text-decoration: none; font-weight: bold; transition: opacity 0.2s; border: none; cursor: pointer; }
          .btn:hover { opacity: 0.9; }
          .owner-quote { font-style: italic; border-left: 3px solid var(--main-brown); padding-left: 15px; margin: 20px 0; color: #5D4037; }
        </style>
      </head>
    `;

    // --- 1. 予約完了ページ ---
    if (pathname === "/booking-success") {
      return new Response(`<html>${head}<body><header><a href="/" class="logo">yurucafe</a></header><div class="section" style="margin-top:100px; text-align:center;"><h1>予約を受け付けました</h1><p>店主より、ご登録の連絡先へお返事いたします。<br>お会いできるのを楽しみにしています。</p><a href="/" class="btn" style="margin-top:40px;">トップページへ</a></div></body></html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    // --- 2. カフェ詳細ページ ---
    if (pathname.startsWith("/cafe/")) {
      const id = pathname.split("/")[2];
      const cafe = cafes.find(c => c.id === id);
      if (!cafe) return new Response("Cafe Not Found", { status: 404 });

      return new Response(`<html>${head}<body><header><a href="/" class="logo">yurucafe</a></header>
        <div class="hero" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${cafe.img}'); height: 50vh;">
          <h1 style="font-size: 2rem;">${cafe.name}</h1>
          <p>${cafe.theme}</p>
        </div>
        <div class="section">
          <h2>店主 ${cafe.owner} より</h2>
          <div class="owner-quote">「${cafe.message}」</div>
          <p>このカフェは、単にコーヒーを飲む場所ではありません。あなたの今の気持ち、出身国のこと、今日あった小さな出来事。どんなことでも、あなたの言葉で話せる場所です。</p>
          <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" style="width:100%; border-radius:10px; margin:30px 0;">
          <div style="text-align:center;">
            <a href="/booking-success" class="btn">このカフェでの時間を予約する</a>
            <br><a href="/" style="display:inline-block; margin-top:20px; color:#8D6E63; text-decoration:none;">← 一覧に戻る</a>
          </div>
        </div>
      </body></html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    // --- 3. メインページ (Concept + カフェ一覧) ---
    const cafeCards = cafes.map(c => `
      <a href="/cafe/${c.id}" class="cafe-card">
        <img src="${c.img}" alt="${c.name}">
        <div class="cafe-card-content">
          <span style="font-size:0.75rem; color:${c.color}; font-weight:bold; letter-spacing:0.05rem;">${c.theme}</span>
          <h3 style="margin:8px 0;">${c.name}</h3>
          <p style="font-size:0.85rem; opacity:0.8;">店主：${c.owner}</p>
        </div>
      </a>
    `).join('');

    return new Response(`
      <html>${head}
      <body>
        <header><a href="/" class="logo">yurucafe</a></header>
        <section class="hero">
          <h1>ゆるやかな対話が、<br>心を温める。</h1>
          <p>留学生のための、安心して自分を表現できる場所。<br>一杯のコーヒーを片手に、正直な言葉を紡ぎませんか。</p>
        </section>
        
        <section class="section" id="cafes">
          <h2 style="text-align:center; margin-bottom:10px;">提携カフェ一覧</h2>
          <p style="text-align:center; opacity:0.7; margin-bottom:40px;">今のあなたにぴったりの「居場所」が、ここに見つかります。</p>
          <div class="cafe-grid">${cafeCards}</div>
        </section>

        <section class="section" style="background:#F5EFE6; max-width:100%;">
          <div style="max-width:800px; margin:0 auto; text-align:center;">
            <h2>yurucafe の想い</h2>
            <p>言葉が完璧でなくても、伝えたい想いがあれば、そこに対話が生まれます。<br>私たちは、カフェという日常の空間を使い、誰もが孤独を感じずに過ごせる「第3の場所」を目指しています。</p>
          </div>
        </section>

        <footer style="padding:40px; text-align:center; font-size:0.8rem; opacity:0.5; background:var(--bg-beige);">
          &copy; 2025 yurucafe.org
        </footer>
      </body>
      </html>
    `, { headers: { "content-type": "text/html;charset=UTF-8" } });
  },
};
