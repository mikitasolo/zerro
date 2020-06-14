import React from 'react'
import { ExampleBox } from '../Components'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export function Method() {
  return (
    <>
      <Helmet>
        <title>Правила ведения личного бюджета | Zerro</title>
        <meta
          name="description"
          content="Базовые правила на которые стоит опираться при распределении денег"
        />
        <link rel="canonical" href="https://zerro.app/about/method" />
      </Helmet>

      <h1>Подход к бюджетам</h1>
      <p>
        Давайте разберёмся, каких принципов бюджетирования стоит придерживаться
        и почему.
      </p>

      <h2>Бумажные конверты</h2>
      <p>
        Один из самых простых и популярных способов управления деньгами &mdash;
        бумажные конверты. Там всё просто:
      </p>
      <ul>
        <li>
          Под каждую категорию трат делаем бумажный конверт и подписываем его:
          &laquo;Продукты&raquo;, &laquo;Автомобиль&raquo;,
          &laquo;Отпуск&raquo;, &laquo;На чёрный день&raquo; и т. д.
        </li>
        <li>Все деньги раскладываем по конвертам.</li>
        <li>
          Деньги на покупки берём из соответствующего конверта. Например, хлеб в
          магазине оплачиваем из конверта &laquo;Продукты&raquo;.
        </li>
        <li>
          Когда денег в конверте не хватает, либо берём деньги из другого
          конверта, либо отказываемся от покупки.
        </li>
      </ul>
      <p>
        С бумажными конвертами вы всегда знаете, на что есть деньги, и сами
        решаете, чем жертвовать, если потратили слишком много.
      </p>
      <p>
        К сожалению, бумажные конверты морально устарели &mdash; они работают
        только с наличными и требуют слишком много сил на поддержание порядка.
        Не уверен, что кто-то сейчас готов отказаться от банковских карт
        и вкладов.
      </p>

      <ExampleBox>
        <p>
          <b>Конверты + банки</b>
          <br />
          Пару лет я пытался подружить метод конвертов с банками. Я создал ~10
          счетов под разные категории расходов и использовал их как конверты.
          Мне приходилось постоянно переводить деньги с одного счёта на другой,
          и сейчас я уверен, что есть куда более изящное решение.
        </p>
      </ExampleBox>

      <h2>Эволюция конвертов</h2>
      <p>
        Представьте конверты, которые не надо таскать с собой: баланс конверта
        виден в приложении, а потраченные деньги сами списываются из нужного
        конверта. Zerro превращает ваши категории из Дзен-мани именно в такие
        конверты:
      </p>
      <ul>
        <li>
          <b>Бюджет</b> &mdash; это сумма, которую положили или забрали
          из конверта в этом месяце.
        </li>
        <li>
          <b>Расход</b> &mdash; это деньги, потраченные из конверта.
        </li>
        <li>
          <b>Остаток</b> &mdash; количество денег в конверте.
        </li>
        <li>
          <b>Осталось распределить</b> &mdash; это деньги вне конвертов, их ещё
          предстоит распределить. Если цифра отрицательная, значит вы разложили
          денег больше, чем у вас есть, откуда-то придётся забрать.
        </li>
      </ul>

      <h2>Что такое YNAB?</h2>
      <p>
        YNAB &mdash; сокращённое название популярной системы ведения бюджета{' '}
        <a
          href="https://www.youneedabudget.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          You Need A Budget
        </a>{' '}
        (англ. тебе нужен бюджет). По сути, YNAB берёт те же конверты и
        добавляет к ним несколько правил. Ниже моё вольное изложение этих
        правил, а оригинал можно почитать на{' '}
        <a
          href="https://www.youneedabudget.com/the-four-rules/"
          target="_blank"
          rel="noopener noreferrer"
        >
          сайте YNAB
        </a>
        .
      </p>
      <h3>Правило &#8470; 1. Каждый рубль должен иметь цель</h3>
      <p>
        Если деньги лежат в одной куче, мы никогда не знаем точно, на что хватит
        денег, а на что нет. Мы видим большую сумму, и кажется, что денег хватит
        на что угодно &mdash; так почему бы не купить вот эту милую безделушку?
      </p>
      <p>
        Чтобы избавиться от иллюзий, важно распределить все деньги по конвертам.
        Теперь перед тем, как что-то купить, загляните в соответствующий
        конверт: хватает ли там денег?
      </p>

      <ExampleBox symbol="❌">
        <p>
          <b>Все деньги в одной куче</b>
          <br />
          На карте лежит 50 000₽, и нам кажется, что денег ещё много, можно
          сходить в дорогой ресторан. Уже потом мы вспомним, что забыли
          заплатить за квартиру и отдать долг подруге. В итоге денег не хватает,
          и мы снова залезаем в долги.
        </p>
      </ExampleBox>

      <ExampleBox symbol="✅">
        <p>
          <b>Деньги лежат по конвертам</b>
          <br />
          Вместо баланса карты мы смотрим на конверт &laquo;Рестораны&raquo;.
          Там осталось всего 600₽. Кажется, придётся отложить поход или выбрать
          место подешевле &mdash; зато мы уверены, что остальные траты под
          контролем.
        </p>
      </ExampleBox>

      <h3>Правило &#8470; 2. Готовьтесь к тратам заранее</h3>
      <p>
        Большинство трат можно предсказать. Обычно мы помним о ежемесячных
        расходах типа аренды и платы за интернет, но совершенно забываем про
        менее регулярные вещи: страховка автомобиля, новогодние подарки и т. д.
      </p>
      <p>
        Если переход на зимнюю резину или новогодние подарки сильно бьют по
        вашему бюджету &mdash; это правило для вас.
      </p>

      <ExampleBox symbol="❌">
        <p>
          <b>Бюджет не учитывает крупные траты</b>
          <br />
          Весь год мы делаем вид, что нового года не существует. В декабре
          понимаем, что праздник всё-таки будет и тратим крупную сумму
          на подарки. Бюджет трещит по швам и мы залезаем в долги.
        </p>
      </ExampleBox>

      <ExampleBox symbol="✅">
        <p>
          <b>Готовимся к праздникам за год</b>
          <br />
          Мы знаем, что каждый год тратим на новогодние подарки ~18 000₽.
          Создаём конверт под подарки и кладём туда каждый месяц по 1 500₽.
          Теперь о подарках можно не переживать, удара по бюджету не будет.
        </p>
      </ExampleBox>

      <h3>Правило &#8470; 3. Планы меняются, и это нормально</h3>
      <p>
        Бюджет &mdash; это не клятва. Потратили больше, чем планировали? Окей,
        просто скорректируйте бюджет. Нет ничего страшного в том, чтобы
        переложить деньги из одного конверта в другой, главное &mdash; понимать
        последствия этого выбора. Конечно, чтобы купить новый айфон, не стоит
        забирать деньги, отложенные на аренду квартиры. Но если вы готовы
        пожертвовать отпуском ради айфона &mdash; то почему нет?
      </p>

      <h3>Правило &#8470; 4. Живите на предыдущую зарплату</h3>
      <p>
        Идея в том, чтобы перестать жить от зарплаты до зарплаты. Когда приходит
        доход, мы откладываем его на следующий месяц, а в этом месяце тратим
        деньги, отложенные в предыдущем.
      </p>
      <p>
        С таким подходом больше не надо говорить: &laquo;давай после
        зарплаты&raquo;, и откладывать оплату счетов за квартиру из-за нехватки
        денег. У нас всегда достаточно денег, чтобы моментально оплатить счета
        и забыть про них.
      </p>
      <p>
        Да, это подразумевает, что у нас есть финансовая подушка размером в один
        месячный доход. И да, моментально это сделать не получится, но к этому
        стоит стремиться.
      </p>

      <ExampleBox symbol="🎉">
        <p>
          Теперь мы знаем, как работают бюджеты, и готовы{' '}
          <Link to="/about/quick-start">настроить Zerro →</Link>
        </p>
      </ExampleBox>
    </>
  )
}
