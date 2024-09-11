import LoginForm from "@/components/auth/login-form";
import RegisterForm from "@/components/auth/register-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
  return (
    <Tabs defaultValue="login" className="w-1/3">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Giriş</TabsTrigger>
        <TabsTrigger value="signup">Kayıt Ol</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Sayı Bulmaca Giriş</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <LoginForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Sayı Bulmaca Üye Kayıt</CardTitle>
            <CardDescription>
              Formu doldurarak sitemize üye olabilirsiniz. Oyunlarınızı
              kaydedebilir yada çoklu oyun seçeneğiyle rakiplerinize karşı
              oynayabilirsiniz.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <RegisterForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
