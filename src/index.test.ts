import {describe, test, expect } from "@jest/globals";

describe("Mon produit doit", () => {
    test("Avoir un nom", () => {

        const nomProduit = "Pomme";

        const produit = new Produit(nomProduit);

        expect(produit.nom).toBe(nomProduit);
    });
});

class Produit {
    nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }
}