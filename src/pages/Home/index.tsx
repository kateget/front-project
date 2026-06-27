import { Link } from 'react-router-dom';
import './index.less';

const ScribbleFrame = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox='0 0 400 320'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden
    >
        <path
            d='M32 48c48-28 120-36 176-20 64 18 112 62 128 120 12 44 4 92-28 128-24 28-60 44-100 44-72 0-132-48-152-116-8-28-8-60 4-88'
            stroke='currentColor'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M72 96c20 36 52 68 92 88M260 72c-28 40-52 88-60 144M120 220c40 12 84 8 124-8'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            opacity='0.55'
        />
    </svg>
);

const WaveUnderline = () => (
    <svg className='touhouHome__wave' viewBox='0 0 200 12' xmlns='http://www.w3.org/2000/svg' aria-hidden>
        <path
            d='M4 6c16-8 32 8 48 0s32-8 48 0 32 8 48 0 32-8 44 0'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
            strokeLinecap='round'
        />
    </svg>
);

const MiniDanmaku = () => (
    <svg className='touhouHome__cardSketch' viewBox='0 0 200 48' xmlns='http://www.w3.org/2000/svg' aria-hidden>
        <circle cx='28' cy='24' r='5' fill='currentColor' opacity='0.35' />
        <circle cx='72' cy='14' r='4' fill='currentColor' opacity='0.45' />
        <circle cx='118' cy='30' r='6' fill='currentColor' opacity='0.3' />
        <circle cx='164' cy='18' r='4' fill='currentColor' opacity='0.4' />
        <path d='M12 38h176' stroke='currentColor' strokeWidth='1.5' strokeDasharray='4 6' opacity='0.4' />
    </svg>
);

const MiniForest = () => (
    <svg className='touhouHome__cardSketch' viewBox='0 0 200 48' xmlns='http://www.w3.org/2000/svg' aria-hidden>
        <path
            d='M24 40 L40 16 L56 40M48 40 L68 12 L88 40M76 40 L100 8 L124 40'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            opacity='0.5'
        />
        <path d='M16 40h168' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
    </svg>
);

const MiniGate = () => (
    <svg className='touhouHome__cardSketch' viewBox='0 0 200 48' xmlns='http://www.w3.org/2000/svg' aria-hidden>
        <path
            d='M48 40V20c0-8 16-12 52-12s52 4 52 12v20'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.2'
            strokeLinecap='round'
        />
        <path d='M68 40V26M100 40V22M132 40V26' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
        <path d='M36 40h128' stroke='currentColor' strokeWidth='2' />
    </svg>
);

const Home = () => {
    return (
        <div className='touhouHome'>
            <ScribbleFrame className='touhouHome__scribble touhouHome__scribble--1' />
            <ScribbleFrame className='touhouHome__scribble touhouHome__scribble--2' />

            <div className='touhouHome__inner'>
                <header className='touhouHome__hero'>
                    <span className='touhouHome__badge'>同人向 · 手绘风练习页</span>
                    <h1 className='touhouHome__title'>
                        幻想乡手记
                        <span className='touhouHome__titleRuby'>Touhou Project · sketch notes</span>
                    </h1>
                    <p className='touhouHome__lead'>
                        结界这一侧是熟悉的日常，另一侧则是弹幕、异变与永不落幕的宴会。此页以铅笔稿与墨水线的感觉排版，向「东方
                        Project」的幻想气质致敬——仅为个人学习与非官方展示。
                    </p>
                    <WaveUnderline />
                    <Link to='/characters' className='touhouHome__cta'>
                        浏览幻想乡人物录 →
                    </Link>
                </header>

                <section className='touhouHome__grid' aria-label='主题板块'>
                    <article className='touhouHome__card'>
                        <span className='touhouHome__cardTag touhouHome__cardTag--red'>结界边</span>
                        <h2 className='touhouHome__cardTitle'>博丽神社</h2>
                        <p className='touhouHome__cardText'>
                            守矢的签文、赛钱箱的叮当声，还有总在喝茶的巫女。红线与札符在草稿纸上歪歪扭扭，却刚好框住了春天的樱吹雪。
                        </p>
                        <MiniGate />
                    </article>

                    <article className='touhouHome__card'>
                        <span className='touhouHome__cardTag touhouHome__cardTag--teal'>雾与蘑菇</span>
                        <h2 className='touhouHome__cardTitle'>魔法森林</h2>
                        <p className='touhouHome__cardText'>
                            魔理沙的扫帚痕在纸面上拖出浅浅的石墨印。森林深处光斑稀疏，适合写一段关于「收集」与「借走」的小故事。
                        </p>
                        <MiniForest />
                    </article>

                    <article className='touhouHome__card'>
                        <span className='touhouHome__cardTag touhouHome__cardTag--purple'>月夜与红茶</span>
                        <h2 className='touhouHome__cardTitle'>红魔馆</h2>
                        <p className='touhouHome__cardText'>
                            时钟与怀表在草图上叠成一圈圈涟漪。蜡笔质感的深红门扉不必画得太工整——留一点毛边，更像手绘的「宵暗」。
                        </p>
                        <MiniDanmaku />
                    </article>
                </section>

                <div className='touhouHome__spellRow' role='list' aria-label='符卡风标签'>
                    <span className='touhouHome__spell' role='listitem'>
                        Spell · 梦想天生
                    </span>
                    <span className='touhouHome__spell' role='listitem'>
                        Spell · 恋符
                    </span>
                    <span className='touhouHome__spell' role='listitem'>
                        Spell · 夜王
                    </span>
                    <span className='touhouHome__spell' role='listitem'>
                        Last Word · 纸面异变
                    </span>
                </div>

                <p className='touhouHome__footnote'>
                    东方 Project ©上海爱丽丝幻乐团 — 本页面为爱好者风格习作，与官方无关。
                </p>
            </div>
        </div>
    );
};

export default Home;
