import React from "react";
import { motion } from "motion/react";
import { HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "登録や年会費はかかりますか？",
    a: "公式パートナーとしての登録には料金はかかりません。商品のご購入やビジネスを始めるにあたって必要な説明は、無料のオンラインセミナーでご案内しています。",
  },
  {
    q: "初心者でも始められますか？",
    a: "はい。研修資料・コミュニティサポート・定期のオンライン説明会をご用意しており、ご自身のペースで学べるよう設計しています。",
  },
  {
    q: "製品の返品・交換はできますか？",
    a: "未開封品に限り、商品到着から一定期間内の返品を受け付けています。詳細は特定商取引法に基づく表記およびお問い合わせ窓口でご確認ください。",
  },
  {
    q: "副業として活動できますか？",
    a: "多くのパートナーが本業や子育てと両立されています。活動量はご自身で調整いただけます。ノルマは設けていません。",
  },
  {
    q: "問い合わせの返信はどのくらいで届きますか？",
    a: "通常、営業日ベースで3営業日以内にメールにてご返信いたします。お急ぎの場合はお電話窓口もご利用ください。",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary rounded-full">
            <HelpCircle className="size-3.5 mr-1.5" />
            サポート
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">よくある質問</h1>
          <p className="text-muted-foreground text-lg">
            よく寄せられるご質問をまとめました。それ以外はお問い合わせフォームよりご連絡ください。
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <details className="group rounded-2xl border border-primary/10 bg-white p-6 open:bg-sky-50/30 open:shadow-sm">
                <summary className="cursor-pointer list-none font-serif font-semibold text-lg text-foreground flex justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="text-primary shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed border-t border-primary/10 pt-4">{item.a}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
