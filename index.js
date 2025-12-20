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
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

const indexHTML=`<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>yurucafe</title><link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500&family=Zen+Old+Mincho:wght@400;600&display=swap" rel="stylesheet"><style>:root{--bg:#F9F5F0;--text:#4A3B32;--accent:#A67B5B;--light:#E8Ddd4;--white:#fff}*{box-sizing:border-box;margin:0;padding:0}body{font-family:'Zen Kaku Gothic New',sans-serif;background:var(--bg);color:var(--text);line-height:1.7}.container{max-width:900px;margin:auto;padding:20px}header{background:var(--white);padding:20px 0;border-bottom:1px solid var(--light);position:sticky;top:0;z-index:10}.nav{display:flex;justify-content:space-between;align-items:center}.logo{font-family:'Zen Old Mincho',serif;font-size:1.5rem;font-weight:600;color:var(--text);text-decoration:none}.hero{height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;background:linear-gradient(rgba(74,59,50,.5),rgba(74,59,50,.5)),url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center;color:var(--white)}.hero h1{font-family:'Zen Old Mincho',serif;font-size:2.5rem;line-height:1.3;margin-bottom:20px;text-shadow:0 3px 10px rgba(0,0,0,.5)}.hero p{font-size:1.1rem;opacity:.95}.section{padding:80px 0;text-align:center}.section-title{font-family:'Zen Old Mincho',serif;font-size:2rem;margin-bottom:50px;position:relative;display:inline-block}.section-title:after{content:'';display:block;width:50px;height:2px;background:var(--accent);margin:20px auto 0}.btn{display:inline-block;background:var(--accent);color:var(--white);padding:16px 40px;border-radius:8px;font-size:1.1rem;font-weight:500;text-decoration:none;box-shadow:0 6px 20px rgba(166,123,91,.3);transition:all .3s}.btn:hover{background:var(--text);transform:translateY(-3px);box-shadow:0 10px 30px rgba(74,59,50,.4)}.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:30px;margin:60px 0}.card{background:var(--white);border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.08);transition:all .4s;text-decoration:none;color:inherit;display:block}.card:hover{transform:translateY(-10px);box-shadow:0 20px 60px rgba(0,0,0,.15)}.card-img{height:220px;background-size:cover;background-position:center}.card-content{padding:30px}.card h3{font-family:'Zen Old Mincho',serif;font-size:1.4rem;margin-bottom:15px;color:var(--text)}.card p{color:#666;margin-bottom:20px;line-height:1.7}.tags{display:flex;flex-wrap:wrap;gap:10px}.tag{background:var(--light);color:var(--text);padding:6px 16px;border-radius:20px;font-size:.85rem;font-weight:500}.footer{text-align:center;padding:60px 20px;color:#888;font-size:.9rem;border-top:1px solid var(--light);margin-top:80px}@media(max-width:768px){.hero h1{font-size:1.8rem}.section{padding:60px 0}}</style></head><body><header><div class="container nav"><a href="/" class="logo">yurucafe</a><a href="/cafes.html" class="btn">カフェを探す</a></div></header><section class="hero"><div class="container"><h1>一杯のコーヒーが<br>心の国境を溶かす</h1><p>留学生と地域をつなぐ、ゆるやかな対話の場</p></div></section><section class="section"><div class="container"><h2 class="section-title">Concept</h2><div style="max-width:700px;margin:auto;font-size:1.1rem"><p style="margin-bottom:30px">異国の地で学ぶということ。それは新しい発見の連続であると同時に、言葉にできない孤独を抱えることでもあります。</p><p style="margin-bottom:30px">yurucafeは、そんな日常に「余白」をつくるプロジェクトです。完璧な日本語が話せなくても大丈夫。一杯のコーヒーが、静かな対話の架け橋になります。</p></div><a href="/cafes.html" class="btn">提携カフェを見る</a></div></section><footer><div class="container">© 2024 yurucafe Project<br>Designed for connection, not for profit.</div></footer></body></html>`;

const cafesHTML=`<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta name
