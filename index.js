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
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, max-age=3600" }
  });
}

const indexHTML = `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>yurucafe</title><link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500&family=Zen+Old+Mincho:wght@400;600&display=swap" rel="stylesheet"><style>:root{--bg:#F9F5F0;--text:#4A3B32;--accent:#A67B5B;--light:#E8Ddd4;--white:#fff;--black:#000;}*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'Zen Kaku Gothic New',sans-serif;background:var(--bg);color:var(--text);line-height:1.8;}h1,h2,h3{font-family:'Zen Old Mincho',serif;font-weight:600;}a{text-decoration:none;color:inherit;transition:.3s;}.container{max-width:900px;margin:0 auto;padding:0 20px;}header{padding:20px 0;border-bottom:1px solid var(--light);background:var(--white);}.nav-inner{display:flex;justify-content:space-between;align-items:center;}.logo{font-family:'Zen Old Mincho',serif;font-size:1.5rem;letter-spacing:.05em;color:var(--text);}.hero{height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;background:linear-gradient(rgba(74,59,50,.4),rgba(74,59,50,.4)),url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200');background-size:cover;background-position:center;color:var(--white);margin-bottom:40px;}.hero-title{font-size:2.2rem;margin-bottom:20px;line-height:1.4;text-shadow:0 2px 8px rgba(0,0,0,.4);}.section-title{text-align:center;font-size:1.6rem;margin-bottom:30px;position:relative;color:var(--text);}.section-title::after{content:"";display:block;width:40px;height:1px;background:var(--accent);margin:15px auto 0;}.btn{display:inline-block;background:var(--accent);color:var(--white);padding:14px 40px;border-radius:4px;font-size:1rem;margin-top:20px;box-shadow:0 4px 15px rgba(166,123,91,.3);}.btn:hover{background:var(--text);transform:translateY(-2px);}footer{text-align:center;padding:40px 0;font-size:.8rem;border-top:1px solid var(--light);color:#888;}</style></head><body><header><div class="container nav-inner"><a href="/" class="logo">yurucafe</a><nav><a href="/cafes.html" style="font-weight:500;">カフェを探す</a></nav></div></header><div class="hero"><div class="container"><h1 class="hero-title">一杯のコーヒーが、<br>心の国境を溶かす。</h1><p style="font-size:1.1rem;opacity:.9;">留学生と地域をつなぐ、ゆるやかな対話の場</p></div></div><section class="container" style="padding:60px 0;"><h2 class="section-title">Concept</h2><div style="text-align:center;max-width:650px;margin:0 auto;"><p style="margin-bottom:20px;">異国の地で学ぶということ。<br>それは、新しい発見の連続であると同時に、<br>言葉にできない孤独を抱えることでもあります。</p><p style="margin-bottom:20px;">yurucafeは、そんな日常に「余白」をつくるプロジェクトです。<br>ここは、完璧な言語を話す必要がない場所。</p><p>コーヒーの香りに包まれながら、<br>あなたの故郷の話、私の日常の話をしませんか？</p></div></section><section class="container" style="text-align:center;padding-bottom:80px;"><h2 class="section-title">Join Us</h2><p>静かな対話と、温かな一杯を用意して<br>あなたを待っているカフェがあります。</p><a href="/cafes.html" class="btn">提携カフェを見る</a></section><footer><p>&copy; 2024 yurucafe Project.<br>Designed for connection.</p></footer></body></html>`;

const cafesHTML = `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,
