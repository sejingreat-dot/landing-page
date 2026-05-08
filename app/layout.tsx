import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "컵홀더 광고 플랫폼 | 대학생 타깃 오프라인 광고",
  description:
    "광고비로 소비자 커피값을 해결하는 삼각 구조 서비스. 1~3초 스킵 없이 49분 동안 타깃 손에 직접 닿습니다. 2차 MVP 파트너 모집 중.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
