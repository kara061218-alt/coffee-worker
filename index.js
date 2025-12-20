<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Sanctuary Cafe | 空間を味わう場所</title>
    <style>
        /* 基本設定 */
        body, html {
            margin: 0;
            padding: 0;
            font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', sans-serif;
            background-color: #f8f8f2;
            color: #333;
            scroll-behavior: smooth;
        }

        /* ヒーローセクション：圧倒的な没入感 */
        .hero {
            height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), 
                        url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000') center/cover no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
        }

        .hero-content h1 {
            font-size: clamp(2rem, 8vw, 4rem);
            font-weight: 200;
            letter-spacing: 0.2em;
            margin-bottom: 20px;
            animation: fadeIn 2s ease-out;
        }

        /* ギャラリーセクション：空間のストーリー */
        .gallery-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 100px 20px;
        }

        .section-title {
            text-align: center;
            font-size: 1.5rem;
            letter-spacing: 0.3em;
            margin-bottom: 80px;
            font-weight: 300;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 20px;
        }

        .grid-item {
            overflow: hidden;
            background: #eee;
        }

        .grid-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .grid-item img:hover {
            transform: scale(1.05);
        }

        /* 雑誌のような非対称レイアウト */
        .item-large { grid-column: span 8; height: 500px; }
        .item-small { grid-column: span 4; height: 500px; }
        .item-tall { grid-column: span 4; height: 600px; margin-top: -50px; }
        .item-wide { grid-column: span 8; height: 400px; }

        /* キャッチコピーセクション */
        .quote-section {
            padding: 150px 20px;
            text-align: center;
            background-color: #fff;
        }

        .quote-section p {
            font-size: 1.2rem;
            line-height: 2;
            letter-spacing: 0.1em;
            color: #666;
        }

        /* アニメーション */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
            .grid-item { grid-column: span 12 !important; height: 300px !important; margin-top: 0 !important; }
        }
    </style>
</head>
<body>

    <section class="hero">
        <div class="hero-content">
            <h1>余白を、嗜む。</h1>
            <p style="letter-spacing: 0.5em;">THE SANCTUARY CAFE</p>
        </div>
    </section>

    <section class="quote-section">
        <p>喧騒を忘れ、光の移ろいを感じる。<br>
        ここにあるのは、丁寧に淹れた一杯と、<br>
        あなただけの静かな時間です。</p>
    </section>

    <div class="gallery-container">
        <h2 class="section-title">THE SPACE</h2>
        <div class="grid">
            <div class="grid-item item-large">
                <img src="https://images.unsplash.com/photo-1559925393-8be0ec418cd9?auto=format&fit=crop&q=80&w=1200" alt="Interior">
            </div>
            <div class="grid-item item-small">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" alt="Coffee">
            </div>
            <div class="grid-item item-tall">
                <img src="https://images.unsplash.com/photo-1521017432531-fbd92d744264?auto=format&fit=crop&q=80&w=800" alt="Window light">
            </div>
            <div class="grid-item item-wide">
                <img src="https://images.unsplash.com/photo-1534430480872-3498386e7a56?auto=format&fit=crop&q=80&w=1200" alt="Furniture detail">
            </div>
        </div>
    </div>

    <footer style="text-align: center; padding: 50px; font-size: 0.8rem; color: #999;">
        &copy; 2024 THE SANCTUARY CAFE. All Rights Reserved.
    </footer>

</body>
</html>
