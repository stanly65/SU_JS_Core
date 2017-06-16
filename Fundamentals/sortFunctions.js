
    // Ordering :: ( LT | EQ | GT ) | ( -1 | 0 | 1 )
    // compare :: a -> a -> Ordering
    const compare = (a, b) => a < b ? -1 : (a > b ? 1 : 0);

    // mappendOrdering :: Ordering -> Ordering -> Ordering
    const mappendOrdering = (a, b) => a !== 0 ? a : b;

    // length :: [a] -> Int
    const length = xs => xs.length;

    // toLower :: String -> String
    const toLower = s => s.toLowerCase();

    // lengthThenAZ :: String -> String -> ( -1 | 0 | 1)
    const lengthThenAZ = (a, b) =>
        mappendOrdering(
            on(compare, length)(a, b),
            on(compare, toLower)(a, b)
        );

