export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);

    // --- カフェデータ（オリジナルの5つを追加した合計6店舗） ---
    const cafes = [
      { id: "cafe1", name: "こもれびカフェ", owner: "佐藤さん", message: "ゆっくりした日本語で話しましょう。沈黙も大切にしています。", color: "#E8F5E9", tag: "静かに過ごしたい人" },
      { id: "cafe2", name: "陽だまりテラス", owner: "ケンさん", message: "海外生活の経験があります。孤独な気持ち、よくわかりますよ。", color: "#FFF3E0", tag: "海外経験のある店主" },
      { id: "cafe3", name: "街角ライブラリー", owner: "マキさん", message: "本に囲まれてお茶を。言葉が見つからない時は本を眺めてもOK。", color: "#E3F2FD", tag: "読書・落ち着き" },
      { id: "cafe4", name: "ひまわりキッチン", owner: "よしえさん", message: "「お腹すいてない？」お母さんのような温かいごはんも出せますよ。", color: "#FFFDE7", tag: "家庭的な雰囲気" },
      { id: "cafe5", name: "Green Share", owner: "タカさん", message: "植物がたくさん。言葉の壁を気にせず、リラックスして過ごせます。", color: "#F1F8E9", tag: "自然・リラックス" },
      { id: "cafe6", name: "月灯りカフェ", owner: "ジュンさん", message: "夜の寂しい時間に。少しだけ勇気を出して扉を開けてみて。", color: "#F5F5F5", tag: "夜も営業中" }
    ];

    // --- 詳細ページの生成 ---
    if (pathname.startsWith("/cafe/")) {
      const id = pathname.split("/")[2];
      const cafe = cafes.find(c => c.id === id);
      if (!cafe) return new Response("Not Found", { status: 404 });

      return new Response(`
        <!DOCTYPE html>
        <html lang="ja">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${cafe.name}</title>
          <style>
            body { font-family: sans-serif; background: #FDFBF8; color: #4A3728; margin: 0; padding: 20px; text-align: center; }
            .detail-card { background: white; padding: 40px 20px; border-radius: 20px; border: 2px solid #D7CCC8; max-width: 500px; margin: 60px auto; }
            .owner-img { width: 100px; height: 100px; background: #D7CCC8; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 2rem; }
            .btn-book { display: block; background: #6F4E37; color: white; padding: 20px; text-decoration: none; border-radius: 50px; font-weight: bold; margin-top: 30px; }
            .back-link { display: inline-block; margin-top: 20px; color: #8D6E63; text-decoration: none; font-size: 0.9rem; }
          </style>
        </head>
        <body>
          <div class="detail-card">
            <div class="owner-img">😊</div>
            <h1>${cafe.name}</h1>
            <p style="font-weight:bold; color:#A1887F;">店主：${cafe.owner}</p>
            <p style="text-align:left; margin: 20px 0;">${cafe.message}</p>
            <a href="#" class="btn-book">このカフェを予約する</a>
            <a href="/" class="back-link">← 一覧に戻る</a>
          </div>
        </body>
        </html>
      `, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    // --- メインページの生成 ---
    const cafeListHtml = cafes.map(cafe => `
      <a href="/cafe/${cafe.id}" style="text-decoration:none; color:inherit;">
        <div style="background:${cafe.color}; padding:20px; border-radius:15px; margin-bottom:15px; text-align:left; border:1px solid rgba(0,0,0,0.05);">
          <span style="font-size:0.7rem; background:white; padding:2px 8px; border-radius:10px; color:#8D6E63;">${cafe.tag}</span>
          <h3 style="margin:10px 0 5px 0;">${cafe.name}</h3>
          <p style="font-size:0.9rem; margin:0; opacity:0.8;">店主：${cafe.owner}</p>
        </div>
      </a>
    `).join("");

    const mainHtml = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>留学生の対話カフェ</title>
    <style>
        body { margin: 0; font-family: sans-serif; color: #4A3728; background: #FDFBF8; text-align: center; }
        header { position: fixed; top: 0; width: 100%; background: white; padding: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); font-weight: bold; z-index: 10; }
        .hero { padding: 100px 20px 40px; background: linear-gradient(180deg, #EAD7BB 0%, #FDFBF8 100%); }
        .container { max-width: 500px; margin: 0 auto; padding: 0 20px 60px; }
        h2 { color: #6F4E37; margin-top: 40px; }
    </style>
</head>
<body>
    <header>留学生の対話カフェ</header>
    <section class="hero">
        <h1 style="font-size:1.8rem;">ひとりじゃないよ</h1>
        <p>安心して話せる6つの居場所</p>
    </section>
    <div class="container">
        <h2>提携カフェ一覧</h2>
        <p style="font-size:0.9rem; margin-bottom:20px;">気になるカフェをタップしてください</p>
        ${cafeListHtml}
    </div>
</body>
</html>
    `;

    return new Response(mainHtml, { headers: { "content-type": "text/html;charset=UTF-8" } });
  },
};
