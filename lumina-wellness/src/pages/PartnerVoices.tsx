import React from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stories = [
  {
    name: "佐藤 美咲",
    region: "神奈川県",
    role: "パートナー（2年目）",
    text: "製品のバックストーリーを自分の言葉で語れるようになったことが、人との信頼につながりました。在宅中心でも無理のない範囲で続けられています。",
    avatar: "https://picsum.photos/seed/pv1/120/120",
  },
  {
    name: "田中 健一",
    region: "大阪府",
    role: "パートナー（3年目）",
    text: "本業のスキルとは別のコミュニケーションの場ができ、生活のリズムが前向きに変わりました。メンター制度があるので最初の不安も和らぎやすいです。",
    avatar: "https://picsum.photos/seed/pv2/120/120",
  },
  {
    name: "鈴木 陽子",
    region: "北海道",
    role: "パートナー（1年目）",
    text: "子育ての合間に活動。ノルマがないので罪悪感なく息抜きのように関われています。同じ志の仲間とのオンライン会が楽しみです。",
    avatar: "https://picsum.photos/seed/pv3/120/120",
  },
  {
    name: "山本 大輔",
    region: "福岡県",
    role: "パートナー（4年目）",
    text: "体験を正直に共有するだけで、興味を持ってくれる方が少しずつ増えていくのが分かりやすい。サプリの成分知識は研修でしっかり学べます。",
    avatar: "https://picsum.photos/seed/pv4/120/120",
  },
  {
    name: "伊藤 恵",
    region: "愛知県",
    role: "パートナー（2年目）",
    text: "美意識の高いお客様が多く、製品のこだわりに共感いただきやすいと感じます。事務サポートのレスポンスも早く助かっています。",
    avatar: "https://picsum.photos/seed/pv5/120/120",
  },
  {
    name: "中村 翔",
    region: "東京都",
    role: "パートナー（1年目）",
    text: "副業として始めましたが、学び直しの感覚で楽しんでいます。健康をテーマにした発信は、自分自身の生活改善にも直結しています。",
    avatar: "https://picsum.photos/seed/pv6/120/120",
  },
];

const PartnerVoices = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary rounded-full">
            <Star className="size-3.5 mr-1.5" />
            コミュニティ
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">パートナーの声</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            全国で活動する5,000人以上のパートナーの一部から、Luminaと歩んできた体験をご紹介します。
            <span className="block mt-2 text-sm">※ 個人の感想です。成果を保証するものではありません。</span>
          </p>
        </motion.div>

        <div className="mb-10 flex justify-center gap-1 text-yellow-500" aria-hidden>
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="size-5" fill="currentColor" />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full rounded-3xl border-primary/10 overflow-hidden bg-linear-to-b from-white to-sky-50/30">
                <CardContent className="p-6 md:p-8">
                  <div className="flex gap-4 mb-4">
                    <img
                      src={s.avatar}
                      alt=""
                      className="size-16 rounded-full object-cover border-2 border-primary/20"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="font-serif font-bold text-lg text-foreground">{s.name}</p>
                      <p className="text-sm text-muted-foreground">{s.region}</p>
                      <p className="text-xs text-primary font-medium mt-0.5">{s.role}</p>
                    </div>
                  </div>
                  <Quote className="size-8 text-primary/25 mb-2" />
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{s.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">あなたの声も、次の誰かの背中を押すかもしれません。</p>
          <Button size="lg" className="rounded-full px-10" asChild>
            <Link to="/register">無料登録の詳細を見る</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerVoices;
