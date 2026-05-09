"use client";

import { useEffect } from "react";
import KPISection from "@/components/KPISection";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const company = (fd.get("company") as string) || "";
    const name = (fd.get("name") as string) || "";
    const phone = (fd.get("phone") as string) || "";
    const message = (fd.get("message") as string) || "";
    const body = `회사명: ${company}\n담당자명: ${name}\n연락처: ${phone}\n\n문의내용:\n${message}`;
    window.location.href = `mailto:sejingreat@gmail.com?subject=${encodeURIComponent(
      `[광고 문의] ${company}`
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <a href="/" className="nav-logo">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <ellipse cx="10" cy="13" rx="7" ry="5" fill="#F4A640" opacity="0.3" />
            <rect x="4" y="5" width="12" height="9" rx="2" fill="#3D1F0E" />
            <path d="M13 5V4a1 1 0 00-1-1H8a1 1 0 00-1 1v1" stroke="#3D1F0E" strokeWidth="1.5" />
            <path d="M16 7c1.5.5 1.5 3 0 3" stroke="#6B3A22" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          컵홀더 광고 플랫폼
        </a>
        <a href="#contact" className="nav-cta">광고 문의하기</a>
      </nav>

      <main>
        {/* ─────────────────────────────────────── */}
        {/* 1. HERO                                 */}
        {/* ─────────────────────────────────────── */}
        <section className="hero-wrap">
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="hero-dot" />
              MVP 검증 완료 · 2차 파트너 모집 중
            </div>
            <h1 className="hero-h1">
              잠깐이 아닌
              <br />
              <em>49분</em>동안 <em>경험을</em> 
              <br />
              제공합니다.
            </h1>
            <p className="hero-p">
              컵홀더 광고 플랫폼 — 광고비로 소비자 커피값을 해결하는
              삼각 구조 서비스
            </p>
            <a href="#contact" className="hero-cta">
              광고 문의하기
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M3.75 9h10.5M9.75 4.5L14.25 9l-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* decorative coffee ring */}
          <svg
            className="hero-deco"
            width="260"
            height="260"
            viewBox="0 0 260 260"
            aria-hidden="true"
          >
            <circle cx="130" cy="130" r="110" fill="none" stroke="#3D1F0E" strokeWidth="28" />
            <circle cx="130" cy="130" r="68" fill="none" stroke="#F4A640" strokeWidth="12" />
            <circle cx="130" cy="130" r="30" fill="none" stroke="#3D1F0E" strokeWidth="6" />
          </svg>
        </section>

        {/* ─────────────────────────────────────── */}
        {/* 2. PROBLEM                              */}
        {/* ─────────────────────────────────────── */}
        <section className="problem-section">
          <div className="section">
            <span className="section-tag">Problem</span>
            <h2 className="section-h2">왜 기존 광고는 실패하는가</h2>
            <p className="section-sub" style={{ marginBottom: "2.5rem" }}>
              광고비는 쓰지만 소비자의 기억에는 남지 않습니다.
            </p>

            <div className="problem-grid">
              {/* Online */}
              <div className="problem-card fade-in">
                <div className="problem-icon-wrap" style={{ background: "#FEF2F2" }}>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                    <circle cx="13" cy="13" r="11" fill="#FEE2E2" />
                    <path d="M9 9l8 8M17 9l-8 8" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="problem-tag tag-online">온라인 광고</span>
                <h3>1~3초 만에 스킵</h3>
                <p>
                  인스타·유튜브 광고는 스킵 버튼이 활성화되는 순간 이탈합니다.
                  막대한 비용을 써도 소비자 기억에 남지 않습니다.
                </p>
              </div>

              {/* Offline */}
              <div className="problem-card fade-in" data-delay="1">
                <div className="problem-icon-wrap" style={{ background: "#EFF6FF" }}>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                    <rect x="3" y="5" width="20" height="12" rx="2" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
                    <path d="M9 21V17M17 21V17" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 21h12" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="problem-tag tag-offline">오프라인 광고</span>
                <h3>물리적 거리, 낮은 관여도</h3>
                <p>
                  전광판·지하철·현수막은 소비자와 물리적 거리가 멀어
                  실질적인 관여도를 확보하기 어렵습니다.
                </p>
              </div>
            </div>

            <div className="problem-callout fade-in">
              <div className="callout-highlight">
                <strong>&#39;1분 이상 자발적으로 광고를 보는&#39;</strong>
              </div>
              <div className="callout-sub">오프라인 고관여 매체가 없습니다</div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────── */}
        {/* 3. SOLUTION — Triangle diagram          */}
        {/* ─────────────────────────────────────── */}
        <section className="solution-section">
          <div className="section" style={{ textAlign: "center" }}>
            <span className="section-tag">Solution</span>
            <h2 className="section-h2" style={{ textAlign: "center" }}>
              우리의 솔루션
            </h2>
            <p
              className="section-sub"
              style={{ margin: "0 auto 3rem", textAlign: "center" }}
            >
              광고주·플랫폼·소비자, 세 주체가 모두 이득을 얻는 삼각 구조
            </p>

            {/* Triangle flow SVG */}
            <svg
              viewBox="0 0 560 460"
              style={{ maxWidth: 540, width: "100%", margin: "0 auto", display: "block" }}
              aria-label="삼각 구조 다이어그램: 광고주가 광고비를 지불하면 플랫폼이 컵홀더를 제작·배포하고 소비자는 커피를 무료로 받습니다"
            >
              <defs>
                <marker
                  id="ah-dark"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#3D1F0E" />
                </marker>
                <marker
                  id="ah-accent"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#F4A640" />
                </marker>
                {/* Paths for diagonal text labels */}
                <path id="lp" d="M 155 340 L 220 120" />
                <path id="rp" d="M 340 120 L 405 340" />
              </defs>

              {/* Arrows */}
              <line
                x1="155"
                y1="340"
                x2="220"
                y2="120"
                stroke="#3D1F0E"
                strokeWidth="2.5"
                markerEnd="url(#ah-dark)"
              />
              <line
                x1="340"
                y1="120"
                x2="405"
                y2="340"
                stroke="#3D1F0E"
                strokeWidth="2.5"
                markerEnd="url(#ah-dark)"
              />
              <line
                x1="376"
                y1="400"
                x2="184"
                y2="400"
                stroke="#F4A640"
                strokeWidth="2.5"
                markerEnd="url(#ah-accent)"
              />

              {/* Arrow labels via textPath (diagonal) */}
              <text
                fill="#3D1F0E"
                fontSize="13"
                fontWeight="600"
                fontFamily="Pretendard, -apple-system, sans-serif"
              >
                <textPath href="#lp" startOffset="50%" textAnchor="middle" dy="-70">
                  광고비 지불
                </textPath>
              </text>
              <text
                fill="#3D1F0E"
                fontSize="13"
                fontWeight="600"
                fontFamily="Pretendard, -apple-system, sans-serif"
              >
                <textPath href="#rp" startOffset="50%" textAnchor="middle" dy="-70">
                  컵홀더 제작·배포
                </textPath>
              </text>

              {/* Bottom arrow label */}
              <text
                x="280"
                y="432"
                textAnchor="middle"
                fill="#F4A640"
                fontSize="13"
                fontWeight="600"
                fontFamily="Pretendard, -apple-system, sans-serif"
              >
                커피 무료 수령
              </text>

              {/* Nodes */}
              {/* 플랫폼 — top center */}
              <ellipse cx="280" cy="85" rx="96" ry="34" fill="#3D1F0E" />
              <text
                x="280"
                y="93"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="700"
                fontFamily="Pretendard, -apple-system, sans-serif"
              >
                플랫폼
              </text>

              {/* 광고주 — bottom left */}
              <ellipse cx="100" cy="376" rx="92" ry="34" fill="#3D1F0E" />
              <text
                x="100"
                y="384"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="700"
                fontFamily="Pretendard, -apple-system, sans-serif"
              >
                광고주
              </text>

              {/* 소비자 — bottom right */}
              <ellipse cx="460" cy="376" rx="92" ry="34" fill="#F4A640" />
              <text
                x="460"
                y="384"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="700"
                fontFamily="Pretendard, -apple-system, sans-serif"
              >
                소비자
              </text>
            </svg>
          </div>
        </section>

        {/* ─────────────────────────────────────── */}
        {/* 4. STATS — KPI Section                    */}
        {/* ─────────────────────────────────────── */}
        <KPISection />

        {/* ─────────────────────────────────────── */}
        {/* 5. WHY US                               */}
        {/* ─────────────────────────────────────── */}
        <section className="why-section">
          <div className="section">
            <span className="section-tag">Benefits</span>
            <h2 className="section-h2">광고주가 얻는 것</h2>
            <p className="section-sub" style={{ marginBottom: "2.5rem" }}>
              기존 광고가 해결하지 못한 문제를 컵홀더 광고가 해결합니다.
            </p>

            <div className="benefits-grid">
              {/* Card 1 */}
              <div className="benefit-card fade-in">
                <div className="benefit-icon">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <circle cx="14" cy="14" r="11" fill="#FDE8C4" />
                    <path
                      d="M9.5 14l3.5 3.5 5.5-6"
                      stroke="#F4A640"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>거부감 0% 노출</h3>
                <p>
                  소비자가 스스로 들고 마시는 매체입니다. 광고가 일상의
                  일부가 되어 거부감 없이 브랜드에 노출됩니다.
                </p>
              </div>

              {/* Card 2 */}
              <div className="benefit-card fade-in" data-delay="1">
                <div className="benefit-icon">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path
                      d="M14 3l2.8 6 6.2.8-4.5 4.4 1.3 6.3L14 17.4l-5.8 3.1 1.3-6.3L5 9.8l6.2-.8L14 3z"
                      fill="#FDE8C4"
                      stroke="#F4A640"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>국내 First Mover</h3>
                <p>
                  동일 포맷 국내 진입 사례 0건. 해외(AdQuick)에서 이미
                  검증된 모델을 국내 최초로 도입합니다.
                </p>
              </div>

              {/* Card 3 */}
              <div className="benefit-card fade-in" data-delay="2">
                <div className="benefit-icon">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <rect x="3" y="17" width="5" height="8" rx="1.5" fill="#FDE8C4" stroke="#F4A640" strokeWidth="1.5" />
                    <rect x="11" y="11" width="5" height="14" rx="1.5" fill="#FDE8C4" stroke="#F4A640" strokeWidth="1.5" />
                    <rect x="19" y="5" width="5" height="20" rx="1.5" fill="#FDE8C4" stroke="#F4A640" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3>정확한 성과 측정</h3>
                <p>
                  QR 클릭율·체류시간·브랜드 전환율 추적이 가능합니다.
                  광고 효과를 데이터로 증명합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────── */}
        {/* 6. MVP RESULTS                          */}
        {/* ─────────────────────────────────────── */}
        <section className="mvp-section">
          <div className="section">
            <span className="section-tag">MVP</span>
            <h2 className="section-h2">1차 MVP 검증 결과</h2>
            <p className="section-sub" style={{ marginBottom: "2.5rem" }}>
              2025년 4월, 첫 번째 실험에서 유의미한 결과를 확인했습니다.
            </p>

            <div className="mvp-meta fade-in">
              <div className="mvp-meta-item">
                {/* Calendar icon */}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <rect x="1" y="3" width="13" height="11" rx="2" stroke="#6B3A22" strokeWidth="1.4" />
                  <path d="M1 6.5h13M5 1v3M10 1v3" stroke="#6B3A22" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                2025년 4월 28~29일
              </div>
              <div className="mvp-meta-item">
                {/* Location icon */}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path
                    d="M7.5 1.5C5.015 1.5 3 3.515 3 6c0 3.375 4.5 7.5 4.5 7.5S12 9.375 12 6c0-2.485-2.015-4.5-4.5-4.5z"
                    stroke="#6B3A22"
                    strokeWidth="1.4"
                  />
                  <circle cx="7.5" cy="6" r="1.5" fill="#6B3A22" />
                </svg>
                동방 동아리 (8개 그룹, 총 18잔 배포)
              </div>
              <div className="mvp-meta-item">
                {/* Tag icon */}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path
                    d="M1.5 1.5h5.25l6 6a1.5 1.5 0 010 2.12l-3.13 3.13a1.5 1.5 0 01-2.12 0l-6-6V1.5z"
                    stroke="#6B3A22"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                  <circle cx="4.5" cy="4.5" r="1" fill="#6B3A22" />
                </svg>
                광고주: 사주핑 어플
              </div>
            </div>

            <div className="pill-group fade-in" data-delay="1">
              {[
                "커피 수용률 100%",
                "컵홀더 인지율 84%",
                "자발적 노출 49분",
              ].map((label) => (
                <span key={label} className="result-pill">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="6" fill="rgba(255,255,255,0.28)" />
                    <path
                      d="M4.5 7l2 2 3-3"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────── */}
        {/* 7. CTA / CONTACT                        */}
        {/* ─────────────────────────────────────── */}
        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <h2 className="contact-h2">
              지금 <em>첫 번째 광고주</em>가<br />되어보세요
            </h2>
            <p className="contact-sub">
              2차 MVP 파트너를 모집합니다.
              <br />
              대학생 타깃 푸드·배달 브랜드 우선 협의.
            </p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <input
                  className="form-input"
                  name="company"
                  placeholder="회사명 *"
                  required
                />
                <input
                  className="form-input"
                  name="name"
                  placeholder="담당자명 *"
                  required
                />
              </div>
              <input
                className="form-input"
                name="phone"
                type="tel"
                placeholder="연락처 *"
                required
              />
              <textarea
                className="form-input form-textarea"
                name="message"
                placeholder="문의내용 (선택사항)"
              />
              <button type="submit" className="form-submit">
                광고 문의하기
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3.75 9h10.5M9.75 4.5L14.25 9l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© 2025 컵홀더 광고 플랫폼. All rights reserved.</p>
      </footer>
    </>
  );
}
