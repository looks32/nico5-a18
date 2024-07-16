// image url 만들어 주는 util
export function makeImagePath(id: string, format?: string) {
    // 예시임
    return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}