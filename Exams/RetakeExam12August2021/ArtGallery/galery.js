class ArtGallery{
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles[articleModel.toLowerCase()]) {
            throw new Error('This article model is not included in this gallery!');
        }

        const index = this.listOfArticles.findIndex(e => e.articleModel == articleModel.toLowerCase() && e.articleName == articleName);
        if (index === -1) {
            this.listOfArticles.push({
                'articleModel': articleModel.toLowerCase(),
                articleName,
                quantity
            });
        } else {
            this.listOfArticles[index].quantity += quantity;
        }
        
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.find(el => el.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 50;
        if (personality == 'Vip') {
            points = 500;
        } else if (personality == 'Middle') {
            points = 250;
        }

        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0
        });

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let index = this.listOfArticles.findIndex(e => e.articleName == articleName);
        if (index === -1 || this.listOfArticles[index].articleModel !== articleModel.toLowerCase()) {
            throw new Error('This article is not found.')
        }

        if (this.listOfArticles[index].quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        index = this.guests.findIndex(e => e.guestName === guestName);
        if (index === -1) {
            return 'This guest is not invited.';
        }

        if (this.guests[index].points < this.possibleArticles[articleModel.toLowerCase()]) {
            return 'You need to more points to purchase the article.';
        }

        this.guests[index].points -= this.possibleArticles[articleModel.toLowerCase()];
        this.listOfArticles[index].quantity--;
        this.guests[index].purchaseArticle++;
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel.toLowerCase()]} points.`;
    }

    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            const arr = [];
            for (let article of this.listOfArticles) {
                arr.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            }
            if (arr.length > 0) {  arr.unshift(''); }
            return `Articles information:${arr.join('\n')}`;
        } else if (criteria === 'guest') {
            let arr = [];
            for (let guest of this.guests) {
                arr.push(`${guest.guestName} - ${guest.purchaseArticle}`);
            }
            if (arr.length > 0) { arr.unshift(''); }
            return `Guests information:${arr.join('\n')}`;
        }
    }
}