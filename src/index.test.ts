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

    const panier = new Panier();

    test("Être vide au départ", () => {

        expect(panier.getItemsCount()).toBe(0);
    });

    test("Ajouter un produit dans le panier", () => {

        const produit = new Produit("Banane", 2.0);
        panier.addProductToCart(produit);

        expect(panier.getItemsCount()).toBe(1);
    });

    test("Afficher les produits dans le panier", () => {

        const produit1 = new Produit("Orange", 1.0);
        const produit2 = new Produit("Raisin", 3.0);

        panier.addProductToCart(produit1);
        panier.addProductToCart(produit2);

        expect(panier.displayArticles()).toEqual([produit1, produit2]);
    });

});