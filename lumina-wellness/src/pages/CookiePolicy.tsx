import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Cookie } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const sections = [
  {
    title: "1. クッキーとは",
    body:
      "クッキーは、ウェブサイトがお使いのブラウザに保存する小さなテキストファイルです。当サイトでは、サービスの利便性向上、利用状況の分析、広告配信の最適化などに利用する場合があります。",
  },
  {
    title: "2. 当社が使用するクッキーの種類",
    body:
      "必須クッキー（ログイン状態の維持、セキュリティ）、機能クッキー（言語設定等の保存）、分析クッキー（アクセス解析）、マーケティングクッキー（興味関心に基づく表示の最適化）に分類されます。利用する種類はサービス内容に応じて異なります。",
  },
  {
    title: "3. 第三者によるクッキー",
    body:
      "当社は、解析ツールや広告配信のパートナーが設定するクッキーを利用する場合があります。各第三者のプライバシーポリシーもあわせてご確認ください。",
  },
  {
    title: "4. クッキーの管理・拒否",
    body:
      "ブラウザの設定でクッキーを無効化または削除できます。ただし、一部のクッキーを拒否した場合、サイトの一部機能が利用できないことがあります。",
  },
  {
    title: "5. 本ポリシーとプライバシーポリシーとの関係",
    body:
      "本ポリシーは、クッキーに関する取扱いを定めたものです。お客様の個人情報全般の取扱いについては、別途掲示する「プライバシーポリシー」に従います。",
  },
  {
    title: "6. 改定",
    body:
      "法令の改正や技術的変化に伴い、本ポリシーを改定することがあります。改定後の内容は本サイト上に掲示した時点で効力を生じます。",
  },
];

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "クッキーポリシー | Lumina Wellness";
    return () => {
      document.title = "Lumina Wellness";
    };
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary rounded-full">
            <Cookie className="size-3.5 mr-1.5" />
            法務
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">クッキーポリシー</h1>
          <p className="text-sm text-muted-foreground">最終更新日：2026年4月1日</p>
        </motion.div>

        <p className="text-muted-foreground leading-relaxed mb-10">
          本ページは、当サイトにおけるクッキー等の識別情報の利用について説明するものです。プライバシー全般（個人データの取扱い）は「
          <Link to="/privacy" className="text-primary underline-offset-2 hover:underline">
            プライバシーポリシー
          </Link>
          」をご参照ください。デモ用の例示です。
        </p>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.section
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <h2 className="text-xl font-serif font-bold text-foreground mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
