//Pete and his mate Phil are out in the countryside shooting clay pigeons with a shotgun - amazing fun.
//
// They decide to have a competition. 3 rounds, 2 shots each. Winner is the one with the most hits.
//
// Some of the clays have something attached to create lots of smoke when hit, guarenteed by the packaging to generate 'real
// excitement!' (genuinely this happened). None of the explosive things actually worked, but for this kata lets say they did.
//
// For each round you will receive the following format:
//
// [{P1:'XX', P2:'XO'}, true]
//
// That is an array containing an object and a boolean. Pl represents Pete, P2 represents Phil. X represents a hit and O represents
// a miss. If the boolean is true, any hit is worth 2. If it is false, any hit is worth 1.
//
// Find out who won. If it's Pete, return 'Pete Wins!'. If it is Phil, return 'Phil Wins!'. If the scores are equal, return
// 'Draw!'.
//
// Note that as there are three rounds, the actual input (x) will look something like this:
//
// [[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]

//My solution
function shoot(x) { //No native method challenge
    let P1 = 0, P2 = 0;
    for (let game in x)
        for (let player in x[game][0])
            for (let char in x[game][0][player])
                if (x[game][0][player][char] == 'X')
                    (player == 'P1') ? P1 += 2 ** x[game][1] : P2 += 2 ** x[game][1];
    if (P1 == P2) return 'Draw!';
    return (P1 > P2) ? 'Pete Wins!' : 'Phil Wins!';
}