export default {
  async fetch() {
    return new Response(`<!DOCTYPE html>
<html>
<head>
<title>yurucafe</title>
<style>body{font-family:sans-serif;background:#F9F5F0;color:#4A3B32;max-width:800px;margin:auto;padding:40px;line-height:1.6;text-align:center}h1{font-size:2.5em;color:#A67B5B}a{display:inline-block;background:#A67B5B;color:white;padding:15px 30px;border-radius:8px;text-decoration:none;font-weight:bold;margin:20px 0;box-shadow:0 4px 15px rgba(166,123,91,.3)}a:hover{background:#8A5A3A}</style>
</head>
<body>
<h1>yurucafe</h1>
<p style="font-size:1.2em;margin:40px 0">一杯のコーヒーが<br>心の国境を溶かす</p>
<p>留学生と地域をつなぐ対話の場</p>
<a href="#">提携カフェを見る（近日公開）</a>
<p style="color:#888;margin-top:60px;font-size:.9em">© 2024 yurucafe</p>
</body>
</html>`, {headers:{"Content-Type":"text/html;charset=utf-8"}});
  }
};
