export class Produit {
    nom: string;
    prix: number;

    constructor(nom: string, prix: number) {
        this.nom = nom;
        this.prix = prix;
    }
}

export class Panier {
    items: Produit[];

    constructor() {
        this.items = [];
    }

    getItemsCount(): number {
        return this.items.length;
    }

    addProductToCart(produit: Produit): void {
        this.items.push(produit);
    }

    displayArticles(): Produit[] {
        return this.items;
    }

    getPrice(): number {
        let total = this.items.reduce((total, produit) => total + produit.prix, 0);
        if (total > 100) {
            total *= 0.9;
        }
        return parseFloat(total.toFixed(2));
    }
}

