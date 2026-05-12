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
              소비자는 무료 커피를 받습니다
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
              혜택 기반 광고 경험
            </h2>
            <p
              className="section-sub"
              style={{ margin: "0 auto 3rem", textAlign: "center" }}
            >
              광고주가 커피값을 내면, 소비자는 커피를 받고,
              컵홀더가 브랜드를 30분 동안 광고합니다
            </p>

            <img
              src="/business-model.png"
              alt="비즈니스 모델"
              style={{ width: "100%", maxWidth: "560px", margin: "0 auto 2.5rem", display: "block" }}
            />

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
            <h2 className="section-h2">대학생 타깃에게 가장 가까운 광고 매체</h2>
            <p className="section-sub" style={{ marginBottom: "2.5rem" }}>
              손에서 손으로 전달되는 브랜드 경험.
              세 가지 이유로 컵홀더 광고를 선택합니다.
            </p>

            <div className="benefits-grid">
              {[
                {
                  num: "01",
                  title: "광고가 소비자 손에 머뭅니다",
                  desc: "스킵도, 외면도 없습니다. 커피를 마시는 30분 동안 브랜드가 소비자 손 안에 있습니다. 국내 오프라인 광고 중 가장 긴 집중 시간입니다.",
                },
                {
                  num: "02",
                  title: "국내 최초, 선점 기회입니다",
                  desc: "해외에서 AdQuick이 검증한 포맷입니다. 국내 도입 사례 0건. 경쟁 브랜드가 들어오기 전에 대학생 타깃 시장을 먼저 점유합니다.",
                },
                {
                  num: "03",
                  title: "QR로 성과를 측정합니다",
                  desc: "클릭수, 체류시간, QR 참여율을 추적합니다 감이 아니라 데이터로 광고 효과를 증명하고, 다음 캠페인을 개선합니다.",
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
                  src="/sajuping-cupholder.png"
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
                { num: "30분", label: "자발적 평균 노출 시간" },
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
              1차 검증을 바탕으로, 실제 광고비를 받는 비즈니스 모델을 검증합니다
            </p>

            {/* ── 1차 → 2차 핵심 발전 ── */}
            <div className="mvp-evolution fade-in">
              <p className="mvp-evo-label">핵심 발전 포인트</p>
              <div className="mvp-evo-cards">
                <div className="mvp-evo-card mvp-evo-card--v1">
                  <span className="mvp-evo-tag">1차 MVP · 완료</span>
                  <h4>소비자 반응 검증</h4>
                  <ul className="mvp-evo-list">
                    <li>커피 수용률 측정 (100%)</li>
                    <li>광고 인지율 측정 (84%)</li>
                    <li>자발적 체류 시간 검증 (30분)</li>
                  </ul>
                </div>
                <div className="mvp-evo-divider">→</div>
                <div className="mvp-evo-card mvp-evo-card--v2">
                  <span className="mvp-evo-tag">2차 MVP · 진행 중</span>
                  <h4>비즈니스 모델 검증</h4>
                  <ul className="mvp-evo-list">
                    <li>광고주 직접 컨택·유치</li>
                    <li>실제 광고비 수령 구조 검증</li>
                    <li>광고 수익화 가능성 확인</li>
                  </ul>
                </div>
              </div>
              <p className="mvp-evo-sub">
                단순 노출 실험 → 실제 광고비를 받는 비즈니스 모델 검증으로 발전
              </p>
            </div>

            <div className="step-grid">
              {[
                {
                  num: "STEP 01",
                  title: "타깃 기업 리스트업",
                  desc: "어문 교육 스타트업, 데이팅 앱 스타트업, 배달앱 스타트업 중심으로 20대 대학생 타깃 광고주 리스트업",
                  delay: "0",
                },
                {
                  num: "STEP 02",
                  title: "콜드메일 발송",
                  desc: "기획서 + 1차 MVP 수치(수용률 100%, 노출 30분) + 도안 샘플 패키지로 구성",
                  delay: "1",
                },
                {
                  num: "STEP 03",
                  title: "제작물 준비",
                  desc: "컵홀더 도안 템플릿 3종 제공 — 스탠다드형 / 텍스트 강조형 / 참여형 + QR 인터랙티브 랜딩",
                  delay: "2",
                },
                {
                  num: "STEP 04–06",
                  title: "컨택 → 배포 → 측정",
                  desc: "숭실대 학생회관 앞 배포. QR 클릭수·체류시간·인터랙티브 참여율 측정",
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
                      ["목표",      "소비자 반응 검증",         "광고 수익화 구조 검증"],
                      ["광고주",    "사주핑 (직접 섭외)",        "스타트업 (콜드메일 유치)"],
                      ["디자인",    "단일 도안",                "3종 템플릿"],
                      ["QR",        "앱 다운로드 링크",          "인터랙티브 콘텐츠 + 성과 측정"],
                      ["배포 장소", "동방 (소규모)",             "학생회관 앞 (본격 배포)"],
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
              어문 교육·데이팅·배달앱 스타트업을 우선으로 협의합니다
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