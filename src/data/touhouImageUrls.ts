import reimuFallback from '@/assets/characters/reimu.svg';
import marisaFallback from '@/assets/characters/marisa.svg';
import remiliaFallback from '@/assets/characters/remilia.svg';
import sakuyaFallback from '@/assets/characters/sakuya.svg';
import youmuFallback from '@/assets/characters/youmu.svg';
import yukariFallback from '@/assets/characters/yukari.svg';
import yuyukoFallback from '@/assets/characters/yuyuko.svg';
import sanaeFallback from '@/assets/characters/sanae.svg';
import flandreFallback from '@/assets/characters/flandre.svg';
import koishiFallback from '@/assets/characters/koishi.svg';
import ayaFallback from '@/assets/characters/aya.svg';
import mokouFallback from '@/assets/characters/mokou.svg';

export interface CharacterImageMeta {
    ext: 'jpg' | 'png';
    fallback: string;
}

/** 本地立绘（public/characters）+ 手绘 SVG 兜底 */
export const CHARACTER_IMAGE_META: Record<string, CharacterImageMeta> = {
    reimu: { ext: 'jpg', fallback: reimuFallback },
    marisa: { ext: 'jpg', fallback: marisaFallback },
    remilia: { ext: 'png', fallback: remiliaFallback },
    sakuya: { ext: 'png', fallback: sakuyaFallback },
    youmu: { ext: 'jpg', fallback: youmuFallback },
    yukari: { ext: 'png', fallback: yukariFallback },
    yuyuko: { ext: 'png', fallback: yuyukoFallback },
    sanae: { ext: 'png', fallback: sanaeFallback },
    flandre: { ext: 'png', fallback: flandreFallback },
    koishi: { ext: 'png', fallback: koishiFallback },
    aya: { ext: 'jpg', fallback: ayaFallback },
    mokou: { ext: 'png', fallback: mokouFallback },
};

export const getCharacterImageUrl = (id: string) => {
    const meta = CHARACTER_IMAGE_META[id];
    return meta ? `/characters/${id}.${meta.ext}` : '';
};

export const getCharacterFallbackUrl = (id: string) => {
    return CHARACTER_IMAGE_META[id]?.fallback ?? '';
};
