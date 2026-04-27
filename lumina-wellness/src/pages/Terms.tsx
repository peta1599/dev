import React, { useEffect } from "react";
import { motion } from "motion/react";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const sections = [
  {
    title: "第1条（適用）",
    body:
      "本規約は、Lumina Wellness Inc.（以下「当社」）が提供するウェブサイト、製品の販売、パートナープログラム、その他関連サービス（以下「本サービス」）の利用条件を定めるものです。利用者は本規約に同意のうえ本サービスをご利用ください。",
  },
  {
    title: "第2条（利用登録）",
    body:
      "利用登録の申込みにあたり、登録事項は真実かつ正確にご入力ください。虚偽、誤記、または不正な方法による登録はお断りする場合があります。",
  },
  {
    title: "第3条（禁止事項）",
    body:
      "法令または公序良俗に違反する行為、当社または第三者の権利を侵害する行為、本サービスの運営を妨害する行為、その他当社が不適切と判断する行為を禁止します。",
  },
  {
    title: "第4条（製品・サービスの内容）",
    body:
      "製品の仕様、価格、パートナープログラムの条件等は、当社の判断により予告なく変更される場合があります。変更後の内容は本サイトへの掲示をもって周知とします。",
  },
  {
    title: "第5条（免責）",
    body:
      "当社は、本サービスの利用により生じた損害について、当社に故意または重過失がある場合を除き、責任を負いません。法令で責任を免除できない範囲についてはその限りではありません。",
  },
  {
    title: "第6条（規約の変更）",
    body:
      "当社は、必要に応じて本規約を変更できます。変更後の規約は、本サイトに掲示した時点より効力を生じます。重要な変更については、合理的な方法でお知らせします。",
  },
];

const Terms = () => {
  useEffect(() => {
    document.title = "利用規約 | Lumina Wellness";
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
            <FileText className="size-3.5 mr-1.5" />
            法務
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">利用規約</h1>
          <p className="text-sm text-muted-foreground">最終更新日：2026年4月1日</p>
        </motion.div>

        <p className="text-muted-foreground leading-relaxed mb-10">
          本ページはデモサイト用の例示です。公開前に法務の確認を行ってください。
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

export default Terms;
