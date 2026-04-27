import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  MapPin, 
  CheckCircle2,
  ArrowRight,
  Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-linear-to-br from-primary/5 via-white to-amber-50/30">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center bg-white p-12 rounded-[40px] shadow-xl border"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-3xl font-serif font-bold mb-4">ご登録ありがとうございます！</h1>
          <p className="text-muted-foreground mb-8">
            確認メールをお送りしました。メール内のリンクをクリックして、登録を完了させてください。
          </p>
          <Button className="w-full rounded-full h-12" asChild>
            <a href="/">ホームに戻る</a>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-primary/5 via-white to-amber-50/30 pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Leaf size={18} />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">Lumina Wellness</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              輝く未来への<br />第一歩を。
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Luminaコミュニティへようこそ。登録することで、高品質な製品の購入や、ビジネスパートナーとしての活動が可能になります。
            </p>

            <div className="space-y-6">
              {[
                "入会金・年会費は一切かかりません",
                "パートナー限定の特別価格で購入可能",
                "専門家によるウェルネスセミナーへの招待",
                "充実したビジネスサポートツール"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-primary" size={14} />
                  </div>
                  <span className="font-medium text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="border-none shadow-2xl rounded-[40px] overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground p-8">
                <CardTitle className="text-2xl font-serif">新規会員登録</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  必要事項を入力して、アカウントを作成してください。
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="lastName">姓</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-muted-foreground" size={18} />
                        <Input id="lastName" placeholder="山田" className="pl-10 rounded-xl h-12" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="firstName">名</Label>
                      <Input id="firstName" placeholder="太郎" className="rounded-xl h-12" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input id="email" type="email" placeholder="example@lumina.com" className="pl-10 rounded-xl h-12" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input id="phone" type="tel" placeholder="090-0000-0000" className="pl-10 rounded-xl h-12" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">パスワード</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input id="password" type="password" placeholder="••••••••" className="pl-10 rounded-xl h-12" required />
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      <a href="#" className="underline hover:text-primary">利用規約</a>および<a href="#" className="underline hover:text-primary">プライバシーポリシー</a>に同意します。
                    </Label>
                  </div>

                  <Button type="submit" className="w-full rounded-full h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                    登録を完了する <ArrowRight className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;
