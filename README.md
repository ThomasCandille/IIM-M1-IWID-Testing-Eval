# IIM-M1-IWID-Testing-Eval

## Ce repo contient le rendu du module de Testing

- [CANDILLE Thomas](https://www.github.com/Thomascandille)

## Structure du projet

- `src/index.ts` : Contient les classes `Produit` et `Panier` avec leur implémentation.
- `src/index.test.ts` : Contient les tests unitaires pour les classes `Produit` et `Panier`.

## Réponse rapide

**1.** En une ou deux phrases, expliquez le principe du TDD et ses trois étapes clés. *(5 pts)*

Le TDD est une approche du processus de developpement qui consiste à rédiger les tests avant le code de production, et cela petit à petit. La premiere étape consiste à créer un test qui échoue (rouge), pour ensuite en deuxieme étape venir écrire du code de facon simple pour faire passer le test (vert), et enfin en derniere étape de refactoriser le code pour le rendre propre avant de recommencer cette boucle(bleu).

**2.** Citez deux avantages concrets du TDD. *(5 pts)*

Le TDD permet de pouvoir créer rapidement un code sûr. Dans le sens ou, comme le développement avant avec la validation des tests, on est garanti de produire un code robuste pour la production. Ensuite, le TDD permet également d'éviter de possible régression car si les précedents tests échouent, alors ils y a un probleme avec le nouveau code.

**3.** Quelle est la différence entre un fake et un stub ? Donnez un exemple rapide. *(5 pts)*

Un stub représente un test qui ne retournera qu'une seule valeur définie ("Alice" pour un nom par exemple) lors d'un test. Alors qu'un fake représente plutôt un ensemble de données qui imitent les données du code (types, structure, etc...) lors des test.

## Intégration des tests dans un pipeline CI/CD

Pour intégrer les tests à une pipeline CI/CD, j'utiliserai les outils classiques comme github actions par exemple et lancerais la vérification des tests à l'ouverture d'une pull/push requests vers la main. Cela permettra déviter les régressions et de bloquer le nouveau code si la pipeline n'est pas validé. Ca permet de garantir une stabilité dans la branche principale du code.
