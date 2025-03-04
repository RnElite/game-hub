import noImage from '../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp';

const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    //https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg
}

export default getCroppedImageUrl;