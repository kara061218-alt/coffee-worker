export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);

    const cafes = [
      { id: "komorebi", name: "こもれびカフェ", owner: "Sato", theme: "静かな対話", message: "ゆっくりした日本語で。沈黙さえも心地よい場所に。", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80" },
      { id: "hidamari", name: "陽だまりテラス", owner: "Ken", theme: "文化の交差点", message: "海外の孤独を知る店主が、あなたの話を聞きます。", img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80" },
      { id: "library", name: "街角ライブラリー", owner: "Maki", theme: "言葉を紡ぐ", message: "本に囲まれて。言葉が出ない時は、一緒に本を眺めましょう。", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" },
      { id: "kitchen", name: "ひまわりキッチン", owner: "Yoshie", theme: "家庭の温もり", message: "お腹も心も満たされる、実家のような安心感を。", img: "https://images.unsplash.com/photo-1559925393-8be0ec41b5ec?auto=format&fit=crop&w=800&q=80" },
      { id: "green", name: "Green Share", owner: "Taka", theme: "自然と呼吸", message: "植物の緑の中で。リラックスして、ありのままのあなたで。", img: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80" },
      { id: "tsukiari", name: "月灯りカフェ", owner: "Jun", theme: "夜の安らぎ", message: "一日の終わりに。夜の寂しさを分け合える場所に。", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80" }
    ];

    const head = `
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>yurucafe | 留学生のための対話カフェ</title>
        <style>
          :root { --brown: #5D4037; --light-brown: #8D6E63; --beige: #FDFBF8; --accent: #D4A373; }
          body { margin: 0; font-family: "Hiragino Sans", sans-serif; background: var(--beige); color: #333; line-height: 1.8; }
          
          /* ヘッダー：常に「戻れる」安心感 */
          header { position: sticky; top: 0; background: rgba(253, 251, 248, 0.9); backdrop-filter: blur(5px); padding: 15px 20px; z-index: 1000; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
          .logo { font-size: 1.2rem; font-weight: 800; color: var(--brown); text-decoration: none; }

          /* ヒーロー：3秒で役割を伝える */
          .hero { padding: 80px 20px 40px; text-align: center; background: linear-gradient(180deg, #EAD7BB 0%, var(--beige) 100%); }
          .hero h1 { font-size: 2.2rem; color: var(--brown); margin: 0 0 20px; line-height: 1.3; }
          .hero p { font-size: 1.1rem; color: var(--light-brown); font-weight: bold; }

          /* セクション共通 */
          .section { padding: 40px 20px; max-width: 600px; margin: 0 auto; }
          .card { background: white; padding: 30px; border-radius: 16px; border: 1px solid #EAE2D6; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }

          /* カフェ一覧：直感的なカード */
          .cafe-list { display: grid; gap: 20px; margin-top: 20px; }
          .cafe-card { text-decoration: none; color: inherit; display: flex; background: white; border-radius: 12px; overflow: hidden; border: 1px solid #eee; transition: transform 0.2s; }
          .cafe-card:active { transform: scale(0.98); }
          .cafe-card img { width: 100px; height: 100px; object-fit: cover; }
          .cafe-card-info { padding: 15px; flex: 1; }
          .cafe-card-info h3 { margin: 0; font-size: 1rem; color: var(--brown); }
          .cafe-card-info p { margin: 5px 0 0; font-size: 0.8rem; color: #777; line-height: 1.4; }

          /* ボタン：迷わせない唯一の行動 */
          .btn-primary { display: block; background: var(--brown); color: white; padding: 20px; text-align: center; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 1.1rem; margin-top: 30px; box-shadow: 0 10px 20px rgba(93, 64, 55, 0.2); }
          
          .owner-msg { background: #F5EFE6; padding: 20px; border-radius: 12px; border-left: 4px solid var(--accent); margin: 20px 0; font-style: italic; }
        </style>
      </head>
    `;

    // --- ルーティング ---
    
    // 詳細ページ
    if (pathname.startsWith("/cafe/")) {
      const cafe = cafes.find(c => c.id === pathname.split("/")[2]);
      return new Response(`<html>${head}<body><header><a href="/" class="logo">yurucafe</a></header>
        <div class="section">
          <img src="${cafe.img}" style="width:100%; border-radius:16px;">
          <h1 style="color:var(--brown); margin-top:20px;">${cafe.name}</h1>
          <div class="owner-msg">「${cafe.message}」</div>
          <p>店主の${cafe.owner}は、あなたのペースに合わせて話を聞くプロです。日本語が不安でも、何も持たずに来てください。</p>
          <a href="/booked" class="btn-primary">この店主を予約する</a>
          <div style="text-align:center; margin-top:20px;"><a href="/" style="color:#999; text-decoration:none;">← カフェ一覧に戻る</a></div>
        </div>
      </body></html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    // 予約完了
    if (pathname === "/booked") {
      return new Response(`<html>${head}<body><header><a href="/" class="logo">yurucafe</a></header>
        <div class="section" style="text-align:center; padding-top:100px;">
          <h1 style="font-size:3rem;">☕</h1>
          <h2>予約リクエスト完了</h2>
          <p>店主からメールで返信します。<br>安心して、当日をお待ちください。</p>
          <a href="/" class="btn-primary">トップへ戻る</a>
        </div>
      </body></html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    // メインページ
    return new Response(`<html>${head}<body>
      <header><a href="/" class="logo">yurucafe</a></header>
      <div class="hero">
        <div style="display:inline-block; background:white; padding:4px 12px; border-radius:20px; font-size:0.8rem; font-weight:bold; color:var(--accent); margin-bottom:10px;">留学生のための場所</div>
        <h1>日本語が不安でも、<br>ひとりじゃない。</h1>
        <p>一杯のコーヒーと、<br>ゆるやかな対話で心をほぐす。</p>
      </div>
      <div class="section">
        <div class="card">
          <h2 style="margin-top:0; font-size:1.2rem;">yurucafeができること</h2>
          <ul style="padding-left:20px; margin-bottom:0;">
            <li>あなたの話をゆっくり聴く店主がいます</li>
            <li>難しい日本語は必要ありません</li>
            <li>「話したくない時」は黙っていてもOK</li>
          </ul>
        </div>
        
        <h2 style="margin-top:40px; font-size:1.2rem; text-align:center;">提携カフェを選ぶ</h2>
        <div class="cafe-list">
          ${cafes.map(c => `
            <a href="/cafe/${c.id}" class="cafe-card">
              <img src="${c.img}">
              <div class="cafe-card-info">
                <h3>${c.name}</h3>
                <p>${c.theme}</p>
                <p style="font-size:0.7rem; color:var(--accent);">店主: ${c.owner}</p>
              </div>
            </a>
          `).join('')}
        </div>
        <p style="text-align:center; font-size:0.8rem; color:#999; margin-top:30px;">※まずはカフェを見てみるだけで大丈夫です。</p>
      </div>
      <footer style="padding:40px; text-align:center; font-size:0.7rem; color:#CCC;">&copy; 2025 yurucafe.org</footer>
    </body></html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
  }
};
