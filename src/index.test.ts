import {describe, test, expect } from "@jest/globals";

class Produit {
    nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }
}

describe("Mon produit doit", () => {

        const nomProduit = "Pomme";
        const prixProduit = 1.5;

        const produit = new Produit(nomProduit);

    test("Avoir un nom", () => {

        expect(produit.nom).toBe(nomProduit);
    });

    test("Avoir un prix", () => {
        
        expect((produit.prix).toBe(prixProduit));
    });
});