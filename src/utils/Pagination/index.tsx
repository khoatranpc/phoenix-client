import React from 'react';
import { Pagination as PaginationPage } from 'antd';

interface PaginationProps {
    children?: React.ReactElement;
    defaultPage?: number;
    totalRecordPage: number;
    dataLength: number;
    onChange(currPage: number): void;
}
const Pagination = (props: PaginationProps) => {
    return <PaginationPage defaultCurrent={props.defaultPage ?? 1} total={props.dataLength} showSizeChanger={false} pageSize={props.totalRecordPage} onChange={props.onChange} />
}

export default Pagination;