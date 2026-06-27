import { Link, useParams } from 'react-router-dom';
import CharacterPortrait from '@/components/CharacterPortrait';
import { getCharacterById, touhouCharacters } from '@/data/touhouCharacters';
import './index.less';

const CharacterDetail = () => {
    const { id } = useParams<{ id: string }>();
    const character = id ? getCharacterById(id) : undefined;

    if (!character) {
        return (
            <div className='touhouCharDetail'>
                <div className='touhouCharDetail__inner touhouCharDetail__notFound'>
                    <h1>未找到该角色</h1>
                    <Link to='/characters'>返回人物录</Link>
                </div>
            </div>
        );
    }

    const currentIndex = touhouCharacters.findIndex((c) => c.id === character.id);
    const prevChar = currentIndex > 0 ? touhouCharacters[currentIndex - 1] : null;
    const nextChar =
        currentIndex < touhouCharacters.length - 1 ? touhouCharacters[currentIndex + 1] : null;

    const bioParagraphs = character.bio.split('\n\n').filter(Boolean);

    return (
        <div className='touhouCharDetail'>
            <div className='touhouCharDetail__inner'>
                <Link to='/characters' className='touhouCharDetail__back'>
                    ← 返回人物录
                </Link>

                <div className='touhouCharDetail__layout'>
                    <figure
                        className='touhouCharDetail__portraitWrap'
                        style={{ borderColor: character.themeColor }}
                    >
                        <CharacterPortrait
                            className='touhouCharDetail__portrait'
                            src={character.detailImage}
                            fallback={character.fallbackImage}
                            alt={`${character.name} 官方立绘`}
                            loading='eager'
                        />
                        <figcaption className='touhouCharDetail__portraitCaption'>
                            {character.name} · 官方立绘
                        </figcaption>
                    </figure>

                    <article className='touhouCharDetail__main'>
                        <h1 className='touhouCharDetail__name'>{character.name}</h1>
                        <p className='touhouCharDetail__nameJp'>{character.nameJp}</p>
                        <p className='touhouCharDetail__titleTag' style={{ color: character.themeColor }}>
                            {character.title}
                        </p>

                        <dl className='touhouCharDetail__meta'>
                            <div className='touhouCharDetail__metaItem'>
                                <dt className='touhouCharDetail__metaLabel'>种族</dt>
                                <dd className='touhouCharDetail__metaValue'>{character.species}</dd>
                            </div>
                            <div className='touhouCharDetail__metaItem'>
                                <dt className='touhouCharDetail__metaLabel'>所在地</dt>
                                <dd className='touhouCharDetail__metaValue'>{character.location}</dd>
                            </div>
                            <div className='touhouCharDetail__metaItem'>
                                <dt className='touhouCharDetail__metaLabel'>能力</dt>
                                <dd className='touhouCharDetail__metaValue'>{character.ability}</dd>
                            </div>
                            <div className='touhouCharDetail__metaItem'>
                                <dt className='touhouCharDetail__metaLabel'>初登场</dt>
                                <dd className='touhouCharDetail__metaValue'>{character.debut}</dd>
                            </div>
                        </dl>

                        <h2 className='touhouCharDetail__bioTitle'>人物介绍</h2>
                        <div className='touhouCharDetail__bio'>
                            {bioParagraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </article>
                </div>

                <nav className='touhouCharDetail__nav' aria-label='角色导航'>
                    {prevChar && (
                        <Link to={`/characters/${prevChar.id}`} className='touhouCharDetail__navLink'>
                            ← {prevChar.name}
                        </Link>
                    )}
                    {nextChar && (
                        <Link to={`/characters/${nextChar.id}`} className='touhouCharDetail__navLink'>
                            {nextChar.name} →
                        </Link>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default CharacterDetail;
