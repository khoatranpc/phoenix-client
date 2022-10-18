import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Obj } from '../../Global/interface';
import { PaginationCal } from '../../utils';
import { ScrollToTop } from '../../utils/ScrollSmooth';
import Pagination from '../../utils/Pagination';
import { listCourceOverview } from './mockupData';
import './style.scss';

const Cources = () => {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [listRecordData, setListRecordData] = useState<Array<Obj | Record<string, unknown>>>([]);
    useEffect(() => {
        setListRecordData(PaginationCal(listCourceOverview, 6, currentPage));
        ScrollToTop();
    }, [currentPage]);
    return (
        <div className="container-cources">
            <h1 className="title-page">{t('A_61')}</h1>
            <div className="cources">
                {listRecordData.map((item, idx) => {
                    return (
                        <div className="item" key={idx}>
                            <div className="col">
                                <img src={item.thumbnail} alt="thumbnail" className="thumbnail" />
                                <div className="content">
                                    <div className="summary">
                                        {idx}
                                        <p style={{ fontWeight: 'bold' }}>{item.title}</p>
                                        <p>{item.content}</p>
                                    </div>
                                    <hr />
                                    <div className="about-timeline">
                                        <span className="date">{item.timePost}</span>
                                        <span>Cmt</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Pagination totalRecordPage={6} onChange={setCurrentPage} dataLength={listCourceOverview.length} />
        </div>
    )
}
export default Cources;