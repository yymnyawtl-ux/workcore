'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { company, controlPoints, formats, pipeline } from '@/app/data';

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nav = [
  ['Форматы', '#formats'],
  ['Этапы работы', '#pipeline'],
  ['Контроль', '#control'],
  ['Контакты', '#contact'],
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
  return (
    <>
      <section className="core-hero" id="top">
        <div className="core-copy">
          <p className="core-kicker">WORKCORE <span>/</span> ПОИСК КАК ПРОЦЕСС</p>
          <h1>
            Наём под<br />
            <span>контролем.</span>
          </h1>
          <p className="core-lead">
            Выстраиваем поиск сотрудников как последовательную работу: от
            чёткого профиля вакансии до кандидатов, готовых к вашему интервью.
          </p>
          <div className="core-actions">
            <a className="core-button" href="#request">
              Обсудить вакансии <ArrowRight size={20} />
            </a>
            <a href="#pipeline" className="text-link">
              Как устроен процесс <span>↗</span>
            </a>
          </div>
        </div>
        <div className="hero-board" aria-label="Схема работы WorkCore">
          <div className="board-top">
            <span>WORKCORE / WORKFLOW</span>
            <span>СХЕМА РАБОТЫ</span>
          </div>
          <div className="board-title">
            <span>01 — 04</span>
            <strong>Одна задача.<br />Прозрачный маршрут.</strong>
          </div>
          <div className="board-steps">
            {pipeline.map((stage) => (
              <div key={stage.number}>
                <span>{stage.number}</span>
                <b>{stage.title}</b>
                <span className="board-step-marker" aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="board-bottom">
            <span>КРИТЕРИИ → ПОИСК → ОТБОР → ПЕРЕДАЧА</span>
            <span>WC / 2026</span>
          </div>
        </div>
      </section>
      <div className="core-summary" aria-label="Как строится работа">
        <div><span>НА ВХОДЕ</span><b>Задача и критерии</b></div>
        <div><span>В РАБОТЕ</span><b>Поиск и первый контакт</b></div>
        <div><span>НА ВЫХОДЕ</span><b>Кандидаты с контекстом</b></div>
      </div>
    </>
  );
}

export function Formats() {
  return (
    <section className="formats-section" id="formats">
      <div className="core-section-head">
        <div>
          <p className="sys-label">01 / ФОРМАТЫ РАБОТЫ</p>
          <h2>Разные задачи.<br /><span>Одна логика.</span></h2>
        </div>
        <p>
          Объём поиска меняется. Ясность задачи и способ обратной связи — нет.
          Выбираем формат под текущую потребность компании.
        </p>
      </div>
      <div className="format-list">
        {formats.map((format) => (
          <article key={format.number}>
            <div className="format-index"><span>{format.number}</span><small>{format.label}</small></div>
            <h3>{format.title}</h3>
            <div className="format-copy"><p>{format.description}</p><strong>{format.result}</strong></div>
            <a href="#request" aria-label={`Обсудить формат: ${format.title}`}><ArrowRight /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Pipeline() {
  return (
    <section className="pipeline-section" id="pipeline">
      <div className="pipeline-copy">
        <p className="sys-label">02 / МАРШРУТ ЗАДАЧИ</p>
        <h2>От запроса<br />к интервью.</h2>
        <p>У каждого этапа есть конкретный результат. Никаких скрытых шагов между заявкой и передачей кандидата.</p>
      </div>
      <div className="pipeline-track">
        {pipeline.map((stage) => (
          <article key={stage.number}>
            <span className="pipeline-number">{stage.number}</span>
            <div className="pipeline-line" aria-hidden="true"><span /></div>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
            <b>{stage.output}</b>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Control() {
  return (
    <section className="control-section" id="control">
      <div className="control-intro">
        <p className="sys-label">03 / КОНТРОЛЬ</p>
        <h2>Видно не только<br /><span>кого нашли.</span></h2>
        <p>Работа с вакансией не должна превращаться в ожидание без новостей. До старта согласуем точки связи и то, какую информацию ваша команда получает на каждом этапе.</p>
        <a href="#request">Обсудить свою задачу <ArrowRight size={19} /></a>
      </div>
      <div className="control-list">
        {controlPoints.map((point) => (
          <article key={point.number}>
            <span>{point.number}</span>
            <div><h3>{point.title}</h3><p>{point.text}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Consent() {
  return (
    <label className="core-consent">
      <input type="checkbox" required />
      <span>
        Согласен с <a href={`${assetBase}/consent.html`}>условиями обработки данных</a> и
        ознакомлен с <a href={`${assetBase}/privacy.html`}>политикой конфиденциальности</a>.
      </span>
    </label>
  );
}
export function Request() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <section className="core-request" id="request">
      <div className="request-status">
        <p className="sys-label">04 / НАЧАТЬ РАБОТУ</p>
        <span>ОБСУДИМ ВАШУ ЗАДАЧУ</span>
      </div>
      <div className="core-request-grid">
        <div>
          <h2>
            Есть задача<br />
            по найму?
          </h2>
          <p>
            Напишите нам напрямую: <a href={`mailto:${company.email}`}>{company.email}</a> или
            позвоните <a href={`tel:+${company.phone.replace(/\D/g, '')}`}>{company.phone}</a>.
            Форма справа пока демонстрационная и не отправляет данные.
          </p>
        </div>
        <div className="request-console">
          <form onSubmit={submit}>
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
              Отправить заявку
              <ArrowRight />
            </button>
            {sent && (
              <output>
                Данные не отправлены. Свяжитесь с нами по телефону или электронной почте слева.
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
        <p>Системный поиск персонала для бизнеса.</p>
      </div>
      <div className="footer-links">
        {nav.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
        <a href="#request">Оставить заявку</a>
      </div>
      <section className="footer-requisites" id="contact" aria-labelledby="workcore-requisites-title">
        <p className="footer-requisites-label" id="workcore-requisites-title">Контакты и реквизиты</p>
        <a className="footer-requisites-phone" href={`tel:+${company.phone.replace(/\D/g, '')}`}>{company.phone}</a>
        <a className="footer-requisites-email" href={`mailto:${company.email}`}>{company.email}</a>
        <div className="footer-requisites-details">
          <address>Юридический адрес: {company.legalAddress}</address>
          <p>Наименование юридического лица: {company.legalName}</p>
          <p>ИНН: {company.inn}</p>
          <p>ОГРНИП: {company.ogrnip}</p>
        </div>
      </section>
      <div className="footer-meta">
        <div>
          <a href={`${assetBase}/privacy.html`}>Политика конфиденциальности</a>
          <a href={`${assetBase}/consent.html`}>Обработка персональных данных</a>
        </div>
        <span>© {new Date().getFullYear()} WorkCore</span>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <main>
      <Header />
      <Hero />
      <Formats />
      <Pipeline />
      <Control />
      <Request />
      <Footer />
    </main>
  );
}

