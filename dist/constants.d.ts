import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | string | number;
export declare enum ChainId {
    MAINNET = 1,
    SEPOLIA = 11155111,
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const MaxUint256: JSBI;
