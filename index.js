export default {
  async fetch(request) {
    return new Response(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<title>yurucafe</title>
<style>
body{font-family:sans-serif;background:#F9F5F0;color:#4A3B32;padding:20px;max-width:800px;margin:auto;line-height:1.8}
h1{font-size:2em;text-align:center;color:#A67B5B}
.btn{display:inline-block;background:#A67B5B;color:white;padding:15px 30px;text-decoration:none;border-radius:5px}
.btn:hover{background:#8A5A3A}
header{padding:20px;border-bottom:1px solid #E8Ddd4}
nav a{margin-left:20px}
</style>
</head>
<body>
<header>
<h1>yurucafe</h1>
<nav><a href="/cafes" class="btn">カフェを探す</a></nav>
</header>
<main>
<h2>一杯のコーヒーが、心の国境を溶かす</h2>
<p>留学生と地域をつなぐ、ゆるやかな対話の場</p>
<p>異国の地で学ぶということ。それは新しい発見の連続であると同時に、言葉にできない孤独を抱えることでもあります。</p>
<p>yurucafeは、そんな日常に「余白」をつくるプロジェクトです。</p>
</main>
</body>
</html>
    `, {
      headers: {"Content-Type": "text/html; charset=utf-8"}
    });
  }
};
