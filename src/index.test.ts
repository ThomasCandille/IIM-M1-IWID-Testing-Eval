import {describe, test, expect } from "@jest/globals";

class Produit {
    nom: string;
    prix: number;

    constructor(nom: string, prix: number) {
        this.nom = nom;
        this.prix = prix;
    }
}

class Panier {
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
            return total *= 0.9;
        }
        return total;
    }
}


describe("Mon produit doit", () => {

        const nomProduit = "Pomme";
        const prixProduit = 1.5;

        const produit = new Produit(nomProduit, prixProduit);

    test("Avoir un nom", () => {

        expect(produit.nom).toBe(nomProduit);
    });

    test("Avoir un prix", () => {

        expect(produit.prix).toBe(prixProduit);
    });
});

describe("Mon panier doit", () => {

    test("Être vide au départ", () => {

    const panier = new Panier();

        expect(panier.getItemsCount()).toBe(0);
    });

    test("Ajouter un produit dans le panier", () => {

    const panier = new Panier();

        const produit = new Produit("Banane", 2.0);
        panier.addProductToCart(produit);

        expect(panier.getItemsCount()).toBe(1);
    });

    test("Afficher les produits dans le panier", () => {

    const panier = new Panier();

        const produit1 = new Produit("Orange", 1.0);
        const produit2 = new Produit("Raisin", 3.0);

        panier.addProductToCart(produit1);
        panier.addProductToCart(produit2);

        expect(panier.displayArticles()).toEqual([produit1, produit2]);
    });

    test("Retourner le total du panier", () => {

    const panier = new Panier();

        const produit1 = new Produit("Mangue", 4.0);
        const produit2 = new Produit("Ananas", 5.0);

        panier.addProductToCart(produit1);
        panier.addProductToCart(produit2);

        const total = panier.getPrice();

        expect(total).toBe(9.0);

    });

    test("Appliquer 10% de remise si le total dépasse 100", () => {

    const panier = new Panier();

        const produit1 = new Produit("Produit cher 1", 60.0);
        const produit2 = new Produit("Produit cher 2", 50.0);

        panier.addProductToCart(produit1);
        panier.addProductToCart(produit2);

        let total = panier.getPrice();

        expect(total).toBe((produit1.prix + produit2.prix) * 0.9);

   });

   test("Ne pas appliquer de remise si le total est inférieur ou égal à 100", () => {

    const panier = new Panier();

        const produit1 = new Produit("Produit abordable 1", 40.0);
        const produit2 = new Produit("Produit abordable 2", 50.0);

        panier.addProductToCart(produit1);
        panier.addProductToCart(produit2);

        let total = panier.getPrice();

        expect(total).toBe(produit1.prix + produit2.prix);

   });

   test("Le total ne dépasse pas deux chiffres après la virgule", () => {

    const panier = new Panier();

        const produit1 = new Produit("Produit précis 1", 33.33);
        const produit2 = new Produit("Produit précis 2", 116.86);

        panier.addProductToCart(produit1);
        panier.addProductToCart(produit2);

        let total = panier.getPrice();

        expect(total).toBe(((produit1.prix + produit2.prix) * 0.9).toFixed(2));

   });

});