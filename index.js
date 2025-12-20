export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // ルーティング: URLに応じて表示するページを切り替えます
    if (path === '/' || path === '/index.html') return htmlResponse(indexHTML);
    if (path === '/cafes.html') return htmlResponse(cafesHTML);
    if (path === '/cafe.html') return htmlResponse(cafeHTML);
    if (path === '/booking.html') return htmlResponse(bookingHTML);

    // 指定外のURLはトップページへ
    return htmlResponse(indexHTML);
  }
};

// レスポンスを作成する共通関数
function htmlResponse(html) {
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
}

// 共通のCSSデザイン
const css = `
  body { font-family: sans-serif; background: #F9F5F0; color: #4A3B32; margin: 0; line-height: 1.6; }
  .container { max-width: 800px; margin: auto; padding: 20px; }
  header { background: white; padding: 20px; border-bottom: 1px solid #E8Ddd4; display: flex; justify-content: space-between; align-items: center; }
  .logo { font-weight: bold; font-size: 1.2rem; text-decoration: none; color: #4A3B32; }
  h1, h2, h3 { color: #000000; } /* 文字色を黒に設定 */
  .btn { background: #A67B5B; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; border: none; cursor: pointer; }
  .card { background: white; border: 1px solid #E8Ddd4; padding: 20px; margin-bottom: 15px; border-radius: 8px; text-decoration: none; color: inherit; display: block; }
  .card h3 { margin: 0 0 10px 0; }
  .footer { text-align: center; padding: 40px; color: #888; font-size: 0.8rem; }
`;

// 1. トップページ
const indexHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${css}</style><title>yurucafe</title></head><body>
  <header><a href="/" class="logo">yurucafe</a><nav><a href="/cafes.html" class="btn">カフェを探す</a></nav></header>
  <div class="container" style="text-align:center; padding: 80px 20px;">
    <h2>一杯のコーヒーが、心の国境を溶かす</h2>
    <p>留学生と地域をつなぐ、ゆるやかな対話の場</p>
    <p>完璧な言葉はいりません。ゆっくりとお話ししましょう。</p>
    <a href="/cafes.html" class="btn" style="margin-top:20px;">提携カフェを見る</a>
  </div>
  <div class="footer">&copy; 2024 yurucafe</div>
</body></html>`;

// 2. カフェ一覧ページ（6つのカフェ）
const cafesHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${css}</style><title>カフェ一覧</title></head><body>
  <header><a href="/" class="logo">yurucafe</a></header>
  <div class="container">
    <h2 style="text-align:center; margin: 30px 0;">提携カフェ一覧</h2>
    
    <a href="/cafe.html" class="card"><h3>1. 珈琲・木漏れ日</h3><p>店主Kenさんと旅の話ができる、静かな路地裏のカフェです。</p></a>
    <a href="/cafe.html" class="card"><h3>2. 青い鳥文庫</h3><p>壁一面の本棚。読書好きの留学生が集まる落ち着いた空間です。</p></a>
    <a href="/cafe.html" class="card"><h3>3. ハーブテラス</h3><p>自家製ハーブティーが自慢。開放的なテラス席で会話が弾みます。</p></a>
    <a href="/cafe.html" class="card"><h3>4. アトリエ創</h3><p>アート作品に囲まれた場所。モノづくりを通じた交流が楽しめます。</p></a>
    <a href="/cafe.html" class="card"><h3>5. お茶の間・和</h3><p>畳の部屋でリラックス。日本の伝統的な暮らしを感じられます。</p></a>
    <a href="/cafe.html" class="card"><h3>6. Music Box</h3><p>アナログレコードが流れる空間。音楽が共通言語になります。</p></a>
    
    <div style="text-align:center; margin-top:30px;"><a href="/">トップへ戻る</a></div>
  </div>
  <div class="footer">&copy; 2024 yurucafe</div>
</body></html>`;

// 3. カフェ詳細ページ
const cafeHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${css}</style><title>カフェ詳細</title></head><body>
  <header><a href="/cafes.html" style="text-decoration:none;">← 戻る</a><a href="/" class="logo">yurucafe</a></header>
  <div class="container" style="text-align:center; padding: 60px 20px;">
    <h2>珈琲・木漏れ日</h2>
    <div style="background:#ddd; height:200px; margin:20px 0; display:flex; align-items:center; justify-content:center; border-radius:8px;">[カフェのイメージ画像]</div>
    <p>「言葉が通じない国を旅した時、私も誰かの優しさに助けられました。今度は私があなたの話を聞く番です。たどたどしくても、全然大丈夫ですよ」</p>
    <br><a href="/booking.html" class="btn">対話を予約する</a>
  </div>
  <div class="footer">&copy; 2024 yurucafe</div>
</body></html>`;

// 4. 予約ページ
const bookingHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${css}</style><title>予約</title></head><body>
  <header><a href="/cafe.html" style="text-decoration:none;">← 戻る</a><a href="/" class="logo">yurucafe</a></header>
  <div class="container" style="text-align:center; padding: 60px 20px;">
    <h2>予約カレンダー</h2>
    <p>希望の日付を選んでください</p>
    <div style="background:white; padding:30px; border-radius:8px; border:1px solid #E8Ddd4; display:inline-block;">
        <input type="date" style="padding:10px; font-size:1rem; border:1px solid #ccc; border-radius:5px;"><br><br>
        <button onclick="alert('予約リクエストを送りました！店主からの返信をお待ちください。')" class="btn">予約を確定する</button>
    </div>
  </div>
  <div class="footer">&copy; 2024 yurucafe</div>
</body></html>`;
