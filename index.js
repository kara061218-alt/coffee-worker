export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);

    // --- データ定義 ---
    const cafes = [
      { id: "komorebi", name: "こもれびカフェ", owner: "Sato", theme: "静かな対話", color: "#6F4E37", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80" },
      { id: "hidamari", name: "陽だまりテラス", owner: "Ken", theme: "文化の交差点", color: "#8D6E63", img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80" },
      { id: "library", name: "街角ライブラリー", owner: "Maki", theme: "言葉を紡ぐ", color: "#5D4037", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" },
      { id: "kitchen", name: "ひまわりキッチン", owner: "Yoshie", theme: "家庭の温もり", color: "#D4A373", img: "https://images.unsplash.com/photo-1559925393-8be0ec41b5ec?auto=format&fit=crop&w=800&q=80" },
      { id: "green", name: "Green Share", owner: "Taka", theme: "自然と呼吸", color: "#A1887F", img: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80" },
      { id: "tsukiaari", name: "月灯りカフェ", owner: "Jun", theme: "夜の安らぎ", color: "#3E2723", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80" }
    ];

    // --- HTMLパーツ ---
    const head = `
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>yurucafe | ゆるやかな対話の場</title>
        <style>
          :root { --main-brown: #6F4E37; --bg-beige: #FDFBF8; --text-dark: #4A3728; }
          body { margin: 0; font-family: "serif"; background: var(--bg-beige); color: var(--text-dark); overflow-x: hidden; }
          header { position: fixed; top: 0; width: 100%; padding: 20px; z-index: 100; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box; background: rgba(253, 251, 248, 0.9); }
          .logo { font-size: 1.5rem; font-weight: bold; color: var(--main-brown); text-decoration: none; }
          .hero { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1447933630913-bb79bd6511d6?auto=format&fit=crop&w=1600&q=80'); background-size: cover; background-position: center; color: white; padding: 20px; }
          .hero h1 { font-size: 3rem; margin: 0; letter-spacing: 0.2rem; }
          .hero p { font-size: 1.2rem; margin-top: 20px; max-width: 600px; }
          .section { padding: 80px 20px; max-width: 800px; margin: 0 auto; }
          .img-full { width: 100%; border-radius: 10px; margin: 20px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
          .cafe-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 40px; }
          .cafe-card { background: white; border-radius: 15px; overflow: hidden; text-decoration: none; color: inherit; transition: transform 0.3s; border: 1px solid #eee; }
          .cafe-card:hover { transform: translateY(-5px); }
          .cafe-card img { width: 100%; height: 200px; object-fit: cover; }
          .cafe-card-content { padding: 20px; }
          .btn { display: inline-block; background: var(--main-brown); color: white; padding: 15px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; margin-top: 20px; }
          .calendar { display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; margin-top: 20px; }
          .calendar-day { padding: 15px; border: 1px solid #ddd; text-align: center; cursor: pointer; border-radius: 5px; }
          .calendar-day:hover { background: #EAD7BB; }
          .calendar-day.selected { background: var(--main-brown); color: white; }
          @media (max-width: 600px) { .hero h1 { font-size: 2rem; } }
        </style>
      </head>
    `;

    // --- ルーティング処理 ---
    
    // 1. 予約完了
    if (pathname === "/booking-success") {
      return new Response(`<html>${head}<body><header><a href="/" class="logo">yurucafe</a></header><div class="section" style="margin-top:100px; text-align:center;"><h1>予約リクエスト完了</h1><p>予約リクエストを受け付けました。<br>店主より後ほどご連絡します。コーヒーを淹れてお待ちしております。</p><a href="/" class="btn">トップへ戻る</a></div></body></html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    // 2. 予約ページ
    if (pathname === "/booking") {
      return new Response(`<html>${head}<body><header><a href="/" class="logo">yurucafe</a></header><div class="section" style="margin-top:100px;"><h1>対話の時間を予約する</h1><p>ご希望の日程を選択してください。</p><div class="calendar">${Array.from({length: 14}, (_, i) => `<div class="calendar-day" onclick="this.classList.toggle('selected')">${12+i+1}<br><small>Dec</small></div>`).join('')}</div><a href="/booking-success" class="btn" style="width:100%; text-align:center; box-sizing:border-box;">予約を確定する</a></div></body></html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    // 3. カフェ詳細
    if (pathname.startsWith("/cafe/")) {
      const id = pathname.split("/")[2];
      const cafe = cafes.find(c => c.id === id);
      return new Response(`<html>${head}<body><header><a href="/" class="logo">yurucafe</a></header>
        <div class="hero" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${cafe.img}'); height: 60vh;">
          <h1>${cafe.name}</h1>
          <p>店主：${cafe.owner}</p>
        </div>
        <div class="section">
          <h2>一杯のコーヒーから始まる、正直な会話。</h2>
          <p>ここでは日本語が上手である必要はありません。大切なのは、あなたの背景や、あなたが今日感じたことを、自分の言葉で伝えてみることです。</p>
          <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" class="img-full" alt="Cafe atmosphere">
          <p>店主の${cafe.owner}は、コーヒーの香りと共に、あなたの物語をゆっくりと待っています。</p>
          <div style="background:#f0f0f0; padding:40px; border-radius:10px; text-align:center;">
             <p>（ここに1分間の紹介動画が流れます）</p>
          </div>
          <div style="text-align:center; margin-top:40px;">
            <a href="/booking" class="btn">このカフェでの対話を予約する</a>
          </div>
        </div>
      </body></html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    // 4. カフェ一覧
    if (pathname === "/cafes") {
      const cards = cafes.map(c => `
        <a href="/cafe/${c.id}" class="cafe-card">
          <img src="${c.img}" alt="${c.name}">
          <div class="cafe-card-content">
            <small style="color:${c.color}; font-weight:bold;">${c.theme}</small>
            <h3 style="margin:5px 0;">${c.name}</h3>
            <p style="font-size:0.8rem; opacity:0.7;">店主：${c.owner}</p>
          </div>
        </a>
      `).join('');
      return new Response(`<html>${head}<body><header><a href="/" class="logo">yurucafe</a></header>
        <div class="section" style="margin-top:80px;">
          <h1>提携カフェ</h1>
          <p>あなたに合った「居場所」を見つけてください。</p>
          <div class="cafe-grid">${cards}</div>
        </div>
      </body></html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    // 5. トップページ
    return new Response(`
      <html>${head}
      <body>
        <header><a href="/" class="logo">yurucafe</a></header>
        <section class="hero">
          <h1>心をほぐす、<br>ゆるやかな対話。</h1>
          <p>コーヒーは、正直な会話を生むための「媒介」です。<br>留学生のための、安心して自分を表現できる場所。</p>
          <a href="#concept" class="btn">想いを知る</a>
        </section>
        
        <section id="concept" class="section">
          <h2 style="text-align:center;">Concept</h2>
          <p>忙しい毎日の中で、自分の個性を置いてけぼりにしていませんか？<br>yurucafeは、文化や言語の壁を超え、一人の人間として向き合える空間を提供します。</p>
          
          <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80" class="img-full">
          <p>アカデミックな探究と、日々の安らぎ。その両立を、私たちは「一杯のコーヒー」と「対話」で実現します。</p>
          <div style="text-align:center; margin-top:50px;">
            <a href="/cafes" class="btn">カフェを探す</a>
          </div>
        </section>

        <footer style="padding:40px; text-align:center; font-size:0.8rem; opacity:0.6;">
          &copy; 2025 yurucafe.org
        </footer>
      </body>
      </html>
    `, { headers: { "content-type": "text/html;charset=UTF-8" } });
  },
};
