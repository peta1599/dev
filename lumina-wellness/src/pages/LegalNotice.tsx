import React from "react";
import { motion } from "motion/react";
import { Scale } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const rows: { label: string; value: string }[] = [
  { label: "販売事業者名", value: "Lumina Wellness Inc.（例）" },
  { label: "運営責任者", value: "代表取締役 ○○ ○○（例）" },
  { label: "所在地", value: "〒000-0000 東京都〇〇区〇〇（例・デモ表示）" },
  { label: "お問い合わせ先", value: "メール：support@lumina-wellness.example / 電話：0120-XXX-XXX（例）" },
  { label: "販売価格帯", value: "各商品ページに税込価格を表示しています。" },
  { label: "商品代金以外の必要料金", value: "消費税、送料（該当する場合は商品ページに記載）" },
  { label: "代金の支払方法", value: "クレジットカード、銀行振込 等（実際の決済手段に合わせて定義）" },
  { label: "代金の支払時期", value: "注文時のお支払い、または各決済先の規約に準ずる" },
  { label: "商品の引渡し時期", value: "ご注文確定・入金確認後、通常〇営業日以内に発送（例）" },
  { label: "返品・解約", value: "未開封品に限り、到着日から〇日以内。詳細は利用規約・FAQをご参照ください。" },
];

const LegalNotice = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary rounded-full">
            <Scale className="size-3.5 mr-1.5" />
            法務
          </Badge>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
            特定商取引法に基づく表記
          </h1>
          <p className="text-sm text-muted-foreground">デモ用の表記例です。公開前に実態に合わせて改訂してください。</p>
        </motion.div>

        <div className="rounded-3xl border border-primary/10 bg-white p-2 shadow-sm">
          {rows.map((row, i) => (
            <div key={row.label}>
              {i > 0 ? <Separator className="bg-primary/5" /> : null}
              <div className="px-6 py-5 flex flex-col sm:flex-row sm:gap-8">
                <div className="text-sm font-semibold text-foreground sm:w-56 shrink-0 mb-1 sm:mb-0">{row.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{row.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
