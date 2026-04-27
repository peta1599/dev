import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const sections = [
  {
    title: "1. 取得する情報",
    body:
      "お客様からお預かりする情報には、氏名、メールアドレス、電話番号、住所、お問い合わせ内容、およびサービス利用に伴うトランザクション情報等が含まれる場合があります。",
  },
  {
    title: "2. 利用目的",
    body:
      "取得した情報は、お問い合わせへの対応、製品・サービスの案内、品質向上のための分析、法令に基づく開示請求への対応、その他お客様に明示した目的の範囲内でのみ利用します。",
  },
  {
    title: "3. 第三者提供",
    body:
      "法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。業務委託先に預託する場合は、必要な契約・監督のうえで行います。",
  },
  {
    title: "4. 安全管理",
    body:
      "当社は、個人情報の漏えい、滅失、毀損の防止のため、組織的・技術的・人的な安全管理措置を講じ、必要に応じて見直します。",
  },
  {
    title: "5. 開示・訂正・利用停止等",
    body:
      "ご本人からの求めに応じ、保有個人データの開示、訂正、利用停止等の手続きを定め、合理的な期間内に対応します。お問い合わせ窓口は本ページ末尾をご参照ください。",
  },
  {
    title: "6. 本ポリシーの変更",
    body:
      "法令の改正や事業内容の変更に伴い、本ポリシーを改定することがあります。改定後の内容は本サイト上に掲示した時点で効力を生じます。",
  },
];

const Privacy = () => {
  useEffect(() => {
    document.title = "プライバシーポリシー | Lumina Wellness";
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
            <Shield className="size-3.5 mr-1.5" />
            法務
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">プライバシーポリシー</h1>
          <p className="text-sm text-muted-foreground">最終更新日：2026年4月1日</p>
        </motion.div>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Lumina Wellness Inc.（以下「当社」）は、お客様の個人情報の保護を重要事項と位置づけ、以下の方針に基づき適正に取り扱います。本ポリシーはデモサイト用の例示であり、実運用前に必ず法務専門家の確認を行ってください。
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

export default Privacy;
