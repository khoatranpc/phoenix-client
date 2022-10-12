import React, { Suspense, ReactElement } from 'react';
import { LoadingPhoenix } from './Loading';
import './style.scss';

interface LazyImportProps {
    children: ReactElement
}
export const LazyImport = (props: LazyImportProps) => {
    return (
        <Suspense fallback={<LoadingPhoenix />}>
            {props.children}
        </Suspense>
    )
}
