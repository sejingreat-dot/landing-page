'use client';

import { useRef } from 'react';
import CountUp from 'react-countup';
import {
  MotionConfig,
  motion,
  useInView,
  useReducedMotion,
} from 'framer-motion';
import type { Variants } from 'framer-motion';

type Metric = {
  value: number;
  suffix: string;
  label: string;
  eyebrow: string;
  description: string;
  duration: number;
};

const metrics: Metric[] = [
  {
    value: 49,
    suffix: '분',
    label: '평균 노출 시간',
    eyebrow: 'Average exposure time',
    description:
      '커피를 마시는 동안 컵홀더가 손과 책상 위에 머물며 브랜드를 자연스럽게 노출합니다.',
    duration: 2.4,
  },
  {
    value: 100,
    suffix: '%',
    label: '커피 수용률',
    eyebrow: 'Coffee acceptance rate',
    description:
      '1차 MVP에서 무료 커피 제공에 대한 거부감은 거의 없었고, 대부분 긍정적으로 수령했습니다.',
    duration: 2.2,
  },
  {
    value: 84,
    suffix: '%',
    label: '광고 인지율',
    eyebrow: 'Ad awareness',
    description:
      '국내 FGI 기준 컵홀더 광고는 소비자에게 가까운 거리에서 인지되는 오프라인 매체입니다.',
    duration: 2.3,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function KPISection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.35,
    margin: '0px 0px -120px 0px',
  });

  const shouldReduceMotion = useReducedMotion() ?? false;

  const container: Variants = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
      filter: shouldReduceMotion ? 'blur(0px)' : 'blur(6px)',
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.75,
        ease,
      },
    },
  };

  return (
    <section
      id="metrics"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050505] py-24 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 0%, rgba(255,255,255,0.14), transparent 34%), linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 56px 56px, 56px 56px',
        }}
      />

      <MotionConfig transition={{ duration: 0.75, ease }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="relative z-10 mx-auto max-w-6xl px-8"
        >
          <motion.div
            variants={item}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
              Cup-holder Ads Platform
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              광고주의 광고비가
              <br className="hidden sm:block" />
              소비자의 커피값이 됩니다.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/58 md:text-lg">
              컵홀더에 브랜드를 싣고, 그 수익으로 커피를 무료 제공하는 삼각
              구조 서비스입니다. 짧게 스킵되는 광고가 아니라, 손에 닿는 시간
              동안 자연스럽게 기억되는 매체를 만듭니다.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.article
                key={metric.label}
                variants={item}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.055]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                  {metric.eyebrow}
                </div>

                <div className="mt-8 flex items-end gap-2 tabular-nums">
                  <span className="text-6xl font-semibold tracking-[-0.07em] text-white md:text-7xl">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={metric.value}
                        duration={shouldReduceMotion ? 0.2 : metric.duration}
                        delay={shouldReduceMotion ? 0 : index * 0.12}
                        useEasing
                      />
                    ) : (
                      0
                    )}
                  </span>

                  <span className="pb-2 text-3xl font-semibold tracking-[-0.04em] text-white/90 md:text-4xl">
                    {metric.suffix}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-semibold tracking-[-0.02em] text-white">
                  {metric.label}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-6 text-white/52">
                  {metric.description}
                </p>

                <div className="mt-7 h-px w-full bg-white/10" />

                <div className="mt-5 flex items-center justify-between text-xs text-white/38">
                  <span>Verified signal</span>
                  <span>Synergy MVP</span>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            variants={item}
            className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-sm text-white/48 sm:flex-row sm:text-left"
          >
            <span className="text-white/72">핵심 인사이트</span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>
              광고주는 오래, 가깝게 닿는 매체가 필요하고 소비자는 매일 쓰는
              커피값이 부담스럽습니다.
            </span>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </section>
  );
}
