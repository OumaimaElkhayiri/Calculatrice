Calculatrice Basique en Ligne
Voci une calculatrice simple en ligne construite avec React pour l'interface utilisateur et Node.js
La calculatrice permet aux utilisateurs d'effectuer des opérations arithmétiques de base telles que l'addition, la soustraction, la multiplication et la division

Fonctionnalités
Opérations Arithmétiques de Base : Addition, soustraction, multiplication et division
Affichage : Affiche les calculs en cours et les résultats
Basculer Positif/Négatif : Change facilement un nombre de positif à négatif et vice-versa
Gestion des Erreurs : Affiche les erreurs en cas de calculs invalides
Technologies Utilisées
Frontend : React (JavaScript, JSX)
Installation et Configuration
Prérequis:

Avant de lancer l'application, assurez-vous d'avoir installé :
Node.js 
npm ou yarn

Étapes pour Exécuter Localement:
Cloner le Dépôt :
git clone : https://github.com/OumaimaElkhayiri/Calculatrice.git
cd Calculatrice-main

Installer les Dépendances :
npm install

Démarrer l'Application :
npm run dev
Ouvrir l'Application :
Ouvrez votre navigateur et allez sur http://localhost:5173

Utilisation
Une fois l'application lancée, vous pouvez utiliser la calculatrice en cliquant sur les boutons pour effectuer des opérations arithmétiques de base :

(AC) : Efface tout, 
(+/-) : Change le signe du nombre (positif/négatif), 
(/ , * , - , +) : Effectue des divisions, multiplications, soustractions et additions, 
(0-9) : Entrée des nombres, 
(.) : Ajouter un point décimal, 
(=) : Calcule le résultat, 


Exemple de Calculs :
1. Addition:
Pour calculer "2 + 3":
    
    Cliquez sur "2", 
    Cliquez sur "+", 
    Cliquez sur "3", 
    Cliquez sur "=", 
    Le résultat "5" s'affichera

2. Soustraction:
Pour calculer "5 - 7":

    Cliquez sur "5",
    Cliquez sur "-",
    Cliquez sur "7",
    Cliquez sur "=", 
    Le résultat "-2" s'affichera

3. Multiplication:
Pour calculer "11 * 11":
    
    Cliquez sur "11", 
    Cliquez sur "*", 
    Cliquez sur "11", 
    Cliquez sur "=", 
    Le résultat "121" s'affichera

4. Divison:
Pour calculer 5/5:

    Cliquez sur "5",
    Cliquez sur "/",
    Cliquez sur "5",
    Cliquez sur "=",
    Le résultat "1" s'affichera

5. Calcul plus complexe:
Pour calculer "5+6*7-8/2":

    Cliquez sur "5",
    Cliquez sur "+",
    Cliquez sur "6",
    Cliquez sur "*",
    Cliquez sur "7",
    Cliquez sur "-",
    Cliquez sur "8",
    Cliquez sur "/",
    Cliquez sur "2",
    Le résultat affichera "43"

--> Pour effacer le tout cliquez sur "AC"


Structure des Fichiers
src/
        ├── App.js         # Composant principal de l'application
        ├── App.css        # Styles pour la calculatrice
        ├── index.js       # Point d'entrée de l'application React
        ├── package.json   # Dépendances et scripts du projet

Fonctionnalités Avancées : Ajouter des opérations avancées telles que la trigonométrie, les logarithmes, etc.
Stylisation : Améliorer l'interface avec des frameworks comme Tailwind CSS

Licence
Ce projet est sous licence MIT
