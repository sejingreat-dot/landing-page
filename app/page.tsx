"use client";

import { useEffect } from "react";

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
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <ellipse cx="10" cy="13" rx="7" ry="5" fill="#F4A640" opacity="0.25" />
            <rect x="4" y="5" width="12" height="9" rx="2" fill="#1C1208" />
            <path d="M13 5V4a1 1 0 00-1-1H8a1 1 0 00-1 1v1" stroke="#1C1208" strokeWidth="1.5" />
            <path d="M16 7c1.5.5 1.5 3 0 3" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          컵홀더 광고
          <span className="nav-tagline">FREE COFFEE</span>
        </a>

        <ul className="nav-links">
          <li><a href="#problem">문제</a></li>
          <li><a href="#solution">솔루션</a></li>
          <li><a href="#mvp">MVP 결과</a></li>
          <li><a href="#roadmap">로드맵</a></li>
        </ul>

        <a href="#contact" className="nav-cta">광고 문의하기</a>
      </nav>

      <main>
        {/* ─────────────────────────────────────── */}
        {/* 1. HERO                                 */}
        {/* ─────────────────────────────────────── */}
        <section className="hero-wrap">
          <div className="hero-inner">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              2025 1차 MVP 검증 완료 · 2차 파트너 모집 중
            </div>

            <h1 className="hero-h1">
              브랜드 광고로,
              <br />
              대학생에게 <em>무료 커피</em>를
              <br />
              제공합니다.
            </h1>

            <p className="hero-p">
              컵홀더 광고를 통해 브랜드는 자연스럽게 노출되고,
              <br />
              소비자는 무료 커피를 받습니다.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                광고 문의하기
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 6.5h9M7.5 3L11 6.5 7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#mvp" className="btn-ghost">
                MVP 결과 보기
              </a>
            </div>

            <div className="hero-metrics">
              {[
                { num: "100%", label: "커피 수용률" },
                { num: "84%",  label: "컵홀더 인지율" },
                { num: "49분", label: "평균 노출 시간" },
                { num: "0건",  label: "국내 경쟁 사례" },
              ].map((m) => (
                <div key={m.num} className="hero-metric">
                  <span className="hero-metric-num">{m.num}</span>
                  <span className="hero-metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────── */}
        {/* 2. PROBLEM                              */}
        {/* ─────────────────────────────────────── */}
        <section className="problem-section" id="problem">
          <div className="section">
            <div className="section-eyebrow">Problem</div>
            {/* 대안 카피: "스킵되고, 무시되고, 낭비됩니다." */}
            <h2 className="section-h2">
              광고는 소비자에게 닿지 못하고,
              <br />
              소비자는 혜택을 원합니다.
            </h2>
            <p className="section-sub" style={{ marginBottom: "2.5rem" }}>
              기존 광고는 소비자와 분리되어 있습니다.
              광고비는 사라지고, 소비자는 광고를 피합니다.
            </p>

            <div className="problem-grid problem-grid-3">
              <div className="problem-card fade-in">
                <span className="problem-label">온라인 광고</span>
                <span className="problem-stat">65%</span>
                <h3>3초 안에 스킵됩니다</h3>
                <p style={{ wordBreak: "keep-all" }}>
                  유튜브·인스타그램 광고의 65% 이상이 3초 이내에 스킵됩니다.
                  예산이 클수록 낭비도 커집니다.
                </p>
              </div>

              <div className="problem-card fade-in" data-delay="1">
                <span className="problem-label">오프라인 광고</span>
                <span className="problem-stat">2초</span>
                <h3>성과를 측정할 수 없습니다</h3>
                <p>
                  전광판·현수막의 평균 시선 유지 시간 2초 미만.
                  얼마나 효과가 있는지 증명하기 어렵습니다.
                </p>
              </div>

              <div className="problem-card fade-in" data-delay="2">
                <span className="problem-label">소비자 현실</span>
                <span className="problem-stat">₩0</span>
                <h3>소비자가 원하는 건 혜택입니다</h3>
                <p>
                  광고를 강제하면 피합니다.
                  커피를 무료로 제공하면 브랜드와 자연스럽게 연결됩니다.
                </p>
              </div>
            </div>

            <div className="problem-callout fade-in">
              소비자가{" "}
              <strong>1분 이상 자발적으로 집중하는 오프라인 광고 매체</strong>
              가 없습니다.
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────── */}
        {/* 3. SOLUTION                             */}
        {/* ─────────────────────────────────────── */}
        <section className="solution-section" id="solution">
          <div className="section" style={{ textAlign: "center" }}>
            <div className="section-eyebrow-center">Solution</div>
            <h2 className="section-h2" style={{ textAlign: "center" }}>
              강제 광고가 아닌,
              <br />
              혜택 기반 광고 경험.
            </h2>
            <p
              className="section-sub"
              style={{ margin: "0 auto 3rem", textAlign: "center" }}
            >
              광고주가 커피값을 내면, 소비자는 커피를 받고,
              컵홀더가 브랜드를 49분 전달합니다.
            </p>

            <svg
              viewBox="0 0 560 490"
              style={{ maxWidth: 540, width: "100%", margin: "0 auto", display: "block" }}
              aria-label="비즈니스 모델 다이어그램: 광고주 ↔ FREE COFFEE ↔ 소비자"
            >
              <defs>
                {/* Forward arrow (end) */}
                <marker id="ae" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#1C1208" />
                </marker>
                {/* Backward arrow (start) — auto-start-reverse flips orientation */}
                <marker id="as" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#1C1208" />
                </marker>
                {/* Accent forward */}
                <marker id="ae-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#F4A640" />
                </marker>
                {/* Accent backward */}
                <marker id="as-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#F4A640" />
                </marker>
              </defs>

              {/* Triangle background */}
              <polygon
                points="280,62 96,392 464,392"
                fill="rgba(244,166,64,0.04)"
                stroke="#E2D5C6"
                strokeWidth="1.5"
                strokeDasharray="6,4"
              />

              {/* ── Left arrow: 광고주 ↔ FREE COFFEE ── */}
              <line x1="163" y1="372" x2="210" y2="122"
                stroke="#1C1208" strokeWidth="2"
                markerStart="url(#as)" markerEnd="url(#ae)" />
              {/* 광고주 → FREE COFFEE */}
              <text x="148" y="254" textAnchor="end" fill="#7A6A5A" fontSize="11" fontWeight="600" fontFamily="Pretendard, -apple-system, sans-serif">광고비 지불</text>
              {/* FREE COFFEE → 광고주 */}
              <text x="228" y="278" textAnchor="start" fill="#7A6A5A" fontSize="11" fontWeight="600" fontFamily="Pretendard, -apple-system, sans-serif">성과 데이터 제공</text>

              {/* ── Right arrow: FREE COFFEE ↔ 소비자 ── */}
              <line x1="350" y1="122" x2="397" y2="372"
                stroke="#1C1208" strokeWidth="2"
                markerStart="url(#as)" markerEnd="url(#ae)" />
              {/* FREE COFFEE → 소비자 */}
              <text x="332" y="278" textAnchor="end" fill="#7A6A5A" fontSize="11" fontWeight="600" fontFamily="Pretendard, -apple-system, sans-serif">무료 커피 제공</text>
              {/* 소비자 → FREE COFFEE */}
              <text x="413" y="254" textAnchor="start" fill="#7A6A5A" fontSize="11" fontWeight="600" fontFamily="Pretendard, -apple-system, sans-serif">브랜드 노출 40분</text>

              {/* ── Bottom arrow: 광고주 ↔ 소비자 (간접) ── */}
              <line x1="194" y1="418" x2="368" y2="418"
                stroke="#F4A640" strokeWidth="2"
                markerStart="url(#as-a)" markerEnd="url(#ae-a)" />
              <text x="280" y="410" textAnchor="middle" fill="#F4A640" fontSize="11" fontWeight="600" fontFamily="Pretendard, -apple-system, sans-serif">커피 무료 수령 (간접 연결)</text>

              {/* ── FREE COFFEE node (top) ── */}
              <rect x="166" y="50" width="228" height="68" rx="6" fill="#1C1208" />
              <text x="280" y="78" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" letterSpacing="0.06em" fontFamily="Pretendard, -apple-system, sans-serif">FREE COFFEE</text>
              <text x="280" y="100" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11" fontWeight="500" fontFamily="Pretendard, -apple-system, sans-serif">플랫폼</text>

              {/* ── 광고주 node (bottom-left) ── */}
              <rect x="8" y="376" width="178" height="54" rx="6" fill="#1C1208" />
              <text x="97" y="409" textAnchor="middle" fill="white" fontSize="17" fontWeight="700" fontFamily="Pretendard, -apple-system, sans-serif">광고주</text>

              {/* ── 소비자 node (bottom-right) ── */}
              <rect x="374" y="376" width="178" height="54" rx="6" fill="#F4A640" />
              <text x="463" y="409" textAnchor="middle" fill="white" fontSize="17" fontWeight="700" fontFamily="Pretendard, -apple-system, sans-serif">소비자</text>
            </svg>

            {/* Service flow visual */}
            <div className="flow-steps fade-in" data-delay="2">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" style={{ width: "100%", height: "100%" }}>
                      <path d="M8 15h24l-3 15H11L8 15z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M14 15v-2a6 6 0 0112 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M32 19c3 1 3 6 0 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                  label: "무료 커피 수령",
                  desc: "광고비로 제공된 커피를 소비자가 받습니다",
                },
                {
                  icon: (
                    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" style={{ width: "100%", height: "100%" }}>
                      <rect x="5" y="11" width="26" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M11 11V9a2 2 0 012-2h10a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M10 20h16M10 24.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M31 16.5c2.5 1 2.5 5 0 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                  label: "컵홀더 40분 노출",
                  desc: "들고 다니는 동안 브랜드가 자연스럽게 전달됩니다",
                },
                {
                  icon: (
                    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" style={{ width: "100%", height: "100%" }}>
                      <rect x="5" y="5" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="23" y="5" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="5" y="23" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="8" y="8" width="6" height="6" rx="0.5" fill="currentColor" />
                      <rect x="26" y="8" width="6" height="6" rx="0.5" fill="currentColor" />
                      <rect x="8" y="26" width="6" height="6" rx="0.5" fill="currentColor" />
                      <rect x="23" y="23" width="4" height="4" rx="0.5" fill="currentColor" />
                      <rect x="29" y="23" width="4" height="4" rx="0.5" fill="currentColor" />
                      <rect x="23" y="29" width="4" height="4" rx="0.5" fill="currentColor" />
                      <rect x="29" y="29" width="4" height="4" rx="0.5" fill="currentColor" />
                    </svg>
                  ),
                  label: "QR 인터랙티브 콘텐츠",
                  desc: "스캔으로 참여, 클릭·전환 성과를 측정합니다",
                },
              ].map((step) => (
                <div key={step.label} className="flow-step">
                  <div className="flow-icon">{step.icon}</div>
                  <p className="flow-label">{step.label}</p>
                  <p className="flow-desc" style={{ wordBreak: "keep-all" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────── */}
        {/* 4. BENEFITS                             */}
        {/* ─────────────────────────────────────── */}
        <section className="why-section">
          <div className="section">
            <div className="section-eyebrow">Benefits</div>
            <h2 className="section-h2">대학생 타깃에게 가장 가까운 광고 매체.</h2>
            <p className="section-sub" style={{ marginBottom: "2.5rem" }}>
              손에서 손으로 전달되는 브랜드 경험.
              세 가지 이유로 컵홀더 광고를 선택합니다.
            </p>

            <div className="benefits-grid">
              {[
                {
                  num: "01",
                  title: "광고가 소비자 손에 머뭅니다",
                  desc: "스킵도, 외면도 없습니다. 커피를 마시는 49분 동안 브랜드가 소비자 손 안에 있습니다. 국내 오프라인 광고 중 가장 긴 집중 시간입니다.",
                },
                {
                  num: "02",
                  title: "국내 최초, 선점 기회입니다",
                  desc: "해외에서 AdQuick이 검증한 포맷입니다. 국내 도입 사례 0건. 경쟁 브랜드가 들어오기 전에 대학생 타깃 시장을 먼저 점유합니다.",
                },
                {
                  num: "03",
                  title: "QR로 성과를 측정합니다",
                  desc: "클릭수, 체류시간, 쿠폰 전환율을 추적합니다. 감이 아니라 데이터로 광고 효과를 증명하고, 다음 캠페인을 개선합니다.",
                },
              ].map((b) => (
                <div key={b.num} className="benefit-card fade-in">
                  <span className="benefit-num">{b.num}</span>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="inline-cta fade-in" data-delay="1">
              <div>
                <p className="inline-cta-title">2차 파트너십을 모집합니다</p>
                <p className="inline-cta-sub">대학생 타깃 브랜드 우선 협의</p>
              </div>
              <a href="#contact" className="btn-primary">
                문의하기
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 6.5h9M7.5 3L11 6.5 7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────── */}
        {/* 6. MVP RESULTS                          */}
        {/* ─────────────────────────────────────── */}
        <section className="mvp-section" id="mvp">
          <div className="section">
            <div className="section-eyebrow">MVP</div>
            <h2 className="section-h2">1차 MVP 검증 결과</h2>
            <p className="section-sub" style={{ marginBottom: "2rem" }}>
              2025년 4월, 첫 번째 실험에서 유의미한 수치를 확인했습니다.
            </p>

            <div className="mvp-meta fade-in">
              <span className="mvp-meta-item">2025년 4월 28–29일</span>
              <span className="mvp-meta-item">동방 동아리 8개 그룹, 18잔 배포</span>
              <span className="mvp-meta-item">광고주: 사주핑 어플</span>
            </div>

            {/* 사주핑 광고주 쇼케이스 */}
            <div className="mvp-showcase fade-in">
              <div className="mvp-showcase-logo">
                <img
                  src="/sajuping-logo.png.webp"
                  alt="사주핑 앱 로고"
                  className="mvp-showcase-logo-img"
                />
                <span className="mvp-showcase-caption">
                  1차 MVP 광고주
                  <br />
                  AI 사주 앱 사주핑
                </span>
              </div>
              <div className="mvp-showcase-main">
                <img
                  src="/sajuping-cupholder.png.webp"
                  alt="사주핑 × 컵홀더 광고 1차 MVP 도안"
                  className="mvp-showcase-img"
                />
                <span className="mvp-showcase-caption" style={{ display: "block", marginTop: "0.5rem", textAlign: "center" }}>
                  실제 배포된 컵홀더 도안 — 2025년 4월, 숭실대학교
                </span>
              </div>
            </div>

            <div className="mvp-results-grid fade-in" data-delay="1">
              {[
                { num: "100%", label: "커피 수용률" },
                { num: "84%",  label: "컵홀더 광고 인지율" },
                { num: "49분", label: "자발적 평균 노출 시간" },
              ].map((r) => (
                <div key={r.num} className="mvp-result-card">
                  <span className="mvp-result-num">{r.num}</span>
                  <span className="mvp-result-label">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────── */}
        {/* 7. ROADMAP                              */}
        {/* ─────────────────────────────────────── */}
        <section className="roadmap-section" id="roadmap">
          <div className="section">
            <div className="section-eyebrow">Roadmap</div>
            <h2 className="section-h2">2차 MVP 계획</h2>
            <p className="section-sub" style={{ marginBottom: "2.5rem" }}>
              1차 검증을 바탕으로, 실제 브랜드와 함께하는 본격 캠페인을 준비합니다.
            </p>

            <div className="step-grid">
              {[
                {
                  num: "STEP 01",
                  title: "타깃 기업 리스트업",
                  desc: "20대 대학생 타깃 푸드 브랜드 중심. 배달·식품 앱, 캠퍼스 주변 프랜차이즈 리스트업",
                  delay: "0",
                },
                {
                  num: "STEP 02",
                  title: "콜드메일 발송",
                  desc: "기획서 + 1차 MVP 수치(수용률 100%, 노출 49분) + 도안 샘플 패키지로 구성",
                  delay: "1",
                },
                {
                  num: "STEP 03",
                  title: "제작물 준비",
                  desc: "컵홀더 도안 템플릿 3종(B급 감성 / 고퀄 / 자연스러운 버전) + QR 인터랙티브 랜딩",
                  delay: "2",
                },
                {
                  num: "STEP 04–06",
                  title: "컨택 → 배포 → 측정",
                  desc: "숭실대 학생회관 앞 배포. QR 클릭수·체류시간·인터랙티브 참여율·쿠폰 전환율 측정",
                  delay: "3",
                },
              ].map((s) => (
                <div key={s.num} className="step-card fade-in" data-delay={s.delay}>
                  <span className="step-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="compare-wrap fade-in" data-delay="1">
              <div className="compare-title">1차 vs 2차 MVP 비교</div>
              <div className="compare-table-wrap">
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th>항목</th>
                      <th>1차 MVP</th>
                      <th>2차 MVP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {([
                      ["광고주",    "사주핑 (직접 섭외)",  "푸드 브랜드 (콜드메일 유치)"],
                      ["디자인",    "단일 도안",           "3종 템플릿"],
                      ["QR",        "앱 다운로드 링크",    "인터랙티브 콘텐츠 + 성과 측정"],
                      ["배포 장소", "동방 (소규모)",       "학생회관 앞 (본격 배포)"],
                    ] as [string, string, string][]).map(([item, v1, v2]) => (
                      <tr key={item}>
                        <td className="compare-item">{item}</td>
                        <td>{v1}</td>
                        <td className="compare-v2">{v2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────── */}
        {/* 8. CTA / CONTACT                        */}
        {/* ─────────────────────────────────────── */}
        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <span className="contact-eyebrow">2차 MVP · 파트너 모집</span>
            <h2 className="contact-h2">
              무료 커피 경험을
              <br />
              함께 만들 <em>브랜드</em>를
              <br />
              찾고 있습니다.
            </h2>
            <p className="contact-sub">
              대학생 타깃 푸드·배달 브랜드를 우선으로 협의합니다.
            </p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <input className="form-input" name="company" placeholder="회사명 *" required />
                <input className="form-input" name="name" placeholder="담당자명 *" required />
              </div>
              <input className="form-input" name="phone" type="tel" placeholder="연락처 *" required />
              <textarea className="form-input form-textarea" name="message" placeholder="문의내용 (선택사항)" />
              <button type="submit" className="form-submit">
                광고 제휴 문의하기
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 6.5h9M7.5 3L11 6.5 7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
