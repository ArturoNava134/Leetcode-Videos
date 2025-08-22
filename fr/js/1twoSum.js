// Déclarations
let nums1 = [2, 7, 11, 15];
let nums2 = [3, 2, 4];
let nums3 = [3,3];

let target1 = 9;
let target2 = 6;
let target3 = 6;

// Solution par force brute (inefficace)
function twoSumBruteForce(nums, target){
  // On déclare la première boucle pour fixer un nombre pendant qu'on parcourt le reste du tableau.
  for (let i = 0; i < nums.length; i++){
    // On déclare la seconde boucle pour comparer la valeur à l'indice i avec le reste du tableau.
    for(let j = i + 1; j < nums.length; j++){
      console.log("position i : ", i);
      console.log("position j : ", j);
      console.log("valeur i :", nums[i]);  
      console.log("valeur j :", nums[j]); 
      console.log("la somme ", nums[i], "+", nums[j], " est ", nums[i]+nums[j]);
      // À chaque itération, on vérifie si la somme des nombres aux positions i et j est égale à la cible.
      if(nums[i] + nums[j] === target){
        console.log("ce qui est égal à la cible, réponse : ", i, j);
        return [i, j];
      }else{
        console.log("ce qui n'est pas égal à la cible ", target, ".");
      }
    }
  }
}

function twoSumOPHashMap(nums, target) {
  // D'abord, on déclare la table de hachage (map) pour sauvegarder les données.
  const complements = new Map();
  // On crée l'unique boucle de cette solution.
  for (let i = 0; i < nums.length; i++) {
      console.log("boucle ------- ", i+1);
      // Sur cette ligne, on cherche si la valeur actuelle de la boucle est stockée comme clé dans la map.
      // Si on trouve quelque chose, la valeur de la map (l'indice) sera stockée dans la constante complementIndex, sinon elle sera
      // undefined.
      const complementIndex = complements.get(nums[i]);

      console.log("position : ", i, "valeur : ", nums[i]);
      console.log("recherche de la clé :", nums[i]);
      console.log("map :", complements);
      // Ici, on vérifie si la variable est différente de undefined.
    if (complementIndex !== undefined) {
      console.log("clé trouvée dans la map : ", nums[i]);
      // Si elle n'est pas undefined, on peut retourner la position actuelle et la valeur stockée dans la map.
      console.log("réponse :", "indice actuel :", i, "valeur de la map :", complementIndex);
      return [i, complementIndex];
    }
    // Si complementIndex est undefined, on sauvegarde la soustraction (cible - nombre actuel)
    // comme clé dans la map, et on stocke l'indice actuel comme valeur.
    console.log("clé non trouvée.");
    complements.set(target - nums[i], i);
    console.log("soustraction : ", target, " - ", nums[i], " = ", target-nums[i], "clé stockée dans la map :", target-nums[i], "valeur : ", i);
  }
  return []; 
}

twoSumOPHashMap(nums2, target2);