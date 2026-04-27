import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [sent, setSent] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const topic = searchParams.get("topic");
    if (topic === "materials") {
      setSubject("事業詳細資料の請求");
      setBody((prev) =>
        prev.trim()
          ? prev
          : "事業概要・報酬プラン・サポート体制に関する詳細資料の送付を希望します。よろしくお願いいたします。"
      );
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo(0, 0);
  };

  if (sent) {
    return (
      <div className="min-h-screen pt-28 pb-20 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full text-center rounded-[40px] border bg-white p-12 shadow-lg"
        >
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="size-8" />
          </div>
          <h1 className="text-3xl font-serif font-bold mb-4">お問い合わせを受け付けました</h1>
          <p className="text-muted-foreground leading-relaxed">
            内容を確認のうえ、担当より営業日ベースでご返信いたします。しばらくお待ちください。
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary rounded-full">
            <Mail className="size-3.5 mr-1.5" />
            お問い合わせ
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">お問い合わせ</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            製品・ビジネスに関するご質問は、下記フォームまたはお電話にて承ります。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="flex gap-4 rounded-2xl border border-primary/10 bg-sky-50/40 p-6">
              <Phone className="size-6 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground">お電話</p>
                <p className="text-muted-foreground text-sm mt-1">0120-XXX-XXX（例）</p>
                <p className="text-xs text-muted-foreground mt-2">平日 10:00–18:00（土日祝休み）</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-primary/10 bg-white p-6">
              <Mail className="size-6 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground">メール</p>
                <p className="text-muted-foreground text-sm mt-1">support@lumina-wellness.example</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-primary/10 bg-white p-6">
              <MapPin className="size-6 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground">所在地</p>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  〒000-0000
                  <br />
                  東京都〇〇区〇〇（例・デモ表示）
                </p>
              </div>
            </div>
          </div>

          <Card className="md:col-span-3 rounded-3xl border-primary/10 shadow-md">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">メッセージを送る</CardTitle>
              <CardDescription>必須項目をご入力のうえ、送信してください。</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="c-name">お名前</Label>
                    <Input id="c-name" required placeholder="山田 花子" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-mail">メールアドレス</Label>
                    <Input id="c-mail" type="email" required placeholder="you@example.com" className="rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-subject">件名</Label>
                  <Input
                    id="c-subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="製品について"
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-body">お問い合わせ内容</Label>
                  <textarea
                    id="c-body"
                    required
                    rows={6}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="flex w-full rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                    placeholder="ご質問・ご要望をご記入ください"
                  />
                </div>
                <Button type="submit" className="w-full rounded-full h-12 text-base" size="lg">
                  <Send className="size-4 mr-2" />
                  送信する
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
