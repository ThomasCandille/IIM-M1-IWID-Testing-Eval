import {describe, test, expect } from "@jest/globals";

class Produit {
    nom: string;
    prix: number;

    constructor(nom: string, prix: number) {
        this.nom = nom;
        this.prix = prix;
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

});