import { motion } from "framer-motion";
import { Coffee, Heart, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";
import aboutImage from "@/assets/coffee-hands.jpg";
import cafeBg from "@/assets/cafe-interior.jpg";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Students chatting in a cafe" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 container px-4 max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight drop-shadow-md">
              コーヒーを片手に、<br/>
              世界と語る。
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 font-medium drop-shadow-sm leading-relaxed">
              言葉の壁を越えて、心がほどける瞬間を。<br/>
              yurucafeは、留学生のための「ゆるやかな対話の場」です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <a href="cafes.html">カフェを探す</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/40 backdrop-blur-md font-medium px-8 py-6 rounded-full text-lg transition-all hover:-translate-y-1"
              >
                <a href="#about">yurucafeとは？</a>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs tracking-widest uppercase mb-2 block text-center">Scroll</span>
          <div className="w-[1px] h-12 bg-white/50 mx-auto"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={aboutImage} 
                  alt="Hands holding coffee cup" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-primary/30 rounded-2xl z-0 hidden md:block"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-12 bg-primary/50"></span>
                <span className="text-primary font-serif font-medium tracking-wider">CONCEPT</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-snug text-foreground">
                忙しい毎日に、<br/>
                深呼吸できる一杯を。
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  学校や社会の中で、つい「こうあるべき」自分を演じてしまっていませんか？
                  yurucafeは、そんな緊張をほどくための場所です。
                </p>
                <p>
                  コーヒーは単なる飲み物ではなく、私たちの時間をゆっくりにし、
                  正直な会話を生むための「媒介」です。
                </p>
                <p>
                  ここでは、言語の上手さも、文化の違いも気にすることはありません。
                  ただ、コーヒーの香りに包まれて、目の前の人と向き合う。
                  そんな静かで温かい時間が流れています。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50">
        <div className="container px-4 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">大切にしていること</h2>
            <p className="text-muted-foreground">yurucafeが提供する3つの価値</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Heart className="w-8 h-8 text-white" />}
              title="安心できる居場所"
              description="否定されない、評価されない。ありのままの自分でいられる心理的安全性のある空間をつくります。"
              delay={0}
            />
            <FeatureCard 
              icon={<MessageCircle className="w-8 h-8 text-white" />}
              title="個性の表現"
              description="「自分の個性を表現してもいい場所がある」という安心感を。会話の中で、互いの背景にある物語に耳を傾けます。"
              delay={0.1}
            />
            <FeatureCard 
              icon={<Coffee className="w-8 h-8 text-white" />}
              title="コーヒーの再発見"
              description="一杯のコーヒーが持つ奥深さと、それが作り出す豊かな時間。カフェという空間の本質的な魅力を伝えます。"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Cafe Teaser */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={cafeBg} 
            alt="Cafe interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 container px-4 max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
              あなたの「居場所」を<br/>見つけに行こう
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              yurucafeが提携するカフェは、どれも店主のこだわりと温かさが詰まった場所。<br/>
              静かに本を読みたい時も、誰かと語らいたい時も。
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-medium px-10 py-7 rounded-full text-lg shadow-xl transition-transform hover:scale-105"
            >
              <a href="/cafes.html" className="flex items-center gap-2">
                提携カフェ一覧を見る <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Coffee className="w-12 h-12 text-primary mx-auto opacity-50 mb-6" />
            <h3 className="text-2xl font-serif font-bold text-foreground">
              今日は、どんな話をしましょうか？
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              留学生のみなさん、そして日常に少し疲れているみなさん。<br/>
              yurucafeはいつでも、あなたを歓迎します。<br/>
              美味しいコーヒーを淹れて、お待ちしています。
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border/50 group"
    >
      <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
