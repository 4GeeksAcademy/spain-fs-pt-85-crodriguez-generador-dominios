let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ['.com', '.net', '.io']

for(let p = 0; p < pronoun.length; p++) {
    for(let a = 0; a < adj.length; a++) {
      for(let n = 0; n < noun.length; n++) {
        for(let e = 0; e < ext.length; e++) {
        console.log(pronoun[p] + adj[a] + noun[n]+ ext[e]); 
        }
      }
    }
}