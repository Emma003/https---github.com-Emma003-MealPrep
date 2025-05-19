import { Colors } from '@/constants/colors';
import { Href, Link } from 'expo-router';
import React from 'react';

interface ThemedLinkProps {
    href: Href;
    children: React.ReactNode;
    className?: string;
    onPress?: () => void;
}

const ThemedLink = ({ href, children, className = '', ...props }: ThemedLinkProps) => {
    return (
        <Link 
            href={href}
            onPress={props.onPress}
            style={[{ backgroundColor: Colors.primary }]}
            className={`px-5 py-4 rounded-md my-2 active:opacity-80 text-center ${className}`}
            {...props}
        >
            {children}
        </Link>
    )
}

export default ThemedLink 