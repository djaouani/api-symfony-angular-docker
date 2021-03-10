export class Article {

    constructor(
        public id: number,
        public title: string,
        public content: string,
        public picture: string,
        public categories: Array<number>,
    ){}

    public static fromJson(json: Object): Article {
        return new Article(
            json['id'],
            json['title'],
            json['content'],
            json['picture'],
            json['categoris'],
        );
    }
}
