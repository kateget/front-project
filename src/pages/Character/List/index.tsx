import { Link } from 'react-router-dom';
import CharacterPortrait from '@/components/CharacterPortrait';
import { touhouCharacters } from '@/data/touhouCharacters';
import './index.less';

const CharacterList = () => {
    return (
        <div className='touhouCharList'>
            <div className='touhouCharList__inner'>
                <header className='touhouCharList__header'>
                    <h1 className='touhouCharList__title'>幻想乡人物录</h1>
                    <p className='touhouCharList__subtitle'>Touhou Character Archive</p>
                    <p className='touhouCharList__lead'>
                        收录幻想乡中颇具代表性的角色。点击卡片可查看代表图与详细人物介绍。
                    </p>
                </header>

                <section className='touhouCharList__grid' aria-label='角色列表'>
                    {touhouCharacters.map((char) => (
                        <Link
                            key={char.id}
                            to={`/characters/${char.id}`}
                            className='touhouCharList__card'
                        >
                            <div
                                className='touhouCharList__portrait'
                                style={{ borderBottomColor: char.themeColor }}
                            >
                                <CharacterPortrait
                                    src={char.image}
                                    fallback={char.fallbackImage}
                                    alt={`${char.name} 代表图`}
                                />
                            </div>
                            <div className='touhouCharList__info'>
                                <h2 className='touhouCharList__name'>{char.name}</h2>
                                <p className='touhouCharList__titleTag' style={{ color: char.themeColor }}>
                                    {char.title}
                                </p>
                                <p className='touhouCharList__short'>{char.shortIntro}</p>
                                <span className='touhouCharList__debut'>{char.debut}</span>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default CharacterList;
