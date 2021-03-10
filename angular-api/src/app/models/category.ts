export class Category {

    constructor(
        public id: number,
        public title: string,
    ){}

    public static fromJson(json: Object): Category {
        return new Category(
            json['id'],
            json['title']
        );
    }
}
