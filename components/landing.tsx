'use client';

import Image from 'next/image';
import { FormEvent, PointerEvent, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Blocks,
  Check,
  CircleDot,
  Menu,
  ScanSearch,
  Sparkles,
  UserRoundSearch,
  UsersRound,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  company,
  directions,
  faq,
  pipeline,
  principles,
  solutions,
} from '@/app/data';

const nav = [
  ['Решения', '#solutions'],
  ['Процесс', '#pipeline'],
  ['Направления', '#directions'],
  ['Кандидатам', '#candidates'],
  ['Принципы', '#principles'],
];

function Logo() {
  return (
    <a className="core-logo" href="#top" aria-label="WorkCore — на главную">
      <span className="core-mark">
        W<span />
      </span>
      {company.brandName}
    </a>
  );
}
export function Header() {
  return (
    <header className="core-header">
      <Logo />
      <nav aria-label="Основная навигация">
        {nav.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="core-cta" href="#request">
        <span /> Оставить заявку <ArrowRight size={16} />
      </a>
      <Sheet>
        <SheetTrigger
          render={<button className="core-menu" aria-label="Открыть меню" />}
        >
          <Menu />
        </SheetTrigger>
        <SheetContent className="core-sheet">
          <SheetHeader>
            <SheetTitle>WorkCore / menu</SheetTitle>
          </SheetHeader>
          <div className="core-mobile-nav">
            {nav.map(([label, href]) => (
              <SheetClose
                key={href}
                nativeButton={false}
                render={<a href={href} />}
              >
                {label}
              </SheetClose>
            ))}
            <SheetClose
              nativeButton={false}
              render={<a className="core-button" href="#request" />}
            >
              Оставить заявку
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export function Hero() {
  const card = useRef<HTMLDivElement>(null);
  function move(e: PointerEvent<HTMLDivElement>) {
    const node = card.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -4;
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    node.style.setProperty('--rx', `${rx}deg`);
    node.style.setProperty('--ry', `${ry}deg`);
  }
  function reset() {
    card.current?.style.setProperty('--rx', '0deg');
    card.current?.style.setProperty('--ry', '0deg');
  }
  return (
    <>
      <section className="core-hero" id="top">
        <div className="core-copy">
          <p className="core-kicker">
            HR / SEARCH SYSTEM <b>● ONLINE</b>
          </p>
          <h1>
            Люди, которые
            <br />
            <i>точно</i> подходят
            <br />
            <span>бизнесу.</span>
          </h1>
          <p className="core-lead">
            Разбираем задачу, выстраиваем поиск и проводим первичный отбор. Вы
            подключаетесь к кандидатам, с которыми уже есть о чём говорить.
          </p>
          <div className="core-actions">
            <a className="core-button" href="#request">
              Начать с вакансии <ArrowRight />
            </a>
            <a href="#pipeline" className="text-link">
              Посмотреть процесс ↘
            </a>
          </div>
        </div>
        <div
          className="system-card"
          ref={card}
          onPointerMove={move}
          onPointerLeave={reset}
        >
          <div className="system-head">
            <span>SEARCH FLOW / ACTIVE</span>
            <span className="signal">SIGNAL 01</span>
          </div>
          <div className="system-image">
            <Image
              src="/workcore-hero.png"
              alt="Визуализация цифрового процесса подбора"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 49vw"
            />
          </div>
          <div className="mini-pipeline" aria-label="Этапы подбора">
            {pipeline.map((stage, i) => (
              <div className="stage" key={stage[0]}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <b>{stage[0]}</b>
                {i < pipeline.length - 1 && <i />}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="core-ticker">
        <span>ПОИСК КАНДИДАТОВ</span>
        <i />
        <span>ПЕРВИЧНЫЙ ОТБОР</span>
        <i />
        <span>ИНТЕРВЬЮ</span>
        <i />
        <span>СОПРОВОЖДЕНИЕ</span>
      </div>
    </>
  );
}

export function Solutions() {
  const icons = [ScanSearch, Blocks, UsersRound, UserRoundSearch];
  return (
    <section className="core-section solutions reveal" id="solutions">
      <div className="core-section-head">
        <div>
          <p className="sys-label">01 / РЕШЕНИЯ</p>
          <h2>
            Подбор под
            <br />
            <i>тип задачи.</i>
          </h2>
        </div>
        <p>
          Не добавляем этапы ради процесса. Определяем, где вашей команде нужна
          поддержка, и собираем подходящий сценарий работы.
        </p>
      </div>
      <div className="solution-grid">
        {solutions.map(([title, text], i) => {
          const Icon = icons[i];
          return (
            <article key={title} className={i === 0 ? 'wide' : ''}>
              <span>0{i + 1}</span>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#request">
                Выбрать решение <ArrowRight size={16} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function Pipeline() {
  return (
    <section className="pipeline-section reveal" id="pipeline">
      <div className="pipeline-copy">
        <p className="sys-label">02 / PIPELINE</p>
        <h2>
          Процесс виден.
          <br />
          Статус понятен.
        </h2>
        <p>Наведите на этап, чтобы увидеть, что происходит внутри.</p>
      </div>
      <div className="pipeline-track">
        {pipeline.map(([title, text], i) => (
          <article key={title} tabIndex={0}>
            <div className="node">
              <span>{String(i + 1).padStart(2, '0')}</span>
              <CircleDot />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            {i < pipeline.length - 1 && <i />}
          </article>
        ))}
      </div>
    </section>
  );
}

export function Directions() {
  return (
    <section className="core-section directions reveal" id="directions">
      <div className="direction-title">
        <p className="sys-label">03 / НАПРАВЛЕНИЯ</p>
        <h2>
          Ищем не «резюме».
          <br />
          <span>Ищем соответствие.</span>
        </h2>
      </div>
      <div className="direction-grid">
        {directions.map((item, i) => (
          <article key={item}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <h3>{item}</h3>
            <ArrowRight />
          </article>
        ))}
      </div>
      <p className="direction-note">
        Список не означает узкую специализацию. Возможность работы с конкретной
        вакансией оцениваем до старта.
      </p>
    </section>
  );
}

export function Candidates() {
  const steps = [
    'Отклик',
    'Знакомство',
    'Интервью',
    'Подходящая вакансия',
    'Следующий этап',
  ];
  return (
    <section className="candidate-zone reveal" id="candidates">
      <div className="candidate-copy">
        <p className="sys-label">04 / КАНДИДАТАМ</p>
        <h2>Ищете работу?</h2>
        <p>
          Расскажите о направлении, которое рассматриваете. Если увидим
          релевантную задачу, познакомимся и обсудим возможный следующий шаг.
        </p>
        <a className="core-button" href="#candidate-form">
          Оставить информацию <ArrowRight />
        </a>
      </div>
      <div className="candidate-flow">
        {steps.map((step, i) => (
          <div key={step}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <b>{step}</b>
            {i < steps.length - 1 && <ArrowRight />}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section className="principles reveal" id="principles">
      <div>
        <p className="sys-label">05 / ПРИНЦИПЫ</p>
        <h2>
          Без общих слов.
          <br />
          <i>По существу.</i>
        </h2>
      </div>
      <div className="principle-list">
        {principles.map(([title, text], i) => (
          <article key={title}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <Check />
          </article>
        ))}
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="core-faq reveal">
      <aside>
        <p className="sys-label">06 / FAQ</p>
        <h2>
          Вопросы
          <br />о работе
          <br />с нами.
        </h2>
        <Sparkles />
      </aside>
      <Accordion className="core-faq-list">
        {faq.map(([q, a], i) => (
          <AccordionItem key={q} value={`faq-${i}`} className="core-faq-item">
            <AccordionTrigger className="core-faq-trigger">
              <span>{String(i + 1).padStart(2, '0')}</span>
              {q}
            </AccordionTrigger>
            <AccordionContent className="core-faq-content">
              <p>{a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Consent() {
  return (
    <label className="core-consent">
      <input type="checkbox" required />
      <span>
        Согласен с <a href="/consent">условиями обработки данных</a> и
        ознакомлен с <a href="/privacy">политикой конфиденциальности</a>.
      </span>
    </label>
  );
}
export function Request() {
  const [mode, setMode] = useState<'employer' | 'candidate'>('employer');
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const syncMode = () => {
      if (window.location.hash === '#candidate-form') setMode('candidate');
    };
    syncMode();
    window.addEventListener('hashchange', syncMode);
    return () => window.removeEventListener('hashchange', syncMode);
  }, []);
  function switchMode(next: 'employer' | 'candidate') {
    setMode(next);
    setSent(false);
  }
  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <section className="core-request reveal" id="request">
      <span className="hash-anchor" id="candidate-form" aria-hidden="true" />
      <div className="request-status">
        <p className="sys-label">07 / START</p>
        <span>
          <i /> ДОСТУПНО ДЛЯ НОВОЙ ЗАДАЧИ
        </span>
      </div>
      <div className="core-request-grid">
        <div>
          <h2>
            Начнём
            <br />с вашей <i>вакансии.</i>
          </h2>
          <p>
            Выберите сценарий и заполните короткую форму. Сейчас она работает в
            демонстрационном режиме и не передаёт данные.
          </p>
        </div>
        <div className="request-console">
          <div className="mode-switch">
            <button
              className={mode === 'employer' ? 'active' : ''}
              onClick={() => switchMode('employer')}
            >
              Работодатель
            </button>
            <button
              className={mode === 'candidate' ? 'active' : ''}
              onClick={() => switchMode('candidate')}
            >
              Кандидат
            </button>
          </div>
          <form onSubmit={submit}>
            {mode === 'employer' ? (
              <>
                <label>
                  Имя
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  Компания
                  <input name="company" required />
                </label>
                <label>
                  Какая вакансия нужна
                  <input name="vacancy" required />
                </label>
              </>
            ) : (
              <>
                <label>
                  Имя
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  Желаемая должность
                  <input name="position" required />
                </label>
              </>
            )}
            <label>
              Как с вами связаться
              <input name="contact" required placeholder="Телефон или email" />
            </label>
            <label>
              Комментарий
              <textarea name="comment" rows={3} />
            </label>
            <Consent />
            <button type="submit">
              Отправить {mode === 'employer' ? 'заявку' : ''}
              <ArrowRight />
            </button>
            {sent && (
              <output>
                DEMO / данные не отправлены. Здесь появится ответ после
                подключения API.
              </output>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <Logo />
        <p>Digital-first поиск и подбор персонала.</p>
      </div>
      <div className="footer-links">
        {nav.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
        <a href="#request">Оставить заявку</a>
      </div>
      <div className="footer-meta">
        <span>ОКВЭД 78.1 — деятельность агентств по подбору персонала</span>
        <div>
          <a href="/privacy">Политика конфиденциальности</a>
          <a href="/consent">Обработка персональных данных</a>
        </div>
        <span>© {new Date().getFullYear()} WorkCore</span>
      </div>
    </footer>
  );
}

export default function Landing() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const ob = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            ob.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 },
    );
    nodes.forEach((node) => ob.observe(node));
    return () => ob.disconnect();
  }, []);
  return (
    <main>
      <Header />
      <Hero />
      <Solutions />
      <Pipeline />
      <Directions />
      <Candidates />
      <Principles />
      <FAQ />
      <Request />
      <Footer />
    </main>
  );
}
