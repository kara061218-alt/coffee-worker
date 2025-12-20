export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/' || path === '/index.html') return htmlResponse(indexHTML);
    if (path === '/cafes.html') return htmlResponse(cafesHTML);
    if (path === '/cafe1.html') return htmlResponse(cafe1HTML);
    if (path === '/cafe2.html') return htmlResponse(cafe2HTML);
    if (path === '/cafe3.html') return htmlResponse(cafe3HTML);
    if (path === '/cafe4.html') return htmlResponse(cafe4HTML);
    if (path === '/cafe5.html') return htmlResponse(cafe5HTML);
    if (path === '/booking.html') return htmlResponse(bookingHTML);

    return htmlResponse(indexHTML);
  }
};

function htmlResponse(html) {
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
}

const css = `
  body { font-family: sans-serif; background: #F9F5F0; color: #4A3B32; margin: 0; line-height: 1.6; }
  .container { max-width: 800px; margin: auto; padding: 20px; }
  header { background: white; padding: 20px; border-bottom: 1px solid #E8Ddd4; display: flex; justify-content: space-between; align-items: center; }
  .logo { font-weight: bold; font-size: 1.2rem; text-decoration: none; color: #4A3B32; }
  h1, h2, h3 { color: #000000; }
  .btn { background: #A67B5B; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; border: none; cursor: pointer; }
  .card { background: white; border: 1px solid #E8Ddd4; padding: 20px; margin-bottom: 15px; border-radius: 8px; text-decoration: none; color: inherit; display: block; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
  .card:hover { transform: translateY(-3px); box-shadow: 0 5px 20px rgba(0,0,0,0.15); }
  .card h3 { margin: 0 0 10px 0; }
  .tags { font-size: 0.8rem; color: #666; margin-top: 10px; }
  .footer { text-align: center; padding: 40px; color: #888; font-size: 0.8rem; }
`;

// 1. トップページ（変更なし）
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

// 2. カフェ一覧ページ（5店舗追加！）
const cafesHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${css}</style><title>カフェ一覧</title></head><body>
  <header><a href="/" class="logo">yurucafe</a></header>
  <div class="container">
    <h2 style="text-align:center; margin: 30px 0;">提携カフェ一覧</h2>
    <p style="text-align:center; color:#666; margin-bottom:40px;">5つの個性豊かな空間で、あなたに合った対話が待っています</p>
    
    <a href="/cafe1.html" class="card"><h3>🌿 珈琲・木漏れ日</h3><p>店主Ken（元バックパッカー）。旅の話とハンドドリップが自慢。</p><div class="tags">#英語OK #静寂 #深煎り</div></a>
    
    <a href="/cafe2.html" class="card"><h3>📚 青い鳥文庫</h3><p>店主Mika（元教師）。母国語の本を持ち寄って読書会。</p><div class="tags">#多言語 #読書 #落ち着き</div></a>
    
    <a href="/cafe3.html" class="card"><h3>🌸 ハーブガーデン</h3><p>店主Yuri（ハーブ研究家）。オリジナルハーブティーでリラックス。</p><div class="tags">#ハーブティー #テラス #癒し</div></a>
    
    <a href="/cafe4.html" class="card"><h3>🎨 アトリエ創</h3><p>店主Taro（アーティスト）。絵を描きながらの創作対話。</p><div class="tags">#アート #モノづくり #インスピレーション</div></a>
    
    <a href="/cafe5.html" class="card"><h3>🎵 Music Box 奏</h3><p>店主Rina（DJ）。レコードの音色と共に音楽トーク。</p><div class="tags">#レコード #音楽 #ノスタルジー</div></a>
    
    <div style="text-align:center; margin-top:30px;"><a href="/" class="btn">トップへ戻る</a></div>
  </div>
  <div class="footer">&copy; 2024 yurucafe</div>
</body></html>`;

// 3-7. 各カフェ詳細ページ
const cafe1HTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${css}</style><title>珈琲・木漏れ日</title></head><body>
  <header><a href="/cafes.html" style="text-decoration:none;">←一覧</a><a href="/" class="logo">yurucafe</a></header>
  <div class="container" style="text-align:center;padding:60px 20px;">
    <h2>🌿 珈琲・木漏れ日</h2>
    <div style="background:#ddd;height:200px;margin:20px 0;display:flex;align-items:center;justify-content:center;border-radius:8px;">[木漏れ日とコーヒーの香り]</div>
    <div style="background:white;padding:30px;border-radius:12px;margin:30px 0;border-left:5px solid #A67B5B;">
      <p><strong>店主：Ken（ケンと呼んで）</strong></p>
      <p>"20カ国を旅したバックパッカーです。言葉が通じない場所で出会った人々の優しさが忘れられません。今度は私があなたの話を聞きます。たどたどしい英語でも、日本語でも大丈夫。マンデリンの深煎りを淹れながらお待ちしてます。"</p>
    </div>
    <a href="/booking.html" class="btn">Kenさんと対話する</a>
  </div>
  <div class="footer">&copy; 2024 yurucafe</div>
</body></html>`;

const cafe2HTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${css}</style><title>青い鳥文庫</title></head><body>
  <header><a href="/cafes.html" style="text-decoration:none;">←一覧</a><a href="/" class="logo">yurucafe</a></header>
  <div class="container" style="text-align:center;padding:60px 20px;">
    <h2>📚 青い鳥文庫</h2>
    <div style="background:#ddd;height:200px;margin:20px 0;display:flex;align-items:center;justify-content:center;border-radius:8px;">[本棚とコーヒーのある空間]</div>
    <div style="background:white;padding:30px;border-radius:12px;margin:30px 0;border-left:5px solid #A67B5B;">
      <p><strong>店主：Mika（ミカさん）</strong></p>
      <p>"元英語教師です。母国語の本を持ち寄って一緒に読みませんか？中国語、韓国語、スペイン語…どんな言語の本でも歓迎。静かな読書時間も、熱心な本トークもお任せください。"</p>
    </div>
    <a href="/booking.html" class="btn">Mikaさんと読書対話</a>
  </div>
  <div class="footer">&copy; 2024 yurucafe</div>
</body></html>`;

const cafe3HTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${css}</style><title>ハーブガーデン</title></head><body>
  <header><a href="/cafes.html" style="text-decoration:none;">←一覧</a><a href="/" class="logo">yurucafe</a></header>
  <div class="container" style="text-align:center;padding:60px 20px;">
    <h2>🌸 ハーブガーデン</h2>
    <div style="background:#ddd;height:200px;margin:20px 0;display:flex;align-items:center;justify-content:center;border-radius:8px;">[緑溢れるテラス席]</div>
    <div style="background:white;padding:30px;border-radius:12px;margin:30px 0;border-left:5px solid #A67B5B;">
      <p><strong>店主：Yuri（ユリさん）</strong></p>
      <p>"ハーブ研究家です。自家製カモミールやペパーミントティーを飲みながら、心の緊張を解きほぐしませんか？自然の香りとともに、ゆったりした会話タイムを。"</p>
    </div>
    <a href="/booking.html" class="btn">Yuriさんとハーブタイム</a>
  </div>
  <div class="footer">&copy; 2024 yurucafe</div>
</body></html>`;

const cafe4HTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${css}</style><title>アトリエ創</title></head><body>
  <header><a href="/cafes.html" style="text-decoration:none;">←一覧</a><a href="/" class="logo">yurucafe</a></header>
  <div class="container" style="text-align:center;padding:60px 20px;">
    <h2>🎨 アトリエ創</h2>
    <div style="background:#ddd;height:200px;margin:20px 0;display:flex;align-items:center;justify-content:center;border-radius:8px;">[アート作品に囲まれた空間]</div>
    <div style="background:white;padding:30px;border-radius:12px;margin:30px 0;border-left:5px solid #A67B5B;">
      <p><strong>店主：Taro（太郎さん）</strong></p>
      <p>"地元アーティストです。一緒に絵を描いたり、粘土をこねたりしながらお話ししませんか？あなたの国のアートやデザインの話、ぜひ聞かせてください！"</p>
    </div>
    <a href="/booking.html" class="btn">Taroさんと創作対話</a>
  </div>
  <div class="footer">&copy; 2024 yurucafe</div>
</body></html>`;

const cafe5HTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${css}</style><title>Music Box 奏</title></head><body>
  <header><a href="/cafes.html" style="text-decoration:none;">←一覧</a><a href="/" class="logo">yurucafe</a></header>
  <div class="container" style="text-align:center;padding:60px 20px;">
    <h2>🎵 Music Box 奏</h2>
    <div style="background:#ddd;height:200px;margin:20px 0;display:flex;align-items:center;justify-content:center;border-radius:8px;">[レコードの温かな音色]</div>
    <div style="background:white;padding:30px;border-radius:12px;margin:30px 0;border-left:5px solid #A67B5B;">
      <p><strong>店主：Rina（リナさん）</strong></p>
      <p>"元DJです。アナログレコードをかけながら音楽トークしませんか？あなたの国のおすすめ曲を教えてもらえると嬉しいです。言葉より先に音楽が通じ合いますよ。"</p>
    </div>
    <a href="/booking.html" class="btn">Rinaさんと音楽対話</a>
  </div>
  <div class="footer">&copy; 2024 yurucafe</div>
</body></html>`;

// 8. 予約ページ（変更なし）
const bookingHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${css}</style><title>予約</title></head><body>
  <header><a href="/cafes.html" style="text-decoration:none;">←一覧</a><a href="/" class="logo">yurucafe</a></header>
  <div class="container" style="text-align:center; padding: 60px 20px;">
    <h2>予約カレンダー</h2>
    <p>希望の日付を選んでください</p>
    <div style="background:white; padding:30px; border-radius:8px; border:1px solid #E8Ddd4; display:inline-block;">
        <input type="date" style="padding:10px; font-size:1rem; border:1px solid #ccc; border-radius:5px;"><br><br>
        <button onclick="alert('予約リクエストを送りました！\\n店主から24時間以内に連絡します。')" class="btn">予約を確定する</button>
    </div>
  </div>
  <div class="footer">&copy; 2024 yurucafe</div>
</body></html>`;
