import React from 'react';

interface LiquidGlassProps {
    width?: number;
    height?: number;
    borderRadius?: number | string;
    className?: string;
    style?: React.CSSProperties;
    innerClassName?: string;
    innerStyle?: React.CSSProperties;
    children?: React.ReactNode;
}
declare const LiquidGlass: React.FC<LiquidGlassProps>;

export { LiquidGlass, LiquidGlassProps };
